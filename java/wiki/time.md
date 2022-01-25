## 时间转换图
![](/java/wiki/时间转换图.png)

## 代码实例

### 1.获取当前时间戳
```
long l = System.currentTimeMillis();
System.out.println(l); // 1618366932577
```

### 2.时间戳转时间结构体
```
Date date = new Date(0L); //
System.out.println(date); //Thu Jan 01 08:00:00 CST 1970
```

### 3. 结构体转时间戳
```
long time1 = date.getTime();
System.out.println(time1); //1618366932577
```

### 4. 结构体转时间格式
```
SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
String format = simpleDateFormat.format(date);
System.out.println(format); // 1970-01-01 08:00:00
```


### 5.时间格式转时间戳
```
Date parse = simpleDateFormat.parse(format);
long time = parse.getTime();
System.out.println(time);  //1618366932577
```