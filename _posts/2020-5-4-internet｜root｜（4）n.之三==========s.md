---
layout:     post
title:      internet｜root｜（4）n.之三
subtitle:   
date:       2020-5-4
author:     廉一鸣
header-img: 
catalog: true
tags:
    - root



---

## internet｜root｜（4）n.之三



![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoM1RsE6UibVibAPqPCqG3ibImlo5fBFkOYh2WQvMiceoJW73KKrwNWdsQ6ZXvqGjzQYpofxAeVOmLhj9A/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

Hi，大家好啊，今天继续讲一讲关于搞机的名词吧

\------------------------------------------------------------------------

1.清

Ps：还是因为种类比较多，且容易搞，混在讲之前先给大家提醒一下，一般救砖只需要用到三清就可以了（实在不行清除data分区，基本上穿就能救回来）（emmm当然面具模块炸了还是mm管理器。之后吧，挖，，，，，）

“首先手机有恢复出厂设置，双清，三清三种清除手机的方式

恢复出厂设置

很简单啦，就是删除了手机里存储的东西，比如软件，歌曲，视频，通话记录等等，把手机恢复为出厂时的状态。 这个在手机设置里就可以操作了。但是好像如果清除的时候不选择清除内部储存，是不会清除内存卡的。如果在这之前你备份了手机数据，也是不会清除的。

![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoM1RsE6UibVibAPqPCqG3ibImljC8ia3uicqrFVTRO2RMroxaWQWickibLqkncVBbgsUKzCFtxQ8L8WktUOQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

然后双清，

一般是系统出现问题的时候用的，比如什么自带软件不能用了什么关机重启也不能解决的时候，就用双清了。所谓的双清就是清除CACHE分区和恢复出厂设置，这就清除的比较彻底了，不管你手机里有什么，全部都清除，除了系统不变（我插一句哈，格式化data貌似就是直接干掉系统，所以……系统砖这样救）

完全就是刚买来的样子

如果你要备份的话，只能把数据备份到其他设备上，备份到手机上完全没用的。然后小米手机双清的操作方法是关机，同时按住音量 键和电源键，直到他出现recovery模式，这个就可以双清了，此时用音量 -键上下选择，电源键确定。清除CACHE分区和恢复出厂设置各操作一次，然后重启就好了。

![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoM1RsE6UibVibAPqPCqG3ibImlu4CFe4UCiaicBktbm9xGWYyLSBwibqo6JDUiceee91BjjavibvXoAnaxTwA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

然后三清

我也不太懂，不过应该是清除recovery中存在三个选项：清空缓存、清空用户数据和清空所有数据。操作的话，就是关机以后，同时按住音量上键、音量下键、开机键 ，待手机震动后松开关机键（音量上键、音量下键继续保持按住）。进入之后选择“缓存”、“用户数据”、“其他数据”就行了

感觉手机电池出问题了可以四清，小白我表示不会……:-)

不过至少我现在没有用到٩(͡๏̯͡๏)۶

![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoM1RsE6UibVibAPqPCqG3ibImlCbFQ9PmVXaLF0rpM6s0I9v0aWNgrmPx7W2j1f9Xjm91azibiceUULvDg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

ps：底下是进入第三方rec清除对应的磁盘区域，从而达到效果的对照表

双清:

Dalvik/ART Cache

Cache

其目的就是清除分区以及数据而已，简称重置手机。

三清:

Dalvik/ART Cache

Cache

Data

刷机前基本上必选三清！目的是新系统的兼容性达到最佳。

四清:

Dalvik/ART Cache

Cache

Data

System

四清针对版本差异过大的！

重要！四清后不刷入系统无法开机进系统！！只能电脑刷或者储存卡刷，请谨慎！

ps：就是因为系统没了……所以进不了

![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoM1RsE6UibVibAPqPCqG3ibImlpBZqEIp25ngkIdgynYoK5kLaqyYsVAUSNSEdWibEtpdIYDwPWLHJH1A/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

五清:

Dalvik/ART Cache

Cache

Data

System

Internal Storage（内置储存）

一旦选了这个清除，那手机内置存储上的东西就都没有了！就不能从手机选择卡刷包了！

pps：sd卡好像可以叭

六清:

Dalvik/ART Cache

Cache

Data

System

Internal Storage（内置储存）

USB OTG

六清清除电脑OTG传的升级包文件（感觉一般用不上）

![img]()

\------------------------------------------------------------------------------------------------------------------------------------------------

2.OTA

～OTA是什么

　　OTA是英文全称『Over-the-Air Technology』的缩写，翻译过来的中文含义也就是『空间下载技术』的意思

呸，神马玩意，给老子说人话

～人话解释：

直白的说，OTA升级就是在线升级手机系统的意思。

　　比如，苹果经常会针对iPhone/iPad设备提供新iOS系统版本推送，用户可以进入手机设置，软件更新检测是否有可用系统更新，如果有可用更新，用户可以直接点击在线升级，至此就可以将iPhone/iPad设备升级到最新的iOS系统

再直白：说继续白了，就是平常在手机设置里你能看到的系统更新（并且一般都会勾选自动更新，所以说咱一般也不会发现，不过这样的话就只能更新你原来的系统，你就不能达到刷入第三方系统的需求）

ps：如果你刷入的是官改，或者又刷入了其他东西（比如说面具或者xp框架之类的）只不过不是系统——可以跟原来的系统兼容，但是系统如果自动ota更新了之后，很有可能也是砖（因为自动ota更新，很有可能是一下子蹦到下一个安卓版本的，就是因为你说进去的包跟你现在的安卓版本兼容，但是下一个很有可能就不兼容了）





～OTA升级缺点

　　OTA升级没有明显缺点，不过升级过程中会下载一些升级包，会占据一些手机内存存储空间，另外如果手机系统非常卡，OTA升级系统也解决不了卡问题，但是如果通过刷固件升级，可以将系统恢复到最初的纯净状态，对系统流畅性有一定帮助，只不过刷机升级比较麻烦，并且会清空手机数据。 

![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoM1RsE6UibVibAPqPCqG3ibImlj3sbeKb71GymtnTLyNQ3Il8iatDtkVI8rrXwmRvMo8Mw48LbrjOcH6A/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

\------------------------------------------------------------------------------------------------------------------------------------------------

3.为什么一键root不管用

 记得好多年前，快上初中那会儿，倒是非常想root，然后就各种的找方法，最后发现有这种一键root的软件





![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoM1RsE6UibVibAPqPCqG3ibImlicBvpiaDXiatkb4Jz6zicML1aicowOCG4187KrziaeXwPMhnwsS6OTk2DzpA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

老眼熟了这玩意……

听上去一键当然很好了，不过这也是最简单的一种方法

but

在安卓4/5之前的时候，也许还有机会找到系统的缺口，用软件在不刷机的情况下root（当然小米系统如果你是内测用户的话，可以直接切换开发版，然后用在安全中心里面切换root，这也算是一种不用刷机的方法），但是就我现在用的安卓Qand基本上所有人用的都是安卓P

and↓because：

PS：安卓p是18年的安卓9

![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoM1RsE6UibVibAPqPCqG3ibImlyY9t9luRqktCXRxSj5bkRkOYcYzxnN46iaKV8Gfz6ibUN70rnuwjJUsg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



Q是19年9.10号（好像是这年份）的安卓10

![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoM1RsE6UibVibAPqPCqG3ibImlLLW4gVXCbjUCawI7JyUBPbYq3CyKtmnGkh92FLUDuVLXFQic0QdRT9w/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

所以说既然都已经差了这么多代了，现在这种软件基本上都转型成了root管理（就是因为现在系统做的越来越完美，通过漏洞来软件root，貌似已经不可能了）

PPS：root之后有一些需要root权限的软件就会申请，这时候就必须（应该是必须吧）要下载一些能够管理root权限的软件（不然的话，随便来一个恶意软件，所有你手机的东西such as：钱，账号，看过那个网站ヽ(#`Д´)ﾉ，等等等等100%凉了）咱下期再来讲一讲软件吧，Root管理软件也挺重要的哼:-)

\------------------------------------------------------------------------------------------------------------------------------------------------

又感觉写了一会儿，有点力不从心，

要不待我酝酿酝酿，咱明天再聊……？:-)

