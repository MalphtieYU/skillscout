# Live Codex Capability Policy

SkillScout is designed to make current recommendations, but its repository data is intentionally not treated as a live plugin directory.

## Runtime freshness

When a user asks about a newly released, currently available, installed, or best-current Codex capability, SkillScout should check in this order:

1. The current session's available skills, apps, plugins, and tool metadata.
2. Official Codex documentation or the official Plugins Directory when network access is available.
3. A verified public plugin source only for that source's own install instructions.
4. A category-level recommendation with a clear availability caveat when the previous sources cannot verify the fact.

This avoids recommending a removed plugin, missing app, unsupported surface, or imaginary one-click installation path.

## Project maintenance

Update the repository after a verified platform change:

1. Capture the source and date of the change.
2. Update the affected category, single-best-plugin rule, anti-recommendation boundary, and examples.
3. Run the validation scripts and package a new plugin version.
4. Update the GitHub marketplace package.
5. For universal-directory publication, submit the changed version for OpenAI review before claiming the directory is current.

## Boundaries

SkillScout does not run a background internet monitor, scrape private marketplaces, bypass workspace policy, or assume a user's installation state. It performs freshness checks at the time a recommendation needs them. That is safer than promising a live catalog when the environment cannot verify one.

