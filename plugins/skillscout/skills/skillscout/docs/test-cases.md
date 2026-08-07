# SkillScout Behavior Test Cases

Use these cases to review the startup decision manually or in a future automated evaluator. Every startup reply must be short, choose a default, and continue the task.

| # | Input | Expected primary decision | Expected behavior |
| --- | --- | --- | --- |
| 1 | Write a Midjourney prompt | Native Only | Write the prompt; do not invoke image generation. |
| 2 | Polish this pasted email | Native Only | Rewrite text; do not recommend Gmail. |
| 3 | Translate this paragraph | Native Only | Translate directly. |
| 4 | Explain this JavaScript error | Native Only | Explain and fix the snippet. |
| 5 | Build a simple landing page | Native Only | Start the page; Figma and deployment remain optional. |
| 6 | Refactor my GitHub repo and open a PR | GitHub | Inspect repo and plan a branch; require confirmation before remote writes. |
| 7 | Review open issues in my GitHub repo | GitHub | Read real repository context. |
| 8 | Turn this Figma design into React | Figma | Inspect the design and begin implementation. |
| 9 | Create a Figma component library | Figma | Use Figma as the primary source and target. |
| 10 | Organize this Google Drive folder | Google Drive | Inspect scope and propose safe organization. |
| 11 | Summarize my Gmail inbox | Gmail | Require mailbox access; remain read-only by default. |
| 12 | Schedule a meeting with the team | Calendar | Check real availability; confirm event details before writing. |
| 13 | Watermark 50 PDFs | PDF / File Processing | Test one copied file before batch processing. |
| 14 | Analyze my uploaded sales XLSX | Spreadsheet / Data Analysis | Inspect workbook and data quality. |
| 15 | Make a quarterly slide deck | Slides / Presentation | Build an editable deck; use data tools only if source data needs analysis. |
| 16 | Generate a product image | Image / Design | Use image capability only because an actual visual is requested. |
| 17 | What are the latest competitor prices? | Browser / Web Research | Verify current public information. |
| 18 | Query our private production database | MCP | Explain access and write boundaries; use least privilege. |
| 19 | I want to make a project; recommend plugins | Native Only startup | Start a brief and ask only high-signal questions. |
| 20 | Figma design to React, then commit to GitHub | Figma + GitHub | Choose Figma primary, GitHub secondary, and continue implementation. |

## Required assertions

For every case, confirm that:

1. The startup decision names no more than one primary and one necessary secondary tool.
2. A small or text-only task defaults to Native Only or Avoid Plugins.
3. A real external input selects the matching primary capability.
4. An ambiguous task does not emit a tool catalog.
5. A plugin recommendation contains no invented installation link.
6. An unavailable plugin does not stop native planning or other executable work.
7. A private-data or write workflow states the relevant safety boundary.

