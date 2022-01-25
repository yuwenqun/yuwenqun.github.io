## 0.javaweb介绍
> JavaWeb三大组件:Servlet/Filter/Listener

## 1.Servlet
> Servlet是Java Servlet的简称，称为小服务程序或服务连接器，用Java编写的服务器端程序，主要功能在于交互式地浏览和修改数据，生成动态Web内容。

### 1.1 处理请求数据
```

String servletPath = request.getServletPath(); // /404
String contextPath = request.getContextPath(); //  /javaweb_war_exploded
String requestURI = request.getRequestURI(); //  /javaweb_war_exploded/404
StringBuffer requestURL = request.getRequestURL(); //  http://localhost:8080/javaweb_war_exploded/404
String method = request.getMethod(); // GET / POST

Enumeration<String> headerNames = request.getHeaderNames(); // 请求头枚举数据
while (headerNames.hasMoreElements()){
    String s = headerNames.nextElement();  //header的名字： host/cookie/user-agent
    String header = request.getHeader(s);  // header的值：   Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36
    System.out.println(s+":"+header);
}

String parameter = request.getParameter("name"); //获取传递的name参数的值，GET/POST通用


//多选框的值获取
String[] names = request.getParameterValues("name");  // http://host/?name=张三&name=王五, 结果:['张三','王五']
for (String name : names) {
    System.out.println(name);  
}

// 遍历获取所有的值
Enumeration<String> parameterNames = request.getParameterNames();
while (parameterNames.hasMoreElements()){
    String s = parameterNames.nextElement();
    String parameter = request.getParameter(s);
    System.out.println(s+":"+parameter);
}


//获取post参数为json格式的数据
protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    int len = 0;
    StringBuilder stringBuilder = new StringBuilder();
    while((len=request.getInputStream().read())!=-1){
        char a = (char)len;
        stringBuilder.append(a);  //将读取到的post数据保存到stringBuilder中
    }

    Map parse = (Map)JSON.parse(stringBuilder.toString()); //将对象转换为map对象    
    String name = ((String) parse.get("name"));
    System.out.println(name);

}
```

### 1.2 响应数据
#### 1.2.1 响应JSON数据
* 1.2.1.1 获取依赖包
```
commons-beanutils-1.9.3.jar   
commons-logging-1.2.jar
commons-collections-3.2.1.jar 
ezmorph-1.0.6.jar
commons-lang-2.6.jar          
json-lib-2.4-jdk13.jar
```
* 1.2.1.2 引入
![](/java/wiki/javaweb/servlet/asLibrary.jpg)
![](/java/wiki/javaweb/servlet/addtoModule.jpg)

* 1.2.1.3 代码
```
    ......
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("a","b");
        jsonObject.put("c","d");
        response.setCharacterEncoding("UTF-8");
        response.setContentType("application/json;charset=UTF-8");
        response.getWriter().print(jsonObject);

    }
}
```
#### 1.2.2 抛出错误/404
```
protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    response.sendError(520,"File Not Found"); 
}
```

#### 1.2.3 重定向
```
response.sendRedirect("http://www.baidu.com");
```

### 1.3 Session和Cookie

### 1.4 Servlet自动分发
> 抽取baseServlet模块：baseServlet.java
```
public class baseServlet extends HttpServlet {  //继承不是实现,默认会执行service方法
    @Override
    public void service(ServletRequest req, ServletResponse res) throws ServletException, IOException {

        //1。获取执行的方法名称
        HttpServletRequest request = (HttpServletRequest) req;

        String requestURI = request.getRequestURI(); // /javaweb_war_exploded/user/add
        String methodName = requestURI.substring(requestURI.lastIndexOf("/") + 1); // add

        HttpServletResponse resp = (HttpServletResponse) res;

        try {
            Method method = this.getClass().getMethod(methodName, ServletRequest.class, ServletResponse.class);
            method.invoke(this,req,res);  // 反射的方式来执行方法
        } catch (NoSuchMethodException e) {
            resp.sendError(404,"Method Not Found!");
        } catch (IllegalAccessException e) {
            resp.sendError(403,"Method Not Allow!");
        } catch (InvocationTargetException e) {
            resp.sendError(500,"Request Error!");
        }
    }
}
```
> 入口Servlet编写: userServlet.java
```
public class userServlet extends baseServlet {  //继承baseServlet方法，如下的方法会自动被调用执行
    public void findOne(ServletRequest req, ServletResponse res){
        System.out.println("findone");
    }

    public void findAll(ServletRequest req, ServletResponse res){
        System.out.println("findall");
    }
}
```
> web.xml 略

## 2.Filter
![](/java/wiki/javaweb/servlet/filter.png)

> 通过控制对chain.doFilter的方法的调用，来决定是否需要访问目标资源。
* 比如，可以在用户权限验证等等。判断用户是否有访问某些资源的权限，有权限放行，没权限不执行chain.doFilter方法。
* 比如，解决中文乱码的问题等等。可以在doFilter方法前，执行设置请求编码与响应的编码。甚至可以对request接口进行封装装饰来处理get请求方式的中文乱码问题(重写相　　应的request.getParameter方法)。
* 比如对整个web网站进行压缩。在调用chain.doFilter方法之前用类A对response对象进行封装装饰，重写 getOutputStream和重写getWriter方法。在类A内部中，将输出　　内容缓存进ByteArrayOutputStream流中，然后在 chain.doFilter方法执行后，获取类A中ByteArrayOutputStream流缓存数据，用GZIPOutputStream流进行 压缩下。

![](/java/wiki/javaweb/servlet/filter使用说明.jpg)

> 典型应用举例
* 认证权限控制
```
public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws ServletException, IOException {
    HttpServletRequest req1 = (HttpServletRequest) req;

    req1.setCharacterEncoding("utf-8");  //设置请求编码
    resp.setCharacterEncoding("utf8");  //设置响应编码

    //判断是否是请求登陆页面
    if (req1.getServletPath().equals("/login")){
        chain.doFilter(req,resp); //请求登陆页放行
    }

    //判断是否有登陆
    String username = ((String) ((HttpServletRequest) req).getSession().getAttribute("username"));
    if (username!=null){
        chain.doFilter(req,resp); //有登陆态放行
    }else{
        resp.getWriter().print("当前未登陆，请登陆谢谢");  //无登陆态跳转到登陆页或者返回登陆失败信息
    }

}
```

## 3.Listener
> Servlet的监听器Listener，它是实现了javax.servlet.ServletContextListener 接口的服务器端程序，它也是随web应用的启动
而启动，只初始化一次，随web应用的停止而销毁。主要作用是：做一些初始化的内容添加工作、设置一些基本的内容、比如一些参数或者是一些
固定的对象等等,后续在springMVC中只要以spring容器的预加载。

```
web.xml中listener的配置:
    <listener>
        <listener-class>it.javaweb.listener.baseListener</listener-class>
    </listener>

baseListener代码：
public class baseListener implements ServletContextListener,
        HttpSessionListener, HttpSessionAttributeListener {
    // -------------------------------------------------------
    // ServletContextListener implementation
    // -------------------------------------------------------
    public void contextInitialized(ServletContextEvent sce) {
        ServletContext servletContext = sce.getServletContext();  //获取ServletContext的实例对象
        servletContext.setAttribute("app","abc123");  //设置属性
        System.out.println("app容器创建成功");
    }
        
}

Servlet中获取属性值:
public class indexServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ServletContext servletContext = request.getServletContext();  //获取ServletContext的实例对象
        Object app = servletContext.getAttribute("app"); //获取对象
        System.out.println(app);  // abc123

    }
}
```