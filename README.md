# SkillScout

SkillScout is a Codex skill that recommends whether a Codex task needs plugins, skills, apps, MCP servers, or no extra tools at all.

It is designed for people who want to start a task in Codex but are not sure which extra capabilities are truly necessary. SkillScout favors the smallest useful tool stack, explains recommendations in plain English, and can include Chinese explanations for users who need them.

## What It Does

SkillScout reviews a user's project description and answers:

- Can this be done with native Codex abilities?
- Which tools are required, strongly recommended, optional, or unnecessary?
- What is the simplest workflow to get started?
- What happens if the user does not use a recommended tool?
- What should the user ask Codex next?

## Why It Exists

Codex users often face tasks such as coding, building websites, editing documents, creating slides, analyzing spreadsheets, generating images, working with Figma, using GitHub, or running automations. Some tasks need specialized plugins or skills. Many do not.

SkillScout reduces choice overload by recommending only what is genuinely useful.

## Who It Is For

- Codex users who are new to plugins and skills.
- Non-programmers who want plain-language tool guidance.
- Developers who want a quick workflow recommendation.
- Teams that want consistent tool-selection guidance.
- Bilingual users who want English-first output with Chinese explanations.

## Features

- Decides whether extra Codex tools are needed at all.
- Ranks tools as must-use, strongly recommended, optional, or not needed.
- Explains each recommendation in plain English and Chinese where useful.
- Includes reusable recommendation templates.
- Provides structured JSON rule data for common project types.
- Tracks plugin category metadata in an extensible format.
- Includes an update policy so the project can evolve with Codex plugin changes.
- Validates its rule data with a dependency-free Node.js script.

## Example Use Cases

- "I want to build a personal portfolio website. Which Codex plugins do I need?"
- "I need to turn a Figma design into a responsive React website."
- "I need Codex to refactor my GitHub repo and open a pull request."
- "I need to watermark 50 PDF files and export final versions."

## Installation / Usage Idea

Use this repository as a Codex skill folder:

1. Clone the repository into your Codex skills directory and keep the folder name `skillscout`.
2. Ask Codex a tool-selection question, such as:

```text
Use $skillscout to recommend the smallest useful Codex tool stack for my project:
I need to create a quarterly sales deck from spreadsheet data.
```

3. Review the recommendation before installing or enabling extra plugins.

For a local checkout, the typical destination is `$CODEX_HOME/skills/skillscout` (or the skills directory configured by your Codex environment). Restart or refresh Codex after installing a new skill so it can discover the folder.

## Repository Layout

| Path | Purpose |
| --- | --- |
| `SKILL.md` | Trigger metadata and the concise decision workflow Codex follows. |
| `agents/openai.yaml` | Display metadata and a starter prompt for the Codex UI. |
| `data/` | Versioned categories and task-to-tool recommendation rules. |
| `examples/` | Representative recommendations for common project types. |
| `prompts/` | Reusable system and response templates. |
| `docs/` | Maintenance and contribution guidance. |
| `scripts/validate-data.mjs` | Validates JSON structure and category references. |

## Example Output

```markdown
# SkillScout Recommendation

## Tool Need Assessment

Strongly recommended. This task needs slide generation and spreadsheet handling. Figma, image generation, and deployment tools are probably unnecessary.

## Recommended Setup

| Tool / Skill / Plugin | Priority | Why it helps | Required or optional | Chinese explanation |
| --- | --- | --- | --- | --- |
| Spreadsheets | Strongly recommended | Cleans and summarizes the source data | Optional but useful | 用来整理和分析表格数据 |
| Presentations | Strongly recommended | Builds the final slide deck | Optional but useful | 用来生成可编辑的演示文稿 |
```

## Validate Before Contributing

Run the following command from the repository root:

```text
node scripts/validate-data.mjs
```

The validator checks both JSON files, requires unique category and project-type names, and confirms that every rule references a defined category.

## Keeping Up With Codex Updates

SkillScout should evolve as Codex plugins, apps, MCP servers, and built-in skills change. The data files include `versioning` and `update_policy` fields to make this explicit.

Recommended maintenance rhythm:

- Review available Codex plugins and skills after major Codex plugin updates.
- Update `data/plugin-categories.json` when new categories or capabilities appear.
- Update `data/recommendation-rules.json` when task-to-tool guidance changes.
- Refresh examples when a better default workflow becomes available.
- Note meaningful changes in release notes or pull requests.

See `docs/update-policy.md` for the maintenance workflow.

## Roadmap

- Add a lightweight rule-checking CLI.
- Add real plugin marketplace import adapters when stable metadata is available.
- Add multilingual output templates beyond English and Chinese.
- Add a scheduled review checklist for Codex plugin update cycles.

## Contributing

Contributions are welcome. Please read `docs/contribution-guide.md` before opening a pull request.

Good contributions include:

- New project-type rules.
- Clearer examples for non-programmers.
- Updated plugin category metadata.
- Better guidance for avoiding tool overuse.
- Changes that keep SkillScout aligned with current Codex plugin capabilities.

## License

MIT. See `LICENSE`.
