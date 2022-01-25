## 一、漏洞环境信息
```
POST: http://127.0.0.1:8080/fileupload/multipart
```
**payload:**
![](/img/fileupload_payload.jpg)

## 二、修复说明
![](/img/fileupload_fenxi.jpg)


#### **分析service层 public Boolean fileuploadAction(MultipartFile file) 添加修复代码前后分析**

**文件上传核心代码**
```
    @Override
    public Boolean fileuploadAction(MultipartFile file) throws IOException {
        //1.获取上传文件名
        String srcFileName = file.getOriginalFilename();

        //加入安全检测控制
        Boolean isOk = fileUploadCheck.fileTypeCheck(srcFileName);
        if (isOk==false){
            return false;  //名称类型检测失败则不上传
        }

        //2.获取需要上传到的路径位置
        ServletContext servletContext = ContextLoader.getCurrentWebApplicationContext().getServletContext();
        String path = servletContext.getRealPath("/")+File.separator+ "static";

        System.out.println("文件上传到本地路径为:"+path);
        //3.执行上传操作,最好文件随机字符串重命名处理
        file.transferTo(new File(path+File.separator+srcFileName));
        return true;
    }
```

**文件校验代码**
```
/*
 文件上传校验
 */
@Component
public class fileUploadCheck {
    private static String[] fileType = {".txt",".jpg",".png",".doc",".docs",".gif"};
    // 文件大小
    static public Boolean fileSizeCheck(){

        return true;
    }
    
    //文件类型
    static public Boolean fileTypeCheck(String FileName){
        if (FileName==null){
            return false;
        }
        int i = FileName.lastIndexOf(".");
        if (i==-1){
            return false;
        }else{
            String type = FileName.substring(i);
            int j = 0;
            for (j = 0; j < fileType.length; j++) {
                if (type.toLowerCase().equals(fileType[j])){
                    return true;
                }
            }
        }
        return false;
    }
}
```

**修复说明**
* 设置文件后缀白名单 {".txt",".jpg",".png",".doc",".docs",".gif"};
* 获取上传文件后缀名称
* 判断上传文件后缀名称是否在白名单中,是->上传保存到目标目录 否->拒绝保存操作

## 三、小结
* 成因：输入未校验
* 位置：Service层
* 修复：输入校验
  * 文件大小
  * 文件类型MIME
  * 文件后缀白名单
  * 文件重命名
  * 限制上传目录执行