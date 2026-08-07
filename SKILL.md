---
name: skillscout
description: Decide whether a Codex task needs native abilities, skills, plugins, apps, MCP servers, or no extra tools. Use when users ask which capability to use, whether a plugin is worthwhile, how to avoid unnecessary tooling, or how to start a task with the smallest safe effective workflow.
---

# SkillScout

Use the principle **Less tooling, better outcome.** Treat native Codex capability as the default, not as a fallback.

## Decision Rules

1. Decide whether the task needs an external capability before naming any tool.
2. Recommend the smallest useful tool stack; do not recommend tools merely because they exist.
3. Prefer **Native Only** for writing, translation, brainstorming, prompt writing, pasted-content analysis, small code fixes, and simple static pages unless the user asks to act on a real external system or file.
4. Recommend GitHub only for an actual repository workflow: reading or changing a repo, issues, commits, PRs, reviews, or CI.
5. Recommend Figma only when a real design file, design system, or design-to-code task is involved.
6. Recommend Gmail, Calendar, cloud storage, file tools, or MCP only when the task must access or change real external data, files, services, or private systems.
7. Include permission and safety guidance whenever a recommended tool can read private data or perform write actions.
8. Ask questions only when the answers would materially change the tooling decision. Ask no more than five.
9. End every recommendation with a copy-ready Codex prompt.

## Workflow

1. Restate the task in plain language and assign a confidence level: High, Medium, or Low.
2. Estimate task complexity with `data/task-complexity-rules.json`.
3. Check `data/anti-recommendation-rules.json` before considering tools. If a rule matches, prefer its native-first conclusion unless the user explicitly needs the stated escalation condition.
4. Score the likely tool stack with `data/tool-decision-framework.json`: quality gain, efficiency gain, capability requirement, complexity cost, risk cost, and user skill fit.
5. Choose exactly one decision: **Use Codex Native Only**, **Plugins Optional**, **Plugins Strongly Recommended**, **Plugins Required for Best Result**, or **Avoid Plugins for This Task**.
6. Use `data/minimal-tool-stack-rules.json` to select the minimum setup and identify tools to skip.
7. Use `data/recommendation-rules.json` and `data/plugin-categories.json` only to explain relevant categories in plain language. Check current availability before naming a specific integration.
8. If the selected stack has a matching entry in `data/permission-risk-rules.json`, include permission scope, failure modes, safe use, and whether confirmation is required.

## Output Requirements

Follow `prompts/recommendation-template.md`. Always include:

- one clear tooling decision and confidence level;
- a natural-language tradeoff explanation, not a raw score dump;
- the minimal setup, with escalation conditions;
- **Tools You Should Not Use for This Task**;
- no more than three possible directions when confidence is Low;
- risk guidance for private data or write actions; and
- a copy-ready Codex prompt.

## Resource Guide

- `data/tool-decision-framework.json`: score and map tradeoffs to a decision level.
- `data/anti-recommendation-rules.json`: prevent needless tool recommendations.
- `data/task-complexity-rules.json`: calibrate effort, questions, and safeguards.
- `data/minimal-tool-stack-rules.json`: choose the smallest viable stack.
- `data/permission-risk-rules.json`: give safety guidance for connected tools.
- `docs/plugin-explanation-style.md`: translate tool descriptions into user-centered explanations.
- `docs/user-pain-points.md`: address common user confusion without overexplaining.
