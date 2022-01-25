## 一、漏洞环境信息
```
JDBC: http://127.0.0.1:8080/sqlinject/jdbc?id=1
JdbcTemplate: http://127.0.0.1:8080/sqlinject/jdbctemplate?id=1
mybatis: http://127.0.0.1:8080/sqlinject/mybatis?id=1
```
**payload:**
``` python sqlmap.py -u "http://127.0.0.1:8080/sqlinject/jdbc?id=1" ```

## 二、修复说明
### Jdbc
> java 提供的对数据库操作的原生接口

##### 代码举例
Statement:一般用于静态SQL(无参数)的执行,场景用于批处理,如下中存在id注入
```

Class.forName("com.mysql.cj.jdbc.Driver");  //加载驱动
Connection connection = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/mytest?characterEncoding=utf8", "root", "123456");   //连接mysql，获得连接
String sql = “select * from tablex where id = ” + id;
Statement statement = connect.createStatement();  //获得statement对象
ResultSet resultSet = statement.executeQuery(sql);  //执行sql获得结果集
.........
```

prepareStatement:用于执行动态SQL(传参数),id注入问题修复
```
Class.forName("com.mysql.cj.jdbc.Driver");  //加载驱动
Connection connection = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/mytest?characterEncoding=utf8", "root", "123456");   //连接mysql，获得连接
String sql =”select * from tablex where id = ?”; // ?代表参数占位符
PreparedStatement ps = connect.prepareStatement(sql); //获得preoarestatement对象
ps.setObject(i,args[i]);  //设置预编译参数
ResultSet resultSet = ps.executeQuery(); //执行sql获得结果集
..........
```

### JdbcTemplate
> spring提供的对JDBC进一步封装的方案

##### 代码举例
**注入代码：id存在注入**
```
private JdbcTemplate jdbcTemplate=new JdbcTemplate();
String sql = "select * from Userinfo where id = " + id; //SQL拼接
Userinfo userinfo = jdbcTemplate.queryForObject(sql, new BeanPropertyRowMapper<Userinfo>(Userinfo.class));
```
**无注入代码**
```
private JdbcTemplate jdbcTemplate=new JdbcTemplate();
String sql = "select * from Userinfo where id = ?"; //占位符
Userinfo userinfo = jdbcTemplate.queryForObject(sql, new BeanPropertyRowMapper<Userinfo>(Userinfo.class),id);
```
### mybatis
> MyBatis 是一款优秀的持久层框架，它支持自定义 SQL、存储过程以及高级映射。MyBatis 免除了几乎所有的 JDBC 代码以及设置参数和获取结果集的工作。MyBatis 可以通过简单的 XML 或注解来配置和映射原始类型、接口和 Java POJO（Plain Old Java Objects，普通老式 Java 对象）为数据库中的记录。

**代码流程说明**
* http://127.0.0.1:8080/sqlinject/mybatis?id=1

![](/img/mybatis.jpg)

```mybatis的sql语句是保存在mapper的xml文件中的，因此只需要关注xml中的sql语句即可。其中${}表示拼接变量,#{}才是预编译参数```

## 三、小结
* 成因：SQL语句拼接
* 位置：Dao层
* 修复：过滤/ESAPI/预编译处理(推荐******)
    * 预编译无法覆盖的场景：order by /group by,白名单过滤