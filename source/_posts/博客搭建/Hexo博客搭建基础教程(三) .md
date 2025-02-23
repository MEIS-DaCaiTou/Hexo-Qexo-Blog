---
title: "Hexo博客搭建基础教程(三)"  # 文章标题
date: 2025-02-13  # 文章创建日期
updated: 2025-02-13  # 文章更新日期（可选）
tags: ["Hexo", "博客搭建", "技术教程", "静态博客"]  # 文章标签，用于帮助分类和搜索
categories: ["博客搭建"]  # 文章分类，用于归类
keywords: "Hexo, 博客搭建, 静态博客, Hexo教程"  # SEO关键词，有助于搜索引擎优化
description: "Hexo 是一个快速、简洁且高效的静态博客框架，本文将介绍如何从零开始使用 Hexo 创建博客。"  # 文章描述
top_img:   # 文章顶部图片路径（可选）
cover: ""  # 是否显示封面图片，若设置为 false 则不显示，若为空则会显示顶部图片
comments: true  # 是否启用文章评论功能（true/false）
toc: true  # 是否显示文章的目录（Table of Contents，默认从设置中继承）
toc_number: true  # 是否给目录项添加编号（默认从设置中继承）
toc_style_simple: true  # 是否使用简洁的目录模式
copyright: true  # 是否显示版权模块（默认根据全局设置）
copyright_author: "大菜头"  # 版权作者名称
copyright_author_href: "http://aidan.xin"  # 版权作者的链接
copyright_url: "http://aidan.xin"  # 版权信息链接
copyright_info: "© 2025 Aidan. All rights reserved."  # 版权声明信息
mathjax: false  # 是否启用MathJax（用于数学公式的显示，默认false）
katex: false  # 是否启用KaTeX（另一种数学公式渲染工具，默认false）
aplayer: false  # 是否启用APlayer（用于音频播放器，默认false）
highlight_shrink: false  # 是否使代码块默认收起（true为收起，false为展开）
aside: true  # 是否显示侧边栏（true为显示，false为隐藏）
swiper_index: 3 #置顶轮播图顺序，非负整数，数字越大越靠前
---

## 1.前言

1.  博客搭建过程遇到任何问题，优先在本页面搜索，检查是否已经有该配置教程。
2.  遇到问题可以优先在文章评论区留言，注意留言时请填写正确的邮箱以确保能收到站长的回复。
3.  实在解决不了的问题可添加站长的微信进行交流，备注自己的个人信息。

## 2.语言

修改站点配置文件`_config.yml`，默认语言是 en 。  
主题支持三种语言：

-   default(en)
-   zh-CN (简体中文)
-   zh-TW (繁体中文)

## 3.网站资料

