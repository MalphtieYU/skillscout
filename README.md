# SkillScout

> Start real Codex work with the smallest useful capability stack.

[![License: MIT](https://img.shields.io/badge/License-MIT-2563EB.svg)](LICENSE)
[![Codex plugin](https://img.shields.io/badge/Codex-plugin-06B6D4.svg)](plugins/skillscout/.codex-plugin/plugin.json)

SkillScout is a **project-start and capability-boundary skill for Codex**. Give it a real task and it decides whether to use built-in Codex, an installed skill, a plugin, an app, MCP, or no extra tool at all—then it starts the work.

It is not a plugin catalog and it never makes users compare a long list before they can make progress.

## What changed in 1.3

SkillScout now treats **when it activates** as part of product quality. Its regression set covers direct requests, indirect outcome requests, and negative prompts, so real project-start questions are recognized while ordinary writing, translation, pasted-code help, and one-off questions stay native. This follows the current OpenAI guidance to optimize metadata for both relevant recall and negative-prompt precision.

## What users get

Within the first response, SkillScout returns:

1. **The smallest viable path** — native Codex, one primary capability, or one necessary pair.
2. **Why that path fits** — based on the actual input, output, and risk.
3. **The first action** — it continues the task instead of ending with a recommendation.
4. **Only the access boundary that matters** — for example, a repository permission or a required file.

Use it when a task mixes skills, plugins, apps, MCP, files, repositories, or current web information and you want to begin with confidence.

Do **not** use it for a small writing task, pasted snippet, simple translation, or a one-off question: Codex can simply do those directly.

## Quick start

Install the public GitHub marketplace source with a current Codex CLI:

```bash
codex plugin marketplace add MalphtieYU/skillscout
codex plugin add skillscout@skillscout-marketplace
```

Start a new Codex task, then use a real request:

```text
Use $skillscout to start a Figma-to-React project, then prepare it for a GitHub pull request.
```

```text
Use $skillscout to decide the minimum safe path for analyzing this sales workbook and create the report.
```

```text
Use $skillscout to start this ambiguous product idea; choose only the capabilities needed for the first useful milestone.
```

To refresh the GitHub marketplace source after an update:

```bash
codex plugin marketplace upgrade skillscout-marketplace
```

## How it makes the decision

SkillScout uses this order:

1. Prefer built-in Codex for self-contained work.
2. Identify the real input and output: repository, Figma file, Drive document, inbox, calendar, PDF, workbook, or external system.
3. Add one primary capability only when it unlocks that real work.
4. Add one secondary capability only when a required later stage cannot proceed without it.
5. Keep optional tools out of the startup response and continue the job.

| Task reality | Default first path |
| --- | --- |
| Writing, translation, prompt work, pasted text, small code fix | Native Codex |
| GitHub repository, issue, PR, review, CI | GitHub capability |
| Figma file or design system | Figma capability |
| Real cloud file, mailbox, calendar, PDF, workbook | Matching file or app capability |
| Current public facts, news, prices, laws, releases | Verified web research |
| Private database, internal API, custom system | MCP with least-privilege access |

## Freshness and safety

SkillScout treats its data as a decision model, **not** a frozen plugin directory. For a current, installed, newly released, or availability-sensitive claim, it checks the current session first and then official Codex sources when available. If the fact cannot be verified, it recommends the capability category rather than inventing an install link or listing status.

For private data and external writes, it names the relevant access or confirmation boundary and still completes all safe preparation work.

See the [live capability policy](docs/live-catalog-policy.md) and [decision model](docs/how-it-works.md).

The activation regression set is versioned in [data/activation-golden-prompts.json](data/activation-golden-prompts.json) and explained in the [behavior test cases](docs/test-cases.md).

## Distribution status

- **Available now:** public GitHub marketplace source and manual skill installation.
- **Universal ChatGPT/Codex Plugins Directory:** a separate OpenAI review flow. This project is packaged for a skills-only submission, but it must not claim directory availability until the publisher completes review and publication.

## Contributing and security

Contributions should improve decision quality, safety, currentness, or concrete examples—not merely add more tools. Read [CONTRIBUTING.md](CONTRIBUTING.md), open a [GitHub issue](https://github.com/MalphtieYU/skillscout/issues), and report security concerns via [SECURITY.md](SECURITY.md).

## Verification

```bash
node scripts/validate-data.mjs
node scripts/package-plugin.mjs
node scripts/validate-plugin-package.mjs
```

## Language support

The primary README is English for broad discoverability. Read the complete [Simplified Chinese guide](README.zh-CN.md), and see the [localization guide](docs/localization-guide.md) for additional languages.

## License

[MIT](LICENSE)
