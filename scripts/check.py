#!/usr/bin/env python3
"""Mechanical checks for article folders.

These checks establish only properties a script can actually establish: YAML parses,
article IDs match their folders, referenced local assets exist, source references resolve,
and — for articles submitted for publication approval — no placeholders remain. A passing
run says nothing about whether an argument is true, persuasive, or approved.

Usage:
    scripts/check.py                                  # all articles, brief-safe checks
    scripts/check.py <article-id> [<article-id>...]
    scripts/check.py --mode publication <article-id>
    scripts/check.py --distribution <article-id>      # also check distribution/ assets

Modes:
    brief        (default) incomplete scaffolds and brief PRs stay valid; completeness
                 problems are reported as warnings
    publication  completeness is required; warnings above become errors

    `--distribution` is orthogonal to both. It opts `articles/<id>/distribution/*.md` into
    the same completeness findings, so they are warnings in brief mode and errors under
    `--mode publication`. Without the flag that folder is not examined at all, which is the
    point: optional distribution work can never block an otherwise complete article.
    Strategy documents are never scanned; `To decide` there is a valid, permanent state.

Exit status: 0 = no errors, 1 = errors found, 2 = bad invocation or missing dependency.
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

try:
    import yaml
except ImportError:  # pragma: no cover - dependency hint
    sys.exit("error: PyYAML is required. Install it with: pip install pyyaml")

REPO = Path(__file__).resolve().parent.parent
ARTICLES = REPO / "articles"
TEMPLATE = REPO / "templates" / "article"

PLACEHOLDER = re.compile(r"(TODO|FIXME|XXX|\bTK\b|\?\?\?)")
MD_IMAGE = re.compile(r"!\[(?P<alt>[^\]]*)\]\(\s*<?(?P<path>[^)>\s]+)")
HTML_IMAGE = re.compile(r"<img\b[^>]*?\bsrc\s*=\s*[\"'](?P<path>[^\"']+)", re.IGNORECASE)
SOURCE_REF = re.compile(r"\[src:([A-Za-z0-9._-]+)\]")
FENCE = re.compile(r"^\s*(```|~~~)")
INLINE_CODE = re.compile(r"`[^`\n]*`")
REMOTE = re.compile(r"^(?:[a-z][a-z0-9+.-]*:|//)", re.IGNORECASE)


class Report:
    """Collects findings. `strict` promotes completeness warnings to errors."""

    def __init__(self, strict: bool) -> None:
        self.strict = strict
        self.errors: list[str] = []
        self.warnings: list[str] = []

    def error(self, where: str, message: str) -> None:
        self.errors.append(f"{where}: {message}")

    def warn(self, where: str, message: str) -> None:
        self.warnings.append(f"{where}: {message}")

    def incomplete(self, where: str, message: str) -> None:
        """Completeness finding: blocking at publication, informational before it."""
        (self.error if self.strict else self.warn)(where, message)


def rel(path: Path) -> str:
    try:
        return str(path.relative_to(REPO))
    except ValueError:
        return str(path)


def strip_code(text: str) -> str:
    """Blank out fenced blocks and inline code spans, preserving line numbering."""
    lines = text.splitlines()
    out: list[str] = []
    in_fence = False
    for line in lines:
        if FENCE.match(line):
            in_fence = not in_fence
            out.append("")
            continue
        out.append("" if in_fence else INLINE_CODE.sub("", line))
    return "\n".join(out)


def load_yaml(path: Path, report: Report) -> object | None:
    """Parse a YAML file. Returns None when absent or invalid (error already recorded)."""
    if not path.is_file():
        return None
    try:
        return yaml.safe_load(path.read_text(encoding="utf-8"))
    except yaml.YAMLError as exc:
        report.error(rel(path), f"invalid YAML: {str(exc).splitlines()[0]}")
        return None
    except OSError as exc:
        report.error(rel(path), f"unreadable: {exc}")
        return None


def entries(data: object, key: str, path: Path, report: Report) -> list[dict]:
    """Extract `key`'s list of mappings from a parsed YAML document."""
    if data is None:
        return []
    if not isinstance(data, dict):
        report.error(rel(path), f"top level must be a mapping with a `{key}` key")
        return []
    raw = data.get(key)
    if raw is None:
        return []
    if not isinstance(raw, list):
        report.error(rel(path), f"`{key}` must be a list")
        return []
    items = []
    for index, item in enumerate(raw):
        if isinstance(item, dict):
            items.append(item)
        else:
            report.error(rel(path), f"`{key}[{index}]` must be a mapping")
    return items


def blank(value: object) -> bool:
    return value is None or (isinstance(value, str) and not value.strip())


