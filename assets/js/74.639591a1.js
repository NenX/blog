(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{440:function(s,t,a){"use strict";a.r(t);var n=a(42),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("debian10 默认了python，版本比较低（2.7.16），未了使用3.x，需要对旧版本进行升级。")]),s._v(" "),a("p",[s._v("由于很多基本的命令、软件包都依赖旧版本，在更新 Python 时，不要删除旧版本（新旧版本可以共存）。")]),s._v(" "),a("h2",{attrs:{id:"查看-python-版本号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看-python-版本号"}},[s._v("#")]),s._v(" 查看 Python 版本号")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ python -V\nPython "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.7")]),s._v(".16\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#或者")]),s._v("\n$ python --version\nPython "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.7")]),s._v(".16\n")])])]),a("h2",{attrs:{id:"下载新版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载新版本"}},[s._v("#")]),s._v(" 下载新版本")]),s._v(" "),a("p",[s._v("进入 "),a("a",{attrs:{href:"https://www.python.org/ftp/python/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Python下载页面"),a("OutboundLink")],1),s._v("，选择需要的版本")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://www.python.org/ftp/python/3.7.5/Python-3.7.5.tgz\n")])])]),a("h2",{attrs:{id:"解压缩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解压缩"}},[s._v("#")]),s._v(" 解压缩")]),s._v(" "),a("p",[s._v("下载完成之后，进行解压并拆包")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xzvf Python-3.7.5.tgz\n")])])]),a("h2",{attrs:{id:"安装配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装配置"}},[s._v("#")]),s._v(" 安装配置")]),s._v(" "),a("p",[s._v("进入解压缩后的目录，安装配置：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" Python-3.7.5/\n$ ./configure \n")])])]),a("p",[s._v("执行 ./configure 时，如果报错：")]),s._v(" "),a("blockquote",[a("p",[s._v("configure: error: no acceptable C compiler found in $PATH")])]),s._v(" "),a("p",[s._v("说明没有安装合适的编译器。这时，需要安装/升级 gcc 及其它依赖包。")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ sudo apt-get install gcc g++\n")])])]),a("p",[s._v("完成之后，重新执行：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ ./configure --prefix"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/python3 --enable-optimizations\n")])])]),a("h2",{attrs:{id:"编译-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译-安装"}},[s._v("#")]),s._v(" 编译 & 安装")]),s._v(" "),a("p",[s._v("配置完成之后，就可以编译了：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n")])])]),a("p",[s._v("编译完成之后，进行安装")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])])]),a("h2",{attrs:{id:"验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[s._v("#")]),s._v(" 验证")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ python -V\nPython "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.7")]),s._v(".16\n\n$ python3 -V\nPython "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.7")]),s._v(".5\n")])])]),a("blockquote",[a("p",[s._v("注意：在 /usr/local/bin/ 下有一个 python3 的链接，指向 bin 目录下的 python 3.5。")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" python3\n/usr/local/bin/python3\n")])])]),a("h2",{attrs:{id:"设置-3-x-为默认版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置-3-x-为默认版本"}},[s._v("#")]),s._v(" 设置 3.x 为默认版本")]),s._v(" "),a("p",[s._v("查看 Python 的路径")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /usr/bin -la "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" python\n-rwxr-xr-x.  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11216")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("月  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2015")]),s._v(" abrt-action-analyze-python\nlrwxrwxrwx.  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("月  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":11 python -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" python2\nlrwxrwxrwx.  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("月  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":11 python2 -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" python2.7\n-rwxr-xr-x.  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7136")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v("月 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2015")]),s._v(" python2.7\n")])])]),a("p",[s._v("将原来 python 的软链接重命名：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" /usr/bin/python /usr/bin/python.bak\n")])])]),a("p",[s._v("将 python 链接至 python3：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /usr/local/bin/python3 /usr/bin/python\n")])])]),a("p",[s._v("这时，再查看 Python 的版本：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ python -V\nPython "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.7")]),s._v(".5\n")])])]),a("p",[s._v("安装成功了。")])])}),[],!1,null,null,null);t.default=r.exports}}]);