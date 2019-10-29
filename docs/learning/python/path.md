## join
```py
import os
path = os.path
b = 'a/b/c/d'.split('/')

# C:\Users\lianmed\AppData\Local\Programs\Microsoft VS Code\a\b\c\d
a = path.join(path.abspath('.'),*b)
```

## split
```py
import os
path = os.path
b = 'a/b/c/d'.split('/')
a = path.join(*b)
# c1："a\b\c"
# c2："d"
c1,c2 = path.split(a)
```

# splitext
```py
import os
path = os.path
b = 'a/b/c.txt'
# c1："a/b/c"
# c2：".txt"
c1,c2 = path.splitext(b)
```