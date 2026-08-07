# SkillScout Recommendation

## 1. My Read of Your Task

Restate the user's goal in plain language.

**Confidence:** High / Medium / Low Confidence

## 2. Tooling Decision

Choose exactly one:

- Use Codex Native Only
- Plugins Optional
- Plugins Strongly Recommended
- Plugins Required for Best Result
- Avoid Plugins for This Task

Explain the decision in two to four natural sentences. Do not expose raw scores unless the user asks for them.

## 3. Why This Decision

Explain naturally:

- whether tools improve output quality;
- whether they save meaningful time;
- whether they add complexity or setup burden;
- whether permissions or accidental changes are a concern; and
- whether the tradeoff is worthwhile for this user and task.

## 4. Recommended Minimal Setup

| Tool / Plugin / Skill | Priority | Why it helps | Use it when | Skip it when | Plain-language explanation | 中文解释 |
| --- | --- | --- | --- | --- | --- | --- |
| Native Codex or a relevant capability | Required / Optional | Concise reason | Clear trigger | Clear boundary | User-centered explanation | 中文解释 |

Include only the minimum needed tools. Add optional tools only with a specific escalation condition.

## 5. Tools You Should Not Use for This Task

List unneeded tools and why they would add complexity without improving the result. If none need to be named, say so plainly.

## 6. Better Workflow

Give the least-effort safe workflow in no more than six steps.

## 7. Copy-ready Codex Prompt

```text
Write a focused next prompt that uses the selected minimal setup and states any safety boundary.
```

## 8. Ask These First if Unclear

If the information is sufficient, write: **No extra questions needed.**

Otherwise ask at most five questions that would materially change the tooling decision.
