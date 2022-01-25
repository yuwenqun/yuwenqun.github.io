## 一、简介
#### 引用原文
```
smart-doc是一款同时支持JAVA REST API和Apache Dubbo RPC接口文档生成的工具,
smart-doc在业内率先提出基于JAVA泛型定义推导的理念， 完全基于接口源码来分析生成接口文档，
不采用任何注解侵入到业务代码中。你只需要按照java-doc标准编写注释，
smart-doc就能帮你生成一个简易明了的Markdown、HTML5文档，
甚至可以直接生成Postman Collection导入到Postman做API接口调试。
```


## 二、优点
#### 引用原文
* 零注解、零学习成本、只需要写标准JAVA注释。
* 基于源代码接口定义自动推导，强大的返回结构推导。
* 支持Spring MVC、Spring Boot、Spring Boot Web Flux(controller书写方式)、Feign。
* 支持Callable、Future、CompletableFuture等异步接口返回的推导。
* 支持JavaBean上的JSR303参数校验规范，包括分组验证。
* 对JSON请求参数的接口能够自动生成模拟JSON参数。
* 对一些常用字段定义能够生成有效的模拟值。
* 支持生成JSON返回值示例。
* 支持从项目外部加载源代码来生成字段注释(包括标准规范发布的jar包)。
* 支持生成多种格式文档：Markdown、HTML5、Asciidoctor、Postman Collection、OpenAPI 3.0。
* 轻易实现在Spring Boot服务上在线查看静态HTML5 api文档。
* 开放文档数据，可自由实现接入文档管理系统。
* 支持导出错误码和定义在代码中的各种字典码到接口文档。
* 支持Maven、Gradle插件式轻松集成。
* 支持Apache Dubbo RPC接口文档生成。


## 三、使用
#### 改造
* 原始的问题
  * 严格注释控制：
    * 1.注释为空的场景报错
    * 2.注释不合规范报错
  
  * 解决方案：
    * 使用我提供的二次开发的jar包 (见:[apiGenDoc](https://github.com/yu2lulu/apiGenDoc))