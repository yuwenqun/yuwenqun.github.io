## 一、漏洞环境信息
```
http://127.0.0.1:8080/xss/reflex?title=六月的雨
```
#### **payload** ```http://127.0.0.1:8080/xss/reflex?title=六月的雨<script>alert(123)</script>```

![](/img/xss_payload.jpg)


## 二、修复说明
![](/img/xss_fenxi.jpg)


#### **public ModelAndView reflex(@RequestParam("title") String title)添加修复代码前后分析**

**XSS代码**
```

@Controller
@RequestMapping("/xss")
public class reflexController {

    @Autowired
    private reflexServiceImpl reflexServiceimpl;


    @RequestMapping("/reflex")
    public ModelAndView reflex(@RequestParam("title") String title){

        article articleOne = reflexServiceimpl.getArticleBytitle(title);
        ModelAndView index = new ModelAndView();
        index.setViewName("../article.jsp");

        //xss过滤,对于输出的地方过滤编码处理
        index.addObject("keyword",charEncoding.charFilterESAPI(title));

        if (articleOne!=null){
            index.addObject("title", charEncoding.charFilterESAPI(articleOne.getTitle()));
            index.addObject("author",charEncoding.charFilterESAPI(articleOne.getAuthor()));
            index.addObject("ctime",charEncoding.charFilterESAPI(articleOne.getCtime()));
            index.addObject("context",charEncoding.charFilterESAPI(articleOne.getContent()));
        }else{
            index.addObject("title", "");
            index.addObject("author","");
            index.addObject("ctime","");
            index.addObject("context","");
        }

        return index;
    }
}
```
**XSS过滤函数-自定义过滤函数**
```
static public String charFilter(String content){
    String s = content.replaceAll("&", "&amp;");
    String s1 = s.replaceAll("<", "&lt;");
    String s2 = s1.replaceAll(">", "&gt;");
    String s3 = s2.replaceAll("\"", "&quot;");
    String s4 = s3.replaceAll("'", "&#x27;");
    String s5 = s4.replaceAll("/", "&#x2F;");

    return s5;
}
```
**XSS过滤函数-ESAPI过滤函数**
```
    static public String charFilterESAPI(String content){
    return ESAPI.encoder().encodeForHTML(content);
}
```

## 三、小结
* 成因：输出未编码
* 位置：Controller层
* 修复：输出编码
  
  * 1.自行编写编码处理
```
    static public String charFilter(String content){
        String s = content.replaceAll("&", "&amp;");
        String s1 = s.replaceAll("<", "&lt;");
        String s2 = s1.replaceAll(">", "&gt;");
        String s3 = s2.replaceAll("\"", "&quot;");
        String s4 = s3.replaceAll("'", "&#x27;");
        String s5 = s4.replaceAll("/", "&#x2F;");
        return s5;
    }
```
  * 2.ESAPI编码处理

```
     static public String charFilterESAPI(String content){
        return ESAPI.encoder().encodeForHTML(content);
    }
```
