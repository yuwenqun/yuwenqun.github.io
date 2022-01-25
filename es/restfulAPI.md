# restfulAPI

## 概念解释
```
索引： index  相当于数据库中的database
类型： Type   相当于数据库中的表
主键： Id     往ES中存数据相当于往ES中的Index下的Type中存储JSON数据
```

## 索引操作
#### 1.添加索引
```
PUT  http://ip:9200/index_name
```
#### 2.删除索引
```
DELETE  http://ip:9200/index_name
```

#### 3.查询索引
```
http://127.0.0.1:9200/_cat/indices/seclog*/?format=json

[
    {
        "health":"yellow",
        "status":"open",
        "index":"seclog20211206",    //索引名称"uuid":"lbJMZktISF6Q7FtWFc28nQ",
        "pri":"1",
        "rep":"1",
        "docs.count":"126", // 数量
        "docs.deleted":"0",
        "store.size":"539.5kb", // 大小
        "pri.store.size":"539.5kb"
    },
    ......
]
```

## 数据操作
#### 1.添加数据
#### 2.更新数据
#### 3.删除数据
#### 4.查询数据
```
1.term查询
2.terms查询
3.match查询
4.match_all查询
5.multi_match多字段查询
6.match_phrase短语匹配查询
7.前缀查询
8.范围查询
9.wildcard，支持通配符查询
```

