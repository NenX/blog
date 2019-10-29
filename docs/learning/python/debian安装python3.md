debian10 默认了python，版本比较低（2.7.16），未了使用3.x，需要对旧版本进行升级。

由于很多基本的命令、软件包都依赖旧版本，在更新 Python 时，不要删除旧版本（新旧版本可以共存）。

## 查看 Python 版本号
```sh
$ python -V
Python 2.7.16

#或者
$ python --version
Python 2.7.16
```
## 下载新版本
进入 [Python下载页面](https://www.python.org/ftp/python/)，选择需要的版本
```sh
wget https://www.python.org/ftp/python/3.7.5/Python-3.7.5.tgz
```
## 解压缩
下载完成之后，进行解压并拆包
```sh
tar -xzvf Python-3.7.5.tgz
```
## 安装配置
进入解压缩后的目录，安装配置：
```sh
$ cd Python-3.7.5/
$ ./configure 
```
执行 ./configure 时，如果报错：

>configure: error: no acceptable C compiler found in $PATH

说明没有安装合适的编译器。这时，需要安装/升级 gcc 及其它依赖包。

```
$ sudo apt-get install gcc g++
```
完成之后，重新执行：
```sh
$ ./configure --prefix=/usr/local/python3 --enable-optimizations
```

## 编译 & 安装
配置完成之后，就可以编译了：
```sh
$ make
```
编译完成之后，进行安装
```sh
$ sudo make install
```
## 验证
```sh
$ python -V
Python 2.7.16

$ python3 -V
Python 3.7.5
```
>注意：在 /usr/local/bin/ 下有一个 python3 的链接，指向 bin 目录下的 python 3.5。
```sh
$ which python3
/usr/local/bin/python3
```
## 设置 3.x 为默认版本
查看 Python 的路径
```sh
$ ls /usr/bin -la | grep python
-rwxr-xr-x.  1 root root      11216 12月  1 2015 abrt-action-analyze-python
lrwxrwxrwx.  1 root root          7 8月  30 12:11 python -> python2
lrwxrwxrwx.  1 root root          9 8月  30 12:11 python2 -> python2.7
-rwxr-xr-x.  1 root root       7136 11月 20 2015 python2.7
```
将原来 python 的软链接重命名：
```sh
$ sudo mv /usr/bin/python /usr/bin/python.bak
```
将 python 链接至 python3：
```sh
$ sudo ln -s /usr/local/bin/python3 /usr/bin/python
```
这时，再查看 Python 的版本：
```sh
$ python -V
Python 3.7.5
```
安装成功了。