## 0.配置和导包
```
1.导入包
    <dependencies>
        <dependency>
            <groupId>org.owasp.esapi</groupId>
            <artifactId>esapi</artifactId>
            <version>2.1.0</version>
        </dependency>
    </dependencies>
2.添加配置文件
https://github.com/ESAPI/esapi-java-legacy/tree/develop/configuration/esapi


备注：如果是spring结合只需要将配置文件拷贝到resources中即可，参考文件最好都拷贝过去否则可能报缺失文件

```

## 1.XSS防护
```
String s = "<script>alert(1)</scirpt>'\"";
String s2 = ESAPI.encoder().encodeForHTML(s);
System.out.println(s2);
```

## 2.SQL注入防护
#### 2.1 mysql防护
```
String id ="1 and 1=1 and '1'='1";
String mysql_query ="SELECT user_id FROM user_data WHERE id = " + ESAPI.encoder().encodeForSQL(new MySQLCodec(MySQLCodec.Mode.STANDARD),id);
System.out.println(mysql_query); // SELECT user_id FROM user_data WHERE id = 1 and 1\=1 and \'1\'\=\'1
```
#### 2.2 oracle防护
```
OracleCodec oracleCodec = new OracleCodec();
String id ="1 and 1=1 and '1'='1";
String oracle_query ="SELECT user_id FROM user_data WHERE id = " + ESAPI.encoder().encodeForSQL(oracleCodec,id);
System.out.println(oracle_query);
```

## 3.命令执行防护
```
WindowsCodec windowsCodec = new WindowsCodec();  //适用于window下
UnixCodec unixCodec = new UnixCodec();  //适用于linux平台下
cmd="ifconfig | echo 1";
String s1 = ESAPI.encoder().encodeForOS(unixCodec, cmd);  //引用linux平台
System.out.println(s1); //  ifconfig\ \|\ echo\ 1
```


## 4.XML过滤
```
String xml_encoder = ESAPI.encoder().encodeForXML(String xmlString);

```


## 5.富文本过滤xss内容
```
//1.首先需要将antisamy-esapi.xml 复制到资源目录下：可放置到/home/user/esapi/antisamy-esapi.xml等
//2.配置文件获取路径：https://github.com/ESAPI/esapi-java-legacy/tree/develop/configuration/esapi
String ss = "123kjsdlkjfsdf<script>alert(1)</script>";
String script = ESAPI.validator().getValidSafeHTML("", ss, ss.length(), true);
System.out.println(script);  // 123kjsdlkjfsdf
```