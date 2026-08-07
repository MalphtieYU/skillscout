# Contribution Guide

Thanks for improving SkillScout.

## What To Contribute

Useful contributions include:

- New recommendation rules for common Codex tasks.
- Better examples for non-technical users.
- Updated plugin category metadata.
- Clearer Chinese explanations.
- Corrections after Codex plugin, app, MCP, or skill updates.
- Tests or schemas that keep the data files consistent.
- Better anti-recommendation, risk, or minimal-stack rules supported by clear task boundaries.

## Updating For Codex Plugin Changes

SkillScout should track Codex plugin changes over time.

When Codex plugins or skills are updated:

1. Review changed capability descriptions and availability.
2. Update `data/plugin-categories.json` and `data/recommendation-rules.json` when categories or workflows changed.
3. Re-check the decision, anti-recommendation, minimal-stack, and permission-risk rules for affected tasks.
4. Update examples that mention outdated tool names, priorities, or safety boundaries.
5. Keep recommendations conservative when exact availability is uncertain.

## Writing Rules

- Use plain English first.
- Add Chinese explanations where they reduce confusion.
- Avoid claiming a tool is required unless the task truly depends on it.
- Prefer category-level recommendations when marketplace data is incomplete.
- Explain when no plugin is needed.

## Pull Request Checklist

- JSON files are valid.
- `node scripts/validate-data.mjs` passes.
- The recommendation still follows "Less tooling, better outcome."
- Examples are realistic.
- README and docs stay aligned with the data files.
- Any Codex plugin update is reflected in the update policy or examples when relevant.
