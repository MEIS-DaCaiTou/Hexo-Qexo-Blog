---
title: "Hexo博客搭建基础教程(一)"  # 文章标题
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



## Hexo博客搭建基础教程(一)


## 1.前言

1.  博客搭建过程遇到任何问题，优先在本页面搜索，检查是否已经有该配置教程。
2.  遇到问题可以优先在文章评论区留言，注意留言时请填写正确的邮箱以确保能收到站长的回复。
3.  实在解决不了的问题可添加站长的微信进行交流，备注自己的个人信息。

## 2.环境与工具准备

**本教程主要面对的是Windows用户**

+   操作系统：Windows10
+   Node
+   Git
+   Hexo
+   文本编辑器(强烈推荐VSCODE)
+   GitHub 帐号
+   一个域名（强烈推荐买个域名）
+   云服务器（可选）

## 3.Node的安装

1.  打开Node官网，下载和自己系统相配的Node的安装程序，否则会出现安装问题。下载地址：[https://nodejs.org/en/download/](https://nodejs.org/en/download/)  
    我个人的版本是 12.19.0，目前版本已经更新到19.0.0，按照个人经验，可以选个低一些的版本，可以和我的一样，否则后面会出现各种不兼容的问题！我之前就是安装16的，系统无法识别，如果大家遇到问题建议选个低版本的！历史版本下载页面：[https://nodejs.org/en/download/releases/](https://nodejs.org/en/download/releases/)  
    ![image-20221027173738226](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)
2.  下载后安装，安装的目录可以使用默认目录【C:/Program Files/nodejs/】，也可以自定义路径。  
    这个环境路径切换坑也很多，如果大家C盘空间足够可以直接装C盘，如果想切换其他盘或者把环境遍历切换到自定义路径也可以，具体教程百度(不过坑比较多就是了)!
3.  安装完成后，检查是否安装成功。在键盘按下win + R键，输入CMD，然后回车，打开CMD窗口，执行node -v命令，看到版本信息，则说明安装成功。
4.  修改npm源。npm下载各种模块，默认是从国处服务器下载，速度较慢，建议配置成淘宝镜像。打开CMD窗口，运行如下命令:
    
    <table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">npm config set registry https://registry.npm.taobao.org</span><br></pre></td></tr></tbody></table>
    

## 4.安装Hexo

1.  在`Git BASH`输入如下命令安装
    
    <table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">npm install -g hexo-cli</span><br></pre></td></tr></tbody></table>
    
2.  安装完后输入hexo -v验证是否安装成功。
    

![image-20221027173525181](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)

## 5.Github注册与创建仓库

1.  进入官网 [https://github.com/](https://github.com/)  
    ![Github注册](https://bu.dusays.com/2022/05/12/627d2c0449341.webp)
2.  点击右上角的 Sign up(注册)  
    ![Github注册](https://bu.dusays.com/2022/05/12/627d2c05ee628.png)
3.  填写自己的邮箱、密码、用户名等信息，然后用邮箱验证即可完成。
4.  注册完成后，点击右上角的`+`按钮，选择`New repository`，创建一个`<用户名>.github.io`的仓库。

​ ![image-20221027110619071](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)

+   仓库的格式必须为：`<用户名>.github.io` (注意：前缀必须为用户名，不要等后面404了再来为什么！！！)
+   Description：为描述仓库（选填）
+   勾选 Initialize this repository with a README 初始化一个 [README.md](http://readme.md/) 文件
+   点击 Creat repository 进行创建

​ ![image-20221027111641909](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)

## 6.Git安装

1.  进入官网：[https://git-scm.com/downloads](https://git-scm.com/downloads) ，由于官网下载太慢可以通过淘宝的开源镜像下载 网址：[https://registry.npmmirror.com/binary.html?path=git-for-windows/v2.36.1.windows.1/](https://registry.npmmirror.com/binary.html?path=git-for-windows/v2.36.1.windows.1/) ，下载版本更具自己的需求选择即可。
    
    ![image-20221027111755697](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)
    
2.  下载后傻瓜式安装Git即可，安装的目录可以使用默认目录【C:/Program Files/Git】，也可以自定义路径。
    
3.  点击电脑左下角开始即可看见`Git Bash`。
    

![Git Bash](https://bu.dusays.com/2022/05/13/627d410ddc940.webp)

+   `Git CMD` 是windows 命令行的指令风格
+   `Git Bash` 是linux系统的指令风格（建议使用）
+   `Git GUI`是图形化界面（新手学习不建议使用）

4.  常用命令
    
    <table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br></pre></td><td class="code"><pre><span class="line">git config -l  //查看所有配置</span><br><span class="line">git config --system --list //查看系统配置</span><br><span class="line">git config --global --list //查看用户（全局）配置</span><br></pre></td></tr></tbody></table>
    
5.  配置用户名和邮箱
    
    <table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br></pre></td><td class="code"><pre><span class="line">git config --global user.name "你的用户名"</span><br><span class="line">git config --global user.email "你的邮箱"</span><br></pre></td></tr></tbody></table>
    
6.  通过`git config -l` 检查是否配置成功，至此git安装及配置全部完成。
    
    ![image-20221027112049822](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)
    

## 7.连接至Github

1.  执行以下命令生成ssh公钥，此公钥用于你的计算机连接Github
    
    <table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">ssh-keygen -t rsa -C "你的邮箱"</span><br></pre></td></tr></tbody></table>
    
    之后打开C盘下用户文件夹下的.ssh的文件夹，会看到 id\_rsa.pub
    
    ![公钥](https://bu.dusays.com/2022/05/14/627e87126fc59.png)
    
    用记事本打开上述图片中的公钥（id\_rsa.pub），复制里面的内容，然后开始在github中配置ssh密钥。
    
    ![记事本打开公钥](https://bu.dusays.com/2022/05/14/627e87156038a.png)
    
2.  将 SSH KEY 配置到 GitHub  
    进入github，点击右上角头像 选择`settings`，进入设置页后选择 `SSH and GPG keys`，名字随便起，公钥填到`Key`那一栏。
    
    ![image-20221027112347632](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)
    
    ![image-20221027112416710](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)
    
    ![image-20221027112657256](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)
    
3.  测试连接，输入以下命令
    
    <table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">ssh -T git@github.com</span><br></pre></td></tr></tbody></table>
    
    ![image-20221027112918539](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)
    
    出现连接到账户的信息，说明已经大功告成，至此完成了环境准备工作。
    

## 8.初始化 Hexo 项目

1.  在目标路径（我这里选的路径为【C:/Hexo-Blog】）打开cmd命令窗口，执行`hexo init`初始化项目。
    
    <table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">hexo init blog-demo(项目名)</span><br></pre></td></tr></tbody></table>
    
    ![image-20221027113206776](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)
    
2.  进入`blog-demo` ，输入`npm i`安装相关依赖。
    
    <table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br></pre></td><td class="code"><pre><span class="line">cd blog-demo  //进入blog-demo文件夹</span><br><span class="line">npm i</span><br></pre></td></tr></tbody></table>
    
    ![image-20221027113331624](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)
    
3.  初始化项目后，`blog-demo`有如下结构：
    

![image-20221027113438707](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)

【node\_modules】：依赖包  
【scaffolds】：生成文章的一些模板  
【source】：用来存放你的文章  
【themes】：主题  
【.npmignore】：发布时忽略的文件（可忽略）  
【\_config.landscape.yml】：主题的配置文件  
【config.yml】：博客的配置文件  
【package.json】：项目名称、描述、版本、运行和开发等信息

4.  输入hexo server或者hexo s 启动项目
    
    ![image-20221027113534970](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)
    
5.  打开浏览器，输入地址：[http://localhost:4000/](http://localhost:4000/) ，看到下面的效果，说明你的博客已经构建成功了。
    
    ![博客首页](https://bu.dusays.com/2022/05/26/628e5423df640.webp)
    

## 9\. 将静态博客挂载到 GitHub Pages

1.  安装 hexo-deployer-git
    
    <table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">npm install hexo-deployer-git --save</span><br></pre></td></tr></tbody></table>
    
2.  修改 \_config.yml 文件  
    在blog-demo目录下的\_config.yml，就是整个Hexo框架的配置文件了。可以在里面修改大部分的配置。详细可参考官方的[配置描述](https://hexo.io/zh-cn/docs/configuration)。  
    修改最后一行的配置，将repository修改为你自己的github项目地址即可，还有分支要改为`main`代表主分支（注意缩进）。
    
    <table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br></pre></td><td class="code"><pre><span class="line"><span class="attr">deploy:</span></span><br><span class="line">  <span class="attr">type:</span> <span class="string">git</span></span><br><span class="line">  <span class="attr">repository:</span> <span class="string">git@github.com:Fomalhaut-Blog/Fomalhaut-Blog.github.io.git</span></span><br><span class="line">  <span class="attr">branch:</span> <span class="string">main</span></span><br></pre></td></tr></tbody></table>
    
3.  修改好配置后，运行如下命令，将代码部署到 GitHub（Hexo三连）。
    
    <table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br></pre></td><td class="code"><pre><span class="line">hexo clean &amp;&amp; hexo generate &amp;&amp; hexo deploy  // Git BASH终端</span><br><span class="line">hexo clean; hexo generate; hexo deploy  // VSCODE终端</span><br></pre></td></tr></tbody></table>
    
    +   hexo clean：删除之前生成的文件，若未生成过静态文件，可忽略此命令。
        
    +   hexo generate：生成静态文章，可以用`hexo g`缩写
        
    +   hexo deploy：部署文章，可以用`hexo d`缩写
        
        ![image-20221027113704801](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)
        
        注意：deploy时可能要你输入 username 和 password。
        
        如果出现`Deploy done`，则说明部署成功了。
        
        ![image-20221027113756069](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)
        
        稍等两分钟，打开浏览器访问：[https://Fomalhaut-Blog.github.io](https://fomalhaut-blog.github.io/) ，这时候我们就可以看到博客内容了。
        
        ![image-20221027113923949](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)
        

## 10\. 无法连接至Github的解决方案

注意：当你在与Github进行ssh通信时候出现超时或者是连接被关闭的情况，可以尝试以下解决方案。

1.  挂代理和换网络（这个就不用多说了）
    
2.  [Git问题：解决“ssh:connect to host github.com port 22: Connection timed out”](https://blog.csdn.net/weixin_41287260/article/details/124368189)
    
    这是评论区的朋友提供的，可以解决SSH连接超时等问题
    
3.  开源项目[Github520](https://github.com/521xueweihan/GitHub520)
    
    通过修改Host文件的方法解决访问速度慢的问题
    

连接有效性检验：

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br></pre></td><td class="code"><pre><span class="line"><span class="comment"># 任选其一即可</span></span><br><span class="line">ping github.com</span><br><span class="line">ssh -T git@github.com</span><br></pre></td></tr></tbody></table>



* * *

---

