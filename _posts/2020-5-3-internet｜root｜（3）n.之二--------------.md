---
layout:     post
title:      internet｜root｜（3）n.之二
subtitle:   
date:       2020-5-3
author:     廉一鸣
header-img: 
catalog: true
tags:
    - root



---

## internet｜root｜（3）n.之二

![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoPPFgMVVic2oEJ4twbUJSXeiaw8MB7ntBk8saNeDbj5La3HzBWYsW2CJD2ia7dNrNMKDuZhrFKic8WgkA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

大家好啊，今天接着昨天咱再来讲一期的名词

ps:

1.昨天忘说了fast boot，很多论坛上的大佬会把它简写为fb

2.并且rec之所以叫recover模式（翻译过来就是恢复模式），就是because咱可以从这一步的恢复出厂设置，简称双清（因为恢复出厂设置，感觉好像还没这个弄得彻底，不过最多貌似有六清:-)明天会讲）

\------------------------------------------------------------------------

1.bl锁

![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoPPFgMVVic2oEJ4twbUJSXeiaEic9Qvtn7R49Zpy1Iibwuwicd7jmm1Obx5UbLIGytbOv8YIOOeDldsibpg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

是bootloader锁的简称，Bl锁的作用主要是防止系统被恶意篡改以及系统的安全性。（就比如说我————一个小白，只要你bl锁解开了，我就可以任意的对你的手机做出操纵，不到一分钟就可以把你的锁屏干掉，刷你的卡）：结果发现tm没钱……

but

正因为他很有用，所以一般的系统都会把它锁住（解锁之后再讲不能跑题……主要还是今天懒得写了:-)）

ps:

1.一加万岁，直接可以一键关bl锁。

2.小米需要借助电脑，用他官方的开锁教程就可以解开

3.ov/emiui（Oppo vivo和华为）貌似……我记得有壮烈殉机的战士，不过网上应该也有会的大佬，大家有兴趣一定要去搜搜

4.其他机型因为主要还是因为手里这是小米，就没怎么再看，各大论坛应该都有教程

\------------------------------------------------------------------------

原理：

“作者：骑个龙咚咚锵

来源：知乎

android系统的启动或更新过程大致如下:正常启动: 芯片内部固化的BootROM -> Bootloader -> Boot.img (Linux kernel)-> system.img(Android)OTA刷机包更新: Bootloader -> recovery.img -> 更新OTA刷机包fastoot刷机: Bootloaer->烧写分区镜像BL锁一般是锁两个方向:1. Bootloader会去检查它加载的镜像boot.img或recovery.img的签名信息，这个签名只有手机原厂能做出来。修改过后的或第三方镜像的签名不存在或无效，Bootloader会拒绝继续启动。boot.img会去检查system镜像签名，如果不是原厂的，拒绝启动。recovery会去检查OTA刷机包的签名，不是原厂的拒绝更新。2. 一般出厂机器会禁用常规Bootloader的直接刷机功能。以上这个流程，其实是secure boot规范的一部分，主要有两个目的:1. 防止用户刷入第三方ROM, 导致系统出现不可逆的损坏，增加售后服务支持和维修成本2. 防止不明系统窃取手机的底层机密信息，比如，HDCP秘钥，各种钱包数据，这些东西应用甚至android系统层都无法直接接触到(一般从硬件层面加密过)，但刷入不明ROM会大大增加泄露破解的风险。也因此，有些机器发现被root之后，钱包功能会被永久禁用。secure boot是很多服务供应商(收费视频，手机支付，生物特征识别等)要求手机oem厂商必须做到的。Bootloader锁的解锁原理:在某处存放一个标志，标识有没有解锁，如果解锁了，就放开以上限制。存放这个标志的位置在解锁前第三方app是没有权限读写的，所以不可能绕过官方解锁流程。正常的解锁过程一般跟电脑软件的注册码实现原理相当，解锁软件根据手机硬件特征生成中间码，把中间码发给服务器，服务器进行某种加密传回来写入特定位置，bootloader会在这个位置检查解锁信息是否合法，合法就写入已解锁的标志，就可以刷入并加载第三方镜像了。解锁码的生成过程一般会用到非对称加密外加私有算法，几乎不可破解，即使拿到原代码也做不到。官方解锁后一般会失去保修，第三方ROM风险也相当大，极度不建议解锁root。很多人root后装个某某管家某某卫士啥的，感觉就像你把自己家的大门给卸了，在街上找了个不认识的老头来跟你守门。对于不可卸载的内建app，去手机厂商的官方论坛发帖，或打售后电话，申明严重影响正常使用，一般正规厂商都会重视。刷第三方镜像或ROOT之后，各种盗号盗网银密码盗短信微信信息的风险极度增大。原厂(正规厂商)比互联网上你连面都没见过的各种大大更值得信赖。PC上也有secure boot了。如果电脑够新，可以在BIOS里看到。”

