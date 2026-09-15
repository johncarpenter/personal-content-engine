TODO: write the article here. Start with the body — the canonical title lives in `article.yaml`, so
an `# H1` here would compete with it.

Conventions while drafting:

- Cite sources by stable ID: `[src:source-001]`. Checks verify the ID exists in
  `research/sources.yaml`; convert these to reader-facing citations or links before Gate 2.
- Mark open issues explicitly: `TODO: verify the 40% figure`, `TODO: replace placeholder image`.
  Never paper over an evidence gap with plausible prose.
- Insert images with a relative path and real alt text, and register each one in
  `assets/manifest.yaml`:

  ```markdown
  ![Cost per request falls until batch size 32, then flattens](assets/figure-01.png)
  ```

- Preview copy and imagery together with `scripts/preview.py <article-id>`.
