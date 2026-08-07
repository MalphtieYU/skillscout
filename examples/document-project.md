# Document Project

## User

I need to watermark 50 PDF files and export final versions.

## SkillScout Recommendation

## 1. Project Understanding

You need a batch workflow that applies a watermark to many PDF files and exports completed versions.

## 2. Does this project need plugins or skills?

Strongly recommended.

This is a file-processing task. A PDF or document-processing skill is much more reliable than asking for manual edits one by one.

## 3. Recommended Tool Stack

| Tool / Skill / Plugin | Priority | Why it helps | Required or optional | Chinese explanation |
| --- | --- | --- | --- | --- |
| PDF / Files & Documents | Strongly recommended | Applies watermarks and exports PDFs in batch | Optional but important | 用来批量处理 PDF 文件 |
| Local scripting | Strongly recommended | Automates 50 files consistently | Optional but important | 用脚本批量处理，避免手工重复 |
| Native Codex coding | Must-use | Writes or adapts the batch workflow | Required | 用来生成和检查处理脚本 |

## 4. Tools You Probably Do Not Need

Figma, GitHub, slides, spreadsheets, image generation, email, and calendar tools are not needed for the core task.

## 5. Best Workflow

1. Confirm watermark text, placement, opacity, and output folder.
2. Generate a batch script.
3. Test it on one PDF.
4. Process all 50 PDFs.
5. Spot-check several outputs.

## 6. Copy-ready Codex Prompt

```text
Create a batch PDF watermark workflow for 50 local PDF files. Ask me for watermark text, placement, opacity, input folder, and output folder. Test on one file before processing all files.
```

## 7. Questions Before Starting

1. What should the watermark say?
2. Where should it appear?
3. Should it be visible, subtle, or diagonal across the page?
4. Where are the input PDFs?
5. Where should final PDFs be saved?
