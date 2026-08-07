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

const versionedData = [categoriesData, rulesData, frameworkData, antiRulesData, complexityData, minimalStackData, permissionData];
for (const data of versionedData) {
  assert(/^\d+\.\d+\.\d+$/.test(data.schema_version), "all rule data needs a semantic schema_version");
  assert(data.schema_version === "1.0.0", "all rule data must use schema_version 1.0.0");
}

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

const expectedExamples = ["tiny-prompt-task.md", "small-code-task.md", "github-pr-task.md", "figma-to-react-task.md", "pdf-batch-task.md", "spreadsheet-analysis-task.md", "writing-task.md", "calendar-email-workflow.md", "vague-task.md", "video-prompt-task.md"];
for (const example of expectedExamples) assert(existsSync(resolve(root, "examples", example)), `missing required example: ${example}`);

console.log(`SkillScout data is valid: ${categoryNames.length} categories, ${projectTypes.length} recommendation rules, ${antiRulesData.rules.length} anti-recommendation rules, and ${expectedExamples.length} examples.`);
