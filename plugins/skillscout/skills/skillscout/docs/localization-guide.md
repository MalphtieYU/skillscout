# Localization Guide

SkillScout should be usable across languages without changing its core safety and decision behavior.

## Current languages

- English: `README.md`
- Simplified Chinese: `README.zh-CN.md`

English remains the source language for stable data keys and schema fields. Translations should localize user-facing documentation, examples, startup wording, and plain-language explanations without translating JSON keys, tool identifiers, or verified URLs.

## Adding a language

1. Create `README.<locale>.md` using an IETF-style locale, such as `README.ja.md` or `README.es.md`.
2. Add the language link to `README.md` and `README.zh-CN.md` when appropriate.
3. Preserve the same sections: use, why tools are not always needed, behavior, install, verification, and limitations.
4. Translate the startup examples naturally. Preserve the concise decision → continue behavior.
5. Do not invent localized marketplace names, installation links, plans, permissions, or availability claims.

## Translation standard

Prefer a clear explanation of what a tool changes for the user's task. Keep the distinction between “required,” “optional,” and “not needed.” If a concept has no natural equivalent, retain the official product name and explain it in plain language.

