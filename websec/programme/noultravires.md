# 防越权方案

## 背景
原则上防越权的方案实际就是前置权限的判断和控制,但是很多时候难免遗漏，这个是开发中经常出现的问题,因此为了不考虑是否出现接口权限前置遗漏的情况下，引入防越权的机制


## 方案一：接口参数加密
```
https://xxxx/xxx.do?id=AES(id)  //POST同理
```
## 方案二：接口参数加签
```
https://xxxx/xxx.do?id=id&sign=md5(id) //POST同理

```

## 方案三:接口参数加签+加密
```
https://xxxx/xxx.do?id=AES(id)&sign=md5(id) //POST同理

```