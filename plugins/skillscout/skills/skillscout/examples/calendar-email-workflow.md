# Calendar and Email Workflow

**User:** Every morning, summarize my email and arrange my schedule.

## SkillScout Recommendation

### 1. My Read of Your Task

You want a recurring workflow that reads a real mailbox, checks or changes a real calendar, and runs on a schedule.

**Confidence:** High Confidence

### 2. Tooling Decision

**Plugins Required for Best Result.** Native Codex cannot access your mailbox, calendar, or future schedule by itself. Gmail, Calendar, and Automation are the minimum external capabilities, but this workflow needs careful permissions and confirmation rules because it touches private data and can make recurring changes.

### 3. Why This Decision

Real-time account access is essential, so the capability gain is decisive. The risk and complexity are also high: a mistaken rule could expose mail or repeatedly change events, so read-only defaults and user confirmation are necessary.

### 4. Recommended Minimal Setup

| Tool / Plugin / Skill | Priority | Why it helps | Use it when | Skip it when | Plain-language explanation | 中文解释 |
| --- | --- | --- | --- | --- | --- | --- |
| Gmail / Email | Required | Reads the real inbox | You want current email summaries | You only want to polish pasted text | Accesses actual mailbox context | 用于读取真实邮箱内容 |
| Calendar | Required | Checks and changes real events | You want schedule actions | You only need a written plan | Works with actual calendar events | 用于查询或修改真实日程 |
| Automation | Required | Runs the workflow every morning | The task must recur | It is a one-time summary | Schedules repeatable execution | 用于每天自动执行 |

### 5. Tools You Should Not Use for This Task

Do not use GitHub, Figma, PDF, or Slides. They do not contribute to email and calendar coordination.

### 6. Permission and Safety

- **Permission:** Gmail may read mail; Calendar may create, change, or delete events; Automation may repeat these actions.
- **What can go wrong:** Private content can be exposed, emails can be misread, events can be changed incorrectly, and a bad rule can repeat daily.
- **Safe use:** Start with read-only daily summaries. Require confirmation before sending mail or changing events. Define the trigger time, recipients, time zone, stop condition, and notification behavior.
- **Confirmation required:** Yes, for any email send or calendar write.

### 7. Better Workflow

1. Define which mailbox labels and calendar accounts are in scope.
2. Start with a read-only morning digest.
3. Propose calendar changes instead of applying them automatically.
4. Confirm each write policy and time zone.
5. Enable a daily automation with a clear stop condition.
6. Review the first few runs and adjust.

### 8. Copy-ready Codex Prompt

```text
Set up a daily morning workflow that summarizes only the email labels I specify and reviews my calendar. Start read-only: propose schedule changes but do not send messages or modify events without my confirmation. Ask me for account scope, time zone, trigger time, and stop condition first.
```

### 9. Ask These First if Unclear

Which mailbox labels and calendar accounts are in scope, what time zone and trigger time should be used, and may the workflow ever modify events automatically?

