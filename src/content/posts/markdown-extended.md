---
title: Markdown 扩展功能
published: 2025-08-10
updated: 2025-08-10
description: '在 Fuwari 中了解更多 Markdown 功能'
image: ''
tags: [演示, 示例, Markdown, Fuwari]
category: '示例'
draft: false
---

## GitHub 仓库卡片
你可以添加动态卡片来链接 GitHub 仓库，在页面加载时会从 GitHub API 获取仓库信息。

::github{repo="Fabrizz/MMM-OnSpotify"}

使用代码 ::github{repo="<owner>/<repo>"} 创建一个 GitHub 仓库卡片。

```markdown
::github{repo="saicaca/fuwari"}
```


## 提示框（Admonitions）

支持以下类型的提示框：note tip important warning caution

:::note
强调用户即使快速浏览也应注意的信息。
:::

:::tip
可选的信息，用于帮助用户更好地完成任务。
:::

:::important
用户必须掌握的关键信息。
:::

:::warning
因潜在风险而需要用户立即关注的重要内容。
:::

:::caution
某个操作可能带来的负面后果。
:::

### 基本语法

```markdown
:::note
强调用户即使快速浏览也应注意的信息。
:::

:::tip
可选的信息，用于帮助用户更好地完成任务。
:::
```


### 自定义标题

提示框的标题可以自定义。

:::note[我的自定义标题]
这是一个带有自定义标题的提示框。
:::

```markdown
:::note[我的自定义标题]
这是一个带有自定义标题的提示框。
:::
```


### GitHub 风格语法

> [!TIP]
> [GitHub 风格语法](https://github.com/orgs/community/discussions/16925) 同样支持。

> [!NOTE]
> 支持 GitHub 风格语法。

> [!TIP]
> 支持 GitHub 风格语法。
