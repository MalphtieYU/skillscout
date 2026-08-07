import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function readJson(relativePath) {
  try {
    return JSON.parse(readFileSync(resolve(root, relativePath), "utf8"));
  } catch (error) {
    throw new Error(`Cannot read ${relativePath}: ${error.message}`);
  }
}

const pluginRoot = "plugins/skillscout";
const manifest = readJson(`${pluginRoot}/.codex-plugin/plugin.json`);
const marketplace = readJson(".agents/plugins/marketplace.json");
const requiredManifestFields = ["name", "version", "description", "author", "skills", "interface"];
assert(requiredManifestFields.every((field) => Object.hasOwn(manifest, field)), "plugin manifest is missing required fields");
assert(manifest.name === "skillscout", "plugin manifest name must be skillscout");
assert(/^\d+\.\d+\.\d+$/.test(manifest.version), "plugin manifest version must be strict semver");
assert(manifest.skills === "./skills/", "plugin manifest skills path must be ./skills/");
assert(typeof manifest.author.name === "string" && manifest.author.name.trim(), "plugin manifest needs author.name");

const interfaceFields = ["displayName", "shortDescription", "longDescription", "developerName", "category", "capabilities", "websiteURL", "privacyPolicyURL", "termsOfServiceURL", "defaultPrompt"];
assert(interfaceFields.every((field) => Object.hasOwn(manifest.interface, field)), "plugin interface metadata is incomplete");
assert(Array.isArray(manifest.interface.defaultPrompt) && manifest.interface.defaultPrompt.length > 0 && manifest.interface.defaultPrompt.length <= 3, "plugin defaultPrompt must contain one to three entries");
assert(manifest.interface.defaultPrompt.every((prompt) => typeof prompt === "string" && prompt.length <= 128), "plugin default prompts must be strings up to 128 characters");
for (const urlField of ["websiteURL", "privacyPolicyURL", "termsOfServiceURL"]) assert(manifest.interface[urlField].startsWith("https://"), `${urlField} must be HTTPS`);

const packagedSkill = `${pluginRoot}/skills/skillscout`;
for (const relativePath of ["SKILL.md", "agents/openai.yaml", "data/single-best-plugin-rules.json", "data/primary-secondary-tool-rules.json", "prompts/startup-response-template.md", "docs/continue-after-recommendation.md"]) {
  assert(existsSync(resolve(root, packagedSkill, relativePath)), `missing packaged skill resource: ${relativePath}`);
}
const skillContent = readFileSync(resolve(root, packagedSkill, "SKILL.md"), "utf8");
assert(/^---\nname: skillscout\ndescription: .+\n---/s.test(skillContent), "packaged SKILL.md needs valid frontmatter");

assert(marketplace.name === "skillscout-marketplace", "marketplace must use the expected name");
const entry = marketplace.plugins?.find((plugin) => plugin.name === "skillscout");
assert(entry, "marketplace must include skillscout");
assert(entry.source?.source === "local" && entry.source?.path === "./plugins/skillscout", "marketplace must point to the packaged plugin");
assert(entry.policy?.installation === "AVAILABLE" && entry.policy?.authentication === "ON_INSTALL", "marketplace policy is incomplete");

console.log(`Plugin package is valid: ${manifest.name}@${manifest.version} via ${marketplace.name}.`);
