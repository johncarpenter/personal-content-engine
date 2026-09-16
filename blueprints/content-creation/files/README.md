# Content Creation

A collaborative article editor based on the tested Workspace Docs gadget. Write and format the
article with the author, then export Markdown. AI assistance is optional. The editor persists its
content in the installed gadget's Durable Object; it does not write articles to GitHub automatically.

## Editorial workflow

The authoritative process lives in `johncarpenter/personal-content-engine/WORKFLOW.md`.
The bundled workflow/templates are a starting snapshot; check current repository guidance before
proposing article changes. Keep the article's stable ID even if its title changes.

1. Define reader, problem, provisional thesis, contribution, scope, takeaway and tracker link.
2. Propose the brief through Gate 1 (Brief PR) before substantial production.
3. Research, record sources and limitations, shape the outline, and draft the article.
4. Review argument, structure, factual support, voice and imagery together.
5. Run the repository's publication checks and open Gate 2 (Publication PR).
6. Release separately; verify the live result and record its URL/date/revision in article.yaml.

Planning, calendars, assignments and performance remain in the tracking project. Never imply
that a generated draft, passing mechanical check or brief approval is editorial publication approval.

## Repository and blueprint boundaries

Bind CONTENT_REPOSITORY explicitly through Workshop before an agent accesses GitHub. Read
AGENTS.md, WORKFLOW.md, brand/ and the current templates/ there before working. Repository
writes and pull requests use ordinary Gatekeeper approval; the editor has no automatic Git push.

Article work belongs at `articles/<stable-id>/` with article.yaml, brief.md, article.md, optional
outline/research and assets. Export the editor's Markdown and deliberately propose it there.
The linked-blueprint Publish control proposes accepted **gadget files** under
`blueprints/content-creation/`; it does not publish this editor's saved document or bypass either
editorial gate. Keep real articles out of this reusable template package.

## Agent editor API

Use `getDocument()` to read the current snapshot. `setDocument({title, blocks, senderId})` updates
it atomically; obtain author agreement before replacing existing content. The inherited editor
supports Markdown, HTML and PDF export and concurrent editing. See editor-reference.md for the
full inherited behavior. Connection declarations contain no credentials or inherited authority.
