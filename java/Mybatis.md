## Mybatis思维图
![](/java/wiki/mybatis/mybatis.jpg)


[mybatis.xmind](/java/wiki/mybatis/Mybatis.xmind)

## 一、Mybatis入门
##### 1.添加pom.xml坐标
```
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>it.xyz</groupId>
    <artifactId>mybatisDemo</artifactId>
    <version>1.0-SNAPSHOT</version>

    <dependencies>
        <dependency>
            <groupId>org.mybatis</groupId>
            <artifactId>mybatis</artifactId>
            <version>3.5.6</version>
        </dependency>
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>8.0.11</version>
        </dependency>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.12</version>
            <scope>test</scope>
        </dependency>
    </dependencies>


</project>
```
##### 2.编写实体类
```
package it.xyz.domain;

public class User {
    private String User;
    private String Host;

    public String getUser() {
        return User;
    }

    public void setUser(String user) {
        User = user;
    }

    public String getHost() {
        return Host;
    }

    public void setHost(String host) {
        Host = host;
    }


    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("User{");
        sb.append("User='").append(User).append('\'');
        sb.append(", Host='").append(Host).append('\'');
        sb.append('}');
        return sb.toString();
    }
}

```

##### 3.编写映射文件UserMapper.xml
```
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<!--
实体类的映射文件
namespace 指定接口的类全名
-->
<mapper namespace="UserMapper">
    <!--
    查询语句
    id: 接口中方法的名字
    resultType：返回的实体类的类型，类全名
    -->
    <select id="findAllUsers" resultType="it.xyz.domain.User">
        select * from user
    </select>

    <select id="findOneUser" resultType="it.xyz.domain.User" parameterType="String">
        select  * from user where User=#{User} limit 1
    </select>
</mapper>
```

##### 4.编写核心文件SqlMapConfig.xml
```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>

    <!--数据库环境配置-->
    <environments default="mysql">
        <environment id="mysql">
            <transactionManager type="JDBC"></transactionManager>
            <dataSource type="pooled">
                <property name="driver" value="com.mysql.cj.jdbc.Driver"></property>
                <property name="url" value="jdbc:mysql://localhost:3306/mysql?characterEncoding=utf8"></property>
                <property name="username" value="root"></property>
                <property name="password" value="123456"></property>
            </dataSource>
        </environment>
    </environments>

    <!--2. 加载映射文件-->
    <mappers>
        <mapper resource="it/xyz/domain/UserMapper.xml"></mapper>
    </mappers>
</configuration>
```
##### 5.测试
```
package it.xyz.ibatisTest;

import it.xyz.domain.User;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.Test;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

public class mybatisTest {
    @Test
    public void UserMapperTest() throws IOException {

        //1.读取配置文件
        InputStream in = Resources.getResourceAsStream("SqlMapConfig.xml");
        //2.创建SqlSessionFactory工厂
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(in);
        //3.使用工厂生产SqlSession对象
        SqlSession session = sqlSessionFactory.openSession();
        //4.1 执行Sql语句
        List<User> userlist = session.selectList("UserMapper.findAllUsers");
        //5. 打印结果
        for (User o : userlist) {
            System.out.println(o);
        }

        System.out.println("***********");
        //4.2
        User user = session.selectOne("UserMapper.findOneUser", "root");
        System.out.println(user);
        //6.释放资源
        session.close();
        in.close();
    }
}
```

##### 6.调试/获取执行的sql语句
```
sqlmapConfig.xml:
<settings>
    <!-- 打印查询语句 -->
    <setting name="logImpl" value="STDOUT_LOGGING" />
</settings>
```

## 二、动态代理
    简述：利用mybatis动态代理的机制,无需再自己写dao层代码,只需要写dao层的接口即可完成获取数据操作

![](/java/动态代理.png)

###### 1.要求
* 1.namespace的值为Dao层interface的类绝对路径
* 2.id 为dao层的接口方法名
* 3.参数和返回值需一致
* 4.测试代码
```
    @Test
    public void UserMapperTest3() throws IOException {
        //1.读取配置文件
        InputStream in = Resources.getResourceAsStream("SqlMapConfig.xml");
        //2.创建SqlSessionFactory工厂
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(in);
        //3.使用工厂生产SqlSession对象
        SqlSession session = sqlSessionFactory.openSession();
        //4.1 执行Sql语句

        UserInfoDao mapper = session.getMapper(UserInfoDao.class);
        List<UserInfo> allUsers = mapper.findAllUsers();
        System.out.println(allUsers);

        //6.释放资源
        session.close();
        in.close();
    }
```
 
## 三、动态sql映射
###### if 条件使用
```
UserMapper.xml : 
<select id="findAllUsers" resultType="it.xyz.domain.UserInfo" parameterType="it.xyz.domain.UserInfo">
    select * from userinfo
    <where>
        <if test="username!=null">
            and username = #{username}
        </if>
        <if test="password!=null">
            and password=#{password}
        </if>
        <if test="age!=0">
            and age=#{age}
        </if>
        <if test="sex!=null">
            and sex=#{sex}
        </if>
    </where>
</select>
```
###### foreache 使用
```
<select id="findById" resultType="it.xyz.domain.UserInfo" parameterType="list">
    select * from userinfo
    <where>
        <foreach item="item" index="index" collection="list" open="id in (" separator="," close=")">
            #{item}
        </foreach>
    </where>
</select>
```

