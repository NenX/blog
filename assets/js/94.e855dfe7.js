(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{463:function(t,_,v){"use strict";v.r(_);var e=v(42),a=Object(e.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p",[v("a",{attrs:{href:"https://www.bilibili.com/video/av6538245?p=9",target:"_blank",rel:"noopener noreferrer"}},[t._v("From"),v("OutboundLink")],1)]),t._v(" "),v("h2",{attrs:{id:"_1-操作系统的启动"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-操作系统的启动"}},[t._v("#")]),t._v(" 1. 操作系统的启动")]),t._v(" "),v("ul",[v("li",[t._v("DIST：存放 OS")]),t._v(" "),v("li",[t._v("BIOS：基本 IO 处理系统，接通电源，检查各种外设，加载软件执行\n"),v("ul",[v("li",[t._v("初始已经加载到内存")]),t._v(" "),v("li",[t._v("从特定内存地址开始执行（x86：段寄存器CS:指令寄存器IP = 0xf000:fff0，形成一个具体的内存地址）\n"),v("ul",[v("li",[t._v("POST（加电自检），检查外设，寻找显卡和执行 BIOS")]),t._v(" "),v("li",[t._v("将 Bootloader 从硬盘（第一个扇区512字节）加载到内存0x7c00，")]),t._v(" "),v("li",[t._v("跳转到CS:IP = 0000:7c00 控制权交给 Bootloader")])])])])]),t._v(" "),v("li",[t._v("Bootloader：从硬盘加载 OS 到内存\n"),v("ul",[v("li",[t._v("从硬盘起始扇区将操作系统的代码和数据加载到内存")]),t._v(" "),v("li",[t._v("跳转到操作系统起始位置，控制权交给 OS")])])]),t._v(" "),v("li")]),t._v(" "),v("h3",{attrs:{id:"计算机体系结构概述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#计算机体系结构概述"}},[t._v("#")]),t._v(" 计算机体系结构概述")]),t._v(" "),v("h3",{attrs:{id:"计算机内存和硬盘布局"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#计算机内存和硬盘布局"}},[t._v("#")]),t._v(" 计算机内存和硬盘布局")]),t._v(" "),v("h3",{attrs:{id:"开机顺序"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#开机顺序"}},[t._v("#")]),t._v(" 开机顺序")]),t._v(" "),v("h2",{attrs:{id:"_2-中断、异常、系统调用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-中断、异常、系统调用"}},[t._v("#")]),t._v(" 2. 中断、异常、系统调用")]),t._v(" "),v("h3",{attrs:{id:"背景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),v("h3",{attrs:{id:"中断、异常、系统调用相比较"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#中断、异常、系统调用相比较"}},[t._v("#")]),t._v(" 中断、异常、系统调用相比较")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("概念")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("来源")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("处理时间")]),t._v(" "),v("th",{staticStyle:{"text-align":"left"}},[t._v("响应")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("系统调用")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("应用程序主动向操作系统发出服务请求")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("应用程序")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("同步或异步")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("等待或持续")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("异常")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("非法指令或其他坏的处理状态（如内存出错）")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("不良的应用程序")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("同步")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("杀死或重新执行")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("中断")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("来自于不同的硬件设备的计时器和网络的中断")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("外设")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("异步")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("持续")])])])]),t._v(" "),v("h3",{attrs:{id:"中断和异常处理机制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#中断和异常处理机制"}},[t._v("#")]),t._v(" 中断和异常处理机制")]),t._v(" "),v("ul",[v("li",[t._v("中断是外设的事件")]),t._v(" "),v("li",[t._v("异常是内部 CPU 的事件")]),t._v(" "),v("li",[t._v("中断和异常迫使 CPU 访问一些被中断和异常服务访问的功能")])]),t._v(" "),v("blockquote",[v("p",[t._v("产生中断或异常之后，需要知道这个中断或异常具体是哪个特定服务例程服务，\n建立一个表（中断表），key是中断或异常号，value是对应的服务例程地址")])]),t._v(" "),v("p",[t._v("中断")]),t._v(" "),v("ul",[v("li",[t._v("硬件（外设）处理过程\n"),v("ul",[v("li",[t._v("设置中断标记（CPU 初始化）\n"),v("ol",[v("li",[t._v("将内部、外部事件设置中断标记")]),t._v(" "),v("li",[t._v("CPU根据标记得出中断事件的 ID，并发给操作系统")])])])])]),t._v(" "),v("li",[t._v("软件（操作系统）处理过程\n"),v("ul",[v("li",[t._v("保存当前处理状态")]),t._v(" "),v("li",[t._v("根据 CPU 给的终端号，找到中断服务程序处理")]),t._v(" "),v("li",[t._v("清除中断标记")]),t._v(" "),v("li",[t._v("恢复之前保持的处理状态")])])])]),t._v(" "),v("p",[t._v("异常：异常编号")]),t._v(" "),v("ul",[v("li",[t._v("保存现场")]),t._v(" "),v("li",[t._v("异常处理\n"),v("ul",[v("li",[t._v("杀死产生异常的程序")]),t._v(" "),v("li",[t._v("重新执行异常指令")])])]),t._v(" "),v("li",[t._v("恢复现场")])]),t._v(" "),v("h3",{attrs:{id:"系统调用的概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#系统调用的概念"}},[t._v("#")]),t._v(" 系统调用的概念")]),t._v(" "),v("p",[t._v("系统调用接口：暴露给应用程序调用")]),t._v(" "),v("ol",[v("li",[t._v("Win32 API 用于 Windows")]),t._v(" "),v("li",[t._v("POSIX API 用于 POSIX-based systems（UNIX、LINUX、Mac OS X）\n")])]),t._v(" "),v("ul",[v("li",[t._v("系统调用接口根据系统调用相关序号来维护表的索引")]),t._v(" "),v("li",[t._v("系统调用接口调用内核态中的系统调用（用户态->内核态），并返回系统调用的状态\n"),v("ul",[v("li",[t._v("用户态：应用程序运行时 CPU 所处的状态，无法直接执行特权指令和 IO 操作")]),t._v(" "),v("li",[t._v("内核态：可以执行特权指令和 IO 操作，完全控制计算机")])])]),t._v(" "),v("li",[t._v("与函数调用区别\n"),v("ul",[v("li",[t._v("函数调用始终处于一个栈")]),t._v(" "),v("li",[t._v("应用程序和内核各自一个堆栈，用户态内核态切换，开销比较大")])])]),t._v(" "),v("li",[t._v("跨域操作系统边界的开销\n"),v("ul",[v("li",[t._v("执行时间开销\n"),v("ul",[v("li",[t._v("建立中断/异常/系统调用号与对应服务例程映射关系的初始化开销")]),t._v(" "),v("li",[t._v("建立内核堆栈")]),t._v(" "),v("li",[t._v("验证参数")]),t._v(" "),v("li",[t._v("内核态映射到用户态的地址空间、更新页面映射权限（内核数据拷贝用用户空间）")]),t._v(" "),v("li",[t._v("内核独立地址空间\n"),v("ul",[v("li",[t._v("TLB")])])])])])])])]),t._v(" "),v("h3",{attrs:{id:"系统调用的实现"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#系统调用的实现"}},[t._v("#")]),t._v(" 系统调用的实现")]),t._v(" "),v("h3",{attrs:{id:"程序调用和系统调用的不同之处"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#程序调用和系统调用的不同之处"}},[t._v("#")]),t._v(" 程序调用和系统调用的不同之处")]),t._v(" "),v("h3",{attrs:{id:"开销"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#开销"}},[t._v("#")]),t._v(" 开销")])])}),[],!1,null,null,null);_.default=a.exports}}]);