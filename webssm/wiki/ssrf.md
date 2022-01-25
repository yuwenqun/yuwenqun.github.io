## 一、漏洞环境信息
```
http://127.0.0.1:8080/ssrf/okhttp?url=http://www.baidu.com/img/baidu.svg
```
#### **payload** ```http://127.0.0.1:8080/ssrf/okhttp?url=http://www.taobao.com```

![](/img/okhttp_payload.jpg)


## 二、修复说明
![](/img/okhttp_fenxi.jpg)


#### **service层 public String getUrl(String url) 添加修复代码分析**

**SSRF核心代码**
```

@Service
public class okHttpServiceImpl implements okHttpService {

    private final OkHttpClient client = new OkHttpClient();

    @Override
    public String getUrl(String url) throws IOException {
        //输入过滤
        Boolean urlIsValid = urlCheck.isValid(url);

        if (!urlIsValid){
            return "非法URL";
        }

        //发起http请求获取数据
        Request request = new Request.Builder().url(url).build();

        Response response = client.newCall(request).execute();
        if (!response.isSuccessful()) throw new IOException("Unexpected code " + response);

        return response.body().string();
    }
}
```
**SSRF-URL校验函数**
```
/*
* url 检测
* */
public class urlCheck {
    public static Boolean isValid(String url){
        //URL白名单列表
        ArrayList<String> whiteHost = new ArrayList<>();
        whiteHost.add("www.baidu.com");
        whiteHost.add("www.qq.com");

        //白名单端口号
        int whitePort = 80;
        URL checkUrl = null;
        try {
            checkUrl = new URL(url);
            String host = checkUrl.getHost();  //域名
            int port = checkUrl.getPort(); //端口

            if (whiteHost.indexOf(host.toLowerCase()) == -1){
                return false;
            }

            if (port==-1){  //表示没有端口号，需要通过http和https进行判断
                if (url.toLowerCase().startsWith("https")){
                    return false;
                }
            }else if (whitePort != port ){
                return false;
            }else{
                return true;
            }

        } catch (MalformedURLException e) {
            e.printStackTrace();
            return false;
        }
        return true;
    }
}
```

## 三、小结
* 成因：输入未校验
* 位置：Service层
* 修复：参数输入过滤
  * 1.限制域名白名单
  * 2.限制端口白名单
  * .....

