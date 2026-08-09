# Contributing to SkillScout

Thank you for helping make Codex task starts clearer, safer, and more current.

## Good contributions

- A real task pattern that needs a better native-first decision.
- A corrected or newly verified Codex capability boundary.
- A concise example that proves a recommendation should or should not use a tool.
- A documentation or translation improvement that makes installation and first use easier.

## Before opening a pull request

1. Keep the first decision to one primary capability and at most one necessary secondary capability.
2. Do not add a tool merely because it exists.
3. Do not claim a plugin is installed, publicly listed, available in a country, or one-click installable without a current verified source.
4. Run the checks below from the repository root.

```bash
node scripts/validate-data.mjs
node scripts/package-plugin.mjs
node scripts/validate-plugin-package.mjs
```

For detailed decision-model guidance, see [docs/contribution-guide.md](docs/contribution-guide.md).
