## springMVC 介绍
> SpringMVC 是一种基于 Java 的实现 MVC 设计模型的请求驱动类型的轻量级 Web 框架，属于SpringFrameWork
的后续产品，已经融合在 Spring Web Flow 中。
SpringMVC 已经成为目前最主流的MVC框架之一，并且随着Spring3.0 的发布，全面超越 Struts2，成为最优秀的
MVC 框架。它通过一套注解，让一个简单的 Java 类成为处理请求的控制器，而无须实现任何接口。同时它还支持
RESTful 编程风格的请求。

## springMVC IDEA快速入门步骤
* 1.MAVEN和Tomcat安装环境配置(略)
* 2.新建MAVEN项目
![](/java/wiki/springmvc/IDEA创建.jpg)
* 3.pom文件添加依赖包
```
  <dependencies>
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-tx</artifactId>
      <version>5.3.0</version>
    </dependency>
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-core</artifactId>
      <version>5.3.0</version>
    </dependency>
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-aop</artifactId>
      <version>5.3.0</version>
    </dependency>
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-beans</artifactId>
      <version>5.3.0</version>
    </dependency>
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-web</artifactId>
      <version>5.1.9.RELEASE</version>
    </dependency>
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-webmvc</artifactId>
      <version>5.1.9.RELEASE</version>
    </dependency>
    <dependency>
      <groupId>javax.servlet</groupId>
      <artifactId>javax.servlet-api</artifactId>
      <version>4.0.1</version>
    </dependency>
    <dependency>
      <groupId>mysql</groupId>
      <artifactId>mysql-connector-java</artifactId>
      <version>8.0.13</version>
    </dependency>
    <dependency>
      <groupId>com.alibaba</groupId>
      <artifactId>druid</artifactId>
      <version>1.2.2</version>
    </dependency>
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-jdbc</artifactId>
      <version>5.3.0</version>
    </dependency>
  </dependencies>
```
* 4.配置web.xml的ContextLoaderListener
  * 4.1 添加src/main/resources/applicationContext.xml spring容器文件
  * 4.2 web.xml配置spring监听器使得启动tomcat自动加载applicationContext.xml文件
  ```
  <context-param>
    <param-name>contextConfigLocation</param-name>
    <param-value>classpath:applicationContext.xml</param-value>
  </context-param>
  
  <listener>
    <!--默认会自动加载 默认变量contextConfigLocation 中的classpath:applicationContext.xml -->
    <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>  
  </listener>
  ```
* 5.配置web.xml的DispatcherServlet
  * 5.1 web.xml配置DispatcherServlet,加载spring-mvc配置文件
```
  <servlet>
    <servlet-name>DispatcherServlet</servlet-name>
    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
    <init-param>
      <param-name>contextConfigLocation</param-name>
      <!--加载springmvc配置文件-->
      <param-value>classpath:spring-mvc.xml</param-value>
    </init-param>
    <!--启动tomcat自启动-->
    <load-on-startup>1</load-on-startup>
  </servlet>

  <servlet-mapping>
    <servlet-name>DispatcherServlet</servlet-name>
    <url-pattern>/</url-pattern>
  </servlet-mapping>
```
  * 5.2 添加src/main/resources/spring-mvc.xml springMVC的配置文件,这里只做注解扫描
```
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="
       http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/context  http://www.springframework.org/schema/context/spring-context.xsd">
    
    <context:component-scan base-package="it.web.controller"/>

</beans>
```

* 6.配置tomcat
![](/java/wiki/springmvc/tomcat配置.jpg)


  
* 7.controller测试代码
#### src/main/java/it/web/controller/indexController.java
```
@Controller
public class indexController {
    @RequestMapping("/index")
    @ResponseBody
    public String index(){
        System.out.println("index Controller running");
        return "hello world";
    }
}
```



## springMVC 获得ServletContext
```
WebApplicationContext webApplicationContext = ContextLoader.getCurrentWebApplicationContext();  
ServletContext servletContext = webApplicationContext.getServletContext();  
```
## springMVC 请求参数处理
* 请求参数和形参对应（如果请求参数和行参不一致则需要配合@RequestParam使用）
```
 请求参数(GET)： http://host/?name=zhangsan&age=12
        POST:  name=zhangsan&age=12

    public String test(String name, int age){
        System.out.println(name);
        System.out.println(age);
        return "";
    }

当请求参数和函数行参不一致时需要配合@RequestParam使用:
    @RequestMapping("/test3")
    @ResponseBody
    public String test3(@RequestParam(value = "name",defaultValue = "abc") String username){
        System.out.println(username);
        return username;
    }
```