![img]()

\------------------------------------------------------------------------

2.rom

![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoPPFgMVVic2oEJ4twbUJSXeiaGj2ClNyRlic2WBsvsWBItt0xSkiaqIBPymO1iau1lKmOZicBNCB5VBCqxg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

ps：sorry哈，由于只有一个手机，所以自己刷的过程可能截不了图，只能上网搜各步图片，大家请见谅

rom——也就是系统包（zip格式的压缩包），需要我们在第三方rec里刷入，或者有些包系统rec也可以刷入，ps：先提前扯一句吧，怕之后忘了，就是说你在刷入一个新rom之前，感觉还是要先在第三方rec里格式化data分区，目的就是为了先把原来的系统整掉（话说不是system是系统嘛……），然后再安装咱要的rom，不然的话两个系统貌似会冲突，然后可能就真的变砖了…… 

![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoPPFgMVVic2oEJ4twbUJSXeia25SsogBpiaExlD6Cg1TIIofbx2wgfMcqYicpB7p0clPrIW3CwibRx0ACQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

清data右上角清除点进去就行（不过之后会讲一讲这里边各个功能所对应的后果，毕竟这几天每个每个试——↓

一天变砖好几回……）

官方rom

也就是你这个手机厂家本来就内置进去的系统的各个版本，因为这是本来你就在用的系统。（比如说小米手机就是MIUI）所以说兼容度最好，毕竟人家官方的东西如果动不动就变砖，厂家早就凉了……

ps：在遇到一些第三方的rom无法兼容（卡开机logo，你就是所谓的卡米或者其他系统就在卡在开机界面（哦，对了，这里补充说明一个名词：开机第一屏第二屏你在解锁之后就会发现有所不同了，第1屏是厂家在手机里自带的，要换第1屏只能换手机，而第2屏是你系统的开机动画，很多人进入不了就是卡在第2屏里

）进不了桌面）就可以格式化data分区，然后再刷入官方的系统，这样至少能保住了一个准砖，这也是救砖的一种方式

第三方rom

顾名思义，说白了就是换系统，不过既然是换系统，肯定没有厂家做的专门适配（适配就是说每个系统针对每个不同的机型，厂家都会提前进行一些小小的改动，以达到最佳的稳定性，不过就是这样在刷系统包的时候也是有些时候需要注意适配，不然的话一样是砖）今天貌似光说砖就说了好几回了……刷机谨慎

ps：第三方的rom很有可能被人恶意篡改过，还是要谨慎，毕竟系统文件想要搞到你一个支付密码太简单了

\------------------------------------------------------------------------

3.刷机的两种方式

/1.线刷

还是顾名思义，它是通过用数据线连接电脑，在电脑上操作进行给手机的刷机（对不起蛤一直忘了说了，由于是换系统，现在市面上的方法就是刷机给手机刷入一个新的系统，或者其他的一些能改写系统文件的一些需要刷机才能够运行的软件之类的，比如说明天会讲到的magisk/xposed）不过还是因为家里电脑卡怕线刷刷到一半，突然卡掉了（这种情况，貌似只能拆修救了……）所以说个人一直用的都是卡刷↓

![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoPPFgMVVic2oEJ4twbUJSXeiaZCn4uAibjfzjnkzZlhEo4oa8trJPcovPPvYuLp7S8aDHst9FpofwuHg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

/2.卡刷

继续顾名思义，他是通过外置存储卡（sd卡）来进行选择刷机包的，也就是说咱需要先在手机上把一个包（包也就是上面说的rom）下载下来，然后移动到SD卡上之后，进入第三方的rec，就可以刷第三方的rom了，并且针对已经解锁的兄弟们来说完全可以不用电脑

![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoPPFgMVVic2oEJ4twbUJSXeia4VT4iafjuFaq9IfWicIkvaQInYukUo0jeycaicMezmfzNt6LLd907TMAA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

\------------------------------------------------------------------------------------------------------------------

emmmm今天貌似还没讲完，要不……咱明天继续？:-)

四不四

戛然而止～～

回味无穷～～

![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoPPFgMVVic2oEJ4twbUJSXeiaGQejH5nKIcINtDKic9iccN2mvsLZQEDDXicUfRvDJ7aE4ibyLPD0K189uw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

我呸

![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoPPFgMVVic2oEJ4twbUJSXeia4VT4iafjuFaq9IfWicIkvaQInYukUo0jeycaicMezmfzNt6LLd907TMAA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

🉑以

