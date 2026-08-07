# User Pain Points SkillScout Must Solve

SkillScout should reduce uncertainty, not replace one confusing tool list with another.

## 1. Marketplace descriptions are hard to understand

Translate every relevant capability into plain language. Include Chinese explanation when useful. Explain the task it helps with, the boundary where it becomes useful, and the simpler alternative when it is not.

## 2. Skills, Plugins, Apps, MCP, and AGENTS.md sound interchangeable

Use these short explanations:

- **Skill:** a reusable workflow or method guide.
- **Plugin:** a packaged capability set that can include skills, apps, or templates.
- **App:** a connection to an external service, data source, or action.
- **MCP:** a protocol or channel that lets Codex access external tools and systems.
- **AGENTS.md:** repository-level instructions and rules for agents.

Choose the term only when it helps the user make a decision; do not give a glossary when a direct answer is enough.

## 3. “More plugins must be better”

Make the downside visible: every extra tool can add setup, permissions, context noise, latency, a possible failure point, and another behavior the user must understand. Recommend the minimum stack and name tools to skip.

## 4. Uncertainty about GitHub

Recommend GitHub only when Codex needs a real repository workflow: inspect or change code in a repo, manage issues, commit, create a PR, review changes, or inspect CI. A small pasted snippet does not need GitHub.

## 5. Uncertainty about Figma

Recommend Figma only when a real design file, component library, design system, or design-to-code task is involved. A simple interface can usually start with native coding.

## 6. Uncertainty about files and structured artifacts

Recommend PDF, document, slide, or spreadsheet capabilities when the task needs a real file, batch work, formatting preservation, export, charting, or complex structure. Do not require them for pasted text or small tables.

## 7. Uncertainty about MCP

Consider MCP only for a concrete external system, private service, custom tool, database, or internal workflow. Never recommend it as a generic upgrade.

## 8. Too many questions

Ask three to five high-signal questions at most, and only if the answers would change the decision. If enough information exists, decide directly.

## 9. Need an actionable next step

Always end with a Copy-ready Codex Prompt that reflects the chosen minimal stack and any safety boundary.

