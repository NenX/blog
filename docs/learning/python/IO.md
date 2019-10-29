## open

读写文件前，需要调用 `open` 函数打开，传入路径和标识符。

如果文件不存在，`open` 会抛出一个 `IOError` 错误，需要先 `try` 再 `finally` 中调用 `close`。或者使用 `with`，python会自动调用 `close`。
```py
# try
try:
    fs = open('./test.txt', 'r')
    # do something
finally:
    if fs:
        fs.close()

# with 写法
with open('./test.txt', 'rb') as fs :
    l= fs.read()
for i in l:
    print(i)
```

## 读文件
调用 `read` 将文件内容全部读到内存，或调用 `read(size)` 读取部分内容。
```py
# 标识符 'r' 表示读
fs = open('C:\Users\lianmed\Desktop\text.txt','r')
# 读取二进制，返回 bytes
fs = open('C:\Users\lianmed\Desktop\text.txt','rb')
# 非utf-8编码的文件，需要传递encoding
fs = open('C:\Users\lianmed\Desktop\text.txt','r',encoding='gbk')

# fs.read() or fs.read(10)
```

## 写文件

调用 `write` 或 `writelines` 写入文件，如果路径不存在抛出一个 `IOError`，如果文件不存在即新增文件。
```py

# wb 写入二进制
fs = open('./test.txt','wb)

# w 模式会清空原先的内容
fs = open('./test.txt','w)

# a 模式不会清空原先的内容，追加到后面
fs = open('./test.txt','a)

fs.write('aaa')
```

## 在内存中读写
1. StringIO，在内存中读写str
```py
from io import StringIO
fs = StringIO()
fs.write('嗡')
b = fs.getvalue()
```
2. BytesIO，在内存中读写二进制
```py
from io import BytesIO
fs = BytesIO()
fs.write('帆'.encode('utf8'))
b = fs.getvalue()
for i in b:
    print(i)
```