# SkillScout

> **Less tooling, better outcome.**

[简体中文](README.zh-CN.md) · English

SkillScout is a decision layer for starting Codex projects. Mention it once, describe your task normally, and it picks one best starting path—Codex Native Only, one primary plugin, or the smallest necessary pair—then continues the work.

SkillScout is **not** a plugin catalog. Its job is to reduce choices, not create more choices.

## How to use SkillScout

At the start of a Codex project, mention SkillScout and describe your task:

```text
@SkillScout I want to refactor my GitHub repo and open a pull request.
```

SkillScout will:

1. Decide whether the task needs a plugin.
2. Pick one best plugin or choose Codex Native Only.
3. Explain the reason briefly.
4. Show an installation route only when it is verified.
5. Continue the project without making you compare many tools.

For example:

```text
推荐使用：GitHub
原因：任务需要读取真实仓库、提交修改并创建 PR。
执行方式：我会按 GitHub + Codex 原生能力继续完成项目。
```

Then SkillScout starts the repository work. It does not stop to ask you to choose from a plugin list.

## Why not always use plugins?

Plugins can unlock real capabilities, but they can also add setup time, permissions, latency, context noise, and failure points. A GitHub integration is valuable when Codex must change a real repository; it is needless when you only want a small code fix. SkillScout makes that boundary explicit.

## What it decides

| Situation | Default path |
| --- | --- |
| Writing, translation, prompt writing, pasted text, small code fixes | Codex Native Only |
| Real GitHub repo, issue, commit, PR, review, or CI | GitHub |
| Real Figma file, design system, or design-to-code | Figma |
| Real Drive, Gmail, Calendar, PDF, workbook, or private system | The matching primary capability |
| Figma source plus GitHub delivery | Figma + GitHub |
| Vague project request | Start natively, clarify only what changes the first step |

## Core behavior

- Starts with a three-to-six-line tooling decision.
- Picks one primary tool; adds one secondary tool only when a required stage needs it.
- Keeps optional enhancements out of the startup response.
- Continues with native work if an integration is unavailable.
- Never invents installation links, deep links, permissions, or installation status.
- Adds concise safety guidance for private data and write actions.

## International use

The primary README is English for broad accessibility and [the Chinese README](README.zh-CN.md) provides a full Simplified Chinese guide. SkillScout can explain tool choices in the user's language and uses plain-language terminology instead of copying marketplace descriptions. See the [localization guide](docs/localization-guide.md) to add another language.

## Install

Copy or clone this folder as `skillscout` into your Codex skills directory (commonly `$CODEX_HOME/skills/skillscout`), then refresh Codex:

```text
Use $skillscout to choose the best starting path for my project and continue the work.
```

### Install as a Codex plugin from GitHub

This repository also publishes a public Codex marketplace source. With a current Codex CLI, add the marketplace and install the plugin:

```text
codex plugin marketplace add MalphtieYU/skillscout
codex plugin add skillscout@skillscout-marketplace
```

Restart Codex or start a new thread after installation. This GitHub marketplace is available now; public listing in the universal ChatGPT/Codex Plugins Directory requires a separate OpenAI review.

## Project layout

| Path | Purpose |
| --- | --- |
| `SKILL.md` | Runtime triage and direct-continuation behavior. |
| `data/` | Decision, risk, install, and future registry models. |
| `prompts/` | Startup, install-card, and final-summary templates. |
| `docs/` | Continuation, safety, testing, localization, and contribution guidance. |
| `examples/` | Detailed decision examples. |
| `examples/inline-startup-decisions/` | Exact short startup-response examples. |

## Verify

Run from the repository root:

```text
node scripts/validate-data.mjs
node scripts/validate-plugin-package.mjs
```

The script checks JSON structure, rule coverage, example inventory, and the startup templates. Review [test cases](docs/test-cases.md) for behavior-level scenarios.

## Future installation support

`data/plugin-install-registry.schema.json` defines a future-compatible installation registry. It can represent verified marketplace URLs, app permissions, supported Codex surfaces, and admin requirements. It deliberately does **not** imply that one-click installation or `codex://` deep links exist today.

## Public-plugin status

SkillScout is packaged as a skills-only plugin and exposed through this public GitHub marketplace. A universal Plugins Directory submission is not yet complete: OpenAI requires a verified publisher identity, Apps Management write access, public support/privacy/terms pages, review-ready starter prompts, and at least five positive plus three negative test cases before review and publication.

## Roadmap

- Verified live plugin-directory indexing.
- Community ratings and team policy profiles.
- Additional maintained translations.
- Local plugin registry data.
- Security scoring refinements.
- Official Codex plugin-directory integration when available.

## Contributing

Read [the contribution guide](docs/contribution-guide.md). Improve decisions, boundaries, safety, and clarity—not merely the number of available tools.

## License

MIT. See [LICENSE](LICENSE).
