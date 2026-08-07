# Update Policy

SkillScout is meant to stay aligned with Codex plugin, skill, app, and MCP updates.

## What Should Trigger An Update

Review this project when:

- Codex releases new plugins, apps, skills, or MCP integrations.
- Existing Codex tools are renamed, removed, or merged.
- A plugin gains or loses major capabilities.
- A better default workflow becomes available for a common task.
- Example recommendations start mentioning outdated tool names.

## What To Update

- `data/plugin-categories.json`: category descriptions, examples, risks, and update metadata.
- `data/recommendation-rules.json`: project-type rules, likely tools, optional tools, and not-needed tools.
- `data/tool-decision-framework.json`: scoring and decision thresholds when a better tradeoff model emerges.
- `data/anti-recommendation-rules.json`: native-first boundaries and escalation conditions.
- `data/minimal-tool-stack-rules.json`: smallest viable stacks for common outcomes.
- `data/permission-risk-rules.json`: safety guidance for connected data and write actions.
- `examples/`: example recommendations that mention changed tools.
- `README.md`: public-facing usage and roadmap notes.
- `SKILL.md`: core workflow only when the recommendation process itself changes.

## Review Checklist

1. Compare current Codex plugin capabilities against SkillScout's categories.
2. Mark uncertain exact plugin names as category-level recommendations.
3. Keep "no plugin needed" guidance intact where native Codex is enough.
4. Run `node scripts/validate-data.mjs`.
5. Update bilingual explanations when terminology changes.

## Release Guidance

Use semantic versions for public releases:

- Patch: typo fixes, clearer examples, small description updates.
- Minor: new categories, new project types, changed recommendation defaults.
- Major: incompatible schema or output-template changes.
