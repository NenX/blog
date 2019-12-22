[来源1](https://zhuanlan.zhihu.com/p/27069865)
[来源2](https://elemefe.github.io/node-interview/#/sections/zh-cn/process)

系统中运行 [ps](../../learning/linux/命令.md) 命令可以看到当前系统中运行的进程。
## Process (进程)
### process.nextTick
```bash
   ┌───────────────────────┐
┌─>│        timers         │
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
│  │     I/O callbacks     │
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
│  │     idle, prepare     │
│  └──────────┬────────────┘      ┌───────────────┐
│  ┌──────────┴────────────┐      │   incoming:   │
│  │         poll          │<─────┤  connections, │
│  └──────────┬────────────┘      │   data, etc.  │
│  ┌──────────┴────────────┐      └───────────────┘
│  │        check          │
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
└──┤    close callbacks    │
   └───────────────────────┘
```
## Child Processes (子进程)
## Cluster (集群)
## 进程间通信
## 守护进程
普通的进程, 在用户退出终端之后就会直接关闭. 通过 & 启动到后台的进程, 之后会由于会话（session组）被回收而终止进程. 守护进程是不依赖终端（tty）的进程, 不会因为用户退出终端而停止运行的进程.

> 一般语言创建守护进程的步骤
> - 创建一个进程A。
> - 在进程A中创建进程B，我们可以使用 fork 方式，或者其他方法。
> - 对进程B执行 `setsid` 方法。
> - 进程A退出，进程B由init进程接管。此时进程B为守护进程。
> 
> setsid 主要完成三件事：
> 
> - 该进程变成一个新会话的会话领导。
> - 该进程变成一个新进程组的组长。
> - 该进程没有控制终端。
```c
// 守护进程实现 (C语言版本)
void init_daemon()
{
    pid_t pid;
    int i = 0;

    if ((pid = fork()) == -1) {
        printf("Fork error !\n");
        exit(1);
    }

    if (pid != 0) {
        exit(0);        // 父进程退出
    }

    setsid();           // 子进程开启新会话, 并成为会话首进程和组长进程
    if ((pid = fork()) == -1) {
        printf("Fork error !\n");
        exit(-1);
    }
    if (pid != 0) {
        exit(0);        // 结束第一子进程, 第二子进程不再是会话首进程
                        // 避免当前会话组重新与tty连接
    }
    chdir("/tmp");      // 改变工作目录
    umask(0);           // 重设文件掩码
    for (; i < getdtablesize(); ++i) {
       close(i);        // 关闭打开的文件描述符
    }

    return;
}
```
### Nodejs编写守护进程

借助 clild_process 中的 spawn 即可创建子进程，方法如下：
```js
// a.js
const child_process = require('child_process')
const { pid } = process
const p = child_process.spawn('node', ['b.js'], { 
    // detached: true
})
console.log(`i am parent ${pid}, and my child is ${p.pid}`);
// b.js
var fs = require('fs');
fs.open("log.txt",'w',function(err, fd){
	const {ppid,pid} = process
	setInterval(() => {
        fs.writeFileSync(fd,`i am child process ${pid}, and my parent is ${ppid}\n`,);
    }, 1000);
});
```
```bash
$ node a.js
i am parent 284, and my child is 291
```
```bash
$ ps -ef
UID        PID  PPID  C STIME TTY          TIME CMD
lianmed    284    79  0 10:38 pts/0    00:00:00 node a.js
lianmed    291   284  0 10:38 pts/0    00:00:00 node b.js
```
查看 log.txt，可以看到不断写入 `i am child process 291, and my parent is 284`，当退出 `node a.js`，log.txt 不再写入内容。

将 `detached: true` 打开，重新运行
```bash
$ node a.js
i am parent 284, and my child is 291
```
```bash
$ ps -ef
UID        PID  PPID  C STIME TTY          TIME CMD
lianmed    284    79  0 10:38 pts/0    00:00:00 node a.js
lianmed    291   284  0 10:38 pts/0    00:00:00 node b.js
```
退出 `node a.js`，查看进程：
```bash
$ ps -ef
UID        PID  PPID  C STIME TTY          TIME CMD
lianmed    291     1  0 10:49 ?        00:00:00 node b.js
```
发现 `node b.js` 进程并没有退出，并且 TTY 变为 ?，PPID 变为 1，成为一个守护进程了。

查看 log.txt，发现文件依然在写入。
