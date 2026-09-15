#!/usr/bin/env python3
"""Create an article folder from templates/article/.

Usage:
    scripts/new-article.py <stable-article-id> [--title "Working title"]

The ID becomes the folder name and `id` in article.yaml, and never changes afterwards:
descriptive, lowercase, hyphenated, no dates or workflow stages. Existing folders are never
overwritten.
"""

from __future__ import annotations

import argparse
import re
import shutil
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
TEMPLATE = REPO / "templates" / "article"
ARTICLES = REPO / "articles"
VALID_ID = re.compile(r"^[a-z0-9]+(?:-[a-z0-9]+)*$")


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("article_id", help="stable article id, e.g. batch-inference-economics")
    parser.add_argument("--title", default="Working title", help="working title for article.yaml")
    args = parser.parse_args()

    article_id = args.article_id.strip().rstrip("/")
    if not VALID_ID.match(article_id):
        sys.exit(f"error: {article_id!r} must be lowercase alphanumeric words joined by hyphens")
    if not TEMPLATE.is_dir():
        sys.exit(f"error: missing template at {TEMPLATE}")

    target = ARTICLES / article_id
    if target.exists():
        sys.exit(f"error: {target.relative_to(REPO)} already exists; work in place, never rename")

    ARTICLES.mkdir(exist_ok=True)
    shutil.copytree(TEMPLATE, target)

    metadata = target / "article.yaml"
    text = metadata.read_text(encoding="utf-8")
    text = text.replace("id: example-article", f"id: {article_id}", 1)
    text = text.replace("title: Working title", f"title: {args.title}", 1)
    metadata.write_text(text, encoding="utf-8")

    print(f"created {target.relative_to(REPO)}")
    print("next:")
    print(f"  1. set `author` and `tracker_url` in {(metadata).relative_to(REPO)}")
    print(f"  2. write {(target / 'brief.md').relative_to(REPO)}")
    print(f"  3. open the Brief PR (Gate 1) — see WORKFLOW.md")
    return 0


if __name__ == "__main__":
    sys.exit(main())
