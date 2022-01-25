## 1.生成【1-10]的随机数
```
Random random = new Random();

int i = random.nextInt(10) + 1;  //【0,10)+1 = [1,10]
System.out.println(i); // 7
```

## 2.随机生成字符
```
String strs = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
Random random = new Random();
int i = random.nextInt(62);
char c = strs.charAt(i);
System.out.println(c); //c
```

## 3.随机生成字符串
```
String strs = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
Random random = new Random();
ArrayList<StringBuilder> strings = new ArrayList<StringBuilder>();
for (int i = 0; i < 10; i++) {
    StringBuilder stringBuilder = new StringBuilder();
    for (int j = 0; j < 10; j++) {
        int i1 = random.nextInt(62);
        char c = strs.charAt(i1);
        stringBuilder.append(c);
    }
    strings.add(stringBuilder);
}
System.out.println(strings); // [XWCigDiuDB, frvYHI0oRH, KET8SSFRly, UZWZv3S7Fi, hXq4Xxn2eb, rJJronnd2H, ECapVbvt23, puyH89eob0, z0sCQgYtgE, mDpt9QmPCe]

```