## 触发器
```
触发器:在insert、update、delete之前或者之后出发并执行定义的SQL语句

用途：确保数据完整性、日志记录、数据校验等

NEW和OLD来饮引用内容变化的前后数据

```

![](/mysql/mysql_trigger.jpg)


#### 例子
```
create trigger TGName
after/before [ insert|update|delete ] on 表名
for each row   #这句话在mysql是固定的
begin
    sql语句;
end;
```
![](/mysql/mysql_trigger_navicat.jpeg)

