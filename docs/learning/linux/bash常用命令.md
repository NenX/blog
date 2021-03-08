## date 格式化
```bash
date '+%Y-%m-%d_%H-%M-%S'
touch abc."$(date '+%Y-%m-%d_%H-%M-%S')".txt
```

## 删除指定文件
```bash
find /usr/local/backups -mtime +10 -name "*.*" -exec rm -rf {} \;
find . -name "*.log" –mtime +30 –type f –size +100M | xargs rm –rf {} ; # 删除不了文件名包含有空格的文件
```