# 文件操作

## 1.文件复制
```
Path spath = new File("/etc/passwd").toPath();  //源文件Path对象
Path dpath = new File("./passwd.bak").toPath(); //目的文件Path对象

Path targetPath = Files.copy(spath, dpath); //拷贝操作,结果为目的PAth对象，复制失败会抛出异常
```

## 2.文件移动/重命名
```
File file = new File("./passwd.old");  //要操作的文件file对象
boolean b = file.renameTo(new File("./passwd.bak")); //执行操作，参数也是File对象
```

## 3.文件删除
```
boolean flag = file.delete();
```

## 4.文件属性
```


```