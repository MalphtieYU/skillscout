# PDF Batch Task

**User:** Add a watermark to 50 PDF files and export the final versions.

## SkillScout Recommendation

### 1. My Read of Your Task

You need a repeatable, format-preserving workflow for many real PDF files.

**Confidence:** High Confidence

### 2. Tooling Decision

**Plugins Strongly Recommended.** PDF and file-processing capabilities materially improve reliability and consistency for a 50-file batch. Native Codex can design the workflow, but it cannot safely process the real files without file access.

### 3. Why This Decision

The quality and efficiency gain from consistent batch handling is substantial. File access adds overwrite risk, so the process should be tested on one copied file and write to a separate output folder.

### 4. Recommended Minimal Setup

| Tool / Plugin / Skill | Priority | Why it helps | Use it when | Skip it when | Plain-language explanation | 中文解释 |
| --- | --- | --- | --- | --- | --- | --- |
| PDF / File Processing | Strongly recommended | Applies and exports watermarks consistently | Real PDFs must be changed | You only need a watermark design | Handles actual files and preserves output format | 用于批量处理真实 PDF 文件 |
| Codex Native Coding | Required | Defines or adapts the batch workflow | Automation or scripting is needed | A tool has a complete built-in batch action | Makes the process repeatable | 用于生成和检查批处理流程 |

### 5. Tools You Should Not Use for This Task

Do not use Figma, GitHub, Slides, Email, or Calendar. They do not help with the batch conversion.

### 6. Permission and Safety

- **Permission:** File access can read and modify local PDFs.
- **What can go wrong:** Files can be overwritten, placed in the wrong folder, or processed with the wrong watermark.
- **Safe use:** Confirm input and output folders, test on one copy first, and write final files to a new output folder.
- **Confirmation required:** Yes, before batch processing.

### 7. Better Workflow

1. Confirm watermark text, position, opacity, and input/output paths.
2. Test the workflow on one copied PDF.
3. Inspect the result.
4. Process the remaining files into a new folder.
5. Spot-check several outputs.

### 8. Copy-ready Codex Prompt

```text
Create a safe batch workflow to watermark 50 local PDF files. Ask for the watermark text, placement, opacity, input folder, and output folder. Test one copied file first, then ask before processing the full batch.
```

### 9. Ask These First if Unclear

What watermark text, placement, opacity, and output folder should be used?

