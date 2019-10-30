## 配置查看
git 中通过 git config查看配置信息

config 配置有system级别 global（用户级别） 和local（当前仓库）三个

设置先从 `system` -》`global` -》`local` 底层配置会覆盖顶层配置 

1. 查看系统config
```sh
$ git config --system -l
```
2. 查看当前用户（global）配置
```sh
$ git config --global -l
```
3. 查看当前仓库配置信息
```sh
$ git config --local -l
```
4. 查看单个配置
```bash
$ git config user.name
$ git config user.email
$ git config remote.origin.url
```

## 配置设置

```sh
$ git config user.name "abc"
```