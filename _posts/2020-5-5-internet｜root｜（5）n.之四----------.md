---
layout:     post
title:      internet｜root｜（5）n.之四
subtitle:   
date:       2020-5-5
author:     廉一鸣
header-img: 
catalog: true
tags:
    - root



---

## internet｜root｜（5）n.之四

接着昨天的（貌似昨天也是这么说的……）继续聊

![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoM1RsE6UibVibAPqPCqG3ibImlFlvEeVP30D3LwkukicYOafdSS684twY8HZWibFIUSnVFdtLup17GSEmQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



\------------------------------------------------------------------------

1.超级用户权限（Superuser）
这是无意中刷论坛刷到的，然后发现就是这个

\------------------------------------------------------------------------

2.magisk/Xp（xposed）框架/supersu讲解/太极

前三个基本（面具一定程度不用）都是要通过刷机才能刷进手机的，类似于框架的东西，都是可以改写系统文件，从而达到很大程度上的自定义功能（包括修改软件开外挂，或者微信自动抢红包，修改QQ的手机型号，等等等等，当然最主要的还是提升系统功能吧，用这些都可以达到，不过三者又各不相同，下面来讲一讲吧）

首先先来讲讲supersu

![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoM1RsE6UibVibAPqPCqG3ibImlcwSrBjKZAZ8DcFickvAvm9l56QujnziaNxS8I3Z4Xf6l9WibHiaHgbVVYQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

"SuperSU权限管理是一款针对Andriod 设备Root权限管理的工具型应用，分为APK(安卓手机应用)和ZIP（文件压缩包）两个版本。ZIP为用户提供了Root的安卓设备的解决方案，市面上全部机型的Root权限获取与管理 ；APK主要功能是对已获得Root权限的设备进行进行权限管理。"

emmm跟底下要讲的面具有点像，都是root权限管理的软件，能不能安装模块我倒是不知道，只不过据说自从作者跑路（貌似是被大公司收购了）好像就再没有更新过，所以现在基本上magisk没对手了

\------------------------------------------------------------------------

就是再看看（magisk）

![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoM1RsE6UibVibAPqPCqG3ibImluUTj72EgAib72cK07aaUCHAKRWeA3K4vUT4yjIhCEzTaxIkO4ogbmeA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

这是在supersu走向衰亡了之后，迅速崛起的神器，它不仅可以给每个需要的软件管理授权root，并且还有一堆功能，灰常灰常带劲（可以安装一些大佬造的模块（用来达到各种各样的目的比如说蚂蚁花园自动偷个能量啥的……）并且更重要的是因为模块变砖了（不兼容就会这样），非常容易修复（mm管理器），省得光备份就浪费很长时间，总之基本上能选择他还是选择他了）

\------------------------------------------------------------------------

xp框架

![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoM1RsE6UibVibAPqPCqG3ibImlmQFE0GVQ7KAqIiaxibUI3MnXYEz3oXG1sZpwVe5YoVBCOfOqibvbSBjLw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

怎么说呢，跟面具有所相似的也有所不同

相似：

1.都能达到root管理的功能。

2.都可以安装模块

不相类似

1.magisk目前是功能最多的，并且也能保险的。

ps:因为它的原理是在系统之外，您可以理解成把系统切为两半，一半是真系统，一半是他切出来的假系统，在假系统里咱可以为所欲为，并且万一出了问题也可以先切回真系统，不至于真正变砖

2.对了，还有太极这个应用。他是类似于虚拟机。

ps:虚拟机就是一种软件，可以在你手机里运行另外一个系统

太极是可以模拟出来xp框架的，并且是只在这个APP里用的，不会在整个的系统里用，毕竟xp框架是直接在真系统里修改，万一变砖了咱能不能救回来，真的很不好说😭

![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoPF37WkaiauBf6BBEjUL0yrd7tM7DWdYu1icRGQ2FibyDOpUlOhVg7Edvpxvoe2rZ6l3kE5Kic1f2XzIA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

pps:xp与面具可以一起用，到时候会放链接，就是在面具里安装一个模块就可以xp与面具共存（当然原因就是二者加在一起就无敌了（模块各领风骚），整个的手机为所欲为）

3.面具和太极都是可以不用刷机的（当然面具，不刷机的前提是得root）太极是不用root直接就可以用，所以很强悍，xp框架不借助面具的话可能要刷🙃

\-----------------------------------------------------------

emmmm今天貌似晚了，早点碎吧^0^

