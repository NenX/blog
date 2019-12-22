1. 检查 SSH key 是否存在
```sh
$ ls -l ~/.ssh
total 0
```
2. 生成新的ssh key
```sh
$ ssh-keygen -t rsa -C "your_email@example.com"
```