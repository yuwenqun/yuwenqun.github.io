# SQL注入

## 欣赏一段JDBC代码
```
    public static void main(String[] args) throws SQLException {
        Connection connection = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/mysql", "root", "123456");

        Statement statement = connection.createStatement();

        String username="root";

        String sql = "select * from user where User='"+username+"'";

        System.out.println(sql);

        ResultSet resultSet = statement.executeQuery(sql);

        while (resultSet.next()){
            System.out.println(resultSet.getString("host"));
        }

        resultSet.close();
        statement.close();
        connection.close();
    }
```

## 分析
```
这里的 String sql = "select * from user where User='"+username+"'"; 
存在sql的拼接,所以就存在SQL注入的风险,只要修改username的值就能任意操作SQL语句的执行。
例如将username赋值于 username="' or 1=1#",就能查询出所有的数据
（select * from user where User='' or 1=1#';）
如果是账号密码登录的话还能造成任意密码登录的安全漏洞。
```

## 解决方法
    采用预编译的方式处理

### 1.JDBC代码
```        
public static void main(String[] args) throws SQLException {
    Connection connection = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/mysql", "root", "123456");
    
    String sql = "select * from user where User=?";  //变量采用占位符处理
    PreparedStatement preparedStatement = connection.prepareStatement(sql); 
    preparedStatement.setString(1,"root"); //在位置处设置值
    
    ResultSet resultSet = preparedStatement.executeQuery();
    
    while (resultSet.next()){
        System.out.println(resultSet.getString("host"));
    }

    resultSet.close();
    preparedStatement.close();
    connection.close();
}
```

### 2.druid代码
```
public static void main(String[] args) throws Exception {
    Properties properties = new Properties();
    InputStream resourceAsStream = druidTest.class.getClassLoader().getResourceAsStream("db.properties");

    properties.load(resourceAsStream);
    DataSource dataSource = DruidDataSourceFactory.createDataSource(properties);

    Connection connection = dataSource.getConnection();

    PreparedStatement preparedStatement = connection.prepareStatement("select * from user where Host=?");

    preparedStatement.setString(1,"%");
    ResultSet resultSet = preparedStatement.executeQuery();


    while (resultSet.next()){
        String host = resultSet.getString("User");
        System.out.println(host);
    }

}
```

### 3.spring-jdbctemplate代码
```
public static void main(String[] args) throws SQLException {
    DruidDataSource druidDataSource = new DruidDataSource();
    druidDataSource.setUrl("jdbc:mysql://127.0.0.1:3306/mysql");
    druidDataSource.setUsername("root");
    druidDataSource.setPassword("123456");


    JdbcTemplate jdbcTemplate = new JdbcTemplate(druidDataSource);
    List<user> query = jdbcTemplate.query("select User,Host from user where User=?", new BeanPropertyRowMapper<user>(user.class),"root");
    System.out.println(query);
    for (user user : query) {
        System.out.println(user.getHost());
    }
}

```

### 4.ESAPI
```
String id ="1 and 1=1 and '1'='1";
String query ="SELECT user_id FROM user_data WHERE id = " + ESAPI.encoder().encodeForSQL(new MySQLCodec(MySQLCodec.Mode.STANDARD),id);
//mysql -> new MySQLCodec(MySQLCodec.Mode.STANDARD)
//oracle -> new OracleCodec()

System.out.println(query);   // SELECT user_id FROM user_data WHERE id = 1 and 1\=1 and \'1\'\=\'1

```

