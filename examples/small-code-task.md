# Small Code Task

**User:** Help me fix this short JavaScript function.

## SkillScout Recommendation

### 1. My Read of Your Task

You want to repair a small code snippet supplied in the conversation.

**Confidence:** High Confidence

### 2. Tooling Decision

**Use Codex Native Only.** Native coding is enough to read, explain, and fix a short snippet. GitHub is only worthwhile if Codex must change a real repository, create a commit, or open a PR.

### 3. Why This Decision

The likely quality and efficiency gain comes from direct code reasoning, not an account connection. GitHub would introduce repository scope and write risk without helping an isolated snippet.

### 4. Recommended Minimal Setup

| Tool / Plugin / Skill | Priority | Why it helps | Use it when | Skip it when | Plain-language explanation | 中文解释 |
| --- | --- | --- | --- | --- | --- | --- |
| Codex Native Coding | Required | Inspects and repairs the snippet | Code is pasted or local | A real repo workflow is needed | Fix the code directly, then explain the change | 直接分析并修复代码即可 |

### 5. Tools You Should Not Use for This Task

Do not use GitHub, Figma, Slides, or Deployment. They add account or workflow overhead without helping a small isolated fix.

### 6. Better Workflow

1. Paste the function and the error or expected result.
2. Ask Codex for a minimal fix and a short explanation.
3. Add GitHub only if the same change must be applied to a real repo.

### 7. Copy-ready Codex Prompt

```text
Fix this JavaScript function with the smallest possible change. Explain the bug, show the corrected code, and give one quick test case. Do not use GitHub unless I ask you to change a repository.
```

### 8. Ask These First if Unclear

What input, output, or error shows the current behavior is wrong?

