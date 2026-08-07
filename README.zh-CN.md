# SkillScout

> **工具更少，结果更好。**

[English](README.md) · 简体中文

SkillScout 是 Codex 项目启动时的工具决策层。你只需 @ 一次 SkillScout，然后正常描述需求；它会选择一个最佳启动方案——直接使用 Codex 原生能力、一个主插件，或确有必要时的最小双工具组合——然后直接继续做项目。

SkillScout **不是插件目录**。它的目标是减少选择，不是增加选择。

## 如何使用

在 Codex 项目开始时输入：

```text
@SkillScout 我想重构 GitHub 仓库并开一个 Pull Request。
```

SkillScout 会：

1. 判断任务是否真的需要插件。
2. 选出一个默认最佳插件，或明确选择 Codex 原生能力。
3. 用很短的文字解释原因。
4. 仅在有已验证入口时提供安装方式。
5. 不让你比较一堆插件，直接继续项目。

示例：

```text
推荐使用：GitHub
原因：任务需要读取真实仓库、提交修改并创建 PR。
执行方式：我会按 GitHub + Codex 原生能力继续完成项目。
```

随后它会直接开始仓库工作，而不是停下来让你从插件列表中做选择。

## 为什么不是所有任务都要插件？

插件可以解锁真实能力，但也会增加安装时间、权限、延迟、上下文噪声和失败点。要修改真实 GitHub 仓库时 GitHub 很有价值；只修一小段代码时则没有必要。SkillScout 会明确说明这条边界。

## 它会如何选择

| 场景 | 默认方案 |
| --- | --- |
| 写作、翻译、提示词、粘贴文本、小段代码 | Codex 原生能力 |
| 真实 GitHub 仓库、Issue、Commit、PR、Review、CI | GitHub |
| 真实 Figma 设计稿、设计系统、设计转代码 | Figma |
| 真实 Drive、Gmail、Calendar、PDF、Excel 或私有系统 | 对应的主能力 |
| Figma 作为输入、GitHub 作为交付 | Figma + GitHub |
| 模糊项目需求 | 先用原生能力启动，只追问会影响第一步的问题 |

## 核心行为

- 第一段只给 3 到 6 行的工具判断。
- 默认只选择一个主工具；只有必要阶段才增加一个辅助工具。
- 可选增强不在启动回复展开。
- 插件没装时，继续完成不依赖插件的部分。
- 不编造安装链接、深链接、权限或安装状态。
- 涉及私有数据和写操作时，给出简短安全提示。

## 国际化使用

本仓库提供英文主 README 与本中文完整说明。SkillScout 会尽量按用户的语言，用通俗说法解释工具，而不是照抄英文插件简介。其他语言的维护方式见 [本地化指南](docs/localization-guide.md)。

## 安装

将该文件夹以 `skillscout` 名称复制或克隆到 Codex Skills 目录（常见位置：`$CODEX_HOME/skills/skillscout`），然后刷新 Codex：

```text
使用 $skillscout 为我的项目选择最佳启动方案，并直接继续执行。
```

### 通过 GitHub marketplace 安装为 Codex 插件

本仓库已提供公开的 Codex marketplace 来源。使用新版 Codex CLI 时可以执行：

```text
codex plugin marketplace add MalphtieYU/skillscout
codex plugin add skillscout@skillscout-marketplace
```

安装后请重启 Codex 或新开一个对话。这个 GitHub marketplace 已可使用；进入 ChatGPT/Codex 通用插件目录仍需通过 OpenAI 的单独审核。

## 验证

在仓库根目录运行：

```text
node scripts/validate-data.mjs
node scripts/validate-plugin-package.mjs
```

脚本会检查 JSON 结构、规则覆盖、案例清单和启动模板。行为测试见 [测试用例](docs/test-cases.md)。

## 未来的一键安装能力

`data/plugin-install-registry.schema.json` 预留了真实安装链接、应用权限、支持的 Codex 端与管理员要求等字段。它并不表示当前一定支持一键安装或 `codex://` 深链接；没有验证入口时，SkillScout 只会提示用户到插件面板搜索。

## 公开插件状态

SkillScout 现已打包为仅含 Skill 的插件，并通过这个公开 GitHub marketplace 分发。通用 Plugins Directory 的上架尚未完成：OpenAI 还要求已验证的发布者身份、Apps Management 写权限、公开的支持/隐私/条款页面、可供审核的启动提示词，以及至少 5 条正向和 3 条负向测试用例。

## 贡献

阅读 [贡献指南](docs/contribution-guide.md)。欢迎改进决策质量、边界、安全性和表达清晰度，而不是单纯增加工具数量。

## 许可证

MIT。见 [LICENSE](LICENSE)。
