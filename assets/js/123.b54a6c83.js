(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{429:function(t,e,a){"use strict";a.r(e);var s=a(22),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"一、漏洞环境信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、漏洞环境信息"}},[t._v("#")]),t._v(" 一、漏洞环境信息")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("JDBC: http://127.0.0.1:8080/sqlinject/jdbc?id=1\nJdbcTemplate: http://127.0.0.1:8080/sqlinject/jdbctemplate?id=1\nmybatis: http://127.0.0.1:8080/sqlinject/mybatis?id=1\n")])])]),a("p",[a("strong",[t._v("payload:")]),t._v(" "),a("code",[t._v('python sqlmap.py -u "http://127.0.0.1:8080/sqlinject/jdbc?id=1"')])]),t._v(" "),a("h2",{attrs:{id:"二、修复说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、修复说明"}},[t._v("#")]),t._v(" 二、修复说明")]),t._v(" "),a("h3",{attrs:{id:"jdbc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jdbc"}},[t._v("#")]),t._v(" Jdbc")]),t._v(" "),a("blockquote",[a("p",[t._v("java 提供的对数据库操作的原生接口")])]),t._v(" "),a("h5",{attrs:{id:"代码举例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码举例"}},[t._v("#")]),t._v(" 代码举例")]),t._v(" "),a("p",[t._v("Statement:一般用于静态SQL(无参数)的执行,场景用于批处理,如下中存在id注入")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('\nClass.forName("com.mysql.cj.jdbc.Driver");  //加载驱动\nConnection connection = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/mytest?characterEncoding=utf8", "root", "123456");   //连接mysql，获得连接\nString sql = “select * from tablex where id = ” + id;\nStatement statement = connect.createStatement();  //获得statement对象\nResultSet resultSet = statement.executeQuery(sql);  //执行sql获得结果集\n.........\n')])])]),a("p",[t._v("prepareStatement:用于执行动态SQL(传参数),id注入问题修复")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('Class.forName("com.mysql.cj.jdbc.Driver");  //加载驱动\nConnection connection = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/mytest?characterEncoding=utf8", "root", "123456");   //连接mysql，获得连接\nString sql =”select * from tablex where id = ?”; // ?代表参数占位符\nPreparedStatement ps = connect.prepareStatement(sql); //获得preoarestatement对象\nps.setObject(i,args[i]);  //设置预编译参数\nResultSet resultSet = ps.executeQuery(); //执行sql获得结果集\n..........\n')])])]),a("h3",{attrs:{id:"jdbctemplate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jdbctemplate"}},[t._v("#")]),t._v(" JdbcTemplate")]),t._v(" "),a("blockquote",[a("p",[t._v("spring提供的对JDBC进一步封装的方案")])]),t._v(" "),a("h5",{attrs:{id:"代码举例-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码举例-2"}},[t._v("#")]),t._v(" 代码举例")]),t._v(" "),a("p",[a("strong",[t._v("注入代码：id存在注入")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('private JdbcTemplate jdbcTemplate=new JdbcTemplate();\nString sql = "select * from Userinfo where id = " + id; //SQL拼接\nUserinfo userinfo = jdbcTemplate.queryForObject(sql, new BeanPropertyRowMapper<Userinfo>(Userinfo.class));\n')])])]),a("p",[a("strong",[t._v("无注入代码")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('private JdbcTemplate jdbcTemplate=new JdbcTemplate();\nString sql = "select * from Userinfo where id = ?"; //占位符\nUserinfo userinfo = jdbcTemplate.queryForObject(sql, new BeanPropertyRowMapper<Userinfo>(Userinfo.class),id);\n')])])]),a("h3",{attrs:{id:"mybatis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mybatis"}},[t._v("#")]),t._v(" mybatis")]),t._v(" "),a("blockquote",[a("p",[t._v("MyBatis 是一款优秀的持久层框架，它支持自定义 SQL、存储过程以及高级映射。MyBatis 免除了几乎所有的 JDBC 代码以及设置参数和获取结果集的工作。MyBatis 可以通过简单的 XML 或注解来配置和映射原始类型、接口和 Java POJO（Plain Old Java Objects，普通老式 Java 对象）为数据库中的记录。")])]),t._v(" "),a("p",[a("strong",[t._v("代码流程说明")])]),t._v(" "),a("ul",[a("li",[t._v("http://127.0.0.1:8080/sqlinject/mybatis?id=1")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/mybatis.jpg",alt:""}})]),t._v(" "),a("p",[a("code",[t._v("mybatis的sql语句是保存在mapper的xml文件中的，因此只需要关注xml中的sql语句即可。其中${}表示拼接变量,#{}才是预编译参数")])]),t._v(" "),a("h2",{attrs:{id:"三、小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、小结"}},[t._v("#")]),t._v(" 三、小结")]),t._v(" "),a("ul",[a("li",[t._v("成因：SQL语句拼接")]),t._v(" "),a("li",[t._v("位置：Dao层")]),t._v(" "),a("li",[t._v("修复：过滤/ESAPI/预编译处理(推荐******)\n"),a("ul",[a("li",[t._v("预编译无法覆盖的场景：order by /group by,白名单过滤")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);