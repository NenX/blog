1. 备份
```bash
cp /etc/apt/sources.list /etc/apt/sources.list.bak
```
2. buster/etc/apt/sources.list文件

```
deb http://mirrors.163.com/debian/ buster main non-free contrib
deb http://mirrors.163.com/debian/ buster-updates main non-free contrib
deb http://mirrors.163.com/debian/ buster-backports main non-free contrib
deb-src http://mirrors.163.com/debian/ buster main non-free contrib
deb-src http://mirrors.163.com/debian/ buster-updates main non-free contrib
deb-src http://mirrors.163.com/debian/ buster-backports main non-free contrib
deb http://mirrors.163.com/debian-security/ buster/updates main non-free contrib
deb-src http://mirrors.163.com/debian-security/ buster/updates main non-free contrib
```

::: tip debian版本
Debian 10（buster） — 当前的稳定版（stable）

Debian 9（stretch） — 旧的稳定版（oldstable）

Debian 8（jessie） — 更旧的稳定版（oldoldstable）
:::