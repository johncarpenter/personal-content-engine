# Visual style

Author-owned. Complete the fields below. Until they are filled, imagery decisions stay with the
author; tooling must not infer a visual identity.

- **Owner:** TODO(author): who maintains this document
- **Last reviewed:** TODO(author): YYYY-MM-DD

## Purpose before style

Every image earns its place by doing one of: **explain** a model or mechanism, **demonstrate** a
result, **provide evidence** (data, screenshot, artifact), or **establish mood**. Record which one
in `assets/manifest.yaml` under `purpose`. Decorative stock imagery without a purpose is not used.

## Identity

- Palette: TODO(author): hex values and where each is used
- Typography for in-image text: TODO(author)
- Logo usage and clear space: TODO(author)
- Illustration or photographic style: TODO(author)
- Chart style: TODO(author): grid, labels, direct labeling vs legend, number formatting

## Formats and sizes

- Hero/social image dimensions: TODO(author)
- In-article figure width: TODO(author)
- File formats: TODO(author): e.g. PNG for diagrams/screenshots, JPEG for photographs, SVG when the
  destination supports it
- Maximum file size: TODO(author)
- File naming: `figure-01.png`, `chart-revenue-mix.png` — descriptive, stable, lowercase, hyphenated

## Accessibility

- Alt text describes the information the image carries, not its appearance. A chart's alt text states
  the finding.
- Captions may add context and attribution; they do not substitute for alt text.
- Never encode information by color alone.
- Contrast target: TODO(author): e.g. WCAG AA for text in images

## Provenance and rights

Record for every asset in `assets/manifest.yaml`:

- `creator_or_source` — who made it or where it came from
- `rights_or_permission` — license, purchase, internal ownership, or written permission
- `editable_source_or_prompt` — source file, chart data, or generation prompt so the asset can be
  revised later

Screenshots must not leak confidential data, customer names, or credentials. Third-party material
needs an identified permission basis before it is committed.

## AI-generated imagery

TODO(author): decide and record the policy — allowed or not, required disclosure, and whether
generation prompts must be stored. Until decided, treat AI-generated imagery as requiring explicit
author approval per article.