def check_metadata(article: Path, report: Report) -> None:
    path = article / "article.yaml"
    if not path.is_file():
        report.error(rel(path), "missing (required at every stage)")
        return
    data = load_yaml(path, report)
    if data is None:
        return
    if not isinstance(data, dict):
        report.error(rel(path), "top level must be a mapping")
        return

    article_id = data.get("id")
    if blank(article_id):
        report.error(rel(path), "`id` is required")
    elif str(article_id) != article.name:
        report.error(rel(path), f"`id` is {article_id!r} but the folder is {article.name!r}")

    if blank(data.get("title")):
        report.incomplete(rel(path), "`title` is empty")
    if blank(data.get("tracker_url")):
        report.warn(rel(path), "`tracker_url` is empty; the tracker owns planning for this article")
    if report.strict:
        for field in ("published_url", "published_at", "published_revision"):
            if not blank(data.get(field)):
                report.warn(rel(path), f"`{field}` is already set before release")


def check_sources(article: Path, report: Report) -> dict[str, dict]:
    path = article / "research" / "sources.yaml"
    data = load_yaml(path, report)
    sources: dict[str, dict] = {}
    for index, item in enumerate(entries(data, "sources", path, report)):
        source_id = item.get("id")
        if blank(source_id):
            report.error(rel(path), f"`sources[{index}]` has no `id`")
            continue
        source_id = str(source_id)
        if source_id in sources:
            report.error(rel(path), f"duplicate source id {source_id!r}")
            continue
        sources[source_id] = item
        if blank(item.get("title")):
            report.incomplete(rel(path), f"{source_id}: `title` is empty")
        supports = item.get("supports")
        if not supports or not isinstance(supports, list):
            report.incomplete(rel(path), f"{source_id}: `supports` must list the claims it backs")
        if blank(item.get("url")) and blank(item.get("locator")):
            report.incomplete(
                rel(path),
                f"{source_id}: needs a `url` or a `locator` describing where the evidence is",
            )
    return sources


def check_assets(article: Path, report: Report) -> dict[str, dict]:
    path = article / "assets" / "manifest.yaml"
    data = load_yaml(path, report)
    declared: dict[str, dict] = {}
    for index, item in enumerate(entries(data, "assets", path, report)):
        asset_id = item.get("id")
        if blank(asset_id):
            report.error(rel(path), f"`assets[{index}]` has no `id`")
            continue
        asset_id = str(asset_id)
        file_name = item.get("file")
        if blank(file_name):
            report.error(rel(path), f"{asset_id}: `file` is required")
            continue
        target = (article / "assets" / str(file_name)).resolve()
        if not target.is_file():
            report.incomplete(rel(path), f"{asset_id}: file {file_name!r} does not exist")
        declared[str(target)] = item
    return declared


def image_refs(text: str) -> list[tuple[int, str, str]]:
    """Local image references as (line number, alt text, path)."""
    found: list[tuple[int, str, str]] = []
    for number, line in enumerate(text.splitlines(), start=1):
        for match in MD_IMAGE.finditer(line):
            found.append((number, match.group("alt"), match.group("path")))
        for match in HTML_IMAGE.finditer(line):
            found.append((number, "", match.group("path")))
    return [
        (number, alt, path)
        for number, alt, path in found
        if not REMOTE.match(path) and not path.startswith("#")
    ]


def check_declared_image(article: Path, entry: dict, ref: str, alt: str, where: str,
                         report: Report) -> None:
    """Completeness of the manifest entry backing one image reference."""
    asset_id = entry.get("id")
    manifest = rel(article / "assets" / "manifest.yaml")
    if blank(entry.get("purpose")):
        report.incomplete(manifest, f"{asset_id}: `purpose` is empty")
    if blank(entry.get("alt")):
        report.incomplete(manifest, f"{asset_id}: `alt` text is required for accessibility")
    if blank(entry.get("creator_or_source")):
        report.incomplete(manifest, f"{asset_id}: `creator_or_source` is empty")
    if blank(entry.get("rights_or_permission")):
        report.warn(manifest, f"{asset_id}: `rights_or_permission` is empty")
    if not alt.strip() and blank(entry.get("alt")):
        report.incomplete(where, f"image {ref!r} has no alt text in the Markdown")


