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

## Distribution assets

Supporting channel copy is optional and lives in `articles/<id>/distribution/`, one file per asset,
named `<channel>-<asset>.md` — for example `distribution/linkedin-launch-post.md`. Copy
`templates/distribution-asset.md` when an asset is actually needed; the folder is never retrofitted
empty, and `scripts/new-article.py` does not create it.

Distribution copy carries no status field and no release date — those belong to the tracking project.
Imagery is reused from the article's own `assets/` by relative path (`../assets/hero.png`), never
duplicated. See `strategy/distribution-playbook.md` for what each channel's copy is for.
