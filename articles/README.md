# Articles

One folder per article, created with `scripts/new-article.py <stable-article-id>`.

## Article IDs

- Descriptive and stable: `batch-inference-economics`, not `article-3` or `q3-thought-piece`.
- Lowercase, hyphenated, no dates or workflow stages in the name.
- The folder name must equal `id` in `article.yaml`; checks enforce this.
- **Never rename or move a folder** after creation. Titles change, slugs change, stages change — the
  path is the identity that PRs, the tracker, and released revisions point at.

## Folder contents

Same shape as `templates/article/`. See the table in `README.md` for each file's purpose, and
`WORKFLOW.md` for the stage at which it is expected.

Optional files can stay lightweight or absent. Do not add dummy content to satisfy the template.
