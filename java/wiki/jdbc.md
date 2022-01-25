## JDBC介绍


## Statement和PreparedStatement的关系
    都是用来执行SQL的,PreparedStatement extends Statement
    Statement适合执行静态(无条件)SQL,PreparedStatement适合执行动态(有条件)SQL
    PreparedStatement可以避免注入攻击



## JDBC举例
```
Class.forName("com.mysql.cj.jdbc.Driver");  //注册驱动
Connection connection = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/mysql", "root", "123456");  //获取mysql连接实例

String sql = "select * from user where User=?";  // ?表示站位符
PreparedStatement preparedStatement = connection.prepareStatement(sql);  //预编译SQL语句
preparedStatement.setString(1,"root");  //对站位符号设置参数
PreparedStatement preparedStatement = connection.prepareStatement(sql);
ResultSet resultSet = preparedStatement.executeQuery();

while(resultSet.next()){  //指针往下指
    String username = resultSet.getString("User" );
    String authentication_string = resultSet.getString("authentication_string");
    System.out.println(username+":"+authentication_string);
}
```

## 连接池第三方工具
> JDBC的DriverManager每次调用它都创建一个新连接,它没有复用连接,它没有管理连接的上限,并发数过大时会导致数据库崩溃
> 
> 常用连接池:DBCP/C3P0/Druid
> 以Druid演示使用
```
1.db.properties放到src目录下面
    driverClassName=com.mysql.cj.jdbc.Driver
    url=jdbc:mysql://127.0.0.1:3306/mytest?characterEncoding=UTF-8
    username=root
    password=123456

2.编写测试代码
    Properties properties = new Properties();
    InputStream propertisInputStream = mysqlhelper.class.getClassLoader().getResourceAsStream("db.properties");
    properties.load(propertisInputStream);

    DataSource dataSource = DruidDataSourceFactory.createDataSource(properties);  //创建datasource
    Connection connection = dataSource.getConnection();  //从datasource中获取mysql连接

    ....... //后续发送sql语句进行查询即可
```

## commons-dbutils的使用
> 简化数据结果集的处理,[连接需要jdbc提供或者使用第三方连接池技术],commons-dbutils 是 Apache 组织提供的一个开源 JDBC工具类库，它是对JDBC的简单封装，学习成本极低，并且使用dbutils能极大简化jdbc编码的工作量，同时也不会影响程序的性能

![](/java/wiki/javaweb/jdbc/common-dbutils.jpg)

```
Connection connection = new mysqlhelper().getConnection();  //获取mysql连接实例
QueryRunner queryRunner = new QueryRunner();  //创建commons-dbutils实例对象
String sql = "select * from Userinfo where id > ?";  //查询语句
List<Map<String, Object>> data = queryRunner.query(connection, sql, 0, new MapListHandler());

```

## JdbcTemplate
>Spring 框架针对数据库开发中的应用提供了 JDBCTemplate 类，该类是 Spring 对 JDBC 支持的核心，它提供了所有对数据库操作功能的支持。

>Spring 框架提供的JDBC支持主要由四个包组成，分别是 core（核心包）、object（对象包）、dataSource（数据源包）和 support（支持包），org.springframework.jdbc.core.JdbcTemplate 类就包含在核心包中。作为 Spring JDBC 的核心，JdbcTemplate 类中包含了所有数据库操作的基本方法。

![](/java/wiki/javaweb/jdbc/spring-jdbctemplate.jpg)
[JdbcTemplate.xmind](/java/wiki/javaweb/attachment/JdbcTemplate.xmind)