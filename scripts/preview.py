#!/usr/bin/env python3
"""Render an article to HTML for final review, with its local images.

Usage:
    scripts/preview.py <article-id> [--no-open]

Writes articles/<id>/.preview.html (gitignored) and opens it. The file is written inside the
article folder on purpose: relative image paths such as assets/figure-01.png then resolve
exactly as they do in the Markdown source.

Markdown is rendered with `npx marked` (Node required; the first run downloads the package).
Offline alternative: any editor preview rooted in the article folder, e.g. VS Code's
"Markdown: Open Preview", resolves the same relative paths.
"""

from __future__ import annotations

import argparse
import html
import shutil
import subprocess
import sys
import webbrowser
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
ARTICLES = REPO / "articles"
MARKED = "marked@15"

PAGE = """<!doctype html>
<html lang="en">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<style>
  :root {{ color-scheme: light dark; }}
  body {{ margin: 0 auto; padding: 3rem 1.5rem 6rem; max-width: 42rem;
         font: 17px/1.65 -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; }}
  header.preview {{ margin-bottom: 2.5rem; padding-bottom: 1rem; border-bottom: 1px solid #8884; }}
  header.preview h1 {{ margin: 0 0 .25rem; font-size: 1.6rem; }}
  header.preview p {{ margin: 0; font-size: .85rem; opacity: .7; }}
  img {{ max-width: 100%; height: auto; display: block; margin: 1.5rem 0 .5rem; }}
  figcaption, em.caption {{ font-size: .85rem; opacity: .75; }}
  blockquote {{ margin: 1.5rem 0; padding-left: 1rem; border-left: 3px solid #8884; opacity: .9; }}
  pre {{ padding: 1rem; overflow-x: auto; background: #8881; border-radius: 6px; }}
  code {{ font-size: .9em; }}
  table {{ border-collapse: collapse; width: 100%; }}
  th, td {{ border: 1px solid #8884; padding: .4rem .6rem; text-align: left; }}
  h2, h3 {{ margin-top: 2.2rem; line-height: 1.3; }}
  a {{ color: #0b64c8; }}
</style>
<header class="preview">
  <h1>{title}</h1>
  <p>Preview of {source} — not the published rendering. Check images, captions, and links.</p>
</header>
{body}
</html>
"""


def read_title(article: Path) -> str:
    """Best-effort title from article.yaml without requiring a YAML parser."""
    metadata = article / "article.yaml"
    if metadata.is_file():
        for line in metadata.read_text(encoding="utf-8").splitlines():
            if line.startswith("title:"):
                title = line.split(":", 1)[1].strip().strip("'\"")
                if title and title.lower() != "null":
                    return title
    return article.name


def render(source: Path) -> str:
    npx = shutil.which("npx")
    if not npx:
        sys.exit(
            "error: npx not found. Install Node, or use an editor Markdown preview rooted in "
            "the article folder (see the module docstring)."
        )
    result = subprocess.run(
        [npx, "--yes", MARKED, "--gfm", "-i", str(source)],
        capture_output=True, text=True,
    )
    if result.returncode != 0:
        detail = (result.stderr or result.stdout).strip()
        sys.exit(f"error: `npx {MARKED}` failed:\n{detail}")
    return result.stdout


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("article_id", help="article id or path to the article folder")
    parser.add_argument("--no-open", action="store_true", help="write the file without opening it")
    args = parser.parse_args()

    article = Path(args.article_id)
    if not article.is_dir():
        article = ARTICLES / args.article_id
    if not article.is_dir():
        sys.exit(f"error: no such article folder: {args.article_id}")
    article = article.resolve()

    source = article / "article.md"
    if not source.is_file():
        sys.exit(f"error: missing {source}")

    title = read_title(article)
    output = article / ".preview.html"
    output.write_text(
        PAGE.format(title=html.escape(title), source=html.escape(source.name), body=render(source)),
        encoding="utf-8",
    )

    print(f"wrote {output.relative_to(REPO) if output.is_relative_to(REPO) else output}")
    if not args.no_open:
        webbrowser.open(output.as_uri())
    return 0


if __name__ == "__main__":
    sys.exit(main())
