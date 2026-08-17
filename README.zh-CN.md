# SkillScout

> **拒绝工具堆砌：选出最小、最有用的 Codex 路径，然后直接开始做事。**

[![License: MIT](https://img.shields.io/badge/License-MIT-2563EB.svg)](LICENSE)
[![Codex plugin](https://img.shields.io/badge/Codex-plugin-06B6D4.svg)](plugins/skillscout/.codex-plugin/plugin.json)
[![Version](https://img.shields.io/badge/version-1.4.0-0EA5E9.svg)](plugins/skillscout/.codex-plugin/plugin.json)

<img src="assets/skillscout-path-hero.png" alt="在复杂工具中选择一条清晰路径" width="100%" />

SkillScout 是面向 Codex 的开源、原生优先项目启动 Skill。你给出一个真实任务，它会判断 Codex 原生能力是否足够；只有确实需要时才选择一个外部能力，并立即执行第一步。

它不是又一个插件目录，而是避免项目一开始就堆上五个工具的决策层。

## 一眼看懂它做什么

| 真实请求 | SkillScout 的第一路径 | 原因 |
| --- | --- | --- |
| “帮我改写这封客户邮件。” | Codex 原生能力 | 任务自包含，额外工具只会增加摩擦。 |
| “修复这个 Issue 并开 PR。” | GitHub | 仓库和 PR 才是真正的工作面。 |
| “把这个 Figma 页面实现成 React。” | Figma；交付时再加 GitHub | 先读取设计上下文，只有交付需要时才加入仓库能力。 |
| “比较当前各家的价格方案。” | 已验证的网络检索 | 答案依赖会变化的公开信息。 |
| “分析我们的内部使用数据。” | 最小权限的数据连接 | 必须访问私有来源，因此权限与安全优先。 |

完整输入、决策和下一步可看[三分钟上手](docs/three-minute-tour.md)。

## 三分钟开始使用

1. 添加公开市场源并安装：

   ```bash
   codex plugin marketplace add MalphtieYU/skillscout
   codex plugin add skillscout@skillscout-marketplace
   ```

2. 在 Codex 任务中直接说真实目标：

   ```text
   使用 $skillscout 把这个 Figma 页面实现成 React，并准备 GitHub 交付路径。
   ```

3. SkillScout 会说清最小可行路径、第一步动作并继续执行，不会停在工具推荐上。

不安装也可以先看确定性示例：

```bash
node scripts/run-decision-demo.mjs
```

## 为什么值得加入工作流

- **原生优先：** 写作、翻译、粘贴内容与小型修复默认留在 Codex。
- **只选一个主能力：** 至多增加一个真正必要的辅助能力。
- **不混淆权限：** 插件可见不等于已安装、可用 App 或有外部数据源权限。
- **推荐后立刻开工：** 输出包含第一步动作，而不是一张长长的对比表。
- **行为可回归验证：** 直接、间接与负向提示词都有版本化测试，避免只因提到工具名就被激活。

## 可验证，而不是只靠介绍

发布前可运行：

```bash
node scripts/validate-data.mjs
node scripts/package-plugin.mjs
node scripts/validate-plugin-package.mjs
```

决策示例清楚标注为五个稳定路由样例，不把它包装成真实遥测、实时目录或模型能力评测。详见[运作方式](docs/how-it-works.md)和[激活测试用例](docs/test-cases.md)。

## 当前可用性与安全边界

SkillScout 在提及“当前能力”前会先检查当前会话。官方发现入口是 **Plugin Directory**；目录可见、安装策略、所需 App 权限和外部数据源权限是相互独立的检查项。任何一项无法核实时，只推荐能力类别，不编造可用性或安装路径。

- **现在可用：** 公开 GitHub marketplace 源与手动安装 Skill。
- **ChatGPT/Codex 通用 Plugin Directory：** 还需要独立的 OpenAI 审核及发布者正式发布；在此之前本项目不会声称已上架。

## 一起把它做好

欢迎提交你期望 SkillScout 处理的真实任务、它实际选择的路径与更好的选择。最有价值的贡献是工作流实例、反例和能减少工具堆砌的改进。

如果 SkillScout 帮你少走了一轮工具选择，欢迎点一个 Star，让更多 Codex 用户发现它。

- [English README](README.md)
- [贡献指南](CONTRIBUTING.md)
- [实时能力策略](docs/live-catalog-policy.md)
- [安全问题处理方式](SECURITY.md)

## 许可证

[MIT](LICENSE)
