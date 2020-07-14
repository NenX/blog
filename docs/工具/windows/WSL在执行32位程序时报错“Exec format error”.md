当你尝试在WSL上运行32位的程序时，shell将会报错：cannot execute binary file: Exec format error. 这是因为WSL目前暂不支持32位的ELF可执行文件。有人请求在WSL中添加该支持，微软的回复是在做了咕咕咕。但是，没有官方支持和不能用是两回事，StackOverflow上的一个workaround很好地解决了这个问题。原理简而言之，就是利用一个解释器（QEMU）来将32位程序转译成64位程序执行。这个方法在Ubuntu-WSL上的步骤如下：

1. 安装qemu-user-static：

```bash
sudo apt install qemu-user-static
```

2. 设置binfmts：
```bash
sudo update-binfmts --install i386 /usr/bin/qemu-i386-static --magic '\x7fELF\x01\x01\x01\x03\x00\x00\x00\x00\x00\x00\x00\x00\x03\x00\x03\x00\x01\x00\x00\x00' --mask '\xff\xff\xff\xff\xff\xff\xff\xfc\xff\xff\xff\xff\xff\xff\xff\xff\xf8\xff\xff\xff\xff\xff\xff\xff'
```
3. 重启binfmt服务：
```bash
sudo service binfmt-support start
```
启用 i386 架构相关的包：
```bash
sudo dpkg --add-architecture i386
sudo apt update sudo apt
install gcc:i386
```
这在Ubuntu-WSL上被证明可以工作得很好。但是，对于Arch-WSL，事情变得略微麻烦了，因为Arch-WSL没有模拟`systemd`的功能，所以无法像支持systemd的系统一样使用`systemd`内嵌的`binfmt`服务，而需要另外安装binfmt-support的包，该包只有AUR提供（以yay作为AUR包管理器为例）： `yay -S binfmt-support`

另外，qemu在Arch上也只有AUR提供： `yay -S qemu-user-static`

该包依赖于glib2-static，我在安装时，glib2-static的编译过程因为test不通过而失败，只好在PKGBUILD中手动注释掉test的步骤，然后makepkg -sri进行编译安装。 安装完成后，每次启动系统都要执行

```bash
sudo update-binfmts --install i386 /usr/bin/qemu-i386-static --magic '\x7fELF\x01\x01\x01\x03\x00\x00\x00\x00\x00\x00\x00\x00\x03\x00\x03\x00\x01\x00\x00\x00' --mask '\xff\xff\xff\xff\xff\xff\xff\xfc\xff\xff\xff\xff\xff\xff\xff\xff\xf8\xff\xff\xff\xff\xff\xff\xff'
```

添加支持，这很不方便。可以通过将这一命令添加到/etc/profile中来在每次登录时自动执行这一过程。该命令需要以superuser身份执行，如果你没有设置为sudo所有命令免除密码的话，需要用visudo修改sudoer文件，添加

```bash
%USERNAME% ALL=(ALL) NOPASSWD:/usr/bin/update-binfmts
```

避免在执行update-binfmts时需要密码。注意将%USERNAME%替换成你的用户名，同时命令必须以绝对路径形式列出，否则sudoer文件不能生效。