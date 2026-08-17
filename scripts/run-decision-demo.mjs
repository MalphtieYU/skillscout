import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const demoPath = resolve(root, "data", "decision-demo-cases.json");
const demo = JSON.parse(readFileSync(demoPath, "utf8"));
const requestedId = process.argv.slice(2).find((argument) => !argument.startsWith("--"));
const asJson = process.argv.includes("--json");
const cases = requestedId ? demo.cases.filter((item) => item.id === requestedId) : demo.cases;

if (requestedId && cases.length === 0) {
  console.error(`Unknown demo case: ${requestedId}`);
  console.error(`Available cases: ${demo.cases.map((item) => item.id).join(", ")}`);
  process.exitCode = 1;
} else if (asJson) {
  console.log(JSON.stringify({ purpose: demo.purpose, cases }, null, 2));
} else {
  console.log("SkillScout decision showcase");
  console.log("This is a deterministic example set, not live routing or telemetry.\n");
  for (const item of cases) {
    console.log(`Request: ${item.request}`);
    console.log(`Path: ${item.primary_path}${item.secondary_path ? ` + ${item.secondary_path}` : ""}`);
    console.log(`First action: ${item.first_action}`);
    console.log(`Why: ${item.reason}\n`);
  }
}
