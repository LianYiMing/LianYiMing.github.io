---
layout:     post
title:      internet｜root｜（7+8）n.之6+实操之1
subtitle:   
date:       2020-5-8
author:     廉一鸣
header-img: 
catalog: true
tags:
    - root



---

## internet｜root｜（7+8）n.之6+实操之1![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoNBQ9ibcl9ibWpWRTiaNENCBefxmopE0Eib1ouXrCuxicibk3Z6GDAbxzhuuicwoW1ibF7mdtWxBibLOsTE9rg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

emmmm大家好啊，今天啊，这一期会弄上两期的内容，主要还是因为昨天晚上手机一直砖到了11点，愣是到眼睁睁的看着到了12点也没来得及救回来，sorry

\-----------------------------------------------------------

磁盘

这就相当于是我们手机的存储了，因为咱的手机都是此存储的，格式化磁盘也就是类似于清空手机所有内容恢复出厂设置

![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoNBQ9ibcl9ibWpWRTiaNENCBef0EHBMaiaDcVkicUjzEznP8qvMDBX8ybyZbicW7BLI0UWINRzVUpqhFYyg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

\-----------------------------------------------------------

梯子｜tz｜梯梯｜翻墙｜IP address

这4个指的都是vpn，就是说使你用外国的网络上网，从而可以访问一些老外的网站或者使用他们的应用（比如说即使刷机刷了谷歌也很难让他身份核对成功，谷歌账号是登录不了的，就只能这样来）网上应该有几个免费的服务器，不过一般咱不会用到

ps:vpn须谨慎，because以前有很多惨人挂梯看歪果av网站and凉了的，，，，，，，

![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoNBQ9ibcl9ibWpWRTiaNENCBefsX5AOSpFUtAiaTNPiaNIZ16vjyqzjEQuIg4OkBSaZpcWJDVPfhgwxncw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

\-----------------------------------------------------------

谷歌三件套

貌似是谷歌服务框架，谷歌商店and谷歌服务，用了这三个，基本上就可以用一些需要谷歌框架才能运行的软件了。（当然谷歌play貌似还是用不了，好像要爬梯）

ps:有个软件好像叫go谷歌安装器的好像可以能一键安装

pps:我是直接刷了个谷歌rom（pixel），然后手机自动就植入了谷歌的服务

![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoNBQ9ibcl9ibWpWRTiaNENCBefSaQdvooia2v2iaeia3bfDy7khrdKUg2OKrrIwolmwiaV0AsBwZsrCVJ8Qg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

\-----------------------------------------------------------

adb

这个是指的在电脑上输入代码，从而操纵手机的一种方式，因此他叫做Android Debug Bridge（安卓调试桥），并且这是目前我的最后希望，因为9008貌似需要有官方的验证。手机一旦没有第三方rec（我的是不能插SD卡的机）基本就是废掉的，只能用adb直接刷机或者把安装包发过去

![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoNBQ9ibcl9ibWpWRTiaNENCBefl3f0IVaBuib8fOOicb3X4mY40B9bSORQhD8EyIaCa1XL1VX6suOHyAeQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

\-----------------------------------------------------------

要不咱明天再聊？

![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoNBQ9ibcl9ibWpWRTiaNENCBefibXn7AR2HZsNick38J0b09pkYLibrItTPPgJQg7a7Ee6VHs9OIpqqkzTQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

\-----------------------------------------------------------

咳咳，这是第二天

![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoMgb89KPBf5NROtzWhf8b09siahK3kSy2v9fXdKtgYC0ShHic56icxxnK1TiaicHDpfPGhfzZggibbFiagMQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

今天咱就来正式的讲一讲搞机吧（话说原来貌似只打算讲root的来着……）

那咱就开始吧。。。

![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoMgb89KPBf5NROtzWhf8b09tCMxSFSf6icNgX7jR26NHaOkrZfNicfLpjUrBg4xSNmwrGjCjGG4jXlA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

1.解bl锁

“bl锁即BootLoader，Bootloader是嵌入式系统在加电后执行的第一段代码（所以说除非你不用电……），在它完成CPU和相关硬件的初始化之后，再将操作系统映像或固化的嵌入式应用程序装在到内存中然后跳转到操作系统所在的空间，启动操作系统运行。”所以说必须要解锁，如果不解锁的话→没有办法刷第三方rec｜rom→没有办法干一切，所以说第1件事就必须要解这个破锁。

![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoMgb89KPBf5NROtzWhf8b09z3UBSqOeuCdTrEzydSCATGo5LgmbsSBNO9FPopylYl2icGmYJKPIhlg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

其他手机偶倒是不机道，不过小米手机:

在基本参数里边点MIUI系统5次

![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoMgb89KPBf5NROtzWhf8b09dAH4ExEwu1uyk1V7NGib0xZkBABXm6gqtGf2xtu7cgmToeiayPy9vm8Q/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)


点击5次就会有开发者设置，在更多设置里边出现

![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoMgb89KPBf5NROtzWhf8b09bZ3ia0TV2ibCTxWYMxxpL6q8sicMCHXr7mgcJk3Nf7vIYvXQxgiaFtBSuQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

然后就会找到设备锁定

![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoMgb89KPBf5NROtzWhf8b09kYicd4oiaNSTjiaYC4Gibtq6aR2MpVic2Xtvm9PGVTZuE1vuSjDbrQzeLgA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoMgb89KPBf5NROtzWhf8b09z3UBSqOeuCdTrEzydSCATGo5LgmbsSBNO9FPopylYl2icGmYJKPIhlg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

然后底下进入官网的网址，用电脑进行绑定账号绑定解锁就可以了

ps:貌似一个账号一年只能解锁三台设备，一台设备解锁了之后就算退出账号也无所谓，还是解锁状态

pps:解锁了之后会有unlocked

![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoMgb89KPBf5NROtzWhf8b09ArC2M5sr8YBpGpC12SYjugicFUicmsYEYJ7DymU1GXmvodVe3J7kb02w/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

2.刷第三方rec

刷入第三方rec的方法主要有三种：

一、Fastboot模式下刷rec（最常用方法）

二、高通QPST线刷rec

三、Recovery模式下刷入twrp的zip包和img镜像

这几个操作起来感觉还是非常不友好，最推荐的还是1.https://card.weibo.com/article/m/show/id/2309404160776561631202

微博上一位大佬弄的用，只要咱解了锁

只用一个电脑，就可以实现自己的零操作一键第三方rec

2.

![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoMgb89KPBf5NROtzWhf8b09LLRG6wM3RkY9BicZMZNozEsUkUWPlhbibeDKFAhzLGm6RqP1YMicPRvtg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

🙃

\-----------------------------------------------------------

戛然而止。。。。

