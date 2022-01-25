## vue-json-excel模块使用
```
1.安装
npm install vue-json-excel

2.项目工程中添加如下代码
import Vue from "vue";
import JsonExcel from "vue-json-excel";

Vue.component("downloadExcel", JsonExcel);  //全局注册组建

3.组建使用和说明
<download-excel
    :data="dataList"
    :fetch="fetchData"
    worksheet="My Worksheet"
    name="filename.xls"
    :before-generate = "startDownload"
    :before-finish = "finishDownload"
>
<el-button type="primary" size="mini">导出EXCEL</el-button>
</download-excel>

参数说明：
    :data="dataList"  //需要导出的json数据[{..},{...},...]
    :fetch="fetchData" //在点击下载按钮后，开始下载之前执行的函数，通过请求获取的数据
    :fields="json_fields"  //没有配置则全部json内容导出，有配置则按照fileds内容导出
    worksheet="My Worksheet" //工作表选项卡的名称。	
    name="filename.xls"  //导出的文件名字
    :before-generate = "startDownload" //在生成/获取数据之前调用方法，例如:显示加载进度	
    :before-finish = "finishDownload" //在下载框弹出之前调用方法的回调，例如:隐藏加载进度	


data:{
    json_fields:{
        'excel的A列显示的名称':'A',
        'excel的B列显示的名称':'B',
    }
}

methods:{
    fetchData(){
        .....
        return obj  //固定的格式
    },
    startDownload() {
      console.log("数据开始")  //一般设置遮罩层，开始下载文件之前执行
    },
    finishDownload() {
      console.log("数据下载完成")  //去除遮罩层，在下载文件之前执行
    }
}

```