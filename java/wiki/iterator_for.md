## 迭代器的使用
```
ArrayList<String> s = new ArrayList<>();

s.add("hello");
s.add("world");

Iterator<String> iterator = s.iterator();
while (iterator.hasNext()){
    String next = iterator.next();
    System.out.println(next);
}

```

## 增强for使用
```
ArrayList<String> s = new ArrayList<>();

s.add("hello");
s.add("world");

for (String s1 : s) {
    System.out.println(s1);
}
```