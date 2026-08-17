# SkillScout

> **Stop tool overload. Pick the smallest useful Codex path, then start the work.**

[![License: MIT](https://img.shields.io/badge/License-MIT-2563EB.svg)](LICENSE)
[![Codex plugin](https://img.shields.io/badge/Codex-plugin-06B6D4.svg)](plugins/skillscout/.codex-plugin/plugin.json)
[![Version](https://img.shields.io/badge/version-1.4.0-0EA5E9.svg)](plugins/skillscout/.codex-plugin/plugin.json)

<img src="assets/skillscout-path-hero.png" alt="One clear path through a complex tool landscape" width="100%" />

SkillScout is an open-source, native-first project-start skill for Codex. Give it a real task and it decides whether native Codex is enough or whether one external capability is genuinely required. Then it takes the first useful action.

It is **not** another plugin directory. It is the decision layer that keeps a project from starting with five unnecessary tools.

## See the difference

| Real request | SkillScout starts with | Why |
| --- | --- | --- |
| “Rewrite this customer email.” | Native Codex | The work is self-contained; extra tools only add friction. |
| “Fix this issue and open a PR.” | GitHub | The repository and pull request are the actual work surface. |
| “Turn this Figma screen into React.” | Figma + GitHub when delivery needs it | Design context comes first; the repository is added only for the delivery step. |
| “Compare current pricing plans.” | Verified web research | The answer depends on changing public information. |
| “Analyze our internal usage table.” | Minimum-permission data connection | A private source is required, so access and safety matter. |

Read the [three-minute tour](docs/three-minute-tour.md) for complete inputs, decisions, and next actions.

## Start in three minutes

1. Add the public marketplace source and install the plugin:

   ```bash
   codex plugin marketplace add MalphtieYU/skillscout
   codex plugin add skillscout@skillscout-marketplace
   ```

2. Start a Codex task with a concrete request:

   ```text
   Use $skillscout to turn this Figma screen into React and prepare the GitHub delivery path.
   ```

3. SkillScout names the smallest viable path, states the first action, and continues the work. It does not stop at a tool recommendation.

Prefer a no-install preview? Run the deterministic showcase from this repository:

```bash
node scripts/run-decision-demo.mjs
```

## Why it earns a place in your workflow

- **Native first.** Writing, translation, pasted content, and small fixes stay in Codex unless a real external dependency exists.
- **One primary capability.** It selects a single default path, adding at most one necessary secondary capability.
- **Real boundaries.** A visible plugin listing does not prove installation, app access, or permission to the connected source.
- **Work begins immediately.** The recommendation includes the first concrete action instead of a long comparison table.
- **Regression-tested behavior.** Direct, indirect, and negative prompts are versioned so the skill does not activate just because a tool name appears.

## Built to be proven, not merely described

Run the repository checks before publishing a change:

```bash
node scripts/validate-data.mjs
node scripts/package-plugin.mjs
node scripts/validate-plugin-package.mjs
```

The decision showcase is intentionally transparent: it demonstrates five stable routing examples; it does **not** claim to be telemetry, a live marketplace, or a measure of model quality. See [how SkillScout works](docs/how-it-works.md) and the [activation test cases](docs/test-cases.md).

## Current availability and safety

SkillScout checks the current session before it names a current capability. The official discovery surface is the **Plugin Directory**; a listing, installation policy, required-app access, and source-system permission are separate checks. If any of those cannot be verified, SkillScout recommends the capability category rather than inventing availability or an install path.

- **Available now:** public GitHub marketplace source and manual skill installation.
- **Universal ChatGPT/Codex Plugin Directory:** requires a separate OpenAI review and publisher release. This repository does not claim directory availability before that happens.

## Help shape the next version

Open an issue with the task you expected SkillScout to handle, the path it chose, and the path you believe it should choose. The most valuable contributions are real workflow examples, counterexamples, and fixes that reduce tool sprawl.

If SkillScout saves you a round of tool selection, please star the repository—it helps other Codex users find it.

- Read the [Simplified Chinese guide](README.zh-CN.md)
- Review the [contribution guide](CONTRIBUTING.md)
- See the [live capability policy](docs/live-catalog-policy.md)
- Report security concerns through [SECURITY.md](SECURITY.md)

## License

[MIT](LICENSE)
