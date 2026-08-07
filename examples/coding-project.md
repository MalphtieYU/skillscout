# Coding Project

## User

I need Codex to refactor my existing GitHub repo and open a pull request.

## SkillScout Recommendation

## 1. Project Understanding

You want Codex to modify an existing repository and submit the result as a pull request.

## 2. Does this project need plugins or skills?

Required for best result if Codex must directly open the pull request.

Native Codex can edit local files, but GitHub capability is needed to create or manage a PR through GitHub.

## 3. Recommended Tool Stack

| Tool / Skill / Plugin | Priority | Why it helps | Required or optional | Chinese explanation |
| --- | --- | --- | --- | --- |
| GitHub | Must-use | Opens and manages the pull request | Required for PR creation | 如果要直接开 PR，GitHub 能力基本必须 |
| Native Codex coding | Must-use | Performs the refactor | Required | 用来读代码、改代码、跑测试 |
| Testing | Strongly recommended | Reduces regression risk | Optional but important | 用来确认重构没有破坏功能 |
| Security | Optional | Useful for auth, secrets, or dependency-sensitive changes | Optional | 涉及安全或依赖时再使用 |

## 4. Tools You Probably Do Not Need

Figma, slides, PDF, image generation, and calendar tools are probably unnecessary.

## 5. Best Workflow

1. Inspect the repo and test commands.
2. Create a focused branch.
3. Make the refactor.
4. Run tests and lint checks.
5. Use GitHub to open a pull request.

## 6. Copy-ready Codex Prompt

```text
Refactor this repository with a small, focused change. Inspect the existing patterns first, run relevant tests, then create a branch and open a GitHub pull request with a concise summary.
```

## 7. Questions Before Starting

1. What exact behavior should be refactored?
2. Which tests should be run?
3. Should the PR be draft or ready for review?
