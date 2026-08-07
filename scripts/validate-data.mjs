import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));

function readJson(relativePath) {
  try {
    return JSON.parse(readFileSync(resolve(root, relativePath), "utf8"));
  } catch (error) {
    throw new Error(`Cannot read ${relativePath}: ${error.message}`);
  }
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function unique(values, label) {
  const duplicates = values.filter((value, index) => values.indexOf(value) !== index);
  assert(duplicates.length === 0, `${label} contains duplicates: ${[...new Set(duplicates)].join(", ")}`);
}

function nonEmptyArray(value, label) {
  assert(Array.isArray(value) && value.length > 0, `${label} must be a non-empty array`);
}

const categoriesData = readJson("data/plugin-categories.json");
const rulesData = readJson("data/recommendation-rules.json");
const frameworkData = readJson("data/tool-decision-framework.json");
const antiRulesData = readJson("data/anti-recommendation-rules.json");
const complexityData = readJson("data/task-complexity-rules.json");
const minimalStackData = readJson("data/minimal-tool-stack-rules.json");
const permissionData = readJson("data/permission-risk-rules.json");
const registrySchema = readJson("data/plugin-registry.schema.json");
const singleBestData = readJson("data/single-best-plugin-rules.json");
const primarySecondaryData = readJson("data/primary-secondary-tool-rules.json");
const installRegistrySchema = readJson("data/plugin-install-registry.schema.json");
const liveCatalogPolicy = readJson("data/live-catalog-refresh-policy.json");

const versionedData = [categoriesData, rulesData, frameworkData, antiRulesData, complexityData, minimalStackData, permissionData, singleBestData, primarySecondaryData];
for (const data of versionedData) {
  assert(/^\d+\.\d+\.\d+$/.test(data.schema_version), "all rule data needs a semantic schema_version");
}
assert(/^\d+\.\d+\.\d+$/.test(liveCatalogPolicy.schema_version), "live catalog policy needs a semantic schema_version");
for (const field of ["runtime_order", "refresh_triggers", "required_behavior", "non_goals"]) nonEmptyArray(liveCatalogPolicy[field], `live catalog policy.${field}`);

nonEmptyArray(categoriesData.categories, "categories");
nonEmptyArray(rulesData.rules, "recommendation rules");
const categoryNames = categoriesData.categories.map((category) => {
  assert(typeof category.category_name === "string" && category.category_name.trim(), "each category needs category_name");
  for (const field of ["plain_english_description", "chinese_description", "risk_of_overuse"]) {
    assert(typeof category[field] === "string" && category[field].trim(), `category ${category.category_name} needs ${field}`);
  }
  for (const field of ["when_to_use", "when_not_to_use", "example_tasks"]) nonEmptyArray(category[field], `category ${category.category_name}.${field}`);
  return category.category_name;
});
unique(categoryNames, "category names");

const validCategories = new Set(categoryNames);
const projectTypes = rulesData.rules.map((rule) => {
  assert(typeof rule.project_type === "string" && rule.project_type.trim(), "each rule needs project_type");
  nonEmptyArray(rule.detection_keywords, `${rule.project_type}.detection_keywords`);
  for (const field of ["likely_needed_tools", "optional_tools", "usually_not_needed_tools"]) {
    assert(Array.isArray(rule[field]), `${rule.project_type} needs ${field}`);
    for (const category of rule[field]) assert(validCategories.has(category), `${rule.project_type} references unknown category: ${category}`);
  }
  assert(typeof rule.no_plugin_possible === "boolean", `${rule.project_type} needs boolean no_plugin_possible`);
  assert(typeof rule.decision_notes === "string" && rule.decision_notes.trim(), `${rule.project_type} needs decision_notes`);
  return rule.project_type;
});
unique(projectTypes, "project types");

const expectedDimensions = ["output_quality_gain", "efficiency_gain", "capability_requirement", "complexity_cost", "risk_cost", "user_skill_fit"];
assert(frameworkData.principle === "Less tooling, better outcome.", "decision framework must preserve the core principle");
assert(frameworkData.dimensions.length === expectedDimensions.length, "decision framework needs six dimensions");
assert(expectedDimensions.every((id) => frameworkData.dimensions.some((dimension) => dimension.id === id)), "decision framework dimensions are incomplete");
assert(frameworkData.decision_levels.length === 5, "decision framework needs five decision levels");

nonEmptyArray(antiRulesData.rules, "anti-recommendation rules");
unique(antiRulesData.rules.map((rule) => rule.id), "anti-recommendation rule ids");
for (const rule of antiRulesData.rules) {
  nonEmptyArray(rule.signals, `${rule.id}.signals`);
  for (const field of ["default_decision", "native_first_reason", "escalate_when"]) assert(typeof rule[field] === "string" && rule[field].trim(), `${rule.id} needs ${field}`);
}

assert(complexityData.levels.length === 5, "task complexity needs five levels");
assert(complexityData.levels.every((level, index) => level.level === index + 1), "task complexity levels must be numbered 1 through 5");
nonEmptyArray(minimalStackData.stacks, "minimal tool stacks");
unique(minimalStackData.stacks.map((stack) => stack.id), "minimal stack ids");
for (const stack of minimalStackData.stacks) {
  nonEmptyArray(stack.signals, `${stack.id}.signals`);
  nonEmptyArray(stack.minimal_setup, `${stack.id}.minimal_setup`);
  nonEmptyArray(stack.avoid_by_default, `${stack.id}.avoid_by_default`);
}

const expectedRiskCategories = ["Email", "Calendar", "Cloud Storage", "GitHub", "MCP / Database", "Files & Documents", "Automation", "Deployment"];
assert(expectedRiskCategories.every((category) => permissionData.rules.some((rule) => rule.tool_category === category)), "permission-risk rules are incomplete");
for (const rule of permissionData.rules) {
  for (const field of ["tool_category", "permission", "what_can_go_wrong", "safe_use"]) assert(typeof rule[field] === "string" && rule[field].trim(), `permission rule needs ${field}`);
  assert(rule.confirmation_required === true, `${rule.tool_category} must require confirmation`);
}

assert(registrySchema.type === "object", "plugin registry schema must describe an object");
const registryFields = ["id", "name", "type", "description_en", "description_zh", "categories", "required_permissions", "read_actions", "write_actions", "best_for", "not_for", "complexity_level", "risk_level", "setup_difficulty", "examples", "last_updated", "source_url"];
assert(registryFields.every((field) => Object.hasOwn(registrySchema.properties, field)), "plugin registry schema fields are incomplete");

const expectedPrimaryRules = ["github-repository", "figma-design", "google-drive-files", "gmail-messages", "calendar-events", "pdf-files", "spreadsheet-data", "slide-output", "image-output", "current-web-information", "private-system", "native-text-and-small-work"];
nonEmptyArray(singleBestData.rules, "single-best-plugin rules");
assert(expectedPrimaryRules.every((id) => singleBestData.rules.some((rule) => rule.id === id)), "single-best-plugin rules are incomplete");
for (const rule of singleBestData.rules) {
  nonEmptyArray(rule.task_signal, `${rule.id}.task_signal`);
  for (const field of ["primary_plugin", "why_this_plugin", "when_to_skip", "fallback_to_native"]) assert(typeof rule[field] === "string" && rule[field].trim(), `${rule.id} needs ${field}`);
  assert(Array.isArray(rule.install_metadata_fields), `${rule.id} needs install_metadata_fields`);
}

assert(primarySecondaryData.principles.some((principle) => principle.includes("at most one Primary Tool")), "primary-secondary rules must limit the primary tool");
nonEmptyArray(primarySecondaryData.patterns, "primary-secondary patterns");
for (const pattern of primarySecondaryData.patterns) {
  nonEmptyArray(pattern.signals, `${pattern.id}.signals`);
  for (const field of ["primary_tool", "secondary_tool", "reason", "startup_display"]) assert(typeof pattern[field] === "string" && pattern[field].trim(), `${pattern.id} needs ${field}`);
}

const installFields = ["plugin_id", "display_name", "type", "short_description", "install_url", "marketplace_url", "codex_deeplink", "docs_url", "required_plan", "required_workspace_permission", "required_apps", "required_app_permissions", "supported_surfaces", "install_status", "install_button_label", "fallback_instruction", "last_verified_at"];
assert(installRegistrySchema.type === "object", "plugin install registry schema must describe an object");
assert(installFields.every((field) => Object.hasOwn(installRegistrySchema.properties, field)), "plugin install registry schema fields are incomplete");

const expectedExamples = ["tiny-prompt-task.md", "small-code-task.md", "github-pr-task.md", "figma-to-react-task.md", "pdf-batch-task.md", "spreadsheet-analysis-task.md", "writing-task.md", "calendar-email-workflow.md", "vague-task.md", "video-prompt-task.md"];
for (const example of expectedExamples) assert(existsSync(resolve(root, "examples", example)), `missing required example: ${example}`);

const inlineExamples = ["native-video-prompt.md", "figma-react.md", "github-pr.md", "email-polish.md", "gmail-summary.md", "drive-docs-organize.md", "vague-project.md"];
for (const example of inlineExamples) assert(existsSync(resolve(root, "examples", "inline-startup-decisions", example)), `missing inline startup example: ${example}`);
for (const relativePath of ["README.md", "README.zh-CN.md", "docs/continue-after-recommendation.md", "docs/test-cases.md", "docs/localization-guide.md", "docs/live-catalog-policy.md", "prompts/startup-response-template.md", "prompts/install-card-template.md"]) {
  assert(existsSync(resolve(root, relativePath)), `missing required project file: ${relativePath}`);
}

console.log(`SkillScout data is valid: ${categoryNames.length} categories, ${projectTypes.length} recommendation rules, ${singleBestData.rules.length} primary-tool rules, ${antiRulesData.rules.length} anti-recommendation rules, ${expectedExamples.length + inlineExamples.length} examples, and bilingual documentation.`);
