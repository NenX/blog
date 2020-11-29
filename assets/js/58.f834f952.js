(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{423:function(a,s,t){"use strict";t.r(s);var n=t(42),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("div",{staticClass:"language-c a.c extra-class"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("gcc -E a.c -o a.i "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 预处理 -E (源文件->预处理文件)对应于预处理命令cpp")]),a._v("\ngcc -S a.i -o a.s "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 编译 -S (预处理文件->汇编语言文件)对应于编译命令 cc –S")]),a._v("\ngcc -c a.s -o a.o "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 汇编 -c (汇编语言文件->可重定向的目标文件（二进制形式）)对应于汇编命令是 as")]),a._v("\ngcc a.o -o a "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 链接 (多个.o文件->可执行文件)对应于链接命令是 ld")]),a._v("\n")])])]),t("p",[a._v("总结起来编译过程就上面的四个过程：")]),a._v(" "),t("p",[a._v("预编译处理(.c) －－> 编译、优化程序（.s、.asm）－－> 汇编程序(.obj、.o、.a、.ko) －－> 链接程序（.exe、.elf、.axf等）。")])])}),[],!1,null,null,null);s.default=e.exports}}]);