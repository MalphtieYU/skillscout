# SkillScout

> **Less tooling, better outcome.**

SkillScout is a decision layer for Codex tooling. It decides when to use plugins, skills, apps, MCP servers, or no extra tools at all—then recommends the smallest useful stack.

It is not a plugin directory and does not assume that more integrations make a workflow better. Its first question is always: **will a tool materially improve this task for this user?**

## Why not always use plugins?

Plugins can add useful capabilities, but they can also add setup time, permissions, latency, context noise, and new failure points. A GitHub integration is valuable when Codex must change a real repository and open a PR; it is needless when a user only wants a five-line code fix. SkillScout makes that distinction explicit.

## Core idea

Use tools only when they improve the result. Start with Codex native capability, add the minimum external capability that unlocks a real need, and say clearly what to skip.

## Who it is for

- Codex beginners and non-technical users who find tool descriptions confusing.
- Developers working across many repositories, integrations, and file types.
- Teams that want repeatable, low-risk tooling decisions.
- Anyone who wants a plain-language explanation of Skills, Plugins, Apps, MCP, or `AGENTS.md`.

## What SkillScout does

- Decides whether a task needs tools at all.
- Applies a benefit, complexity, risk, and user-fit decision model.
- Gives anti-recommendations to prevent needless plugins.
- Identifies task complexity and recommendation confidence.
- Selects a minimal tool stack with clear escalation conditions.
- Explains tools in plain English and Chinese instead of copying marketplace descriptions.
- Adds permission and safety guidance for connected data or write actions.
- Ends with a copy-ready Codex prompt.

## Example

**User:** “I want Codex to polish this email.”

**Decision:** Use Codex Native Only — High Confidence.

Polishing pasted text does not need account access. Gmail would only be useful if the user wants Codex to read a real thread, draft a reply in the mailbox, or send it. Connecting Gmail here would add privacy and permission overhead without improving the writing.

**Minimal setup:** Codex native writing.

**Tools you should not use:** Gmail, Calendar, GitHub, Figma, and MCP. None of them improve a text-only rewrite.

## How it works

1. Interpret the requested outcome and assess confidence.
2. Check for a native-first or anti-recommendation rule.
3. Estimate quality, efficiency, capability, complexity, risk, and user-fit tradeoffs.
4. Select one tooling decision and the smallest viable stack.
5. Add safeguards for data access or write actions.
6. Give a copy-ready next prompt.

See [how it works](docs/how-it-works.md), the [decision framework](data/tool-decision-framework.json), and the [full response template](prompts/recommendation-template.md).

## Install

Copy or clone this folder as `skillscout` into your Codex skills directory (commonly `$CODEX_HOME/skills/skillscout`), then refresh Codex. Invoke it with:

```text
Use $skillscout to recommend the smallest safe tool stack for my task.
```

## Validate

Run from the repository root:

```text
node scripts/validate-data.mjs
```

The validator checks the decision data, cross-file category references, risk coverage, and example inventory.

## Repository layout

| Path | Purpose |
| --- | --- |
| `SKILL.md` | Concise runtime decision workflow. |
| `data/` | Versioned models, rules, and a future plugin-registry schema. |
| `docs/` | Human-facing explanation, maintenance, and contribution guidance. |
| `examples/` | End-to-end decisions for common and ambiguous tasks. |
| `prompts/` | System and response templates. |
| `scripts/validate-data.mjs` | Dependency-free validation. |

## Roadmap

- Live plugin-directory indexing.
- Community plugin ratings.
- Broader multilingual explanations.
- Local plugin registry support.
- Team policy profiles.
- Security scoring refinements.
- Integration with the Codex plugin directory.

## Contributing

Read [the contribution guide](docs/contribution-guide.md). Contributions should make decisions clearer, safer, or more useful—not merely add more tools.

## License

MIT. See [LICENSE](LICENSE).
