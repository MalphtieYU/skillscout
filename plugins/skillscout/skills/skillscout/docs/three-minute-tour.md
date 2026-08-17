# SkillScout in Three Minutes

SkillScout is for the moment before a project starts: a request may mention files, tools, data, external systems, or a desired deliverable, but the user should not need to map the whole tool stack first.

## 1. Give it a real task

```text
Use $skillscout to turn this Figma screen into React and prepare the GitHub delivery path.
```

## 2. Get one default path

SkillScout starts with **Figma** because the design file is the authoritative input. It adds **GitHub** only because the requested delivery includes repository work. It does not add unrelated tools merely because they are available.

## 3. Start immediately

The first action is to read the Figma design context, then implement the screen. The response stays short enough to act on and preserves the relevant permission boundary.

## What the same principle prevents

For “rewrite this email,” SkillScout stays native. For “compare current pricing,” it uses verified public sources. For “analyze our internal data,” it requires the least-privilege source connection before making claims.

Run `node scripts/run-decision-demo.mjs` to inspect five deterministic examples locally. The examples demonstrate the intended decision model; they do not represent model telemetry or a live plugin catalog.
