---
layout:     post
title:     internet｜root｜（6）n.之5 
subtitle:   
date:       2020-5-7
author:     廉一鸣
header-img: 
catalog: true
tags:
    - root



---

## internet｜root｜（6）n.之5

大家好啊，今天咱把所有的名词讲完吧

\-----------------------------------------------------------

1.砖的分类

前三种:“

手机变砖原因及各种救砖教程

17-02-14 QX荷塘小鱼 + 关注献花(0) 收藏

　　2014-12-04 09:06 作者：enter

手机刷机而导致变成砖，也就是无法正常开启，这都是正常的事，所以大家不要着急，找对方法你也可以救回你的爱机。无论手机状态如何，现在我们把它分为三种砖：(这里我用努比亚Z7 max做代表)

砖一：Nubia Z7 Max 三键齐按，会进入QHSUSB_BULK模式, 此种模式的现象是, 如果在windows(比如win7)下连上数据线, 则会在电脑出现n多分区挂载,甚至会提示要格式化某些分区(这里要强调的是千万不要格式化任何分区,否则可能会变成砖二)

砖二：Nubia Z7 Max 按任何键都无反应，插上数据线不显示充电，插到电脑上显示qhsusb dload

砖三：Nubia Z7 Max 按任何键都无反应，插上数据线不显示充电，插到电脑上无任何显示

变砖原因：

砖一：通常是因为分区失败，误删除了重要分区，例如Recovery和Fastboot，导致CPU将控制权限交给emmc某一分区后，此分区无启动文件，启动失败。

砖二：通常是因为分区时在windows下格式化了emmc，或是刷错了rom，导致CPU将控制权限交给emmc某一分区的那一小段程序丢失。

砖三：通常是手机在emmc挂载模式时，删除了所有分区，即emmc上所有分区数据均丢失, 导致USB,按键等任何动作，CPU无法响应。

针对砖一，两种救砖方法：

1.下载分区表及各分区备份，逐个分区恢复。

2.下载emmc img镜像（镜像大小31,268,536,320。大小不一样的，备份者修改过，不保证完全没有问题），通过winHex直接恢复整个emmc。注意如果是别人的emmc img镜像，需要自行恢复为自已的NV Data。

这里只讲自已备份emmc img镜像，首先下载软件WinHex

然后同时按住音量上下键+电源键开机，连接电脑，电脑出现格式化窗口点取消

打开WinHex 点开文件-创建磁盘镜像-选择手机，出现备份磁盘选项，建议按扇区备份，不要选择填充空簇。

恢复时打开WinHex程序，点工具-磁盘工具-磁盘克隆，选择之前的备份文件，克隆至手机即可。

针对砖二，两种救砖方法：

1.返厂

2.下载安装qhsusb dload驱动，在设备管理器中查看，手机变为QDLoader 9008 (Com x)。然后下载骁龙801底层文件，高通QPST软件，通过QPST软件向手机刷入骁龙801底层文件。刷入成功后，手机变为砖一，可通过救砖一的方法把手机救活。具体步骤自行百度“qhsusb dload救黑砖教程”?

如果QPST软件显示“no phone'，可以试试：

未经测试，手中有备份方可操作。

下载米4的线刷包，然后下载米4的刷机工具”miflash”，然后试一下。只要能将骁龙801底层文件刷入变成砖一，就可以使用备份恢复原来的emmc，就救回来了。

针对砖三，两种救砖方法：

1.返厂（建议）

2.拆机。

（Nubia Z7 Max我没有操作过，其它高通CPU的手机我试过并成功，所以只说原理）。高通CPU的机子，通常会在主板上预留一个Pad（金黄色的点），当任何方法手机都没有任何反应时，通过将此Pad接地（将Pad和SD卡槽上面的金属框短接），同时将usb线插入手机（电脑有反应以后，可不再接地），手机即可恢复到砖二的情况，即电脑上显示qhsusb dload，然后可按砖二的救砖方法继续进行。此方法本无风险，只是我现在不清楚Nubia Z7 Max的Pad在主板的哪个位置，所以不推荐（补充：已经有朋友通过此方法成功，但他也是都试了一遍，最终也没有留意哪个Pad是有效的）。如果因某种原因，希望用这种方法，那么先在主板上找那些不规则排列的Pad（规则排列的Pad，通常都不是我们需要的），接地尝试，如果无效，需要拆开主板上的屏蔽罩，在RAM芯片（CPU位于RAM芯片下方）附近找一找。

至此，Nubia Z7 Max的各种救砖方法已经罗列清楚。

有备无患，还是在手机没有任何问题时，备份emmc，DiskGenius, WinHex, 甚至Ghost -ir都是可以的，无论备份出来是什么格式，只要原理和DD命令一样即可。”

![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoPds2kGeTMm9jia1MCKWyBiaIeLplxqqEOUIOibFpDfgwV10RrbsFRZr7PSloENgcY3VImn0NiasR1daQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

第四种砖

前段时间刷面具的时候，因为模块出了问题，开不了机，这样的话，只需要把对应的模块删了就行

第五种砖

是因为系统兼容的问题，刷进去的，不兼容的系统包（rom）这种问题直接wipe（格式化）data分区就可以再刷入官方rom，先不说数据，但起码能用。

\-----------------------------------------------------------

2.OTG

![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoPds2kGeTMm9jia1MCKWyBiaIRwAqHfgOYvOOFPFTlEI9GEhibdgCscjGDuQ4xLQlyl4yz8ib65cN07dw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

图所示就是让手机能连上U盘，然后用U盘来给手机刷机

![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoPds2kGeTMm9jia1MCKWyBiaIP3s16tKQ6FzEaFIIjnqmYM79oxWialkzsCPTewLNUG83ZpQMbiaIibBTA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

这个也是。

\-----------------------------------------------------------

3.模块

这几天提到他好几次了，顾名思义，模块儿是装在框架上的，可随时安装或者拆卸就可以使框架的功能做得丰富多彩。（并且几乎是想干啥就干啥，因为自己也可以做模块）

![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoPds2kGeTMm9jia1MCKWyBiaIuotLTkofnykeEqKSPv4zLxHsicdFzALC7QKf4luTGT8B9UiasiaD19GKA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

\-----------------------------------------------------------

4.havoc 氢os

这俩都是第三方rom，并且能自定义的至少havoc极多

![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoPds2kGeTMm9jia1MCKWyBiaIKlDQhOPcbTR1DL3y747jhRHxN6aLHA66gCVBuVQvGXmbw6alLic0Eeg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoPds2kGeTMm9jia1MCKWyBiaI8VQXvAxuLYYW3HseotvQOLc0Evy1Z3RltiaiaefxXdUspeibA3bEOFicAQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

前几天刷了个havoc，不得不说个人感觉真好看😘

![img](https://mmbiz.qpic.cn/mmbiz_jpg/tMsLbdfwxoPds2kGeTMm9jia1MCKWyBiaIibJibp16zkeLXLJzo3iaN95h8dnDGOjZSUxJeKXSr6XgzGen4QLEiaWmFw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

这是氢OS的

哦对了，havoc也叫浩劫