## 一、项目部署

**项目步骤步骤**
> 1.下载源代码
[源代码](https://github.com/yu2lulu/Java-SSM-Loophole-Range)

> 2.安装mysql
* 1.设置账号密码信息【user:root password:123456】
* 2.导入mytest.sql(需先创建库mytest)
[mytest.sql](/attach/mytest.sql)

> 3.postman工具包
[postman包api](/attach/postman2.1.json)

## 二、项目数据逻辑结构
**项目模型结构**
![](/img/mvc.jpg)

## 三、项目源代码说明
**项目目录结构**
![](/img/about.jpg)


**目录结构说明**
```
src/main/java
    it.ssm
        controller : Controller层
        dao: Dao层，数据库操作
        domain：javaBean,这里只要用作数据库表和对象的映射
        interceptor : 拦截器，本项目暂未用到
        service： service层，逻辑处理层
        tools ： 工具类，这里主要用于参数校验
    resources
        mapper : mybatis的mapper文件(SQL配置语句)
        applicationContext.xml :spring容器配置文件
        db.properties ： 数据库账号信息
        ESAPI.properties : esapi配置文件
        esapi-java-logging.propertis: esapi配置文件
        spring-mvc.xml： springmvc配置文件
        sqlmapper.xml：mybaits的配置文件
        validation.properties: esapi配置文件
    webapp: jsp页面
```