* 业务方法的POJO参数的属性名与请求参数的name一致（参数值会自动映射匹配,转换为java对象)
```
 请求参数(GET)： http://host/?username=zhangsan&age=12&sex=女
        POST:  username=zhangsan&age=12&sex=女

    @RequestMapping("/userinfo")
    @ResponseBody
    public String getUSerinfo(Userinfo userinfo){

        System.out.println(userinfo);
        return "abbbbb";
    }
```
* 接受json格式数据(需pom.xml添加jackson依赖,并且配@RequestBody,参数会自动转换为对应的对象形式，List/Map都支持）
```
  请求数据：[{
    "name": "zhangsan",
        "sex": "男",
        "age": 11,
        "id": 1
    },　......
  ]

    @RequestMapping("/index")
    @ResponseBody
    public String  getUsers(@RequestBody List<Userinfo> userinfos){  
        System.out.println(userinfos);
        return "abc";
    }
```

* 获取请求头
```
    @RequestMapping("/index")
    @ResponseBody
    public String getHeader(@RequestHeader(name = "User-Agent") String header){
        System.out.println(header);
        return header;
    }
```

#### 配置全局乱码过滤器(应用)
> 当post请求时，数据会出现乱码，我们可以设置一个过滤器来进行编码的过滤。
```
<!--配置全局过滤的filter--> 
<filter> 
    <filter-name>CharacterEncodingFilter</filter-name> 
    <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class> 
        <init-param> 
            <param-name>encoding</param-name> 
            <param-value>UTF-8</param-value> 
        </init-param> 
</filter> 
<filter-mapping> 
    <filter-name>CharacterEncodingFilter</filter-name> 
    <url-pattern>/*</url-pattern>
</filter-mapping>
```
## springMVC 响应数据
* 页面跳转


* 回写字符串
> 目前都是前后端分离的web架构，这里的跳转意义不大，暂时不详细归纳总结

> 回显普通字符串
```
    @RequestMapping("/returnStr")  //url注解
    @ResponseBody  //表示响应字符串回显而不是跳转
    public String returnString(){
        return "hello springMVC";  //这里的return表示回显字符串信息
    }

```

> 回显JSON字符串
* 1.pom.xml添加jackson的坐标(jackson-core/jackson-databind/jackson-annotations)
* 2.springmvc.xml中配置jackson处理响应数据
```<mvc:annotation-driven/> ```  //需额外配置mvc的：xmlns:mvc="http://www.springframework.org/schema/mvc" ......

* 3.测试
```
    @RequestMapping("/pojo")
    @ResponseBody
    public Userinfo test2(){
        ServletContext servletContext = ContextLoader.getCurrentWebApplicationContext().getServletContext();
        WebApplicationContext app = WebApplicationContextUtils.getWebApplicationContext(servletContext);
        UserinfoDaoImpl bean = app.getBean(UserinfoDaoImpl.class);
        Userinfo userinfoOne = bean.getUserinfoOne(1);
        return userinfoOne;  //直接返回对象即可，列表，数组都可。
    }
```

## springMVC 拦截器
> 这里以登陆拦截作为演示
> 
①创建拦截器类实现HandlerInterceptor接口
```
public class interceptorFirst implements HandlerInterceptor {
    // preHandle方法是在controller方法执行之前被调用,return true表示往下执行控制器，return false表示拦截不往下执行
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        HttpSession session = request.getSession();
        Object user = session.getAttribute("username");
        if (user==null){ //未登陆成功
            response.sendError(403,"当前未登陆请先完成登陆后操作");
            return false;
        }else{
            return true;
        }

    }

    //在响应视图前执行
    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {

    }

    //响应数据之后被执行
    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {

    }
}

拦截器中的方法执行顺序是：preHandler-------目标资源----postHandle---- afterCompletion
```
②配置拦截器(spring-mvc.xml)
```
    <mvc:interceptors>
        <mvc:interceptor>
            <mvc:mapping path="/**"/>  //拦截所有的路径,/** 固定写法2个*
            <mvc:exclude-mapping path="/login/index"/>  //判处拦截的urlpath
            <bean class="it.webapp.interceptor.interceptorFirst"/>  //拦截器类路径
        </mvc:interceptor>
    </mvc:interceptors>
```
③测试拦截器的拦截效果(略)

## springMVC 异常处理


## springMVC 文件上传
> 步骤
> 
> 1.导入pom.xml依赖坐标(commons-io/commons-fileupload)
> 
> 2.配置spring-mvc.xml的multipartResolver上传文件属性控制

```
    <!-- id是固定值，不能修改 -->
    <bean id="multipartResolver" class="org.springframework.web.multipart.commons.CommonsMultipartResolver">
        <property name="defaultEncoding" value="UTF-8"/>
    </bean>
  ```
>
> 3.上传controller代码
```
    @RequestMapping("/index")
    @ResponseBody
    public String FileUpload(MultipartFile file) throws IOException {
        String originalFilename = file.getOriginalFilename();  //获取文件名称

        file.transferTo(new File("/Users/jeffery.yu/Desktop/"+originalFilename));  //将文件保存到指定位置

        return "上传成功!";

    }
```