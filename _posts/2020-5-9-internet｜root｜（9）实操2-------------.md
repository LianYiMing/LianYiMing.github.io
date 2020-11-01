---
layout:     post
title:      internet｜root｜（9）实操2
subtitle:   
date:       2020-5-9
author:     廉一鸣
header-img: 
catalog: true
tags:
    - root



---

## internet｜root｜（9）实操2

![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoMgMjEK5GrEtibf5OSoSIMBQRFNA3HxJ7j2LVzfYo71cavcooxrSkhj54BcMIibvFrbA7nMjEG3ibK5g/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)大家好啊，今天咱来讲讲root实操2
如果您是跟着我们的进度看的，那么理论上应该（我就装瞎默认了）刷入了twrp，今天咱就围绕着他来讲一讲
ps：刷橙狐的兄弟也可以
pps:上一期还是忘说了,刷入twrp之后，一定要在左下角高级里边签名boot，这样就能防止它被系统rec再覆盖，因为如果变砖了rec还被系统覆盖的话，这就非常难受，相反的只要能进第三方的twrp，基本上我觉得砖至少我目前救回来了
\-----------------------------------------
1.准备
如果您是纯粹的想要root，一般的twp里边都会带有root的选项， 
![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoMgMjEK5GrEtibf5OSoSIMBQAocMuYI7xSsgQKYrJyUnIflgCXmiczdIDJUPleKRdC3oluicEtU3ibRwg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

因为在这里边貌似没有办法截图，这是在网上找的一个图，在左下角的高级里边基本上都会带入的，并且它会自动给你刷入一个magisk来管理root（并且面具这个软件也会有）
![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoMgMjEK5GrEtibf5OSoSIMBQYDA6V0icOPmcQrBRrhzUMWpV24teG4ib4xOn9nGUuSvoEf8YXuDCRStg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
ps：magisk和面具这个软件以前咱也讲过，一个是安在手机系统里的框架，而一个是管理这个框架的应用
2.如果您是想要刷第三方的rom
\-----------------
ps：一定要谨慎，一定要谨慎，一定要找适配您的机型的系统，不然的话，少则运行卡顿
过则根本开不了机，并且救可能都救不了（99.9999%可以自己救，就是直接在刷机前先准备一下自己系统官方的包，万一出了啥事儿进行下面的清除步骤后再刷入官方系统，至少这个手机算是咬住了
ps：找官方的包与其上网搜，还不如在系统更新的页面，在它更新到一定时间内点击暂停，然后去下载界面，找到那个继续下载，就能在文件管理里找到它了，这算是一个系统的小bug）只能返厂，更别提恢复数据了
1-找rom
各大论坛基本上都有，不过一定要小心，因为真正能自己改出来的高手，万一要给你弄个什么小脚本搞你的数据也算是轻而易举，所以第三方rom一定要谨慎，最好去一些大的网站，比如说什么移动叔叔/线刷宝感觉这两个还是比较全，并且挺安全的![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoMgMjEK5GrEtibf5OSoSIMBQicGWRfo15F6Tewwoyx9zF4pdIV6plVQxXeFlcibARBylH1PwSpupTJ4w/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoMgMjEK5GrEtibf5OSoSIMBQHxrefrchSPxnfY8z58iak72J5DBWQSAhoyJicb35ds2YjXb8SicbOt0bg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
2.-卡刷
刷之前需要确定你手机里没有任何丢失了之后会很恶心的数据，因为刷入新系统的时候手机会被自动格式化，一切都会炸……（注意与twrp里的双清区别，他这里边的双清仅仅貌似是删除data分区）如果有提醒输入data密码，返回不管，后面会有格式化data分区的）
进入twrp后，点击高级，签名boot（无论成不成功，还是为了保险吧），回到rec主界面，找到：清除，格式化data，格式化完成之后返回，然后点进去，貌似是那个高级清除，勾选System，Dalvik/ART，Data，Cache，滑动清除。这样就成功的把这个手机变得系统没有数据也没有了（所以说这样开机是开不了机的）这样就可以为所欲为的刷入其他的东西了
就是如果手机能正常开机就格式化前先把下好的rom包弄到手机卡里边（因为咱刚刚不是格式化手机存储了吗，所以说手机存储上的rom会没），并且就在底下这张张截图的页面内左上角安装就可以把它安装进去了![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoMgMjEK5GrEtibf5OSoSIMBQAocMuYI7xSsgQKYrJyUnIflgCXmiczdIDJUPleKRdC3oluicEtU3ibRwg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
ps：如果卡开机动画的话，这就属于救专了，如果连rec/fastboot（具体的每个厂家进入的方法都不同，不过基本上都是开机键加音量上键或者下键）都进不去，可能就只能用adb线刷，或者其他的比如说9008了（直接百度，懒得搞搬运）这就是属于不兼容，刷入的系统不兼容，只要能回到第三方的rec倒是可以恢复，但是如果刷入的rec都不兼容，可能需要↑
![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoMgMjEK5GrEtibf5OSoSIMBQYpUicYMZRSGm1UPx6ibFUxpPQGFbBz8LEQPsY1xGibYjlBpy92pGv566Q/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoMgMjEK5GrEtibf5OSoSIMBQGeNan9wAQqFrLia6wj6sDfZFHUPBaFuu96ibZRaiaE5wAy6vibWmEibiauYw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)


明天见^0^

