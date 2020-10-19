
![](https://raw.githubusercontent.com/lianyiming/lianyiming.github.io/master/img/readme-home.png)

[![](https://img.shields.io/github/stars/lianyiming/lianyiming.github.io.svg?style=social&label=Star)](https://github.com/lianyiming/lianyiming.github.io)
[![](https://img.shields.io/github/forks/lianyiming/lianyiming.github.io.svg?style=social&label=Fork)](https://github.com/lianyiming/lianyiming.github.io)
[![Twitter](https://img.shields.io/twitter/follow/agzxlym.svg?style=social&label=Follow)](https://twitter.com/agzxlym)
 [![Contributors](https://camo.githubusercontent.com/b3541883c2eedc105a496d16712ccd91baad275a/68747470733a2f2f62616467656e2e6e65742f6769746875622f636f6e7472696275746f72732f616e7562686176737269766173746176612f617765736f6d652d75692d636f6d706f6e656e742d6c696272617279)](https://github.com/LianYiMing/lianyiming.github.io/graphs/contributors)
 [![Gitter](https://img.shields.io/gitter/room/lianyiming-github-io/main.svg)](https://gitter.im/lianyiming-github-io/community)
[![Awesome](https://camo.githubusercontent.com/1997c7e760b163a61aba3a2c98f21be8c524be29/68747470733a2f2f617765736f6d652e72652f62616467652e737667)](https://awesome.re/)
![GitHub tag](https://img.shields.io/github/tag/meteor/meteor.svg)
![GitHub release](https://img.shields.io/github/release/facebook/react.svg) 





### [查看博客戳这里 👆](https://www.lianyiming.com)



## 5分钟搭建你の博客

* 介绍
	* [网站](#网站)
	* [开始](#开始)
	* [写博文](#写博文)
        * [HTML5 演示文档布局](#keynote-layout)



### 网站
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

介是一个高度集成的，统一控制的网站模板
将源代码fork到你的仓库里
只用动一动config文件里的几个参数。
就可以迅速自定义出你想要的博客了呢 ฅ( ̳• ◡ • ̳)ฅ


### 开始
[![HitCount](http://hits.dwyl.com/lianyiming/lianyiminggithubio.svg)](http://hits.dwyl.com/lianyiming/lianyiminggithubio)
修改 `_config.yml`来搭建自己的博客:

```
# Site settings
title:
等等等等....
```
总之在这个文件里会有每一条详细的注释，根据它修改就可以了呢
### 写博文

要发表的文章一般以 **Markdown** 的格式放在`_posts/`文件夹里
可以去学一学markdown的语法，但是会发现每一篇markdown上面还有几行这个↓
```
---
layout:     post //不能动
title:      //文章的标题
subtitle:   //文章的副标题
date:      //文章的日期格式一般是2020-10-1
author:     //作者名
header-img: //这是头图，输入绝对地址，比如说img/1.jpg
catalog: 	 true//也就是文章右边的摘要
tags:
    -       //输入文字就行，这里是标签，类似于文章的分类
---

```


### Featured Tags

看到这个网站 [Medium](http://medium.com) 的推荐标签非常的炫酷，所以我将他加了进来。
这个模块现在是独立的，可以呈现在所有页面，包括主页和发表的每一篇文章标题的头上。

### Keynote Layout

HTML5幻灯片的排版：

![](https://camo.githubusercontent.com/f30347a118171820b46befdf77e7b7c53a5641a9/687474703a2f2f6875616e677875616e2e6d652f696d672f626c6f672d6b65796e6f74652e6a7067)

这部分是用于占用html格式的幻灯片的，一般用到的是 Reveal.js, Impress.js, Slides, Prezi 等等.我认为一个现代化的博客怎么能少了放html幻灯的功能呢~

其主要原理是添加一个 `iframe`，在里面加入外部链接。你可以直接写到头文件里面去，详情请见下面的yaml头文件的写法。

```
---
layout:     keynote
iframe:     "http://huangxuan.me/js-module-7day/"
---
```

iframe在不同的设备中，将会自动的调整大小。保留内边距是为了让手机用户可以向下滑动，以及添加更多的内容。


### Comment

博客支持

1——[Disqus](http://disqus.com) 评论系统

2—— [Gitalk](https://gitalk.github.io/) 评论系统，[支持 Markdwon 语法](https://guides.github.com/features/mastering-markdown/)，cool~

3——Valine评论系统，及其简洁易管理

> #### Disqus
>
> 优点：国际比较流行，界面也很大气、简洁，如果有人评论，还能实时通知，直接回复通知的邮件就行了；
>
> 缺点：评论必须要去注册一个disqus账号，分享一般只有Facebook和Twitter，另外在墙内**不能访问！！！**

> 上传的图片最好先压缩，这里推荐 imageOptim 图片压缩软件，让你的博客起飞。

但是需要注意的是本模板的标题是**白色**的，所以背景色要设置为**灰色**或者**黑色**，总之深色系就对了。当然你还可以自定义修改字体颜色，总之，用github pages就是可以完全的个性定制自己的博客。

### SEO Title

我的博客标题是 **“廉一鸣的博客”** 但是我想要在搜索的时候显示 **“廉一鸣的博客 | LY Blog”** ，这个就需要 SEO Title 来定义了。

其实这个 SEO Title 就是定义了<head><title>标题</title></head>这个里面的东西和多说分享的标题，你可以自行修改的。

### 关于收到"Page Build Warning"的 Email

由于jekyll升级到3.0.x,对原来的 pygments 代码高亮不再支持，现只支持一种-rouge，所以你需要在 `_config.yml`文件中修改`highlighter: rouge`.另外还需要在`_config.yml`文件中加上`gems: [jekyll-paginate]`.

同时,你需要更新你的本地 jekyll 环境.

使用`jekyll server`的同学需要这样：

1. `gem update jekyll` # 更新jekyll
2. `gem update github-pages` #更新依赖的包

使用`bundle exec jekyll server`的同学在更新 jekyll 后，需要输入`bundle update`来更新依赖的包.

> Note：
> 可以使用 `jekyll -s` 命令在本地实时配置博客，提高效率。详见 [Jekyll.com](http://jekyllcn.com/)

参考文档：[using jekyll with pages](https://help.github.com/articles/using-jekyll-with-pages/) & [Upgrading from 2.x to 3.x](http://jekyllrb.com/docs/upgrading/2-to-3/)


## 致谢
1.感谢 IOS工程师大佬——邱百莹
2.感谢 大佬H-u-x

## License

遵循 MIT 许可证。有关详细,请参阅 [LICENSE](https://github.com/lianyiming/lianyiming.github.io/blob/master/LICENSE)。

