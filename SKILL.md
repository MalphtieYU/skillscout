---
name: skillscout
description: Recommend the smallest useful Codex tool stack: native abilities, skills, plugins, apps, MCP servers, or no extra tools. Use when a user asks which Codex capability to use, whether a task needs extra tools, how to choose between tools, how to avoid unnecessary plugins, or how to start a project with a simple effective workflow.
---

# SkillScout

SkillScout helps Codex decide whether a user's task needs plugins, skills, apps, MCP servers, or no extra tools at all.

Use it to reduce tool-choice friction. The goal is not to recommend more tools; the goal is to recommend the smallest setup that can complete the work well.

## Core Principles

1. Decide whether extra tools are needed before naming tools.
2. Prefer no plugin when Codex native abilities are enough.
3. Rank recommendations by necessity: must-use, strongly recommended, optional enhancement, not recommended.
4. Explain each recommendation in plain English and, when useful, Chinese.
5. State the consequence of not using a recommended tool.
6. Give the minimum viable tool stack, not a maximal stack.
7. Ask only the minimum clarifying questions when the project description is too vague to assess.
8. Treat tool availability as current-state information: inspect the available skills, apps, or plugin list before naming a specific integration when availability matters.

## Workflow

1. Restate the user's project in simple language.
2. Check whether the project can be completed well with native Codex abilities.
3. Identify hard requirements: external account access, a specific file format, a live application, current web information, or a requested deliverable in a connected service.
4. If the request is vague, ask up to five high-signal questions before recommending tools.
5. Match the task against `data/recommendation-rules.json` when it is available.
6. Use `data/plugin-categories.json` for category explanations and overuse risks.
7. Separate recommendations into:
   - Must-use Tools
   - Strongly Recommended Tools
   - Optional Enhancements
   - Tools Not Needed
8. State any availability or access assumption, then include a copy-ready Codex prompt that starts the user's next step.

## Output Template

Use this structure for final recommendations:

```markdown
# SkillScout Recommendation

## Project Understanding

Summarize the user's project in simple language.

## Tool Need Assessment

Choose one:

- No extra plugin needed
- Optional enhancement only
- Strongly recommended
- Required for best result

Explain the decision briefly.

## Recommended Setup

State the smallest useful tool stack.

## Must-use Tools

List only tools that are required for the requested result.

## Strongly Recommended Tools

List tools that materially improve quality, access, reliability, or speed.

## Optional Enhancements

List tools that may help but are not needed to start.

## Tools Not Needed

Name tools/categories that would add complexity without clear value.

## Why This Combination

Explain why this is enough and why extra tools are avoided.

## Suggested Codex Prompt

Provide a copy-ready prompt.

## Next Questions if Needed

Ask up to five questions only if the recommendation depends on missing information.
```

## Recommendation Details

For each recommended plugin, skill, app, or MCP server, include:

- Name
- Original English description, if known
- Chinese explanation
- Problems it solves
- Why this project needs it
- Impact of not using it
- Required or optional
- Priority
- Suggested invocation or workflow

When a specific capability is not available in the current environment, recommend its category and state the fallback. Do not tell the user to install a plugin unless the task genuinely needs it and the capability is unavailable.

## Resource Use

- Read `data/recommendation-rules.json` when matching a common project type.
- Read `data/plugin-categories.json` when explaining a category, risk, or tool-overuse tradeoff.
- Use `prompts/recommendation-template.md` when a consistent full recommendation is useful.
- Use `examples/` only when a similar example improves clarity; do not copy an example blindly.

## Update Awareness

Codex plugins, apps, MCP servers, and built-in skills can change over time. When accuracy depends on current availability:

- Check local skill/plugin metadata first when accessible.
- Search or inspect the current Codex tool/plugin list if the environment exposes it.
- Mark uncertain recommendations as "category-level" instead of pretending a specific plugin is guaranteed.
- Update `data/plugin-categories.json`, `data/recommendation-rules.json`, examples, and README when Codex plugin capabilities change.

## Vague Request Questions

If the task is unclear, ask the smallest useful set of questions:

- What is the final deliverable?
- Do you need internet access or latest information?
- Do you need to read or write local files?
- Do you need images, slides, PDFs, spreadsheets, web pages, or video?
- Do you need to connect GitHub, Google Drive, Gmail, Slack, Notion, or another external service?
- Do you need automation or scheduled work?