修改网站各种资料，例如标题、副标题和邮箱等个人资料，请修改站点配置文件`_config.yml`。部分参数如下，详细参数可参考官方的[配置描述](https://hexo.io/zh-cn/docs/configuration)。

| 参数 | 描述 |
| --- | --- |
| title | 网站标题 |
| subtitle | 描述 |
| description | 网站描述 |
| keywords | 网站的关键词。支持多个关键词 |
| author | 您的名字 |
| language | 网站使用的语言。对于简体中文用户来说，使用不同的主题可能需要设置成不同的值，请参考你的主题的文档自行设置，常见的有 zh-Hans和 zh-CN。 |
| timezone | 网站时区。Hexo 默认使用您电脑的时区。请参考 时区列表 进行设置，如 America/New\_York, Japan, 和 UTC 。一般的，对于中国大陆地区可以使用 Asia/Shanghai |

## 4.导航菜单

修改主题配置文件`_config.butterfly.yml`

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br><span>10</span><br></pre></td><td><pre><span><span>menu:</span></span><br><span>  <span>Home:</span> <span>/</span> <span>||</span> <span>fas</span> <span>fa-home</span></span><br><span>  <span>Archives:</span> <span>/archives/</span> <span>||</span> <span>fas</span> <span>fa-archive</span></span><br><span>  <span>Tags:</span> <span>/tags/</span> <span>||</span> <span>fas</span> <span>fa-tags</span></span><br><span>  <span>Categories:</span> <span>/categories/</span> <span>||</span> <span>fas</span> <span>fa-folder-open</span></span><br><span>  <span>List||fas</span> <span>fa-list:</span></span><br><span>    <span>Music:</span> <span>/music/</span> <span>||</span> <span>fas</span> <span>fa-music</span></span><br><span>    <span>Movie:</span> <span>/movies/</span> <span>||</span> <span>fas</span> <span>fa-video</span></span><br><span>  <span>Link:</span> <span>/link/</span> <span>||</span> <span>fas</span> <span>fa-link</span></span><br><span>  <span>About:</span> <span>/about/</span> <span>||</span> <span>fas</span> <span>fa-heart</span></span><br></pre></td></tr></tbody></table>

-   必须是 `/xxx/`，后面`||`分开，然后写图标名，如果不想显示图标，图标名可不写
    
-   若主题版本大于 v4.0.0，可以直接在子目录里添加 hide 隐藏子目录，如下面的List
    

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br><span>10</span><br></pre></td><td><pre><span><span>menu:</span></span><br><span>  <span>Home:</span> <span>/</span> <span>||</span> <span>fas</span> <span>fa-home</span></span><br><span>  <span>Archives:</span> <span>/archives/</span> <span>||</span> <span>fas</span> <span>fa-archive</span></span><br><span>  <span>Tags:</span> <span>/tags/</span> <span>||</span> <span>fas</span> <span>fa-tags</span></span><br><span>  <span>Categories:</span> <span>/categories/</span> <span>||</span> <span>fas</span> <span>fa-folder-open</span></span><br><span>  <span>List||fas</span> <span>fa-list||hide:</span></span><br><span>   <span>Music:</span> <span>/music/</span> <span>||</span> <span>fas</span> <span>fa-music</span></span><br><span>    <span>Movie:</span> <span>/movies/</span> <span>||</span> <span>fas</span> <span>fa-video</span></span><br><span>  <span>Link:</span> <span>/link/</span> <span>||</span> <span>fas</span> <span>fa-link</span></span><br><span>  <span>About:</span> <span>/about/</span> <span>||</span> <span>fas</span> <span>fa-heart</span></span><br></pre></td></tr></tbody></table>

-   文字可自行更改，中英文都可以

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br><span>10</span><br><span>11</span><br></pre></td><td><pre><span><span>menu:</span></span><br><span>  <span>首页:</span> <span>/</span> <span>||</span> <span>fas</span> <span>fa-home</span></span><br><span>  <span>时间轴:</span> <span>/archives/</span> <span>||</span> <span>fas</span> <span>fa-archive</span></span><br><span>  <span>标签:</span> <span>/tags/</span> <span>||</span> <span>fas</span> <span>fa-tags</span></span><br><span>  <span>分类:</span> <span>/categories/</span> <span>||</span> <span>fas</span> <span>fa-folder-open</span></span><br><span>  <span>清单||fa</span> <span>fa-heartbeat:</span></span><br><span>    <span>音乐:</span> <span>/music/</span> <span>||</span> <span>fas</span> <span>fa-music</span></span><br><span>    <span>照片:</span> <span>/Gallery/</span> <span>||</span> <span>fas</span> <span>fa-images</span></span><br><span>    <span>电影:</span> <span>/movies/</span> <span>||</span> <span>fas</span> <span>fa-video</span></span><br><span>  <span>友链:</span> <span>/link/</span> <span>||</span> <span>fas</span> <span>fa-link</span></span><br><span>  <span>关于:</span> <span>/about/</span> <span>||</span> <span>fas</span> <span>fa-heart</span></span><br></pre></td></tr></tbody></table>

最终效果如下图所示：

[![image-20221029173243861](https://s1.vika.cn/space/2022/10/29/08530571ff2f44c3b7419bfdbf66f8c6)](https://s1.vika.cn/space/2022/10/29/08530571ff2f44c3b7419bfdbf66f8c6)

## 5.代码

### 5.1 代码高亮主题

Butterfly支持 6 种代码高亮样式：

-   darker
-   pale night
-   light
-   ocean
-   mac
-   mac light

修改主题配置文件`_config.butterfly.yml`。中的`highlight_theme`属性。

<table><tbody><tr><td><pre><span>1</span><br></pre></td><td><pre><span><span>highlight_theme:</span> <span>darker</span></span><br></pre></td></tr></tbody></table>

[![](https://bu.dusays.com/2022/05/31/62962018a84e7.webp)](https://bu.dusays.com/2022/05/31/62962018a84e7.webp)

<table><tbody><tr><td><pre><span>1</span><br></pre></td><td><pre><span><span>highlight_theme:</span> <span>pale</span> <span>night</span></span><br></pre></td></tr></tbody></table>

[![](https://bu.dusays.com/2022/05/31/62961859b9e8c.webp)](https://bu.dusays.com/2022/05/31/62961859b9e8c.webp)

<table><tbody><tr><td><pre><span>1</span><br></pre></td><td><pre><span><span>highlight_theme:</span> <span>light</span></span><br></pre></td></tr></tbody></table>

[![](https://bu.dusays.com/2022/05/31/629617b3de088.webp)](https://bu.dusays.com/2022/05/31/629617b3de088.webp)

<table><tbody><tr><td><pre><span>1</span><br></pre></td><td><pre><span><span>highlight_theme:</span> <span>ocean</span></span><br></pre></td></tr></tbody></table>

[![](https://bu.dusays.com/2022/05/31/6296188b7c513.webp)](https://bu.dusays.com/2022/05/31/6296188b7c513.webp)

<table><tbody><tr><td><pre><span>1</span><br></pre></td><td><pre><span><span>highlight_theme:</span> <span>mac</span></span><br></pre></td></tr></tbody></table>

[![](https://bu.dusays.com/2022/05/31/629618f4b4847.webp)](https://bu.dusays.com/2022/05/31/629618f4b4847.webp)

<table><tbody><tr><td><pre><span>1</span><br></pre></td><td><pre><span><span>highlight_theme:</span> <span>mac</span> <span>light</span></span><br></pre></td></tr></tbody></table>

[![](https://bu.dusays.com/2022/05/31/629618cb37ff7.webp)](https://bu.dusays.com/2022/05/31/629618cb37ff7.webp)

### 5.2 代码复制

修改主题配置文件`_config.butterfly.yml`中的`highlight_copy`属性，`true`表示可以复制。

<table><tbody><tr><td><pre><span>1</span><br></pre></td><td><pre><span><span>highlight_copy:</span> <span>true</span></span><br></pre></td></tr></tbody></table>

[![image-20221029173420960](https://s1.vika.cn/space/2022/10/29/af884592171e423c9be632b82932d9d1)](https://s1.vika.cn/space/2022/10/29/af884592171e423c9be632b82932d9d1)

### 5.3 代码框展开/关闭

修改主题配置文件`_config.butterfly.yml`。中的`highlight_shrink`属性。

<table><tbody><tr><td><pre><span>1</span><br></pre></td><td><pre><span><span>highlight_shrink:</span> <span>true</span> </span><br></pre></td></tr></tbody></table>

在默认情况下，代码框自动展开，可设置是否所有代码框都关闭状态，点击>可展开代码。

-   true 全部代码框不展开，需点击>打开
-   false 代码框展开，有>点击按钮
-   none 不显示>按钮

[![image-20221029173458309](https://s1.vika.cn/space/2022/10/29/fd17fb642e08403bae6554df4ae714f0)](https://s1.vika.cn/space/2022/10/29/fd17fb642e08403bae6554df4ae714f0)

### 5.4 代码换行

在默认情况下，Hexo 在编译的时候不会实现代码自动换行。如果你不希望在代码块的区域里有横向滚动条的话，那么你可以考虑开启这个功能。

修改主题配置文件`_config.butterfly.yml`。中的`code_word_wrap`属性。

<table><tbody><tr><td><pre><span>1</span><br></pre></td><td><pre><span><span>code_word_wrap:</span> <span>true</span></span><br></pre></td></tr></tbody></table>

### 5.5 代码高度限制

可配置代码高度限制，超出的部分会隐藏，并显示展开按钮。

<table><tbody><tr><td><pre><span>1</span><br></pre></td><td><pre><span><span>highlight_height_limit:</span> <span>false</span> </span><br></pre></td></tr></tbody></table>

1.  单位是`px`，直接添加数字，如 200
2.  实际限制高度为`highlight_height_limit + 30 px` ，多增加 30px 限制，目的是避免代码高度只超出highlight\_height\_limit 一点时，出现展开按钮，展开没内容。
3.  不适用于隐藏后的代码块（ css 设置 `display: none`）。

[![image-20221029173522172](https://s1.vika.cn/space/2022/10/29/86c397c8ec81428dadfb059b92716334)](https://s1.vika.cn/space/2022/10/29/86c397c8ec81428dadfb059b92716334)

## 6.社交图标

`Butterfly`支持[font-awesome v6](https://fontawesome.com/icons?from=io)图标。

书写格式：`图标名：url || 描述性文字`。

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br></pre></td><td><pre><span><span>social:</span></span><br><span>  <span>fab fa-github:</span> <span>https://github.com/xxxxx</span> <span>||</span> <span>Github</span></span><br><span>  <span>fas fa-envelope:</span> <span>mailto:xxxxxx@gmail.com</span> <span>||</span> <span>Email</span></span><br></pre></td></tr></tbody></table>

[![image-20221029173631192](https://s1.vika.cn/space/2022/10/29/97e3e8b88a6b4c75b6d042a6aa481ab2)](https://s1.vika.cn/space/2022/10/29/97e3e8b88a6b4c75b6d042a6aa481ab2)

## 7.顶部图

如果不要显示顶部图，可直接配置 `disable_top_img: true`。

| 配置 | 解释 |
| --- | --- |
| index\_img | 主页的 top\_img |
| default\_top\_img | 默认的 top\_img，当页面的 top\_img 没有配置时，会显示 default\_top\_img |
| archive\_img | 归档页面的 top\_img |
| tag\_img | tag子页面 的 默认 top\_img |
| tag\_per\_img | tag子页面的 top\_img，可配置每个 tag 的 top\_img |
| category\_img | category 子页面 的 默认 top\_img |
| category\_per\_img | category 子页面的 top\_img，可配置每个 category 的 top\_img |

修改主题配置文件`_config.butterfly.yml`

<table><tbody><tr><td><pre><span>1</span><br></pre></td><td><pre><span><span>index_img:</span> <span>xxx.png</span></span><br></pre></td></tr></tbody></table>

其它页面 （tags/categories/自建页面）和文章页的`top_img`，请到对应的 md 页面设置`front-matter`中的`top_img`。

## 8.文章置顶与封面

1.  你可以直接在文章的`front-matter`区域里添加`sticky: 1`属性来把这篇文章置顶。数值越大，置顶的优先级越大。
    
2.  文章的markdown文档上，在`Front-matter`添加`cover`，并填上要显示的图片地址。如果不配置`cover`，可以设置显示默认的`cover`；如果不想在首页显示cover，可以设置为`false`。  
    修改主题配置文件`_config.butterfly.yml`。
    
    <table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br><span>10</span><br></pre></td><td><pre><span><span>cover:</span></span><br><span>  </span><br><span>  <span>index_enable:</span> <span>true</span></span><br><span>  <span>aside_enable:</span> <span>true</span></span><br><span>  <span>archives_enable:</span> <span>true</span></span><br><span>  </span><br><span>  </span><br><span>  <span>position:</span> <span>both</span></span><br><span>  </span><br><span>  <span>default_cover:</span> </span><br></pre></td></tr></tbody></table>
    
    当配置多张图片时，会随机选择一张作为cover，此时写法应为：
    
    <table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br></pre></td><td><pre><span><span>default_cover:</span></span><br><span>  <span>-</span> <span>https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/cover/default_bg.png</span></span><br><span>  <span>-</span> <span>https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/cover/default_bg2.png</span></span><br><span>  <span>-</span> <span>https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/cover/default_bg3.png</span></span><br></pre></td></tr></tbody></table>
    

[![image-20221029173703144](https://s1.vika.cn/space/2022/10/29/e9c6f655967b483690c4b8f8fd24b904)](https://s1.vika.cn/space/2022/10/29/e9c6f655967b483690c4b8f8fd24b904)

## 9.文章页相关配置

### 9.1 文章meta显示

`post_meta`这个属性用于显示文章的相关信息的，修改主题配置文件`_config.butterfly.yml`。

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br><span>10</span><br><span>11</span><br><span>12</span><br><span>13</span><br></pre></td><td><pre><span><span>post_meta:</span></span><br><span>  <span>page:</span></span><br><span>    <span>date_type:</span> <span>both</span> </span><br><span>    <span>date_format:</span> <span>relative</span> </span><br><span>    <span>categories:</span> <span>true</span> </span><br><span>    <span>tags:</span> <span>true</span> </span><br><span>    <span>label:</span> <span>true</span> </span><br><span>  <span>post:</span></span><br><span>    <span>date_type:</span> <span>both</span> </span><br><span>    <span>date_format:</span> <span>relative</span> </span><br><span>    <span>categories:</span> <span>true</span> </span><br><span>    <span>tags:</span> <span>true</span> </span><br><span>    <span>label:</span> <span>true</span> </span><br></pre></td></tr></tbody></table>

### 9.2 文章版权和协议许可

修改主题配置文件`_config.butterfly.yml`

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br></pre></td><td><pre><span><span>post_copyright:</span></span><br><span>  <span>enable:</span> <span>true</span></span><br><span>  <span>decode:</span> <span>false</span></span><br><span>  <span>author_href:</span></span><br><span>  <span>license:</span> <span>CC</span> <span>BY-NC-SA</span> <span>4.0</span></span><br><span>  <span>license_url:</span> <span>https://creativecommons.org/licenses/by-nc-sa/4.0/</span></span><br></pre></td></tr></tbody></table>

由于`Hexo 4.1`开始，默认对网址进行解码，以至于如果是中文网址，会被解码，可设置`decode: true`来显示中文网址。如果有文章（例如：转载文章）不需要显示版权，可以在文章页`Front-matter`中单独设置。

<table><tbody><tr><td><pre><span>1</span><br></pre></td><td><pre><span><span>copyright:</span> <span>false</span></span><br></pre></td></tr></tbody></table>

从`v3.0.0`开始，支持对单独文章设置版权信息，可以在文章Front-matter单独设置。

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br></pre></td><td><pre><span>post<span>_copyright:</span></span><br><span><span>copyright_</span>author: xxxx</span><br><span>copyright<span>_author_</span>href: https://xxxxxx.com</span><br><span>copyright<span>_url: https://xxxxxx.com</span></span><br><span><span>copyright_</span>info: 此文章版权归xxxxx所有，如有转载，请註明来自原作者</span><br></pre></td></tr></tbody></table>

[![image-20221029173741784](https://s1.vika.cn/space/2022/10/29/39720529b18d48258f6f575d9694b009)](https://s1.vika.cn/space/2022/10/29/39720529b18d48258f6f575d9694b009)

### 9.3 文章打赏

修改主题配置文件`_config.butterfly.yml`

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br></pre></td><td><pre><span><span>reward:</span></span><br><span>  <span>enable:</span> <span>false</span></span><br><span>  <span>QR_code:</span></span><br><span>    <span>-</span> <span>img:</span> <span>/img/wechat.jpg</span></span><br><span>      <span>link:</span></span><br><span>      <span>text:</span> <span>wechat</span></span><br><span>    <span>-</span> <span>img:</span> <span>/img/alipay.jpg</span></span><br><span>      <span>link:</span></span><br><span>      <span>text:</span> <span>alipay</span></span><br></pre></td></tr></tbody></table>

### 9.4 文章目录TOC

修改主题配置文件`_config.butterfly.yml`。

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br></pre></td><td><pre><span><span>toc:</span></span><br><span>  <span>post:</span> <span>true</span> </span><br><span>  <span>page:</span> <span>false</span> </span><br><span>  <span>number:</span> <span>true</span> </span><br><span>  <span>expand:</span> <span>false</span></span><br><span>  <span>style_simple:</span> <span>false</span> </span><br></pre></td></tr></tbody></table>

[![image-20221029173812311](https://s1.vika.cn/space/2022/10/29/b40a3447a5d043a5bf8623ecb2fe128a)](https://s1.vika.cn/space/2022/10/29/b40a3447a5d043a5bf8623ecb2fe128a)

### 9.5 相关文章推荐

相关文章推荐的原理是根据文章tags的比重来推荐，修改主题配置文件`_config.butterfly.yml`。

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br></pre></td><td><pre><span><span>related_post:</span></span><br><span>  <span>enable:</span> <span>true</span></span><br><span>  <span>limit:</span> <span>6</span> </span><br><span>  <span>date_type:</span> <span>created</span> </span><br></pre></td></tr></tbody></table>

### 9.6 文章锚点

开启文章锚点后，当你在文章页进行滚动时，文章链接会根据标题ID进行替换。

注意: 每替换一次，会留下一个歷史记录。所以如果一篇文章有很多锚点的话，网页的歷史记录会很多。

修改主题配置文件`_config.butterfly.yml`。

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br></pre></td><td><pre><span></span><br><span></span><br><span><span>anchor:</span> <span>true</span></span><br></pre></td></tr></tbody></table>

### 9.7 文章过期提醒

可设置是否显示文章过期提醒，以更新时间为基准。

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br></pre></td><td><pre><span></span><br><span><span>noticeOutdate:</span></span><br><span>  <span>enable:</span> <span>true</span></span><br><span>  <span>style:</span> <span>flat</span> </span><br><span>  <span>limit_day:</span> <span>365</span> </span><br><span>  <span>position:</span> <span>top</span> </span><br><span>  <span>message_prev:</span> <span>It</span> <span>has</span> <span>been</span> </span><br><span>  <span>message_next:</span> <span>days</span> <span>since</span> <span>the</span> <span>last</span> <span>update,</span> <span>the</span> <span>content</span> <span>of</span> <span>the</span> <span>article</span> <span>may</span> <span>be</span> <span>outdated.</span> </span><br></pre></td></tr></tbody></table>

### 9.8 文章分页按钮

修改主题配置文件`_config.butterfly.yml`

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br></pre></td><td><pre><span></span><br><span></span><br><span></span><br><span></span><br><span></span><br><span><span>post_pagination:</span> <span>false</span></span><br></pre></td></tr></tbody></table>

[![image-20221029173929409](https://s1.vika.cn/space/2022/10/29/7e0ca16646c4487895c7f1f792d87f92)](https://s1.vika.cn/space/2022/10/29/7e0ca16646c4487895c7f1f792d87f92)

## 10.头像

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br></pre></td><td><pre><span><span>avatar:</span></span><br><span>  <span>img:</span> <span>/assets/head.jpg</span></span><br><span>  <span>effect:</span> <span>false</span> </span><br></pre></td></tr></tbody></table>

[![image-20221028141401289](https://s1.vika.cn/space/2022/10/28/0904865b6c0c4e1080078bc34b836082)](https://s1.vika.cn/space/2022/10/28/0904865b6c0c4e1080078bc34b836082)

## 11.文章内容复制相关配置

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br></pre></td><td><pre><span></span><br><span></span><br><span><span>copy:</span></span><br><span>  <span>enable:</span> <span>true</span></span><br><span>  <span>copyright:</span></span><br><span>    <span>enable:</span> <span>true</span></span><br><span>    <span>limit_count:</span> <span>50</span></span><br></pre></td></tr></tbody></table>

修改主题配置文件`_config.butterfly.yml`

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br></pre></td><td><pre><span><span>footer:</span></span><br><span>  <span>owner:</span></span><br><span>    <span>enable:</span> <span>true</span></span><br><span>    <span>since:</span> <span>2022</span></span><br><span>  <span>custom_text:</span></span><br><span>  <span>copyright:</span> <span>false</span> </span><br></pre></td></tr></tbody></table>

可以参考tzy大佬的的`custom_text`填写示例：

<table><tbody><tr><td><pre><span>1</span><br></pre></td><td><pre><span><span>custom_text:</span> <span>I</span> <span>wish</span> <span>you</span> <span>to</span> <span>become</span> <span>your</span> <span>own</span> <span>sun,</span> <span>no</span> <span>need</span> <span>to</span> <span>rely</span> <span>on</span> <span>who's</span> <span>light.&lt;p&gt;&lt;a</span> <span>target="_blank"</span> <span>href="https://hexo.io/"&gt;&lt;img</span> <span>src="https://img.shields.io/badge/Frame-Hexo-blue?style=flat&amp;logo=hexo"</span> <span>title="博客框架为Hexo"&gt;&lt;/a&gt;&amp;nbsp;&lt;a</span> <span>target="_blank"</span> <span>href="https://butterfly.js.org/"&gt;&lt;img</span> <span>src="https://img.shields.io/badge/Theme-Butterfly-6513df?style=flat&amp;logo=bitdefender"</span> <span>title="主题采用butterfly"&gt;&lt;/a&gt;&amp;nbsp;&lt;a</span> <span>target="_blank"</span> <span>href="https://www.jsdelivr.com/"&gt;&lt;img</span> <span>src="https://img.shields.io/badge/CDN-jsDelivr-orange?style=flat&amp;logo=jsDelivr"</span> <span>title="本站使用JsDelivr为静态资源提供CDN加速"&gt;&lt;/a&gt;</span> <span>&amp;nbsp;&lt;a</span> <span>target="_blank"</span> <span>href="https://vercel.com/</span> <span>"&gt;&lt;img src="</span><span>https://img.shields.io/badge/Hosted-Vervel-brightgreen?style=flat&amp;logo=Vercel"</span> <span>title="本站采用双线部署，默认线路托管于Vercel"&gt;&lt;/a&gt;&amp;nbsp;&lt;a</span> <span>target="_blank"</span> <span>href="https://vercel.com/</span> <span>"&gt;&lt;img src="</span><span>https://img.shields.io/badge/Hosted-Coding-0cedbe?style=flat&amp;logo=Codio"</span> <span>title="本站采用双线部署，联通线路托管于Coding"&gt;&lt;/a&gt;&amp;nbsp;&lt;a</span> <span>target="_blank"</span> <span>href="https://github.com/"&gt;&lt;img</span> <span>src="https://img.shields.io/badge/Source-Github-d021d6?style=flat&amp;logo=GitHub"</span> <span>title="本站项目由Gtihub托管"&gt;&lt;/a&gt;&amp;nbsp;&lt;a</span> <span>target="_blank"</span> <span>href="http://creativecommons.org/licenses/by-nc-sa/4.0/"&gt;&lt;img</span> <span>src="https://img.shields.io/badge/Copyright-BY--NC--SA%204.0-d42328?style=flat&amp;logo=Claris"</span> <span>title="本站采用知识共享署名-非商业性使用-相同方式共享4.0国际许可协议进行许可"&gt;&lt;/a&gt;&lt;/p&gt;</span></span><br></pre></td></tr></tbody></table>

[![](https://bu.dusays.com/2022/06/01/6296491902973.jpg)](https://bu.dusays.com/2022/06/01/6296491902973.jpg)

对于部分人需要写 ICP 的，也可以写在custom\_text里。

<table><tbody><tr><td><pre><span>1</span><br></pre></td><td><pre><span><span>custom_text:</span> <span>&lt;a</span> <span>href="icp链接"&gt;&lt;img</span> <span>class="icp-icon"</span> <span>src="icp图片"&gt;&lt;span&gt;备案号：xxxxxx&lt;/span&gt;&lt;/a&gt;</span></span><br></pre></td></tr></tbody></table>

## 13.右下角按钮

### 13.1 简繁转换

修改主题配置文件`_config.butterfly.yml`

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br><span>10</span><br><span>11</span><br><span>12</span><br><span>13</span><br></pre></td><td><pre><span><span>translate:</span></span><br><span>  <span>enable:</span> <span>false</span></span><br><span>  </span><br><span>  <span>default:</span> <span>繁</span></span><br><span>  </span><br><span>  </span><br><span>  <span>defaultEncoding:</span> <span>2</span></span><br><span>  </span><br><span>  <span>translateDelay:</span> <span>0</span></span><br><span>  </span><br><span>  <span>msgToTraditionalChinese:</span> <span>'繁'</span></span><br><span>  </span><br><span>  <span>msgToSimplifiedChinese:</span> <span>'簡'</span></span><br></pre></td></tr></tbody></table>

### 13.2 夜间模式

修改主题配置文件`_config.butterfly.yml`

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br><span>10</span><br></pre></td><td><pre><span></span><br><span><span>darkmode:</span></span><br><span>  <span>enable:</span> <span>false</span></span><br><span>  </span><br><span>  <span>button:</span> <span>true</span></span><br><span>  </span><br><span>  </span><br><span>  </span><br><span>  </span><br><span>  <span>autoChangeMode:</span> <span>false</span></span><br></pre></td></tr></tbody></table>

v2.0.0 开始增加一个选项，可开启自动切换light mode 和 dark mode。

-   `autoChangeMode: 1` 跟随系统而变化，不支持的浏览器/系统将按照时间晚上6点到早上6点之间切换为 dark mode。
-   `autoChangeMode: 2`只按照时间 晚上6点到早上6点之间切换为 dark mode,其余时间为light mode。
-   `autoChangeMode: false` 取消自动切换。

### 13.3 阅读模式

阅读模式下会去掉除文章外的内容，避免干扰阅读。只会出现在文章页面，右下角会有阅读模式按钮。

修改主题配置文件`_config.butterfly.yml`

<table><tbody><tr><td><pre><span>1</span><br></pre></td><td><pre><span><span>readmode:</span> <span>true</span></span><br></pre></td></tr></tbody></table>

## 14.侧边栏设置

### 14.1 排版

可自行决定哪个项目需要显示，可决定位置，也可以设置不显示侧边栏。

修改主题配置文件`_config.butterfly.yml`，下面是本人博客的配置项可以参考

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br><span>10</span><br><span>11</span><br><span>12</span><br><span>13</span><br><span>14</span><br><span>15</span><br><span>16</span><br><span>17</span><br><span>18</span><br><span>19</span><br><span>20</span><br><span>21</span><br><span>22</span><br><span>23</span><br><span>24</span><br><span>25</span><br><span>26</span><br><span>27</span><br><span>28</span><br><span>29</span><br><span>30</span><br><span>31</span><br><span>32</span><br><span>33</span><br><span>34</span><br><span>35</span><br><span>36</span><br><span>37</span><br><span>38</span><br><span>39</span><br><span>40</span><br><span>41</span><br><span>42</span><br><span>43</span><br><span>44</span><br><span>45</span><br><span>46</span><br><span>47</span><br><span>48</span><br><span>49</span><br><span>50</span><br></pre></td><td><pre><span><span>aside:</span></span><br><span>  <span>enable:</span> <span>true</span></span><br><span>  <span>hide:</span> <span>false</span></span><br><span>  <span>button:</span> <span>true</span></span><br><span>  <span>mobile:</span> <span>true</span> </span><br><span>  <span>position:</span> <span>right</span> </span><br><span>  <span>display:</span></span><br><span>    <span>archive:</span> <span>true</span></span><br><span>    <span>tag:</span> <span>true</span></span><br><span>    <span>category:</span> <span>true</span></span><br><span>  <span>card_author:</span></span><br><span>    <span>enable:</span> <span>true</span></span><br><span>    <span>description:</span></span><br><span>    <span>button:</span></span><br><span>      <span>enable:</span> <span>true</span></span><br><span>      <span>icon:</span> </span><br><span>      <span>text:</span> <span>🛴前往小家...</span></span><br><span>      <span>link:</span> <span>https://github.com/fomalhaut1998</span></span><br><span>  <span>card_announcement:</span></span><br><span>    <span>enable:</span> <span>true</span></span><br><span>    <span>content:</span> <span>&lt;center&gt;主域名：&lt;br&gt;&lt;a</span> <span>href="https://www.fomal.cc"&gt;&lt;b&gt;&lt;font</span> <span>color="#5ea6e5"&gt;fomal.cc&lt;/font&gt;&lt;/b&gt;&lt;/a&gt;&amp;nbsp;|&amp;nbsp;&lt;a</span> <span>href="https://www.fomal.cn"&gt;&lt;b&gt;&lt;font</span> <span>color="#5ea6e5"&gt;fomal.cn&lt;/font&gt;&lt;/b&gt;&lt;/a&gt;&lt;br&gt;备用域名：&lt;br&gt;&lt;a</span> <span>href="https://blog.fomal.cc"&gt;&lt;b&gt;&lt;font</span> <span>color="#5ea6e5"&gt;blog.fomal.cc&lt;/font&gt;&lt;/b&gt;&lt;/a&gt;&lt;br&gt;&lt;a</span> <span>href="https://aa.fomal.cc"&gt;&lt;b&gt;&lt;font</span> <span>color="#5ea6e5"&gt;aa.fomal.cc&lt;/font&gt;&lt;/b&gt;&lt;/a&gt;&lt;br&gt;&lt;a</span> <span>href="https://bb.fomal.cc"&gt;&lt;b&gt;&lt;font</span> <span>color="#5ea6e5"&gt;bb.fomal.cc&lt;/font&gt;&lt;/b&gt;&lt;/a&gt;&lt;br&gt;&lt;a</span> <span>href="mailto:admin@fomal.cn"&gt;📬：&lt;b&gt;&lt;font</span> <span>color="#a591e0"&gt;admin@fomal.cn&lt;/font&gt;&lt;/b&gt;&lt;/a&gt;&lt;/center&gt;</span></span><br><span>  <span>card_recent_post:</span></span><br><span>    <span>enable:</span> <span>false</span></span><br><span>    <span>limit:</span> <span>3</span> </span><br><span>    <span>sort:</span> <span>date</span> </span><br><span>    <span>sort_order:</span> </span><br><span>  <span>card_categories:</span></span><br><span>    <span>enable:</span> <span>false</span></span><br><span>    <span>limit:</span> <span>8</span> </span><br><span>    <span>expand:</span> <span>none</span> </span><br><span>    <span>sort_order:</span> </span><br><span>  <span>card_tags:</span></span><br><span>    <span>enable:</span> <span>false</span></span><br><span>    <span>limit:</span> <span>20</span> </span><br><span>    <span>color:</span> <span>true</span></span><br><span>    <span>sort_order:</span> </span><br><span>  <span>card_archives:</span></span><br><span>    <span>enable:</span> <span>false</span></span><br><span>    <span>type:</span> <span>monthly</span> </span><br><span>    <span>format:</span> <span>MMMM</span> <span>YYYY</span> </span><br><span>    <span>order:</span> <span>-1</span> </span><br><span>    <span>limit:</span> <span>8</span> </span><br><span>    <span>sort_order:</span> </span><br><span>  <span>card_webinfo:</span></span><br><span>    <span>enable:</span> <span>true</span></span><br><span>    <span>post_count:</span> <span>true</span></span><br><span>    <span>last_push_date:</span> <span>true</span></span><br><span>    <span>sort_order:</span> </span><br><span>  <span>card_weibo:</span></span><br><span>    <span>enable:</span> <span>true</span></span><br></pre></td></tr></tbody></table>

### 14.2 访问人数(UV 和 PV)

修改主题配置文件`_config.butterfly.yml`

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br></pre></td><td><pre><span><span>busuanzi:</span></span><br><span>  <span>site_uv:</span> <span>true</span>  </span><br><span>  <span>site_pv:</span> <span>true</span>  </span><br><span>  <span>page_pv:</span> <span>true</span>  </span><br></pre></td></tr></tbody></table>

### 14.3 运行时间

修改主题配置文件`_config.butterfly.yml`

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br></pre></td><td><pre><span></span><br><span></span><br><span><span>runtimeshow:</span></span><br><span>  <span>enable:</span> <span>false</span></span><br><span>  <span>publish_date:</span> <span>8</span><span>/9/2022</span> <span>00</span><span>:00:00</span></span><br><span>  </span><br><span>  </span><br><span>  </span><br></pre></td></tr></tbody></table>

### 14.4 最新评论

`v3.1.0` 以上支持。如果未配置任何评论，前先不要开启该功能。

最新评论只会在刷新时才会去读取，并不会实时变化。  
由于 API 有 访问次数限制，为了避免调用太多，主题默认存取期限为 10 分鐘。也就是説，调用后资料会存在 `localStorage` 里，10分鐘内刷新网站只会去 `localStorage` 读取资料。 10 分鐘期限一过，刷新页面时才会去调取 API 读取新的数据。（3.6.0 新增了 storage 配置，可自行配置缓存时间）。

修改主题配置文件`_config.butterfly.yml`

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br></pre></td><td><pre><span></span><br><span><span>newest_comments:</span></span><br><span>  <span>enable:</span> <span>true</span></span><br><span>  <span>sort_order:</span> </span><br><span>  <span>limit:</span> <span>6</span>  </span><br><span>  <span>storage:</span> <span>10</span> </span><br><span>  <span>avatar:</span> <span>true</span> </span><br></pre></td></tr></tbody></table>

## 15.网站背景

修改主题配置文件`_config.butterfly.yml`

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br></pre></td><td><pre><span></span><br><span></span><br><span></span><br><span><span>background:</span> <span>url(https://source.fomal.cc/img/dm1.webp)</span></span><br></pre></td></tr></tbody></table>

如果你的网站根目录不是`'/'`，使用本地图片时，需加上你的根目录。  
例如：网站是 `https://yoursite.com/blog`，引用一张`img/xx.png`图片，则设置`background`为 `url(/blog/img/xx.png)`

## 16.打字效果

详见：[activate-power-mode](https://github.com/disjukr/activate-power-mode)

修改主题配置文件`_config.butterfly.yml`

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br></pre></td><td><pre><span></span><br><span></span><br><span><span>activate_power_mode:</span></span><br><span>  <span>enable:</span> <span>false</span></span><br><span>  <span>colorful:</span> <span>true</span> </span><br><span>  <span>shake:</span> <span>true</span> </span><br><span>  <span>mobile:</span> <span>false</span></span><br></pre></td></tr></tbody></table>

[![](https://fastly.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-type-animation.gif)](https://fastly.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-type-animation.gif)

修改主题配置文件`_config.butterfly.yml`

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br></pre></td><td><pre><span></span><br><span><span>footer_bg:</span> <span>true</span></span><br></pre></td></tr></tbody></table>

-   `留空/false`：显示默认的颜色
-   `图片链接`：显示所配置的图片
-   `颜色包括HEX值 - #0000FF | RGB值 - rgb(0,0,255) | 颜色单词 - orange | 渐变色 - linear-gradient( 135deg, #E2B0FF 10%, #9F44D3 100%)`：对应的颜色
-   `true`：显示跟 top\_img 一样

## 18.背景特效

可设置每次刷新更换彩带，或者每次点击更换彩带。详细配置可查看[canvas\_ribbon](https://github.com/hustcc/ribbon.js)

修改主题配置文件`_config.butterfly.yml`

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br></pre></td><td><pre><span><span>canvas_ribbon:</span></span><br><span>  <span>enable:</span> <span>false</span></span><br><span>  <span>size:</span> <span>150</span></span><br><span>  <span>alpha:</span> <span>0.6</span></span><br><span>  <span>zIndex:</span> <span>-1</span></span><br><span>  <span>click_to_change:</span> <span>false</span>  </span><br><span>  <span>mobile:</span> <span>false</span> </span><br></pre></td></tr></tbody></table>

[![](https://fastly.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-docs-canvas-ribbon.png)](https://fastly.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-docs-canvas-ribbon.png)

好看的彩带背景，会飘动。  
修改主题配置文件`_config.butterfly.yml`

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br></pre></td><td><pre><span><span>canvas_fluttering_ribbon:</span></span><br><span>  <span>enable:</span> <span>true</span></span><br><span>  <span>mobile:</span> <span>true</span> </span><br></pre></td></tr></tbody></table>

[![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)](https://fastly.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-canvas-ribbon-piao.gif)

修改主题配置文件`_config.butterfly.yml`

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br></pre></td><td><pre><span><span>canvas_nest:</span></span><br><span>  <span>enable:</span> <span>true</span></span><br><span>  <span>color:</span> <span>'0,0,255'</span> </span><br><span>  <span>opacity:</span> <span>0.7</span> </span><br><span>  <span>zIndex:</span> <span>-1</span> </span><br><span>  <span>count:</span> <span>99</span> </span><br><span>  <span>mobile:</span> <span>false</span> </span><br></pre></td></tr></tbody></table>

[![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)](https://fastly.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-canvas_nest.gif)

## 19.鼠标点击效果

`zIndex`建议只在`-1`和`9999`上选。  
`-1` 代表烟火效果在底部。  
`9999` 代表烟火效果在前面。

修改主题配置文件`_config.butterfly.yml`

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br></pre></td><td><pre><span><span>fireworks:</span></span><br><span>  <span>enable:</span> <span>true</span></span><br><span>  <span>zIndex:</span> <span>9999</span> </span><br><span>  <span>mobile:</span> <span>false</span></span><br></pre></td></tr></tbody></table>

[![](https://fastly.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-firewall.gif)](https://fastly.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-firewall.gif)

修改主题配置文件`_config.butterfly.yml`

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br></pre></td><td><pre><span></span><br><span><span>click_heart:</span></span><br><span>  <span>enable:</span> <span>true</span></span><br><span>  <span>mobile:</span> <span>false</span></span><br></pre></td></tr></tbody></table>

[![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)](https://fastly.jsdelivr.net/gh/jerryc127/CDN/img/click_love.gif)

修改主题配置文件`_config.butterfly.yml`

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br><span>10</span><br></pre></td><td><pre><span></span><br><span><span>ClickShowText:</span></span><br><span>  <span>enable:</span> <span>false</span></span><br><span>  <span>text:</span></span><br><span>    <span>-</span> <span>I</span></span><br><span>    <span>-</span> <span>LOVE</span></span><br><span>    <span>-</span> <span>YOU</span></span><br><span>  <span>fontSize:</span> <span>15px</span></span><br><span>  <span>random:</span> <span>false</span> </span><br><span>  <span>mobile:</span> <span>false</span></span><br></pre></td></tr></tbody></table>

[![](https://fastly.jsdelivr.net/gh/jerryc127/CDN/img/click_word.gif)](https://fastly.jsdelivr.net/gh/jerryc127/CDN/img/click_word.gif)

## 20.自定义字体和字体大小

### 20.1 全局字体

修改主题配置文件`_config.butterfly.yml`中的`font-family`属性即可，如不需要配置，请留空。

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br><span>10</span><br><span>11</span><br></pre></td><td><pre><span></span><br><span></span><br><span><span>font:</span></span><br><span>  <span>global-font-size:</span> <span>'15px'</span></span><br><span>  <span>code-font-size:</span> <span>'14px'</span></span><br><span>  </span><br><span>  </span><br><span>  <span>font-family:</span> <span>var(--global-font),</span> <span>Consolas_1,</span> <span>-apple-system,</span> <span>'Quicksand'</span><span>,</span> <span>'Nimbus Roman No9 L'</span><span>,</span> <span>'PingFang SC'</span><span>,</span> <span>'Hiragino Sans GB'</span><span>,</span> <span>'Noto Serif SC'</span><span>,</span> <span>'Microsoft Yahei'</span><span>,</span> <span>'WenQuanYi Micro Hei'</span><span>,</span> <span>'ST Heiti'</span><span>,</span> <span>sans-serif;</span></span><br><span>  </span><br><span>  </span><br><span>  <span>code-font-family:</span> <span>Consolas_1,</span> <span>var(--global-font),</span> <span>"Microsoft YaHei"</span><span>,</span> <span>Menlo,</span> <span>"PingFang SC"</span><span>,</span> <span>"Microsoft JhengHei"</span><span>,</span> <span>sans-serif</span></span><br></pre></td></tr></tbody></table>

### 20.2 Blog 标题字体

修改主题配置文件`_config.butterfly.yml`中的`blog_title_font`属性即可，如不需要配置，请留空。  
如不需要使用网络字体，只需要把font\_link留空就行。

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br></pre></td><td><pre><span></span><br><span></span><br><span></span><br><span></span><br><span><span>blog_title_font:</span></span><br><span>  <span>font_link:</span> </span><br><span>  <span>font-family:</span> <span>var(--global-font)</span></span><br></pre></td></tr></tbody></table>

## 21.网站副标题

可设置主页中显示的网站副标题或者喜欢的座右铭。

修改主题配置文件`_config.butterfly.yml`中的`subtitle`

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br><span>10</span><br><span>11</span><br><span>12</span><br><span>13</span><br><span>14</span><br><span>15</span><br><span>16</span><br><span>17</span><br><span>18</span><br></pre></td><td><pre><span></span><br><span><span>subtitle:</span></span><br><span>  <span>enable:</span> <span>true</span></span><br><span>  </span><br><span>  <span>effect:</span> <span>true</span></span><br><span>  </span><br><span>  <span>loop:</span> <span>true</span></span><br><span>  </span><br><span>  </span><br><span>  </span><br><span>  </span><br><span>  </span><br><span>  </span><br><span>  <span>source:</span> <span>false</span></span><br><span>  </span><br><span>  <span>sub:</span></span><br><span>    <span>-</span> <span>"Welcome to Fomalhaut🥝のTiny Home!🤣🤣🤣"</span></span><br><span>    <span>-</span> <span>"Hope you have a nice day!🍭🍭🍭"</span></span><br></pre></td></tr></tbody></table>

预览效果见本站主页：[Fomalhaut🥝](https://www.fomal.cc/)

## 22.页面加载动画preloader

当进入网页时，因为加载速度的问题，可能会导致top\_img图片出现断层显示，或者网页加载不全而出现等待时间，开启preloader后，会显示加载动画，等页面加载完，加载动画会消失。

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br></pre></td><td><pre><span></span><br><span><span>preloader:</span> <span>true</span></span><br></pre></td></tr></tbody></table>

## 23.字数统计

注意必须要安装依赖才能设置为`true`，否则会报错！

1.  安装插件：在你的博客根目录，打开cmd命令窗口执行`npm install hexo-wordcount --save`。
2.  开启配置：修改主题配置文件`_config.butterfly.yml`中的`wordcount`。

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br></pre></td><td><pre><span><span>wordcount:</span></span><br><span>  <span>enable:</span> <span>true</span></span><br><span>  <span>post_wordcount:</span> <span>true</span></span><br><span>  <span>min2read:</span> <span>true</span></span><br><span>  <span>total_wordcount:</span> <span>true</span></span><br></pre></td></tr></tbody></table>

## 24.图片大图查看模式

只能开启一个。  
如果你并不想为某张图片添加大图查看模式，你可以使用 html 格式引用图片，并为图片添加 no-lightbox class 名，例如：`<img src="xxxx.jpg" class="no-lightbox">`。

修改主题配置文件`_config.butterfly.yml`中`fancybox`属性

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br></pre></td><td><pre><span></span><br><span><span>fancybox:</span> <span>true</span></span><br></pre></td></tr></tbody></table>

修改主题配置文件`_config.butterfly.yml`中`medium_zoom`属性

<table><tbody><tr><td><pre><span>1</span><br></pre></td><td><pre><span><span>medium_zoom:</span> <span>true</span></span><br></pre></td></tr></tbody></table>

## 25.Pjax

当用户点击链接，通过 `ajax` 更新页面需要变化的部分，然后使用 HTML5 的 `pushState` 修改浏览器的 URL 地址。这样可以不用重复加载相同的资源`（css/js）`， 从而提升网页的加载速度。

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br><span>10</span><br><span>11</span><br></pre></td><td><pre><span></span><br><span></span><br><span></span><br><span><span>pjax:</span> </span><br><span>  <span>enable:</span> <span>true</span></span><br><span>  </span><br><span>  </span><br><span>  </span><br><span>  <span>exclude:</span> </span><br><span>    <span>-</span> <span>/music/</span></span><br><span>    <span>-</span> <span>/no-pjax/</span></span><br></pre></td></tr></tbody></table>

注意：使用 pjax 后，一些自己DIY的js可能会无效，跳转页面时需要重新调用（例如朋友圈、说说等），具体请参考[Pjax文档](https://github.com/MoOx/pjax)。

## 26.Inject

如想添加额外的 js/css/meta 等等东西，可以在 Inject 里添加，head(`</body>`标签之前)， bottom(`</html>`标签之前)。

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br></pre></td><td><pre><span></span><br><span></span><br><span></span><br><span><span>inject:</span></span><br><span>  <span>head:</span></span><br><span>    <span>-</span> <span>&lt;link</span> <span>rel="stylesheet"</span> <span>href="/xxx.css"&gt;</span></span><br><span>  <span>bottom:</span></span><br><span>    <span>-</span> <span>&lt;script</span> <span>src="xxxx"&gt;&lt;/script&gt;</span></span><br></pre></td></tr></tbody></table>

## 27.本地搜索系统

1.  安装依赖：前往博客根目录，打开cmd命令窗口执行`npm install hexo-generator-search --save`。
    
    <table><tbody><tr><td><pre><span>1</span><br></pre></td><td><pre><span>npm install hexo-generator-search --save</span><br></pre></td></tr></tbody></table>
    
2.  注入配置：修改站点配置文件`_config.yml`，添加如下代码：
    
    <table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br></pre></td><td><pre><span><span>search:</span></span><br><span>  <span>path:</span> <span>search.xml</span></span><br><span>  <span>field:</span> <span>post</span></span><br><span>  <span>content:</span> <span>true</span></span><br></pre></td></tr></tbody></table>
    
3.  主题中开启搜索：在主题配置文件\_config.butterfly.yml中修改以下内容：
    
    <table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br></pre></td><td><pre><span>local_search:</span><br><span><span>-  enable: false</span></span><br><span><span>+  enable: true</span></span><br></pre></td></tr></tbody></table>
    
4.  重新编译运行，即可看到效果：前往博客根目录，打开cmd命令窗口依次执行如下命令：
    
    <table><tbody><tr><td><pre><span>1</span><br><span>2</span><br></pre></td><td><pre><span>hexo cl &amp;&amp; hexo generate</span><br><span>hexo s -p 8000</span><br></pre></td></tr></tbody></table>
    
    详情可参考 [hexo-generator-search](https://github.com/wzpan/hexo-generator-search)
    

[![image-20221029174043726](https://s1.vika.cn/space/2022/10/29/df8853f2baf342a2ba28968b80826693)](https://s1.vika.cn/space/2022/10/29/df8853f2baf342a2ba28968b80826693)


---

