import { cpSync, existsSync, mkdirSync, readFileSync, rmSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const pluginSkill = resolve(root, "plugins", "skillscout", "skills", "skillscout");
const sources = ["agents", "data", "docs", "examples", "prompts"];

if (existsSync(pluginSkill)) rmSync(pluginSkill, { recursive: true, force: true });
mkdirSync(pluginSkill, { recursive: true });
cpSync(resolve(root, "SKILL.md"), resolve(pluginSkill, "SKILL.md"));
for (const source of sources) cpSync(resolve(root, source), resolve(pluginSkill, source), { recursive: true });

const manifest = JSON.parse(readFileSync(resolve(root, "plugins", "skillscout", ".codex-plugin", "plugin.json"), "utf8"));
console.log(`Packaged ${manifest.name}@${manifest.version} into ${pluginSkill}`);