def check_article(article: Path, sources: dict[str, dict], declared: dict[str, dict],
                  report: Report) -> None:
    path = article / "article.md"
    if not path.is_file():
        report.incomplete(rel(path), "missing")
        return
    raw = path.read_text(encoding="utf-8")
    text = strip_code(raw)
    if not text.strip():
        report.incomplete(rel(path), "is empty")

    for number, line in enumerate(text.splitlines(), start=1):
        match = PLACEHOLDER.search(line)
        if match:
            report.incomplete(f"{rel(path)}:{number}", f"unresolved placeholder {match.group(0)!r}")

    for number, line in enumerate(text.splitlines(), start=1):
        for match in SOURCE_REF.finditer(line):
            source_id = match.group(1)
            if source_id not in sources:
                report.error(
                    f"{rel(path)}:{number}",
                    f"[src:{source_id}] has no entry in research/sources.yaml",
                )
            else:
                report.incomplete(
                    f"{rel(path)}:{number}",
                    f"[src:{source_id}] is a working reference; convert it to a reader-facing "
                    "citation or link",
                )

    for number, alt, ref in image_refs(text):
        where = f"{rel(path)}:{number}"
        target = (article / ref).resolve()
        if not target.is_file():
            report.incomplete(where, f"image {ref!r} does not exist")
        entry = declared.get(str(target))
        if entry is None:
            report.incomplete(where, f"image {ref!r} is not listed in assets/manifest.yaml")
            continue
        check_declared_image(article, entry, ref, alt, where, report)


def check_distribution(article: Path, declared: dict[str, dict], report: Report) -> None:
    """Optional per-channel distribution copy, examined only under `--distribution`.

    Assets carry no front matter, no status field, no article id and no release date by
    design; the tracking project owns all of that. Copy reuses the article's imagery through
    a relative path such as `../assets/hero.png`, so references resolve against the asset
    file's own folder. An unresolved link destination is marked with the template's `TODO:`
    prompt, which `PLACEHOLDER` already catches — there is no second marker syntax.
    """
    folder = article / "distribution"
    if not folder.is_dir():
        return
    for path in sorted(folder.glob("*.md")):
        if not path.is_file():
            continue
        raw = path.read_text(encoding="utf-8")
        if not raw.strip():
            report.incomplete(rel(path), "is empty; write the asset or remove the file")
            continue
        text = strip_code(raw)

        for number, line in enumerate(text.splitlines(), start=1):
            match = PLACEHOLDER.search(line)
            if match:
                report.incomplete(
                    f"{rel(path)}:{number}", f"unresolved placeholder {match.group(0)!r}"
                )

        for number, alt, ref in image_refs(text):
            where = f"{rel(path)}:{number}"
            target = (path.parent / ref).resolve()
            if not target.is_file():
                report.incomplete(where, f"image {ref!r} does not exist")
            entry = declared.get(str(target))
            if entry is None:
                report.incomplete(where, f"image {ref!r} is not listed in assets/manifest.yaml")
                continue
            check_declared_image(article, entry, ref, alt, where, report)


def check_brief(article: Path, report: Report) -> None:
    path = article / "brief.md"
    if not path.is_file() or not path.read_text(encoding="utf-8").strip():
        report.incomplete(rel(path), "missing or empty; the brief is approved at Gate 1")



def resolve_targets(names: list[str]) -> list[Path]:
    if not names:
        if not ARTICLES.is_dir():
            return []
        return sorted(p for p in ARTICLES.iterdir() if p.is_dir() and not p.name.startswith("."))
    targets = []
    for name in names:
        candidate = Path(name)
        if not candidate.is_dir():
            candidate = ARTICLES / name
        if not candidate.is_dir():
            sys.exit(f"error: no such article folder: {name}")
        targets.append(candidate.resolve())
    return targets


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("articles", nargs="*", help="article ids or paths (default: all)")
    parser.add_argument("--mode", choices=("brief", "publication"), default="brief",
                        help="publication mode requires completeness (default: brief)")
    parser.add_argument("--distribution", action="store_true",
                        help="also check articles/<id>/distribution assets (default: skipped)")
    args = parser.parse_args()

    report = Report(strict=args.mode == "publication")
    targets = resolve_targets(args.articles)

    # The template must stay parseable: a broken template breaks every new article.
    for path in sorted(TEMPLATE.rglob("*.yaml")) + sorted(TEMPLATE.rglob("*.yml")):
        load_yaml(path, report)

    for article in targets:
        check_metadata(article, report)
        check_brief(article, report)
        sources = check_sources(article, report)
        declared = check_assets(article, report)
        check_article(article, sources, declared, report)
        if args.distribution:
            check_distribution(article, declared, report)

    label = f"{len(targets)} article(s)" if targets else "no articles"
    scope = ", including distribution assets" if args.distribution else ""
    print(f"checked {label} in {args.mode} mode{scope}")

    for warning in report.warnings:
        print(f"  warning  {warning}")
    for error in report.errors:
        print(f"  error    {error}")

    if report.errors:
        print(f"\n{len(report.errors)} error(s), {len(report.warnings)} warning(s)")
        return 1
    print(f"\nno errors, {len(report.warnings)} warning(s)")
    if args.mode == "brief" and report.warnings:
        print("warnings are completeness gaps; they become errors in --mode publication")
    return 0


if __name__ == "__main__":
    sys.exit(main())
