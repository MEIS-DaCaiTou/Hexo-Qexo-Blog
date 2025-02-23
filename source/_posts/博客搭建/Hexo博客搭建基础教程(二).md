---
title: "Hexo博客搭建基础教程(二)"  # 文章标题
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

## 2.Vercel部署与自定义域名

### 2.1 Vercel部署

Vercel简介：[vercel](https://vercel.com/dashboard)是一个代码托管平台，它能够托管你的静态html界面，甚至能够托管你的node.js与Python服务端脚本，是**不想买服务器的懒人的福音**！

**使用Vercel部署Hexo项目步骤：**

1.  首先需要一个Vercel账号，这里**推荐用GitHub账户关联，这样你就可以在vercel中直接托管你的GitHub库中的项目了**，实现开发部署一步到位（网络不流畅可以考虑挂梯子）。  
    ![image-20221027223132537](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)
2.  当你用你的Github账户关联并绑定手机号登录之后，点击右上角的`Add New Project`创建新的项目，之后导入选项那里选择`Continue with Github`，这时候应该能看到你Github账号的仓库，选择你刚刚部署成功的存储静态博客的仓库`<username>.github.io`右边的`Import`选项，表示你要导入该仓库。  
    ![image-20221027223231192](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)  
    ![image-20221027223420282](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)  
    ![image-20221027223742660](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)
3.  起一个只能有字母、数字或者或者连字符的项目名称，然后其他默认，点击`Deploy`，等待一分钟即可部署成功，部署成功后电极`Continue to Dashboard`跳转到控制面板，下图所示就是控制面板，看到就代表成功部署到了，但是我们现在还不能访问他给出的域，因为GFW最近把Vercel屏蔽了。

​ ![image-20221027224225808](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)

![image-20221027224405464](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)

### 2.2 绑定自定义域名

现在你的个人网站的地址是 `username.github.io`以及在Vercel上有一个`blog-demo-chi.vercel.app`。如果觉得不够定制化，可以购买一个专属域名。

这一步不是必要的，如果目前还不想买域名可以先跳过。

腾讯云、阿里云等都是不错的域名代理商，建议选用`com`，`cn`或`cc`这类常用好记的顶域，对SEO比较友好，自定义部分的长度尽可能短别人才会更容易地记住你的网站，要知道域名就是你网站的卡片。此处以阿里云域名为例进行说明，购买域名后，实名认证进入阿里云控制台，点云解析进去，找到你刚买的域名，点进去添加Vercel所需的解析记录，注意博主这里是解析二级域名只需要解析一条即可。但是如果是一级域名，需要解析两个，一个是`@`，另外一个是`www`，Vercel建议是`@`的解析重定向至`www`。

以我的域名：`fomal.cc`为例进行说明

| 主机记录 | 解释 |
| --- | --- |
| www | 解析后的域名为 [www.fomal.cc](http://www.fomal.cc/) |
| @ | 直接解析主域名 [fomal.cc](http://fomal.cc/) |
| \* | 泛解析，匹配其他所有域名 \*.fomal.cc |
| mail | 将域名解析为 [mail.fomal.cc](http://mail.fomal.cc/)，通常用于解析邮箱服务器 |
| 二级 | 如 [abc.fomal.cc](http://abc.fomal.cc/)，填写 abc |
| 手机网站 | 如 [m.fomal.cc](http://m.fomal.cc/)，填写 m |
| 显性URL | 不支持泛解析（泛解析：将所有子域名解析到同一地址） |

将域名指向云服务器，请选择「A」； 将域名指向另一个域名，请选择「CNAME」； 建立邮箱请选择「MX」，根据邮箱服务商提供的 MX 记录填写。

| 记录类型 | 解释 |
| --- | --- |
| A | 用来指定域名的 IPv4 地址（如 8.8.8.8），如果需要将域名指向一个 IP 地址，就需要添加 A 记录。 |
| CNAME | 如果需要将域名指向另一个域名，再由另一个域名提供 IP 地址，就需要添加 CNAME 记录。 |
| MX | 如果需要设置邮箱，让邮箱能收到邮件，就需要添加 MX 记录。 |
| TXT | 在这里可以填写任何东西，长度限制 255。绝大多数的 TXT 记录是用来做 SPF 记录（反垃圾邮件） |
| NS | 域名服务器记录，如果需要将子域名交给其他 DNS 服务商解析，就需要添加 NS 记录。 |
| AAAA | 用来指定主机名（或域名）对应的 IPv6 地址（例如：ff06:0:0:0:0:0:0:c3）记录。 |
| SRV | 记录了哪台计算机提供了哪个服务。格式为：服务的名字、点、协议的类型，例如：\_xmpp-server\_tcp。 |
| 显性URL | 从一个地址 301 重定向到另一个地址的时候，就需要添加显性 URL 记录（注：DNSPod 目前只支持 301 重定向）。 |
| 隐性URL | 类似于显性 URL，区别在于隐性 URL 不会改变地址栏的域名。 |

**添加自定义域名的步骤：**

1.  点击Vercel控制面板右上角的`View Domains`查看当前的域，我们可以看到仅有Vercel给你预分配的一个域名，此时我们输入刚刚购买的域名，我这里以二级域名`demo.fomal.cc`为例进行说明，添加后他会提示你添加一条DNS解析记录。  
    ![image-20221027224803563](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)  
    ![image-20221027224830609](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)  
    ![image-20221027225338126](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)  
    **PS**：如果你是新买的域名，直接输入你新买的一级域名即可，例如`demo123.com`，他会推荐你将`demo123.com`重定向至`www.demo123.com`，点`ADD`即可，然后他会提示你添加两条解析记录，一个是`@`开头的和`CNAME`开头的，添加记录的方法和二级域名一致。  
    ![image-20221027225758503](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)  
    ![image-20221027225808449](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)
2.  在阿里云域名解析记录里面添加如下记录，其中记录类型对应`Type`，主机记录对应`Name`，记录值对应`Value`，其他的设置默认即可。  
    ![image-20221027230049667](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)
3.  回到Vercel刚刚查看域名的地方，如果操作没问题，应该会显示域名配置成功的提示，此时就可以通过自定义域名来访问我们搭建的网站了。  
    ![image-20221027230357362](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)  
    ![image-20221027230421929](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)
4.  当你有了新的域名之后，需要`[BlogRoot]\_config.yml`文件中的`url`配置项为自己的新域名，这样博客的文章链接才会正确生成。

![image-20221028113042788](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)

## 3.安装主题

本教程用的 🦋 hexo-theme-butterfly 主题 v4.5.0最新版，请放心食用。

本教程用的是npm方式安装的 `hexo-theme-butterfly`，后续魔改时更改的文件都是【C:/Hexo-Blog/blog-demo/node\_modules/hexo-theme-butterfly】文件夹中的文件。如果你是`git clone`克隆方式安装的主题，请在【C:/Hexo-Blog/blog-demo/themes/butterfly】文件夹下修改对应的文件。

注意：此方法只支持 Hexo 5.0.0以上版本!

在你的博客根目录（我这里路径为【C:/Hexo-Blog/blog-demo】）打开`Git BASH`命令窗口执行`npm i hexo-theme-butterfly`

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">npm i hexo-theme-butterfly</span><br></pre></td></tr></tbody></table>

安装成功后可在【C:/Hexo-Blog/blog-demo/node\_modules】文件夹下找到hexo-theme-butterfly文件夹

升级方法：在博客根目录下，运行 `npm update hexo-theme-butterfly`。  
升级前请将`hexo-theme-butterfly`文件夹备份，npm更新会直接覆盖成新的包。

在你的博客根目录里（我这里路径为【C:/Hexo-Blog/blog-demo】），打开`Git BASH`工具，执行命令即可。

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">git clone -b 4.5.0 https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly</span><br></pre></td></tr></tbody></table>

安装成功后可在【C:/Hexo-Blog/blog-demo/themes】文件夹下找到`butterfly`文件夹，可以将`landscape`文件夹删掉。

升级方法：在主题目录下，运行git pull

在你的博客根目录里（我这里路径为【C:/Hexo-Blog/blog-demo】），打开`Git BASH`工具，执行命令即可。

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">git clone -b 4.5.0 https://gitee.com/iamjerryw/hexo-theme-butterfly.git themes/butterfly </span><br></pre></td></tr></tbody></table>

升级方法：在主题目录下，运行git pull

## 4.应用主题

1.  修改站点配置文件`_config.yml`，把主题改为`butterfly`
    
    <table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line"><span class="attr">theme:</span> <span class="string">butterfly</span></span><br></pre></td></tr></tbody></table>
    
2.  如果你没有`pug`以及`stylus`的渲染器，请下载安装，这两个渲染器是`Butterfly`生成基础页面所需的依赖包：
    
    <table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">npm install hexo-renderer-pug hexo-renderer-stylus --save</span><br></pre></td></tr></tbody></table>
    
3.  为了减少升级主题后带来的不便，请使用以下方法（建议，可以不做，高度魔改的一般都不会升级主题了，不然魔改的会被覆盖掉）  
    把主题文件夹中的 `_config.yml` 复制到 Hexo 根目录里（我这里路径为【C:/Hexo-Blog/blog-demo】），同时重新命名为 `_config.butterfly.yml`。以后只需要在 `_config.butterfly.yml`进行配置即可生效。Hexo会自动合併主题中的`_config.yml`和 `_config.butterfly.yml`里的配置，如果存在同名配置，会使用`_config.butterfly.yml`的配置，其优先度较高。

## 5\. 基础用法说明

### 5.1 Front-matter

`Front-matter` 是 markdown 文件最上方以`---`分隔的区域，用于指定个别档案的变数。

+   Page Front-matter 用于页面配置
+   Post Front-matter 用于文章页配置

如果标注可选的参数，可根据自己需要添加，不用全部都写

**Page Front-matter：**

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br><span class="line">9</span><br><span class="line">10</span><br><span class="line">11</span><br><span class="line">12</span><br><span class="line">13</span><br><span class="line">14</span><br><span class="line">15</span><br></pre></td><td class="code"><pre><span class="line">---</span><br><span class="line">title:</span><br><span class="line">date:</span><br><span class="line">updated:</span><br><span class="line">type:</span><br><span class="line">comments:</span><br><span class="line">description:</span><br><span class="line">keywords:</span><br><span class="line">top<span class="emphasis">_img:</span></span><br><span class="line"><span class="emphasis">mathjax:</span></span><br><span class="line"><span class="emphasis">katex:</span></span><br><span class="line"><span class="emphasis">aside:</span></span><br><span class="line"><span class="emphasis">aplayer:</span></span><br><span class="line"><span class="emphasis">highlight_</span>shrink:</span><br><span class="line">---</span><br></pre></td></tr></tbody></table>

| 写法 | 解释 |
| --- | --- |
| title | 【必需】页面标题 |
| date | 【必需】页面创建日期 |
| type | 【必需】标籤、分类和友情链接三个页面需要配置 |
| updated | 【可选】页面更新日期 |
| description | 【可选】页面描述 |
| keywords | 【可选】页面关键字 |
| comments | 【可选】显示页面评论模块(默认 true) |
| top\_img | 【可选】页面顶部图片 |
| mathjax | 【可选】显示mathjax(当设置mathjax的per\_page: false时，才需要配置，默认 false) |
| kates | 【可选】显示katex(当设置katex的per\_page: false时，才需要配置，默认 false) |
| aside | 【可选】显示侧边栏 (默认 true) |
| aplayer | 【可选】在需要的页面加载aplayer的js和css,请参考文章下面的音乐 配置 |
| highlight\_shrink | 【可选】配置代码框是否展开(true/false)(默认为设置中highlight\_shrink的配置) |

**Post Front-matter：**

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br><span class="line">9</span><br><span class="line">10</span><br><span class="line">11</span><br><span class="line">12</span><br><span class="line">13</span><br><span class="line">14</span><br><span class="line">15</span><br><span class="line">16</span><br><span class="line">17</span><br><span class="line">18</span><br><span class="line">19</span><br><span class="line">20</span><br><span class="line">21</span><br><span class="line">22</span><br><span class="line">23</span><br><span class="line">24</span><br><span class="line">25</span><br></pre></td><td class="code"><pre><span class="line">---</span><br><span class="line">title:</span><br><span class="line">date:</span><br><span class="line">updated:</span><br><span class="line">tags:</span><br><span class="line">categories:</span><br><span class="line">keywords:</span><br><span class="line">description:</span><br><span class="line">top<span class="emphasis">_img:</span></span><br><span class="line"><span class="emphasis">comments:</span></span><br><span class="line"><span class="emphasis">cover:</span></span><br><span class="line"><span class="emphasis">toc:</span></span><br><span class="line"><span class="emphasis">toc_</span>number:</span><br><span class="line">toc<span class="emphasis">_style_</span>simple:</span><br><span class="line">copyright:</span><br><span class="line">copyright<span class="emphasis">_author:</span></span><br><span class="line"><span class="emphasis">copyright_</span>author<span class="emphasis">_href:</span></span><br><span class="line"><span class="emphasis">copyright_</span>url:</span><br><span class="line">copyright<span class="emphasis">_info:</span></span><br><span class="line"><span class="emphasis">mathjax:</span></span><br><span class="line"><span class="emphasis">katex:</span></span><br><span class="line"><span class="emphasis">aplayer:</span></span><br><span class="line"><span class="emphasis">highlight_</span>shrink:</span><br><span class="line"><span class="section">aside:</span></span><br><span class="line"><span class="section">---</span></span><br></pre></td></tr></tbody></table>

| 写法 | 解释 |
| --- | --- |
| title | 【必需】文章标题 |
| date | 【必需】文章创建日期 |
| updated | 【可选】文章更新日期 |
| tags | 【可选】文章标籤 |
| categories | 【可选】文章分类 |
| keywords | 【可选】文章关键字 |
| description | 【可选】文章描述 |
| top\_img | 【可选】文章顶部图片 |
| cover | 【可选】文章缩略图(如果没有设置top\_img,文章页顶部将显示缩略图，可设为false/图片地址/留空) |
| comments | 【可选】显示文章评论模块(默认 true) |
| toc | 【可选】显示文章TOC(默认为设置中toc的enable配置) |
| toc\_number | 【可选】显示toc\_number(默认为设置中toc的number配置) |
| toc\_style\_simple | 【可选】显示 toc 简洁模式 |
| copyright | 【可选】显示文章版权模块(默认为设置中post\_copyright的enable配置) |
| copyright\_author | 【可选】文章版权模块的文章作者 |
| copyright\_author\_href | 【可选】文章版权模块的文章作者链接 |
| copyright\_url | 【可选】文章版权模块的文章连结链接 |
| copyright\_info | 【可选】文章版权模块的版权声明文字 |
| mathjax | 【可选】显示mathjax(当设置mathjax的per\_page: false时，才需要配置，默认 false) |
| katex | 【可选】显示katex(当设置katex的per\_page: false时，才需要配置，默认 false) |
| aplayer | 【可选】在需要的页面加载aplayer的js和css,请参考文章下面的音乐 配置 |
| highlight\_shrink | 【可选】配置代码框是否展开(true/false)(默认为设置中highlight\_shrink的配置) |
| aside | 【可选】显示侧边栏 (默认 true) |

注意：我的博客根目录路径为 【C:/Hexo-Blog/blog-demo】，下文所说的根目录都是此路径，将用\[BlogRoot\]代替。

### 5.2 标签页

1.  前往你的Hexo博客根目录，打开`Git Bash`执行如下命令：
    
    <table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">hexo new page tags</span><br></pre></td></tr></tbody></table>
    
2.  在`[BlogRoot]\source\`会生成一个含有`index.md`文件的`tags`文件夹。
    
3.  修改`[BlogRoot]\source\tags\index.md`，添加`type: "tags"`。
    
    <table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br></pre></td><td class="code"><pre><span class="line">---</span><br><span class="line">title: tags</span><br><span class="line">date: 2022-10-28 12:00:00</span><br><span class="line"><span class="section">type: "tags"</span></span><br><span class="line"><span class="section">---</span></span><br></pre></td></tr></tbody></table>
    

### 5.3 友情链接

1.  前往你的Hexo博客根目录，打开cmd命令窗口执行如下命令：
    
    <table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">hexo new page link</span><br></pre></td></tr></tbody></table>
    
2.  在`[BlogRoot]\source\`会生成一个含有`index.md`文件的`link`文件夹
    
3.  修改`[BlogRoot]\source\link\index.md`，添加`type: "link"`
    
    <table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br></pre></td><td class="code"><pre><span class="line">---</span><br><span class="line">title: link</span><br><span class="line">date: 2022-10-28 12:00:00</span><br><span class="line"><span class="section">type: "link"</span></span><br><span class="line"><span class="section">---</span></span><br></pre></td></tr></tbody></table>
    
4.  前往`[BlogRoot]\source\_data`创建一个`link.yml`文件（如果沒有 `_data` 文件夹，请自行创建），并写入如下信息（根据你的需要写）：
    
    <table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br><span class="line">9</span><br><span class="line">10</span><br><span class="line">11</span><br><span class="line">12</span><br><span class="line">13</span><br><span class="line">14</span><br><span class="line">15</span><br><span class="line">16</span><br><span class="line">17</span><br></pre></td><td class="code"><pre><span class="line"><span class="bullet">-</span> <span class="attr">class_name:</span> <span class="number">1</span><span class="string">.技术支持</span></span><br><span class="line">  <span class="attr">class_desc:</span> <span class="string">本网站的搭建由以下开源作者提供技术支持</span></span><br><span class="line">  <span class="attr">link_list:</span> </span><br><span class="line">    <span class="bullet">-</span> <span class="attr">name:</span> <span class="string">Hexo</span> </span><br><span class="line">      <span class="attr">link:</span> <span class="string">https://hexo.io/zh-cn/</span></span><br><span class="line">      <span class="attr">avatar:</span> <span class="string">https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg</span></span><br><span class="line">      <span class="attr">descr:</span> <span class="string">快速、简单且强大的网志框架</span></span><br><span class="line">      <span class="attr">siteshot:</span> <span class="string">https://source.fomal.cc/siteshot/hexo.io.jpg</span></span><br><span class="line">      </span><br><span class="line"><span class="bullet">-</span> <span class="attr">class_name:</span> <span class="number">2</span><span class="string">.友情链接</span></span><br><span class="line">  <span class="attr">class_desc:</span> <span class="string">一些好朋友~~</span></span><br><span class="line">  <span class="attr">link_list:</span></span><br><span class="line">    <span class="bullet">-</span> <span class="attr">name:</span> <span class="string">Fomalhaut🥝</span></span><br><span class="line">      <span class="attr">link:</span> <span class="string">https://fomal.cc/</span></span><br><span class="line">      <span class="attr">avatar:</span> <span class="string">/assets/head.jpg</span></span><br><span class="line">      <span class="attr">descr:</span> <span class="string">Future</span> <span class="string">is</span> <span class="string">now</span> <span class="string">🍭🍭🍭</span></span><br><span class="line">      <span class="attr">siteshot:</span> <span class="string">https://source.fomal.cc/siteshot/www.fomal.cn.jpg</span></span><br></pre></td></tr></tbody></table>
    
    class\_name和class\_desc支持 html 格式，如不需要，也可以留空。
    

### 5.4 图库

图库页面只是普通的页面，你只需要`hexo new page xxx`创建你的页面就行。

然后使用外挂标签 `galleryGroup`，具体用法请查看对应的内容。

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br></pre></td><td class="code"><pre><span class="line"><span class="language-xml"><span class="tag">&lt;<span class="name">div</span> <span class="attr">class</span>=<span class="string">"gallery-group-main"</span>&gt;</span></span></span><br><span class="line"></span><br><span class="line">{% galleryGroup '封面专区' '本站用作文章封面的图片，不保证分辨率' '/box/Gallery/photo' https://source.fomal.cc/img/default<span class="emphasis">_cover_</span>61.webp %}</span><br><span class="line"></span><br><span class="line">{% galleryGroup '背景专区' '收藏的一些的背景与壁纸，分辨率很高' '/box/Gallery/wallpaper' https://source.fomal.cc/img/dm11.webp %}</span><br><span class="line"><span class="language-xml"><span class="tag">&lt;/<span class="name">div</span>&gt;</span></span></span><br></pre></td></tr></tbody></table>

### 5.5 子页面

子页面也是普通的页面，你只需要`hexo new page xxx`创建你的页面就行。

然后使用标签外挂 `gallery`，具体用法请查看对应的内容。

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br><span class="line">9</span><br><span class="line">10</span><br><span class="line">11</span><br><span class="line">12</span><br><span class="line">13</span><br><span class="line">14</span><br></pre></td><td class="code"><pre><span class="line">{% gallery %} </span><br><span class="line">![<span class="string">p1</span>](<span class="link"> https://source.fomal.cc/img/default_cover_1.webp </span>) </span><br><span class="line">![<span class="string">p2</span>](<span class="link"> https://source.fomal.cc/img/default_cover_2.webp </span>) </span><br><span class="line">![<span class="string">p3</span>](<span class="link"> https://source.fomal.cc/img/default_cover_3.webp </span>) </span><br><span class="line">![<span class="string">p4</span>](<span class="link"> https://source.fomal.cc/img/default_cover_4.webp </span>) </span><br><span class="line">![<span class="string">p5</span>](<span class="link"> https://source.fomal.cc/img/default_cover_5.webp </span>) </span><br><span class="line">![<span class="string">p6</span>](<span class="link"> https://source.fomal.cc/img/default_cover_6.webp </span>) </span><br><span class="line">![<span class="string">p7</span>](<span class="link"> https://source.fomal.cc/img/default_cover_7.webp </span>) </span><br><span class="line">![<span class="string">p8</span>](<span class="link"> https://source.fomal.cc/img/default_cover_8.webp </span>) </span><br><span class="line">![<span class="string">p9</span>](<span class="link"> https://source.fomal.cc/img/default_cover_9.webp </span>) </span><br><span class="line">![<span class="string">p10</span>](<span class="link"> https://source.fomal.cc/img/default_cover_10.webp </span>) </span><br><span class="line">![<span class="string">p11</span>](<span class="link"> https://source.fomal.cc/img/default_cover_11.webp </span>) </span><br><span class="line">![<span class="string">p12</span>](<span class="link"> https://source.fomal.cc/img/default_cover_12.webp </span>) </span><br><span class="line">{% endgallery %}</span><br></pre></td></tr></tbody></table>

### 5.6 404页面

主題內置了一个简单的404页面，可在设置中开放。

如需本地预览，请访问 [http://localhost:4000/404.html](http://localhost:4000/404.html)

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br></pre></td><td class="code"><pre><span class="line"><span class="comment"># A simple 404 page</span></span><br><span class="line"><span class="attr">error_404:</span></span><br><span class="line">  <span class="attr">enable:</span> <span class="literal">true</span></span><br><span class="line">  <span class="attr">subtitle:</span> <span class="string">"页面沒有找到"</span></span><br><span class="line">  <span class="attr">background:</span> </span><br></pre></td></tr></tbody></table>


---

