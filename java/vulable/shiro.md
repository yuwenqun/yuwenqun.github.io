## shiro <= 1.2.4 RCE (shiro550)

#### 复现
* 将war包放到tomcat的webapp目录下即可 
[shiro.war](/java/shiro/shiro.war)
* 使用工具测试
[ShiroExploit-v2.3.jar](/java/shiro/ShiroExploit-v2.3.jar)


![](/java/shiro/shiroExploit.jpg)

#### 分析
![](/java/shiro/shiro调用链.jpg)

### shiro提供记住我(RememberMe)功能,用户登陆成功后会生成经过加密并Base64编码的cookie，在服务端接收cookie值后,Base64解码-->AES解密-->反序列化。因此我们只需要构造恶意的对象,进行 序列化 --> AES 加密 --> Base64编码 ,将其作为RememberMe的cookie字段发送到服务器端,shiro就会触发反序列化漏洞

#### Shiro 1.2.4版本默认固定密钥:
```private static final byte[] DEFAULT_CIPHER_KEY_BYTES = Base64.decode("kPH+bIxk5D2deZiIxcaaaA==");```

#### Shiro 1.2.4以上版本官方移除了代码中的默认密钥，要求开发者自己设置，如果开发者没有设置，则默认动态生成，降低了固定密钥泄漏的风险,但是由于其他第三方框架会存在整合shiro问题,会自行设置key问题，因此从网上获取了top100的shirokey可作为测试使用

[shiro550keytop100](/java/shiro/shiro550key.txt)


## shiroKey爆破[无需出网]
* 当密钥不正确或类型转换异常时，目标Response包含Set-Cookie：rememberMe=deleteMe字段
* 而当密钥正确且没有类型转换异常时，返回包不存在Set-Cookie：rememberMe=deleteMe字段。

1) 密钥不正确时
   
   Key不正确，解密时org.apache.shiro.crypto.JcaCipherService#crypt抛出异常

   走进org.apache.shiro.web.servlet.impleCookie#removeFrom方法，在返回包中添加了rememberMe=deleteMe字段

2) 类型转换失败时
   
    org.apache.shiro.mgt.AbstractRememberMeManager#deserialize进行数据反序列化，返回结果前有对反序列化结果对象做PrincipalCollection的强制类型转换。

    反序列化结果对象与PrincipalCollection并没有继承关系

    走进org.apache.shiro.web.servlet.impleCookie#removeFrom方法，在返回包中添加了rememberMe=deleteMe字段

#### 分析:
根据上面的分析，我们需要构造payload排除类型转换错误，进而准确判断密钥。当序列化对象继承PrincipalCollection时，类型转换正常，SimplePrincipalCollection是已存在的可利用类。
创建一个SimplePrincipalCollection对象并将其序列化。

将序列化数据基于key进行AES加密并base64编码发起请求，当返回包不存在Set-Cookie：rememberMe=deleteMe字段时，说明密钥与目标匹配。
## shiro-721
* cbc字节翻转攻击
* AES-128-CBC