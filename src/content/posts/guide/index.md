---
title: Fuwari 简易指南
published: 2025-08-10
description: "如何使用此博客模板。"
image: "./cover.jpeg"
tags: [Fuwari]
category: 'Guides'
draft: false
---

> 封面图片来源：[来源](https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/208fc754-890d-4adb-9753-2c963332675d/width=2048/01651-1456859105-(colour_1.5),girl,_Blue,yellow,green,cyan,purple,red,pink,_best,8k,UHD,masterpiece,male%20focus,%201boy,gloves,%20ponytail,%20long%20hair,.jpeg)

此博客模板基于 [Astro](https://astro.build/) 构建。对于本指南未提及的内容，可以在 [Astro 文档](https://docs.astro.build/) 中找到答案。

## 文章的 Front-matter

```yaml
---
title: 我的第一篇博客文章
published: 2025-08-10
description: 这是我新 Astro 博客的第一篇文章。
image: ./cover.jpg
tags: [示例标签1, 示例标签2]
category: 前端
draft: false
---
```

| 属性名           | 描述                                                                                                                   |
| ------------- | -------------------------------------------------------------------------------------------------------------------- |
| `title`       | 文章标题。                                                                                                                |
| `published`   | 文章的发布日期。                                                                                                             |
| `description` | 文章的简短描述，会显示在首页。                                                                                                      |
| `image`       | 文章封面图片路径。<br/>1. 以 `http://` 或 `https://` 开头：使用网络图片<br/>2. 以 `/` 开头：使用 `public` 目录下的图片<br/>3. 无前缀：相对于 markdown 文件的路径 |
| `tags`        | 文章的标签。                                                                                                               |
| `category`    | 文章的分类。                                                                                                               |
| `draft`       | 若文章为草稿，将不会被显示。                                                                                                       |

## 文章文件的放置位置

文章文件应放在 `src/content/posts/` 目录下。你也可以创建子目录来更好地组织文章与资源。

```
src/content/posts/
├── post-1.md
└── post-2/
    ├── cover.png
    └── index.md
```
