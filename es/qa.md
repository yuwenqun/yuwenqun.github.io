## es查询只能查一万条数据问题

### 1.修改索引配置中的max_result_window
```
由于在logstash中配置索引的时候使用es的默认的索引模板,
默认的索引模板配置信息中的from+size最大值为10000,

put http://ip:9200/_all_/_settings 

{ "index" : 
    {
         "max_result_window": 10000000
    }
}

```
### 2.查询时加上?track_total_hits=true
```
方式1:
POST http://ip:port/index/_search?track_total_hits=true
.......


方式2:
{
 "track_total_hits":true,
  "query":{
    "match":{
      "name":"value"
    }
  }
}
```
