# Video Prompt Task

**User:** Help me write an AI video-generation prompt.

## SkillScout Recommendation

### 1. My Read of Your Task

You need prompt text for a future video-generation run, not a rendered video or edited footage.

**Confidence:** High Confidence

### 2. Tooling Decision

**Use Codex Native Only.** Native Codex can write a clear scene prompt, shot description, pacing, and negative constraints. Video or image tooling only becomes useful if you ask Codex to generate, edit, caption, or batch-process actual media.

### 3. Why This Decision

The task is entirely textual, so no external capability improves the current output. Media tools would add setup and execution cost before the user has asked for any media action.

### 4. Recommended Minimal Setup

| Tool / Plugin / Skill | Priority | Why it helps | Use it when | Skip it when | Plain-language explanation | 中文解释 |
| --- | --- | --- | --- | --- | --- | --- |
| Codex Native Only | Required | Writes a structured video prompt | You need text instructions | You need rendered or edited media | Creates the generation brief directly | 只写视频提示词时，原生能力足够 |

### 5. Tools You Should Not Use for This Task

Do not use Video, Image, GitHub, or Figma tooling by default. They add workflow complexity before any media work is requested.

### 6. Better Workflow

1. State subject, duration, camera movement, mood, and aspect ratio.
2. Ask for one concise prompt and one production-ready variant.
3. Add video tooling only when you want to render or edit media.

### 7. Copy-ready Codex Prompt

```text
Write a production-ready AI video-generation prompt for a 10-second cinematic scene. Include subject, setting, camera movement, lighting, pacing, aspect ratio, and negative constraints. Do not generate or edit media.
```

### 8. Ask These First if Unclear

No extra questions needed.

