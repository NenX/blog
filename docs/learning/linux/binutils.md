0 简介

GNU Binary Utilities或binutils是一整套的编程语言工具程序，用来处理许多格式的目标文件。当前的版本原本由在Cygnus Solutions的程序员以Binary File Descriptor library（libbfd）所撰写。这个工具程序通常搭配GCC、make、和GDB这些程序来使用。
刚开始时，这个包内只有几个程序，但后来，由于功能需求近似，陆续加入了GNU汇编器（GAS）和GNU链接器（GLD）。一般来说，这些程序都很简单，大部分的复杂性都存在于Binary File Descriptor library和libopcodes这些库里头。
原来的BFD版本由David Henkel-Wallace和Steve Chamberlain所撰写。Ken Raeburn和Ian Lance Taylor曾维护过。目前则是由Nick Clifton负责维护此版本。至于Linux上的版本，由H.J. Lu在维护。

注：以上内存摘自wiki

GNU Binutils是一系列二进制工具的集合。主要包括：

- as：GNU汇编器
- ld：GNU链接器

但也包括以下二进制工具：
|    工具     |                         说明                         |
| :---------: | :--------------------------------------------------: |
| addr2line： |      从目标文件的虚拟地址获取文件的行号或符号。      |
|    ar：     |        可以对静态库做创建、修改和提取的操作。        |
|  c++filt：  |      反编译（反混淆，demangle）C++符号的工具。       |
|  dlltool：  |               创建创建Windows动态库。                |
|   gold：    |        另一种新的、更快的仅支持ELF的链接器。         |
|   gprof：   |           性能分析（profiling）工具程序。            |
|  nlmconv：  | 可以转换成NetWare Loadable Module(NLM)目标文件格式。 |
|    nm：     |              显示目标文件内的符号信息。              |
|  objcopy：  |                 复制和转译目标文件。                 |
|  objdump：  |         显示目标文件的相关信息，亦可反汇编。         |
|  ranlib：   |        产生静态库的索引。（和nm -s功能类似）         |
|  readelf：  |                 显示ELF文件的内容。                  |
|   size：    |         列出目标文件或库文件的section大小。          |
|  strings：  |            列出文件中可打印的字符串信息。            |
|   strip：   |              从目标文件中移除符号信息。              |
|  windmc：   |               Windows消息资源编译器。                |
|  windres：  |               Windows资源文件编译器。                |
其中多数程序使用BFD(Binary File Descriptor库)实现底层操作。其中多数也使用opcodes库来汇编及反汇编机器指令。

Binutils已被移植到大多数助理的unix/linux系统中，同时也支持Wintel系统，它们存在的主要目标是为GNU系统提供编译和链接程序的机制。

注：以上内容翻译自GNU Binutils

下面逐个介绍下上面提到的工具集。
这里说明下，所有文档都可以在documentation for binutils 2.28找到。

## 1 目标文件处理及分析
nm

nm用来列出目标文件中的符号，可以帮助程序员定位和分析执行程序和目标文件中的符号信息和它的属性。比如我用以下代码编译之后，编译指令gcc main.cpp
```c
#include <cstdio>
int main(int argc, char **argv)
{
	printf("enter checking\n");
	return 0;
}
```
使用nm输出结果如下：(部分删减，不是全部)
```bash
$ nm a.out 
0000000000601040 B __bss_start
0000000000601040 b completed.7291
0000000000601030 D __data_start
0000000000601030 W data_start
0000000000400560 T __libc_csu_init
 U __libc_start_main@@GLIBC_2.2.5
0000000000400536 T main
 U puts@@GLIBC_2.2.5
00000000004004b0 t register_tm_clones
0000000000400440 T _start
0000000000601040 D __TMC_END__
```
objcopy

objcopy可以将一种格式的目标文件转化为另外一种格式的目标文件. 它使用GNU BFD库进行读/写目标文件。objcopy就能将原格式的目标文件转化为不同格式的目标文件。
objcopy用于将object的部分或全部内容拷贝到另一个object，从而可以实现格式的变换。
objcopy可用用于将文件转换成S-record格式或者raw二进制格式。objcopy还可以实现将图像编译到目标文件中。

objdump

objdump用来显示目标文件的信息。可以通过选项控制显示那些特定信息。objdump一个最大的用处恐怕就是将C/C++代码反汇编了. 在嵌入式软件开发过程中, 也可以用它查看执行文件或库文件的信息。

readelf

readelf用来显示ELF格式目标文件的信息。可通过参数选项来控制显示哪些特定信息。(注意: readelf不支持显示静态库, 也不支持64位的ELF文件)。

## 2 编译链接工具
ar

ar用于建立、修改、提取静态库文件(archive)。archive是一个包含多个被包含文件的单一文件（也称之为库文件），其结构保证了可以从中检索并得到原始的被包含文件（称之为archive中的member）。member的原始文件内容、模式（权限）、时间戳、所有者和组等属性都被保存在 archive中。member被提取后，他们的属性被恢复到初始状态。

ar主要用于创建C库文件。

典型用法如下：
```
$ ar rv libNAME.a file1.o file2.o
```
ld

ld是链接器，通常由GCC/G++调用。外部基本不可见。

addr2line

在崩库或者存在需要分析程序调用堆栈的情况下非常有用，addr2line可以反编译到代码的特定行。

c++filt

用于反混淆c++变量或函数名称的，可以还原为人类可读的格式。通常这个过程称为反混淆-demangle。

dlltool

生成windows动态链接库在编译时依赖的lib索引，典型的应用如下：
```
$ gcc -c dll.c # 编译
$ dlltool -e exports.o -l dll.lib dll.o # 生成lib

$ gcc dll.o exports.o -o dll.dll
$ gcc program.o dll.lib -o program # 生成调用dll的可执行文件
```
注：第1、2部分主要参考csdn baike

## 3 小结

本文内容不是什么新的知识。只是我近期阅读书籍是看到的。从这些基础工具来看，基本上可以构建一个类似vs的IDE环境，也可以基本抛开复杂的底层实现逻辑，直接基于高级编程语言进行处理。
撰写本文的目的主要是整理下我对GNU基础框架的理解，对基本工具有所了解，对于后续更深入的学习是有所帮助的。