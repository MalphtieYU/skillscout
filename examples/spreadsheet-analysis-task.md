# Spreadsheet Analysis Task

**User:** Analyze my uploaded sales Excel file.

## SkillScout Recommendation

### 1. My Read of Your Task

You need analysis of a real workbook, likely including calculations, findings, and possibly charts.

**Confidence:** Medium Confidence

### 2. Tooling Decision

**Plugins Strongly Recommended.** Spreadsheet and data-analysis support is useful for reading the actual workbook, preserving structure, and producing reliable calculations or charts. If the data were a small pasted table, native Codex would be enough.

### 3. Why This Decision

The real file creates a capability requirement and analysis tooling reduces manual calculation risk. The only meaningful cost is the added file-handling workflow, which is justified for an uploaded workbook.

### 4. Recommended Minimal Setup

| Tool / Plugin / Skill | Priority | Why it helps | Use it when | Skip it when | Plain-language explanation | 中文解释 |
| --- | --- | --- | --- | --- | --- | --- |
| Spreadsheet / Data Analysis | Strongly recommended | Reads workbook data and supports analysis | You have a real Excel file or need charts | You only have a small pasted table | Works with the actual workbook structure | 用于读取和分析真实 Excel 文件 |
| Report / Visualization | Optional | Packages findings for sharing | You need charts or an executive report | You only need a short answer | Add only for a durable presentation of results | 需要图表或报告时再增加 |

### 5. Tools You Should Not Use for This Task

Do not use GitHub, Figma, Email, or Calendar. They do not help analyze an uploaded sales workbook.

### 6. Better Workflow

1. Inspect sheets, headers, date range, and data quality.
2. Confirm the decision or questions the analysis should answer.
3. Calculate key metrics and drivers.
4. Create charts only if they clarify the result.
5. Summarize findings and caveats.

### 7. Copy-ready Codex Prompt

```text
Analyze my uploaded sales Excel workbook. First inspect sheet structure and data quality, then summarize the key trends, drivers, and caveats. Create charts only when they make a decision easier. Do not use unrelated connected tools.
```

### 8. Ask These First if Unclear

Which business question should the sales analysis answer, and what date range matters?

