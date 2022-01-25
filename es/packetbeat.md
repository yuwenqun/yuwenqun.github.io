## 说明

#### 支持扑捉协议
```
ICMP (v4 and v6)
DNS
HTTP
AMQP 0.9.1
Cassandra
Mysql 
PostgreSQL
Redis
Thrift-RPC
MongoDB
Memcache
TLS
```
#### 支持的condition：
* equals
```
  equals:
  http.response.code: 200
```
* contains
```
contains:
  status: "Specific error"
```
* regexp
```
regexp:
  system.process.name: "foo.*"
```
* range
```
range:
    http.response.code:
        gte: 400

range:
    system.cpu.user.pct.gte: 0.5
    system.cpu.user.pct.lt: 0.8
```
* or
```
or:
  - <condition1>
  - <condition2>
  - <condition3>

or:
  - equals:
      http.response.code: 304
  - equals:
      http.response.code: 404
```
* and
```
http.response.code = 200 AND status = OK:


and:
  - equals:
      http.response.code: 200
  - equals:
      status: OK
```
* not
```
NOT status = OK

not:
  equals:
    status: OK
```

#### 支持的processors:
* add_cloud_metadata
* add_locale
* decode_json_fields
* drop_event
* drop_fields
* include_fields
* add_kubernetes_metadata
* add_docker_metadata
## 举例
```
packetbeat.interfaces.device: any
packetbeat.interfaces.type: af_packet // af_packet提高数据表扑获性能
packetbeat.interfaces.buffer_size_mb: 100  // af_packet缓存内存大小
packetbeat.ignore_outgoing: true  // Packetbeat将忽略从运行Packetbeat的服务器发起的所有事务
packetbeat.interfaces.internal_networks:
  - private
packetbeat.flows:
  timeout: 30s
  period: 10s
  enabled: false  //禁用
packetbeat.protocols:
- type: http
  ports: [80, 8080, 8000, 5000, 8002]
  split_cookie: true
  send_all_headers: true
  send_request: true   // 记录请求
  send_response: true  // 记录响应
  include_body_for: ["text/html","text/plain","text/xml","application/xhtml+xml","application/xml","application/atom+xml","application/json"]
  processors:
  - drop_event:  // 没有这个x-author-pabum请求头时丢弃事件
     when:
       not:
         regexp:
           http.request.headers.x-author-pabum: ".*"
setup.template.settings:
  index.number_of_shards: 1
output.elasticsearch:
  hosts: ["172.16.117.1:9200"]

  ```
