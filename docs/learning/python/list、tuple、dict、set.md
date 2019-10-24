## list

list是一种有序的集合，数据类型可以不同， 可以随时添加和删除其中的元素。
```python
l1 = [1,"Apple",3]

# 返回 3
len(l1)

# 返回2
l1[-2]

#追加元素到末尾
l1.append(4)

#插入元素到指定的位置
l1.insert(1, 'Jack')

#删除指定位置的元素 pop(i = 最后一个元素索引)
l1.pop(2)

# 返回 True
bool1 = [1,2] == [1,2]
```

## tuple

tuple和list非常类似，但是tuple一旦初始化就不能修改

```python
# 只有1个元素的tuple，必须这样定义
t = (1,)

# 返回 True
bool1 = t == (1,)
```

## dict

dict全称dictionary，在其他语言中也称为map，dict是用空间来换取时间的一种方法。

```python
# 定义
d = {
    "a":123,
    1:"sss",
    (1,2):(1,2)
}

a = dict(one=1, two=2, three=3)
b = {'one': 1, 'two': 2, 'three': 3}
c = dict(zip(['one', 'two', 'three'], [1, 2, 3]))
d = dict([('two', 2), ('one', 1), ('three', 3)])
e = dict({'three': 3, 'one': 1, 'two': 2})
# 返回True, 但是是5个独立的dict
bb = a == b == c == d == e

# 查找, 不存在返回 None
a.get('one')

# 删除, b、c、d、e不受影响
a.pop('one')
```

## set
set和dict类似，也是一组key的集合，但不存储value。由于key不能重复，所以，在set中，没有重复的key。

```python
# 定义
a = {1,2,3}
b = set({1,2,3})
c = set([1,2,3])

# 添加
a.add((2,3))

# 删除
a.remove((2,3))
```