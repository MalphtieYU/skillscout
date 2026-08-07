# Figma to React Task

**User:** Turn this Figma design into a responsive React page.

## SkillScout Recommendation

### 1. My Read of Your Task

You want an implementation that follows a real Figma design source.

**Confidence:** High Confidence

### 2. Tooling Decision

**Plugins Strongly Recommended.** Figma access materially improves layout, typography, component, and asset accuracy. Native Codex is still the implementation tool; GitHub is optional unless the work must be committed to a repository.

### 3. Why This Decision

The design file is the source of truth, so inspecting it saves rework and improves fidelity. Figma does add an access dependency, but that cost is justified when matching an existing design.

### 4. Recommended Minimal Setup

| Tool / Plugin / Skill | Priority | Why it helps | Use it when | Skip it when | Plain-language explanation | 中文解释 |
| --- | --- | --- | --- | --- | --- | --- |
| Figma | Strongly recommended | Reads design context and assets | A real Figma file is the source | The UI can be designed directly | Gives the implementation an accurate visual reference | 有真实设计稿时可准确读取布局和素材 |
| Codex Native Coding | Required | Builds the React page | You need production code | You only need design feedback | Implements the responsive page | 用于开发 React 页面 |
| GitHub | Optional | Saves the result to a repo | A commit or PR is required | The work is local | Add only for real repository collaboration | 需要提交或协作时再用 |

### 5. Tools You Should Not Use for This Task

Do not use PDF, Email, Calendar, or MCP by default. None is needed to implement a Figma-based page.

### 6. Better Workflow

1. Share the target Figma node or frame.
2. Inspect layout, tokens, components, and assets.
3. Implement with existing React project patterns.
4. Verify desktop and mobile behavior.
5. Add GitHub only when ready to commit or review.

### 7. Copy-ready Codex Prompt

```text
Use the provided Figma node as the visual source of truth and implement a responsive React page. Reuse the existing project patterns, inspect assets and spacing first, and verify desktop and mobile layout. Do not use GitHub unless I ask for a commit or PR.
```

### 8. Ask These First if Unclear

Please provide the Figma file or node URL and name the React framework in use.

