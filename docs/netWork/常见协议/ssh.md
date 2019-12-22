## [什么是SSH](https://www.jianshu.com/p/33461b619d53)
SSH（secure shell，安全外壳协议）是一种协议标准，用于安全远程登陆。

其实现有[OpenSSh](https://www.openssh.com)，window系统使用SSH，会用到另一种软件[PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/)。

## 为什么需要SSH
SSH和talent、ftp等协议区别在于安全性。如何实现数据的安全呢？实现的方案肯定是对数据进行加密，加密方式主要有：
- 对称加密（密钥加密）

- 非对称加密（公钥加密）
### 对称加密
### 非对称加密
## 工作原理
## 实践
```bash
$ ssh-keygen -t rsa -P '' -f ~/.ssh/id_rsa
$ cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys
$ chmod 0600 ~/.ssh/authorized_keys
```
ssh-keygen是用于生产密钥的工具。

- -t：指定生成密钥类型（rsa、dsa、ecdsa等）
- -P：指定passphrase，用于确保私钥的安全
- -f：指定存放密钥的文件（公钥文件默认和私钥同目录下，不同的是，存放公钥的文件名需要加上后缀.pub）

查看 ~/.ssh 下面的文件
```bash
$ ls -l ~/.ssh
# 保存私钥
$ -rw------- 1 lianmed lianmed 1831 Nov  4 17:57 id_rsa
# 保存公钥
$ -rw-r--r-- 1 lianmed lianmed  405 Nov  4 17:57 id_rsa.pub
```
