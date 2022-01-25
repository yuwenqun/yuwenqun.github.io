## mysql判断一个字符串是否包含某子串


#### 使用locate(substr,str)函数，如果包含，返回>0的数，否则返回0 

```
例子1：判断site表中的url是否包含'http://'子串,如果不包含则拼接在url字符串开头
update site set url =concat('http://',url) where locate('http://',url)=0 

例子2: 多表查询,要求表A中的字段1包含表B的字段2,返回匹配的行
select ... from A
inner join B
on locate(B.字段2,A.字段1)>0
```