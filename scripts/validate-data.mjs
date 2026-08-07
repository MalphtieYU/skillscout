import { readFileSync } from "node:fs";
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

const categoriesData = readJson("data/plugin-categories.json");
const rulesData = readJson("data/recommendation-rules.json");

assert(/^\d+\.\d+\.\d+$/.test(categoriesData.schema_version), "plugin-categories.json needs a semantic schema_version");
assert(categoriesData.schema_version === rulesData.schema_version, "JSON files must use the same schema_version");
assert(Array.isArray(categoriesData.categories) && categoriesData.categories.length > 0, "categories must be a non-empty array");
assert(Array.isArray(rulesData.rules) && rulesData.rules.length > 0, "rules must be a non-empty array");

const categoryNames = categoriesData.categories.map((category) => {
  assert(typeof category.category_name === "string" && category.category_name.trim(), "each category needs category_name");
  for (const field of ["plain_english_description", "chinese_description", "risk_of_overuse"]) {
    assert(typeof category[field] === "string" && category[field].trim(), `category ${category.category_name} needs ${field}`);
  }
  for (const field of ["when_to_use", "when_not_to_use", "example_tasks"]) {
    assert(Array.isArray(category[field]) && category[field].length > 0, `category ${category.category_name} needs a non-empty ${field}`);
  }
  return category.category_name;
});

unique(categoryNames, "category names");
const validCategories = new Set(categoryNames);
const projectTypes = rulesData.rules.map((rule) => {
  assert(typeof rule.project_type === "string" && rule.project_type.trim(), "each rule needs project_type");
  assert(Array.isArray(rule.detection_keywords) && rule.detection_keywords.length > 0, `${rule.project_type} needs detection_keywords`);
  for (const field of ["likely_needed_tools", "optional_tools", "usually_not_needed_tools"]) {
    assert(Array.isArray(rule[field]), `${rule.project_type} needs ${field}`);
    for (const category of rule[field]) {
      assert(validCategories.has(category), `${rule.project_type} references unknown category: ${category}`);
    }
  }
  assert(typeof rule.no_plugin_possible === "boolean", `${rule.project_type} needs boolean no_plugin_possible`);
  assert(typeof rule.decision_notes === "string" && rule.decision_notes.trim(), `${rule.project_type} needs decision_notes`);
  return rule.project_type;
});

unique(projectTypes, "project types");
console.log(`SkillScout data is valid: ${categoryNames.length} categories, ${projectTypes.length} rules (schema ${categoriesData.schema_version}).`);
