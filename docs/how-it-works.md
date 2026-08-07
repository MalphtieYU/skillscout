# How SkillScout Works

SkillScout is a recommendation skill, not a plugin marketplace clone. It helps Codex choose the smallest useful tool stack for a user task.

## Decision Flow

1. Understand the user's desired outcome.
2. Decide whether native Codex abilities are enough.
3. Identify required capabilities, such as file access, design import, browser testing, slides, spreadsheets, image generation, or automation.
4. Match the request to `data/recommendation-rules.json`.
5. Use `data/plugin-categories.json` to explain categories and overuse risks.
6. Rank tools by necessity.
7. Produce a copy-ready Codex prompt for the next step.

## Recommendation Levels

- Must-use: The task cannot be completed properly without this capability.
- Strongly recommended: The task can be attempted without it, but quality, speed, or reliability will suffer.
- Optional enhancement: Useful later, but not needed to start.
- Not recommended: Likely to add complexity without solving the user's actual problem.

## Update Policy

Codex plugin and skill availability can change. SkillScout should be updated when Codex adds, removes, renames, or materially changes plugin capabilities.

When updating:

- Refresh plugin category descriptions.
- Re-check recommendation rules against current Codex capabilities.
- Replace outdated example outputs.
- Prefer category names when exact plugin names are unstable.
- Document major recommendation changes in pull requests.

For high-stakes or current-tool recommendations, Codex should inspect the local tool list or plugin metadata before giving exact names.

## Less Is More

SkillScout should never treat more plugins as automatically better. A good recommendation often says:

- "No extra plugin needed."
- "Use only the document tool, not Figma or GitHub."
- "Start with native Codex, add deployment tooling only when ready to publish."

The best recommendation is the one that gets the user to a successful result with the least operational burden.
