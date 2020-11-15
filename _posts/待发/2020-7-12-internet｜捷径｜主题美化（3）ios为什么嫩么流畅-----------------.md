---
layout:     post
title:      internet｜捷径｜主题美化（3）ios为什么嫩么流畅
subtitle:   
date:       2020-7-12
author:     廉一鸣
header-img: 
catalog: true
tags:
    - 主题美化
    - IOS

---

## internet｜捷径｜主题美化（3）ios为什么嫩么流畅

![img](https://mmbiz.qpic.cn/mmbiz_gif/tMsLbdfwxoM12GmQGZYFy7azn1RM2Izncuqicg2azuCibJyPB4QUKslUmRtlYYXibScaxKCGx7ebczkJLq5mQWhJg/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)
![img](https://mmbiz.qpic.cn/mmbiz_png/tMsLbdfwxoNr19BkJJ802uHqUwMTCa8sD83Ie6fa9CBibdfXsibM80AF8y8NuvrAHf8EyvFX4ATkrrm4aSx31URw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)大家好啊今天继续聊主题美化，

看到题目应该知道我要say什么了

众所周知（好家伙咋又是这句话……）安卓跟iOS比起来动画太僵硬，体验极差，今天就聊聊介个吧，也算是给之后主题美化做个铺垫

![img](https://mmbiz.qpic.cn/mmbiz_png/tMsLbdfwxoNr19BkJJ802uHqUwMTCa8sHP2wo5cZWH6lBLJTQBZnlT8FkhbmoBnLhxNP7Jc2KhZHPWvu6XlsAQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)





![img](https://mmbiz.qpic.cn/mmbiz_png/tMsLbdfwxoPvhibcLnC5hTcXqKITTp19OH29NLiam9n4fQKickXsBhK690REU4AB7V3lQCIYMvKB7L1fbALqaCoAw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

***区别***

![img](https://mmbiz.qpic.cn/mmbiz_png/tMsLbdfwxoM12GmQGZYFy7azn1RM2IznibrWgBLOicIoeicsg3LGoSS6wTeO5SJomic3dofibictDVGkkudHjOHZekDA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

首先Android应该不用赘述吧-----虽然有动画但效果太生硬，

对比iOS的顺滑(我咋想到了德芙，，，，，，)不堪一击(记得啥时候看见一个测试调查是什么百分之59的安卓用户都换iOS后觉得体验提升)

找了个iOS动画演示视频（好简陋……）

http://33h.co/d792

总之就是吊打











![img](https://mmbiz.qpic.cn/mmbiz_png/tMsLbdfwxoPvhibcLnC5hTcXqKITTp19OAGQ6v3CMNd82aSzq3ib9HJibexbJUfTD5lLKgnnJicYrmOlSF7BtnrbBg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

***why\***

![img](https://mmbiz.qpic.cn/mmbiz_png/tMsLbdfwxoM12GmQGZYFy7azn1RM2IznibrWgBLOicIoeicsg3LGoSS6wTeO5SJomic3dofibictDVGkkudHjOHZekDA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



1. 首先还是产品定位不一样，安卓讲究开放性和包容性，而苹果则致力于提升用户使用感，无论是系统[ui](https://mp.weixin.qq.com/s?__biz=MzI4Nzc2MzA3OQ==&mid=2247484221&idx=2&sn=6182e46f0342d53f24b93e25f9033650&scene=21#wechat_redirect)动画或者是它独特的生态机制，都打造了一个很注重体验的苹果生态。而安卓也是近几年才开始重视动画体验，起步较晚，所以比较（不只是比较！）垃圾（and谷歌原厂做的动画还是没有国内的手机厂商做的好，但是国内的手机厂商也是在[原生系统](https://mp.weixin.qq.com/s?__biz=MzI4Nzc2MzA3OQ==&mid=2247483952&idx=2&sn=a0fd2a36cd857b1ab821ba18d829c1f3&scene=21#wechat_redirect)（安卓[开源](https://mp.weixin.qq.com/s?__biz=MzI4Nzc2MzA3OQ==&mid=2247483869&idx=2&sn=942ca99c2926af50fd37ce5049c954fd&scene=21#wechat_redirect)也是这俩的区别）上再开发出来的，所以各大厂商再开发的话～还是真的难（不过深度定制的MIUI做的还是挺奈斯的（代价就是丧失了很多原生的功能，毕竟人家深度嘛……）））

   ![img](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)
   iOS壁纸

   

2. 大佬给的：是因为安卓和iOS的渲染机制不同——这也是安卓没有iOS流畅的根本原因。iOS的UI渲染采用的是实时优先级，而安卓的UI渲染是遵循PC模式的主线程普通优先级。简单的说就是，iOS对屏幕反应的优先级很高，用户只要触摸屏幕，系统就会最优先处理屏幕显示这个层级，马上给出动画效果，然后才处理媒体、服务和核心的架构等；而安卓则是追求进程优先，触摸屏幕后的手机屏幕显示和动画效果的优先级放在后面。举个例子：比如安卓手机和iPhone同时打开相同的网页，安卓手机就会直接将整个网页全部加载同时渲染超文本——这无疑是增加了处理器的压力。在iOS中，UI渲染过程具有绝对的优先等级：当用户接触到iPhone的触摸屏后，iOS中所有的进程都将停止，UI线程拦截所有的事件，系统会将所有资源用于渲染UI的过程，以保证用户界面的实时渲染优先级。而在安卓系统中，UI渲染过程的优先级别却没有那么高，也就是说当你触摸安卓手机屏幕时，系统后台的程序并没有完全停止，而是依然在继续运行中。这就是安卓和iOS在流畅度上差别的最主要原因了。

   总之就是系统and硬件对于动画的原因

   ![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoNHzfqPOh1ibNq90M4nvtoPRn7BLvV8B94ekdVgXvSJ4Drs19wOwbuJ33KpqsATJGn3QD1xXUJHEYQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

目前的见识就是这些了叭，明天接着聊聊具体差异吧***![img](https://mmbiz.qpic.cn/mmbiz_png/tMsLbdfwxoM12GmQGZYFy7azn1RM2IznibrWgBLOicIoeicsg3LGoSS6wTeO5SJomic3dofibictDVGkkudHjOHZekDA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)\***



![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoPvhibcLnC5hTcXqKITTp19Os0eaE28ibFHd1diborCdq4BOb32R37jcoPQmJibxk3ibbS3xQp2L4TXicvg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
*扯√点有意思的*

![img](https://mmbiz.qpic.cn/mmbiz_png/tMsLbdfwxoPvhibcLnC5hTcXqKITTp19Ovpehh5NLA7iby74dePuZNdVwMfh4UKhoyklYRR7ODOtmvbaaeBdf4Og/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![img](https://mmbiz.qpic.cn/mmbiz_png/tMsLbdfwxoNr19BkJJ802uHqUwMTCa8sHP2wo5cZWH6lBLJTQBZnlT8FkhbmoBnLhxNP7Jc2KhZHPWvu6XlsAQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![img](https://mmbiz.qpic.cn/mmbiz_gif/tMsLbdfwxoNr19BkJJ802uHqUwMTCa8sOXAZuEvTzIUvibjyVAlfEZsQLY2X3fcOFZg9Es1rBuEQmZyVSFCMAnA/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)



*