# GitHub Pull Request Task

**User:** Modify my GitHub repository and open a pull request.

## SkillScout Recommendation

### 1. My Read of Your Task

You need Codex to inspect and change a real repository, then create a reviewable PR.

**Confidence:** High Confidence

### 2. Tooling Decision

**Plugins Required for Best Result.** GitHub access is needed to work with the real repository and PR workflow; native Codex alone cannot read remote state or open a PR. Testing is strongly recommended to reduce regression risk.

### 3. Why This Decision

The external repository is essential to the result, and GitHub materially improves both access and workflow efficiency. The write risk is real, so use a focused branch and ask before remote actions.

### 4. Recommended Minimal Setup

| Tool / Plugin / Skill | Priority | Why it helps | Use it when | Skip it when | Plain-language explanation | 中文解释 |
| --- | --- | --- | --- | --- | --- | --- |
| GitHub | Required | Accesses the repo and PR workflow | You need real repo changes, commits, or PRs | You only want code advice | Lets Codex work with the actual repository workflow | 需要实际读取仓库、提交或开 PR 时使用 |
| Codex Native Coding | Required | Implements the focused change | A change is defined | There is no code change | Reads patterns and edits the code | 用于理解和修改代码 |
| Testing | Strongly recommended | Verifies the change | Runnable checks exist | Docs-only change with no relevant checks | Catches regressions before review | 在提交前降低回归风险 |

### 5. Tools You Should Not Use for This Task

Do not add Figma, Slides, Email, or Calendar unless the change separately requires them.

### 6. Permission and Safety

- **Permission:** GitHub may read repositories and write branches, commits, PRs, or issues.
- **What can go wrong:** A change can reach the wrong branch or affect CI.
- **Safe use:** Inspect the repo and diff, use a focused branch, run checks, and confirm before pushing or opening the PR.
- **Confirmation required:** Yes, before remote writes.

### 7. Better Workflow

1. Inspect repository instructions and the target issue.
2. Create a focused branch.
3. Implement the smallest relevant change.
4. Run the most relevant checks.
5. Review the diff with the user.
6. Push and open a PR after confirmation.

### 8. Copy-ready Codex Prompt

```text
Inspect this GitHub repository and implement the requested focused change. Read project instructions first, use a new branch, run relevant checks, show me the diff, and ask before pushing or opening a pull request.
```

### 9. Ask These First if Unclear

What repository, branch base, and expected behavior should the PR target?

