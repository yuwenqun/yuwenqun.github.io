# shiro
### 漏洞描述
```
Apache Shiro是一款开源安全框架，提供身份验证、授权、密码学和会话管理。
Shiro框架直观、易用，同时也能提供健壮的安全性。
Apache Shiro 1.2.4及以前版本中，加密的用户信息序列化后存储在名为remember-me的Cookie中。
攻击者可以使用Shiro的默认密钥伪造用户Cookie，触发Java反序列化漏洞，进而在目标机器上执行任意命令
```
### 工具描述：

###### shiro 1.2.4 反序列化payload【rememberMe】生成工具
###### 1.集成如下密钥
        kPH+bIxk5D2deZiIxcaaaA==
        2AvVhdsgUs0FSA3SDFAdag==
        3AvVhmFLUs0KTA3Kprsdag==
        4AvVhmFLUs0KTA3Kprsdag==
        5aaC5qKm5oqA5pyvAAAAAA==
        6ZmI6I2j5Y+R5aSn5ZOlAA==
        bWljcm9zAAAAAAAAAAAAAA==
        wGiHplamyXlVB11UXWol8g==
        Z3VucwAAAAAAAAAAAAAAAA==
        MTIzNDU2Nzg5MGFiY2RlZg==
        U3ByaW5nQmxhZGUAAAAAAA==
        5AvVhmFLUs0KTA3Kprsdag==
        fCq+/xW488hMTCD+cmJ3aQ==
        1QWLxg+NYmxraMoxAXu/Iw==
        ZUdsaGJuSmxibVI2ZHc9PQ==
        L7RioUULEFhRyxM7a2R/Yg==
        r0e3c16IdVkouZgk1TKVMg==
        bWluZS1hc3NldC1rZXk6QQ==
        a2VlcE9uR29pbmdBbmRGaQ==
        WcfHGU25gNnTxTlmJMeSpw==
        ZAvph3dsQs0FSL3SDFAdag==
        tiVV6g3uZBGfgshesAQbjA==

###### 2.依赖于jdk，需要本地先配置好java环境变量

### 使用截图：


![](/assets/shiro.gif)


