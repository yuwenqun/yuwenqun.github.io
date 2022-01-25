## 一、漏洞环境信息
**场景：输入域名或者ip信息通过ping检测连通性**
```
http://127.0.0.1:8080/cmd/runtime?ip=localhost
http://127.0.0.1:8080/cmd/processbuild?ip=localhost
```

![](/img/runtime.jpg)
**payload代码：**
```
http://127.0.0.1:8080/cmd/runtime?ip=localhost;cat+/etc/passwd
```
![](/img/cmd_payload.jpg)

## 二、修复说明
![](/img/runtime_fenxi.jpg)

#### **分析service层goAction添加修复后的代码**
**goAction**
```
@Service
public class runTimeServiceImpl implements runTimeService {
    @Override
    public String goAction(String ipaddr) throws IOException {
        //安全过滤,添加一下2行esapi过滤函数的处理
        ipaddr= charEncoding.osCmdFilterESAPI(ipaddr);
        System.out.println(ipaddr);

        String cmds = "/sbin/ping -c 1 " + ipaddr;  //拼接命令
        String[] cmd = new String[]{"sh","-c",cmds}; 


        //执行命令获取返回值
        InputStream inputStream = Runtime.getRuntime().exec(cmd).getInputStream(); //执行命令并获取结果
        StringBuilder sb = new StringBuilder();
        int len = 0;
        while ((len=inputStream.read())!=-1){
            sb.append((char)len);
        }
        return sb.toString();
    }
}
```
**esapi代码**
```
//命令执行esapi编码
static public String osCmdFilterESAPI(String content){
    UnixCodec unixCodec = new UnixCodec();
    return ESAPI.encoder().encodeForOS(unixCodec,content); 
}
```

**命令语句转译过程**
```
/sbin/ping -c 1 localhost;cat /etc/passwd
        ||
        \/
\/sbin\/ping\ -c\ 1\ localhost\;cat\ \/etc\/passwd
```

## 三、小结
* 成因：输入参数未过滤
* 位置：Service层
* 修复：输入过滤/ESAPI过滤
  ```    
    static public String osCmdFilterESAPI(String content){
        UnixCodec unixCodec = new UnixCodec();
        return ESAPI.encoder().encodeForOS(unixCodec,content);
    }
   ```
