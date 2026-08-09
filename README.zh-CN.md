# SkillScout

> 用最少、最合适的能力，直接开始完成 Codex 项目。

SkillScout 是 Codex 的**项目启动与能力边界层**。你只需要描述一个真实任务；它会在 Codex 原生能力、已安装 Skill、插件、App、MCP 和“不需要额外工具”之间，选出最小可行路径，然后直接开始工作。

它不是插件目录，也不会让你在一长串工具中做选择。

## 它真正解决什么问题

第一次回复会给出四件事：

1. **最小可行路径**：Codex 原生、一个主能力，或确有必要的一对能力。
2. **选择原因**：依据真实输入、交付目标和权限风险，而不是关键词堆砌。
3. **立即执行的第一步**：推荐后继续做项目，不停在“建议使用某某插件”。
4. **必要的访问边界**：只说明真正需要的仓库权限、文件或账号访问。

当任务涉及仓库、设计稿、云文件、MCP、当前网络信息，且你不确定该用什么时使用它。小型写作、翻译、粘贴代码解释等任务不需要 SkillScout，直接让 Codex 做即可。

## 快速安装

在新版 Codex CLI 中添加公开 GitHub 市场源：

```bash
codex plugin marketplace add MalphtieYU/skillscout
codex plugin add skillscout@skillscout-marketplace
```

重新开一个 Codex 任务后，直接描述真实目标：

```text
使用 $skillscout 启动一个从 Figma 到 React 的项目，然后准备提交 GitHub Pull Request。
```

```text
使用 $skillscout 判断分析这份销售工作簿需要的最小安全能力，并开始生成报告。
```

市场源更新后可执行：

```bash
codex plugin marketplace upgrade skillscout-marketplace
```

## 它如何选择

1. 自包含、文本型的小任务优先使用 Codex 原生能力。
2. 识别真正的输入与交付：仓库、Figma 文件、Drive 文档、邮箱、日历、PDF、工作簿或私有系统。
3. 只有某项能力能解锁真实工作时，才加入一个主能力。
4. 只有后续必需阶段无法完成时，才加入一个辅助能力。
5. 可选工具留到最后；项目先开始。

| 真实任务 | 默认第一路径 |
| --- | --- |
| 写作、翻译、提示词、粘贴文本、小型代码修改 | Codex 原生能力 |
| GitHub 仓库、Issue、PR、Review、CI | GitHub 能力 |
| Figma 文件或设计系统 | Figma 能力 |
| 云文件、邮箱、日历、PDF、工作簿 | 对应的文件或 App 能力 |
| 新闻、价格、法规、最新发布信息 | 已验证的网络检索 |
| 私有数据库、内部 API、自定义系统 | 最小权限的 MCP |

## 信息时效与安全

SkillScout 的规则数据是决策模型，而不是永远正确的插件目录。涉及“当前可用、已安装、刚发布、最新”的能力时，它会先查看当前会话，再在可用时核验官方 Codex 信息；无法核实时只推荐能力类别，绝不编造安装链接、上架状态或权限。

涉及私有数据与外部写入时，它会简短说明必要权限或确认点，同时继续完成无需访问即可做的准备工作。

详见[实时能力策略](docs/live-catalog-policy.md)与[决策方式](docs/how-it-works.md)。

## 发布状态

- **现在可用**：公开 GitHub marketplace 源与手动安装 Skill。
- **ChatGPT/Codex 通用插件目录**：需要单独通过 OpenAI 审核；在审核通过并由发布者正式发布前，项目不会声称自己已在官方目录上架。

## 参与与安全

欢迎改进决策质量、安全边界、时效性和真实案例，而不只是增加工具数量。请阅读 [CONTRIBUTING.md](CONTRIBUTING.md)，在 [GitHub Issues](https://github.com/MalphtieYU/skillscout/issues) 提交反馈，安全问题请见 [SECURITY.md](SECURITY.md)。

## 验证

```bash
node scripts/validate-data.mjs
node scripts/package-plugin.mjs
node scripts/validate-plugin-package.mjs
```

英文说明见 [README.md](README.md)，其他语言的维护方式见[本地化指南](docs/localization-guide.md)。

## 许可证

[MIT](LICENSE)