## 四、分页助手使用

###### 1.导入坐标
```
pom.xml: 
<dependency>
    <groupId>com.github.pagehelper</groupId>
    <artifactId>pagehelper</artifactId>
    <version>5.0.0</version>
</dependency>
```

###### 2.配置sqlmapConfig.xml
    加载插件，environments前插入
```
    <plugins>
        <plugin interceptor="com.github.pagehelper.PageInterceptor">
            <!-- 设置数据库类型 Oracle,Mysql,MariaDB,SQLite,Hsqldb,PostgreSQL六种数据库-->
            <property name="helperDialect" value="mysql"/>
        </plugin>
    </plugins>
```

###### 3.加入分页代码位置
```
Page<Object> objects = PageHelper.startPage(1,1);  //关键点，无需更改sql语句,直接使用即可

//执行数据语句的查询操作
UserInfoDao mapper = session.getMapper(UserInfoDao.class);
UserInfo userInfo = new UserInfo();
List<UserInfo> allUsers = mapper.findAllUsers(userInfo);  //结果集会自动加入分页的limit内容
System.out.println(allUsers);

//查询出数据之后再调用才能获取到当前的分页相关的数据，否则无法获取
int pageNum = objects.getPageNum();  //当前页数
long total = objects.getTotal();  //总数量
int pageSize = objects.getPageSize();   //每页数量
```



## 五、多表查询
#### 1对1模式
##### 1.SQL语句
```
select *,userinfo.id userid from orders
inner join userinfo
on orders.uid = userinfo.id
```

##### 2.实体类
```
package it.xyz.domain;

public class orders {
    private int id;
    private String order;
    private int uid;

    private UserInfo userinfo;  //关键点

    public UserInfo getUserinfo() {
        return userinfo;
    }

    public void setUserinfo(UserInfo userinfo) {
        this.userinfo = userinfo;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getOrder() {
        return order;
    }

    public void setOrder(String order) {
        this.order = order;
    }

    public int getUid() {
        return uid;
    }

    public void setUid(int uid) {
        this.uid = uid;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("orders{");
        sb.append("id=").append(id);
        sb.append(", order='").append(order).append('\'');
        sb.append(", uid=").append(uid);
        sb.append(", userinfo=").append(userinfo);
        sb.append('}');
        return sb.toString();
    }
}

```

##### 3.sqlmapxml文件
```
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<!--
实体类的映射文件
namespace 指定接口的类全名
-->
<mapper namespace="it.xyz.dao.ordersDao">
    <!--
    查询语句
    id: 接口中方法的名字
    resultType：返回的实体类的类型，类全名
    -->

    <resultMap id="orderMap" type="it.xyz.domain.orders">
        <!--
          type  返回的数据类型
          id ： 该resultMap的id标示

          result:  数据查询的内容和实体类映射关系,column 表示数据库的字段名称，property表示实体类的属性名称
        -->
        <id column="id" property="id"></id>
        <result column="order" property="order"></result>
        <result column="uid" property="uid"></result>

        <result column="userid" property="userinfo.id"></result>
        <result column="username" property="userinfo.username"></result>
        <result column="password" property="userinfo.password"></result>
        <result column="age" property="userinfo.age"></result>
        <result column="sex" property="userinfo.sex"></result>
    </resultMap>
    <select id="findOrders" resultMap="orderMap">
        select *,userinfo.id userid  from orders inner join userinfo on orders.uid = userinfo.id
    </select>

</mapper>

```

##### 4.接口方法：略

##### 5.测试： 略

#### 1对多模式

##### SQLMAPXML文件
```
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<!--
实体类的映射文件
namespace 指定接口的类全名
-->
<mapper namespace="it.xyz.dao.UserInfoDao">
    <!--
    查询语句
    id: 接口中方法的名字
    resultType：返回的实体类的类型，类全名
    -->
    <resultMap id="UserinfoRoleMap"  type="it.xyz.domain.UserInfo">
        <id column="uid" property="id"></id>
        <result column="username" property="username"></result>
        <result column="password" property="password"></result>
        <result column="age" property="age"></result>
        <result column="sex" property="sex"></result>

        <collection property="roles" ofType="it.xyz.domain.roles">

            <!--
              roles  表示的是UserInfo实体类的属性名
              ofType 表示实体类的名称，与下面的字段进行映射
            -->
            <id column="rid" property="id"></id>
            <result column="userid" property="userid"></result>
            <result column="role" property="role"></result>
        </collection>

    </resultMap>

    <select id="findUserAndRolesAll" resultMap="UserinfoRoleMap">
       select *,roles.id rid,userinfo.id uid from userinfo left join roles on userinfo.id = roles.userid
    </select>
</mapper>
```