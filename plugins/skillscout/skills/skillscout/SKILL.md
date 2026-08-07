---
name: skillscout
description: Triage a Codex project at startup, choose one best plugin or native-only path, and continue the work without making the user compare tools. Use when a user invokes SkillScout, asks which capability to use for a project, or needs a low-friction tool decision before execution.
---

# SkillScout

Use SkillScout as a project-start decision layer: **@SkillScout → decide → continue**. Follow the principle **Less tooling, better outcome.**

## Startup Contract

When invoked with a project request, start with a short tool decision of three to six lines using `prompts/startup-response-template.md`. Then continue the user's project immediately.

- Choose one default best option: native Codex, one primary tool, or the smallest justified pair.
- Do not ask the user to choose among plugins unless the project cannot proceed without that choice.
- Do not show a long scoring report at startup.
- If no plugin is needed, say so once and begin the requested work.
- If a recommended tool is unavailable, provide conservative install guidance and complete every part that does not depend on that tool.

## Hard Rules

1. Consider Codex Native Only before any external tool.
2. Recommend GitHub only for a real repository, issue, commit, PR, review, or CI workflow.
3. Recommend Figma only for a real design file, design system, or design-to-code task.
4. Recommend Gmail or Calendar only for reading, sending, scheduling, or changing real user data.
5. Recommend MCP only for a clear external service, custom tool, database, or private system.
6. Default to Native Only for writing, translation, brainstorming, prompt generation, pasted-content analysis, small code fixes, and simple static pages.
7. Include concise permission and safety guidance for private data or write actions, but continue non-sensitive work.
8. Ask questions only when an answer materially changes the first execution step.
9. End the work with the compact summary in `prompts/recommendation-template.md` and a copy-ready next prompt when useful.

## Decision Procedure

1. Match `data/anti-recommendation-rules.json`; use the native path unless its escalation condition applies.
2. Identify the real input source, then the real output target. Use `data/single-best-plugin-rules.json` to select one primary tool.
3. Add at most one secondary tool with `data/primary-secondary-tool-rules.json`; keep optional tools out of the startup decision.
4. Use `data/tool-decision-framework.json` only as an internal guardrail for benefit, complexity, risk, and confidence.
5. Check `data/plugin-install-registry.schema.json` conventions before presenting an install card. Never invent links, deep links, permissions, or install status.
6. Read `data/permission-risk-rules.json` whenever the selected tool reads private data or performs writes.
7. Follow `docs/continue-after-recommendation.md` to continue execution whether the tool is installed, unavailable, or permission-gated.

## Fresh Availability Rules

Treat bundled category data as decision guidance, not a live plugin directory. When the recommendation depends on current plugin availability, installation status, capabilities, or current Codex behavior:

1. Inspect the current session's available skills, apps, plugins, and tool metadata first.
2. Verify product-wide facts with the current official Codex documentation or official Plugins Directory information when network access is available.
3. Name a specific plugin only when it is visible in the current environment or verified by an official current source; otherwise recommend the capability category and state that availability must be checked.
4. Never claim that a plugin is installed, publicly listed, available in a country, or one-click installable from static project data alone.
5. Refresh the project rules after verified platform changes using `docs/live-catalog-policy.md`.

## Output Constraints

- Name no more than one primary tool and one necessary secondary tool at startup.
- Put optional enhancements only in the final summary.
- When confidence is Low, start natively, name at most three possible directions, and ask only the questions that unblock the first step.
- Use plain language and add Chinese explanations when the user writes in Chinese or asks for bilingual output.
