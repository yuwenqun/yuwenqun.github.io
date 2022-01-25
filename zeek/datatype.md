## 1.变量类型
* 全局变量
```
export {
    const http_post_body_length = 200 &redef;
}
```
* 常数  

```const default_capture_password = F &redef;```

* 局部变量(函数中定义)
```
event zeek_init()
{
    local test = add_two(10);
}
```

## 2.数据类型
|  数据类型   | 描述  | 举例 |
|  ----  | ----  |
| int   | 64 位有符号整数 |
| count | 64 位无符号整数 | 
| double | 双精度浮点精度 |
| bool | 布尔值 (T/F) |
| addr | IP 地址、IPv4 和 IPv6 |
| port | 传输层端口 |  23/tcp | 
| subnet | CIDR 子网掩码 | 192.168.1.0/24 |
| time | 绝对纪元时间 |
| interval | 一个时间间隔 |
| pattern | 正则表达式 |


strftime("%Y/%m/%d %H:%M:%S", network_time()) => 2011/06/18 19:03:08

## 3.集合
```local ssl_ports: set[port];```  //定义类型

```local non_ssl_ports = set( 23/tcp, 80/tcp, 143/tcp, 25/tcp );```  //创建时直接赋值

//for循环
```
for ( i in ssl_ports )
    print fmt("SSL Port: %s", i);
```

// if判断
```
if ( 587/tcp !in ssl_ports )
    add ssl_ports[587/tcp];
```

## 4.表（字典）
```
 # Declaration of the table.
local ssl_services: table[string] of port;

# Initialize the table.
ssl_services = table(["SSH"] = 22/tcp, ["HTTPS"] = 443/tcp);

# Insert one key-yield pair into the table.
ssl_services["IMAPS"] = 993/tcp;

# Check if the key "SMTPS" is not in the table.
if ( "SMTPS" !in ssl_services )
    ssl_services["SMTPS"] = 587/tcp;

# Iterate over each key in the table.
for ( k in ssl_services )
    print fmt("Service Name:  %s - Common Port: %s", k, ssl_services[k]);
```

## 5.向量（有序的集合）
```local v1: vector of count;```
```local v2 = vector(1, 2, 3, 4);```

``` | v1 | ``` 长度


## 6.type和record
* 当与type关键字组合时，record可以生成复合类型
```
type Service: record {
    name: string;
    ports: set[port];
    rfc: count;
};

local dns: Service = [$name="dns", $ports=set(53/udp, 53/tcp), $rfc=1035];

print fmt("Service: %s(RFC%d)",serv$name, serv$rfc);
    
```