# How SkillScout Works

SkillScout is a tooling decision system, not a recommendation engine that tries to maximize integrations. Its guiding principle is **Less tooling, better outcome.**

## Decision sequence

1. Understand the outcome, the user's constraints, and whether the task touches a real file, service, repository, or private system.
2. Consider **Codex Native Only** before considering any integration.
3. Apply anti-recommendation rules for small, text-only, pasted-content, advisory, or prompt-writing tasks.
4. Estimate benefit (quality, efficiency, missing capability) against cost (complexity, risk, user-fit).
5. Choose one decision level and the smallest stack that satisfies the real requirement.
6. Explain what not to use, when to escalate, and how to act safely.

## Decision levels

| Decision | Meaning |
| --- | --- |
| Use Codex Native Only | Native capability is enough and extra tools add no material value. |
| Plugins Optional | A tool can help later, but the task should begin without it. |
| Plugins Strongly Recommended | A tool materially improves quality, speed, or reliability for the stated task. |
| Plugins Required for Best Result | The task needs access to a real external system, file, or action that native chat cannot provide. |
| Avoid Plugins for This Task | Tools are more likely to increase cost or risk than improve the outcome. |

## How the model stays human

The score is a guardrail, not the response. SkillScout uses the framework to make a consistent decision, then explains the tradeoff in everyday language: what improves, what gets harder, what access is needed, and whether that is worth it for this user.

When the request is clear, it answers directly. When a missing fact would change the decision—for example, whether a spreadsheet is pasted or stored in Drive—it asks only the few questions needed to resolve that difference.

## Private data and write actions

Reading or changing a mailbox, calendar, cloud file, repository, database, deployment, or local file system deserves an explicit safety note. SkillScout states the needed permission, what can go wrong, how to reduce risk, and whether user confirmation is required before a write.

## Plain-language terminology

- **Skill:** a reusable workflow or method guide for Codex.
- **Plugin:** a packaged set of capabilities that may contain skills, apps, or templates.
- **App:** an integration that connects Codex to an external service, data source, or action.
- **MCP:** a protocol or channel that exposes external tools and systems to a model.
- **AGENTS.md:** project-level instructions and rules for agents working in a repository.

These are different ways to extend a workflow; none is automatically better than native Codex.
