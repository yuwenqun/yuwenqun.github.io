(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{381:function(n,e,t){"use strict";t.r(e);var s=t(22),o=Object(s.a)({},(function(){var n=this.$createElement,e=this._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("h2",{attrs:{id:"vue-json-excel模块使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-json-excel模块使用"}},[this._v("#")]),this._v(" vue-json-excel模块使用")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('1.安装\nnpm install vue-json-excel\n\n2.项目工程中添加如下代码\nimport Vue from "vue";\nimport JsonExcel from "vue-json-excel";\n\nVue.component("downloadExcel", JsonExcel);  //全局注册组建\n\n3.组建使用和说明\n<download-excel\n    :data="dataList"\n    :fetch="fetchData"\n    worksheet="My Worksheet"\n    name="filename.xls"\n    :before-generate = "startDownload"\n    :before-finish = "finishDownload"\n>\n<el-button type="primary" size="mini">导出EXCEL</el-button>\n</download-excel>\n\n参数说明：\n    :data="dataList"  //需要导出的json数据[{..},{...},...]\n    :fetch="fetchData" //在点击下载按钮后，开始下载之前执行的函数，通过请求获取的数据\n    :fields="json_fields"  //没有配置则全部json内容导出，有配置则按照fileds内容导出\n    worksheet="My Worksheet" //工作表选项卡的名称。\t\n    name="filename.xls"  //导出的文件名字\n    :before-generate = "startDownload" //在生成/获取数据之前调用方法，例如:显示加载进度\t\n    :before-finish = "finishDownload" //在下载框弹出之前调用方法的回调，例如:隐藏加载进度\t\n\n\ndata:{\n    json_fields:{\n        \'excel的A列显示的名称\':\'A\',\n        \'excel的B列显示的名称\':\'B\',\n    }\n}\n\nmethods:{\n    fetchData(){\n        .....\n        return obj  //固定的格式\n    },\n    startDownload() {\n      console.log("数据开始")  //一般设置遮罩层，开始下载文件之前执行\n    },\n    finishDownload() {\n      console.log("数据下载完成")  //去除遮罩层，在下载文件之前执行\n    }\n}\n\n')])])])])}),[],!1,null,null,null);e.default=o.exports}}]);