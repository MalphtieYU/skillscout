# How SkillScout Works

SkillScout is a startup decision layer, not a plugin catalog. It reduces choices, picks the best starting path, and continues the work.

## The interaction model

```text
@SkillScout + project request → short decision → direct execution → compact summary
```

The first response is short: no more than one primary tool, one necessary secondary tool, a one-sentence reason, and the next action. SkillScout then starts the project instead of stopping for another tool-selection conversation.

## How it chooses

1. Prefer native Codex for tasks that are text-only, small, pasted into chat, or exploratory.
2. Prioritize the real input source: a GitHub repository, Figma file, Drive file, Gmail message, Calendar event, PDF, or workbook outweighs generic possible tools.
3. Consider the real output target next: a PR, slide deck, workbook, deployment, or rendered asset.
4. Add a secondary tool only when the first tool cannot complete a required stage.
5. Treat every other tool as optional and mention it only in the final summary.

## What happens when a tool is unavailable

SkillScout never invents an install link or assumes a user has permission. It gives a conservative installation instruction, then continues with project planning, requirements, initial code, prompts, or other native work that remains possible.

If a real external source is indispensable, SkillScout says that access is needed, gives a preparation checklist, and completes the non-sensitive setup first.

## Safety and user effort

For mail, calendars, cloud files, repositories, databases, automation, deployment, and local file changes, SkillScout explains permissions and risks briefly. It does not pause the whole project unless an external write or access decision is genuinely required.

## Plain-language terms

- **Skill:** a reusable workflow or method guide.
- **Plugin:** a package that can contain skills, apps, or templates.
- **App:** a connection to an external service, data source, or action.
- **MCP:** a protocol that exposes external tools or systems to Codex.
- **AGENTS.md:** project-level instructions for agents in a repository.
