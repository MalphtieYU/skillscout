# Plugin Explanation Style

Do not repeat a marketplace description. Explain a capability as a practical conditional: **what it lets Codex do, when that matters, and when to skip it.** Use plain language; include a Chinese explanation when it reduces confusion.

## Example

**Original:** “Connect your repositories and automate pull request workflows.”

**Bad:** “连接你的仓库并自动化 PR 工作流。”

**Good:** “If you need Codex to read a real GitHub repository, change code, commit, open a PR, or inspect CI, this is useful. If you only want a small code fix or an explanation, you can skip it.”

## Style guide by capability

| Capability | Explain it this way |
| --- | --- |
| GitHub | Useful for actual repository, issue, commit, PR, review, and CI work; skip for pasted code or local advice. |
| Figma | Useful when a real design file or design system is the source of truth; skip for a UI that can be designed directly. |
| Google Drive | Useful for finding, reading, or editing real shared files; skip when the content is pasted or local. |
| Gmail | Useful only to read, draft in, or send a real mailbox message; skip for text-only email polishing. |
| Calendar | Useful to inspect or change real events; skip for a written schedule or meeting agenda. |
| PDF | Useful for real PDFs, batch processing, form work, and layout-preserving export; skip for plain text. |
| Slides | Useful for editable decks and slide layout; skip when an outline or a document is enough. |
| Spreadsheet | Useful for real workbooks, formulas, charts, formatting, or recurring analysis; skip for a small pasted table. |
| Image | Useful to generate, edit, or batch-process actual images; skip when the user only wants a prompt or visual idea. |
| Browser / Web | Useful for current web research, rendered-page verification, or live UI debugging; skip for static code reasoning. |
| MCP | Useful only for a named external service, database, private system, or custom action; skip as a generic add-on. |
| Automation | Useful for recurring future work with a clear trigger and stop condition; skip for a one-time task. |
| Testing | Useful when a change can regress behavior or needs verification; skip heavyweight suites for a tiny docs-only edit. |
| Deployment | Useful when the user is ready to change a hosted environment; skip while building or planning locally. |

## Required explanation pattern

For each tool named in a recommendation, include:

1. The outcome it unlocks for this task.
2. The condition that makes it worth using.
3. The condition that makes it unnecessary.
4. A concise Chinese explanation when the user writes in Chinese or asks for bilingual guidance.

