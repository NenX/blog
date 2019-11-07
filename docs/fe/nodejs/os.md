[来源](https://elemefe.github.io/node-interview/#/sections/zh-cn/os)
### TTY
tty 原意是指 teletype，即打字机。在 Unix 中，`/dev/tty*` 是指任何表现像打字机的设备，例如终端（terminal）。

通过 `w` 命令查看当前登录的用户情况, 每登录了一个窗口就会有一个新的 tty.
```bash
$ w
 11:49:43 up 482 days, 19:38,  3 users,  load average: 0.03, 0.08, 0.07
USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT
dev      pts/0    10.0.128.252     10:44    1:01m  0.09s  0.07s -bash
dev      pts/2    10.0.128.252     11:08    2:07   0.17s  0.14s top
root     pts/3    10.0.240.2       11:43    7.00s  0.04s  0.00s w
```
使用 [ps](linux/../../../learning/linux/命令.md#ps) 命令查看进程信息的 tty 的信息:
```bash
$ ps -x
  PID TTY      STAT   TIME COMMAND
 5530 ?        S      0:00 sshd: dev@pts/3
 5531 pts/3    Ss+    0:00 -bash
11296 ?        S      0:00 sshd: dev@pts/4
11297 pts/4    Ss     0:00 -bash
13318 pts/4    R+     0:00 ps -x
23733 ?        Ssl    2:53 PM2 v1.1.2: God Daemon
```
在 Node.js 中你可以通过 `process.stdout.isTTY` 来判断当前进程是否处于 TTY (如终端) 的环境.

### OS (操作系统)
### 命令行参数
### 负载
### CheckList
### 指标