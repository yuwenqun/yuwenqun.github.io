(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{338:function(e,a,s){"use strict";s.r(a);var t=s(22),r=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"_0-配置和导包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-配置和导包"}},[e._v("#")]),e._v(" 0.配置和导包")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("1.导入包\n    <dependencies>\n        <dependency>\n            <groupId>org.owasp.esapi</groupId>\n            <artifactId>esapi</artifactId>\n            <version>2.1.0</version>\n        </dependency>\n        <dependency>\n            <groupId>org.jsoup</groupId>\n            <artifactId>jsoup</artifactId>\n            <version>1.7.3</version>\n        </dependency>\n    </dependencies>\n2.添加配置文件\nhttps://github.com/ESAPI/esapi-java-legacy/tree/develop/configuration/esapi\n")])])]),s("h2",{attrs:{id:"_1-xss防护"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-xss防护"}},[e._v("#")]),e._v(" 1.XSS防护")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('String s = "<script>alert(1)</scirpt>\'\\"";\nString s2 = ESAPI.encoder().encodeForHTML(s);\nSystem.out.println(s2);\n')])])]),s("h2",{attrs:{id:"_2-sql注入防护"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-sql注入防护"}},[e._v("#")]),e._v(" 2.SQL注入防护")]),e._v(" "),s("h4",{attrs:{id:"_2-1-mysql防护"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-mysql防护"}},[e._v("#")]),e._v(" 2.1 mysql防护")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("String id =\"1 and 1=1 and '1'='1\";\nString mysql_query =\"SELECT user_id FROM user_data WHERE id = \" + ESAPI.encoder().encodeForSQL(new MySQLCodec(MySQLCodec.Mode.STANDARD),id);\nSystem.out.println(mysql_query); // SELECT user_id FROM user_data WHERE id = 1 and 1\\=1 and \\'1\\'\\=\\'1\n")])])]),s("h4",{attrs:{id:"_2-2-oracle防护"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-oracle防护"}},[e._v("#")]),e._v(" 2.2 oracle防护")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('OracleCodec oracleCodec = new OracleCodec();\nString id ="1 and 1=1 and \'1\'=\'1";\nString oracle_query ="SELECT user_id FROM user_data WHERE id = " + ESAPI.encoder().encodeForSQL(oracleCodec,id);\nSystem.out.println(oracle_query);\n')])])]),s("h2",{attrs:{id:"_3-命令执行防护"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-命令执行防护"}},[e._v("#")]),e._v(" 3.命令执行防护")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('WindowsCodec windowsCodec = new WindowsCodec();  //适用于window下\nUnixCodec unixCodec = new UnixCodec();  //适用于linux平台下\ncmd="ifconfig | echo 1";\nString s1 = ESAPI.encoder().encodeForOS(unixCodec, cmd);  //引用linux平台\nSystem.out.println(s1); //  ifconfig\\ \\|\\ echo\\ 1\n')])])]),s("h2",{attrs:{id:"_4-xml过滤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-xml过滤"}},[e._v("#")]),e._v(" 4.XML过滤")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("String xml_encoder = ESAPI.encoder().encodeForXML(String xmlString);\n\n")])])]),s("h2",{attrs:{id:"_5-富文本过滤xss内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-富文本过滤xss内容"}},[e._v("#")]),e._v(" 5.富文本过滤xss内容")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('//1.首先需要将antisamy-esapi.xml 复制到资源目录下：可放置到/home/user/esapi/antisamy-esapi.xml等\n//2.配置文件获取路径：https://github.com/ESAPI/esapi-java-legacy/tree/develop/configuration/esapi\nString ss = "123kjsdlkjfsdf<script>alert(1)<\/script>";\nString script = ESAPI.validator().getValidSafeHTML("", ss, ss.length(), true);\nSystem.out.println(script);  // 123kjsdlkjfsdf\n')])])])])}),[],!1,null,null,null);a.default=r.exports}}]);