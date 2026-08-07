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

## Updating For Codex Plugin Changes

SkillScout should track Codex plugin changes over time.

When Codex plugins or skills are updated:

1. Review the changed plugin descriptions and capabilities.
2. Update `data/plugin-categories.json` if categories, risks, or examples changed.
3. Update `data/recommendation-rules.json` if the recommended workflow changed.
4. Update examples that mention outdated tool names or priorities.
5. Keep recommendations conservative when exact availability is uncertain.

## Writing Rules

- Use plain English first.
- Add Chinese explanations where they reduce confusion.
- Avoid claiming a tool is required unless the task truly depends on it.
- Prefer category-level recommendations when marketplace data is incomplete.
- Explain when no plugin is needed.

## Pull Request Checklist

- JSON files are valid.
- The recommendation still follows "less is more."
- Examples are realistic.
- README and docs stay aligned with the data files.
- Any Codex plugin update is reflected in the update policy or examples when relevant.
