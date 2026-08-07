# Tiny Prompt Task

**User:** Help me write a Midjourney prompt for a rainy cyberpunk street.

## SkillScout Recommendation

### 1. My Read of Your Task

You want a strong image-generation prompt, not an image file.

**Confidence:** High Confidence

### 2. Tooling Decision

**Avoid Plugins for This Task.** Writing a prompt is a text task, so native Codex can do it immediately. An image tool only becomes useful if you want to generate or edit the image itself.

### 3. Why This Decision

An integration cannot improve the prompt text enough to offset its setup. There is no external file or account to access, so there is no reason to add permission or complexity risk.

### 4. Recommended Minimal Setup

| Tool / Plugin / Skill | Priority | Why it helps | Use it when | Skip it when | Plain-language explanation | 中文解释 |
| --- | --- | --- | --- | --- | --- | --- |
| Codex Native Only | Required | Writes and refines the prompt | You need prompt text | You need a rendered image | Produces prompt variations without setup | 直接生成和优化提示词即可 |

### 5. Tools You Should Not Use for This Task

Do not use Image, GitHub, Figma, or MCP. They do not improve a text-only prompt.

### 6. Better Workflow

1. State subject, mood, framing, and style.
2. Generate one concise prompt and two variants.
3. Use an image tool later only if you want images rendered.

### 7. Copy-ready Codex Prompt

```text
Write three Midjourney prompts for a rainy cyberpunk street at night. Make one cinematic, one minimal, and one highly detailed. Do not generate images.
```

### 8. Ask These First if Unclear

No extra questions needed.

