## 一、漏洞环境信息
```
dom4j: http://127.0.0.1:8080/xxe/dom4j
jdom:  http://127.0.0.1:8080/xxe/jdom
sax:   略

```
#### **payload
![](/img/xxe_payload.jpg)


## 二、修复说明
![](/img/xxe_fenxi.jpg)


### 以dom4j分析,其他库同理
#### **分析Controller层 public String dom4jAction(@RequestBody String data) 添加修复代码前后分析**

**XXE代码**
```

@Controller
@RequestMapping("/xxe")
public class dom4jController {

    @Autowired
    private dom4jServiceImpl dom4jserviceImpl;

    @ResponseBody
    @RequestMapping(value = "/dom4j",produces = {"application/json;charset=utf-8"})
    public String dom4jAction(@RequestBody String data){
        System.out.println(data);

        //解析xml文件
         SAXReader reader = new SAXReader();
        
        //禁止外部DTD
        reader.setFeature("http://apache.org/xml/features/disallow-doctype-decl", true);
        reader.setFeature("http://xml.org/sax/features/external-general-entities", false);
        reader.setFeature("http://xml.org/sax/features/external-parameter-entities", false);
        reader.setFeature("http://apache.org/xml/features/nonvalidating/load-external-dtd", false);

        retMessage ret = new retMessage();
        try {
            Document document = reader.read(new InputSource(new StringReader(data)));
            Element root=document.getRootElement();
            String id = document.getStringValue();
            article OneArticle = dom4jserviceImpl.getArticleById(id);
            ret.setStatusCode(200);
            ret.setData(OneArticle);
            ret.setReqData(id);

        } catch (DocumentException e) {
            e.printStackTrace();

            ret.setStatusCode(500);
            ret.setData(e.getMessage());
            ret.setReqData(data);
        }
        
        return JSON.toJSONString(ret);
    }
}
```

**XML注入原理**
* XML跟JSON格式一样,是前后端数据交互的格式
* XML解析原理上是反序列化操作(XML格式字符串 => Object对象)
* XML反序列化过程:
  ![](/img/xml_parse.jpg)
    1. xml字符串载入XML解析器中
    2. 解析器构造Object对象
    3. id -> &xxe;  //加载id时需要引用外部实体xxe
    4. &xxe -> file:///etc/passwd  //外部实体xxe来源于文件/etc/passwd
    5. id = /etc/passwd  //读取/etc/passwd文件赋值给id


## 三、小结
* 成因：XML内容解析未设置禁止外部实体加载
* 位置：xml解析的位置
* 修复：设置属性禁止外部实体加载
    * 本质上XXE的问题是一个配置不当的问题
* XXE修复指引
  * [XML注入修复指引](/attach/XML注入修复指引.txt)
