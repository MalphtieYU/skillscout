# SkillScout Install Card Template

Use an install card only when the registry contains verified installation metadata. Never create a synthetic URL, `codex://` deep link, or permission claim.

## Verified install route

```markdown
推荐使用：{plugin_display_name}
原因：{one_sentence_reason}
安装：[ {install_button_label} ]({install_url_or_marketplace_url})
权限：{required_permissions_summary}
如果无法安装：{fallback_instruction}
```

## No verified install route

```text
推荐使用：{plugin_display_name}
原因：{one_sentence_reason}
安装方式：请在 Codex 插件面板搜索 “{plugin_display_name}”。
如果找不到：继续使用 Codex 原生能力完成可执行部分，并在需要真实连接时再安装。
```

