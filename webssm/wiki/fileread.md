## 一、漏洞环境信息
```
http://127.0.0.1:8080/fileread/read?file=1.txt
```
#### **payload:** http://127.0.0.1:8080/fileread/read?file=../../../../../../../../etc/pass
![](/img/fileread_payload.jpg)


## 二、修复说明
![](/img/fileread_fenxi.jpg)


#### **分析service层 fileRead(String filePath) 添加修复代码前后分析**

**文件读取核心代码**
```
    @Override
    public String fileRead(String filePath) {
        //1.获取文件路径
        String staticPath = ContextLoader.getCurrentWebApplicationContext().getServletContext().getRealPath("/static");

        //安全检验
        Boolean fileInDir = fileReadCheck.isFileInDir(filePath, new File(staticPath));
        if (fileInDir==false){
            return null;
        }

        //2.得到需读取的文件完整路径
        File filepath = new File(staticPath+File.separator+filePath);

        //3.判断文件是否存在
        if(filepath.isFile()==false){
            return null; //表示不存在该文件,直接返回空
        }

        //3.读取文件内容并返回
        String sb = null;
        try {
            sb = readAction(filepath); //读取文件代码
        } catch (IOException e) {
            e.printStackTrace();
        }
        return sb;
    }

    @Override
    public String readAction(File file) throws IOException {
        略.
    }
```

**文件读取校验代码**
```
/*
任意文件读取过滤函数
* */
public class fileReadCheck {
    //判断字符串格式的文件名是否在目录中存在
    static public Boolean isFileInDir(String fileName, File dir){
        if(dir.isDirectory()==false){
            return false;
        }
        //1。获取目录下的所有文件名
        File[] files = dir.listFiles();

        for (int i = 0; i < files.length; i++) {
            if (fileName.equals(files[i].getName())){ //如果需要读取的目录中存在和读取的文件名相同则返回true
                return true;
            }
        }
        return false; //没有找到目标相同的文件名,返回false
    }
}
```

**修复说明**
* 获取需要读取文件的目录下的所有文件名;
* 比对目录下所有文件名和需要读取的文件名
* 若有相同的文件名,读取 否->拒绝读取操作

## 三、小结
* 成因：输入未校验
* 位置：Service层
* 修复：ESAPI编码/逻辑处理修复
  * ESAPI分析：正常的文件名称由字母数字组成，另外上传的合法文件应由系统重新生成唯一的id去命名，因此可以粗暴的使用ESAPI的encodeForOS编码处理
  * 逻辑修复分析：filePath变量无论是否带有路径穿越的路径信息，对于系统来说都只是一个字符串,可以在需要读取的目录中去比对文件名是否一致来处理，从而限制了目录穿越带来的文件读取操作
