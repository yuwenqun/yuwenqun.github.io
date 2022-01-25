## 简介
```
攻击者利用XSS(Cross-site scripting)漏洞攻击可以在用户的浏览器中执行JS恶意脚本
XSS攻击可以实现用户会话劫持、钓鱼攻击、恶意重定向、点击劫持、挂马、XSS蠕虫等.
XSS攻击类型分为：反射型、存储型、DOM型。

JAVA中没有现成的直接过滤的渐变函数方法.如下提供2个思路:
    * 1.自定义过滤函数
    * 2.使用ESAPI提供的方法
```
## 解决方案
#### 1.使用自定义的XSS过滤代码
```
/**
 * 实现htmlSpecialChars函数把一些预定义的字符转换为HTML实体编码
 *
 * @param content 输入的字符串内容
 * @return HTML实体化转义后的字符串
 */
public static String htmlSpecialChars(String content) {
  if (content == null) {
    return null;
  }

  char[]        charArray = content.toCharArray();
  StringBuilder sb        = new StringBuilder();

  for (char c : charArray) {
    switch (c) {
      case '&':
        sb.append("&amp;");
        break;
      case '"':
        sb.append("&quot;");
        break;
      case '\'':
        sb.append("&#039;");
        break;
      case '<':
        sb.append("&lt;");
        break;
      case '>':
        sb.append("&gt;");
        break;
      default:
        sb.append(c);
        break;
    }
  }

  return sb.toString();
}
```


#### 2.ESPAI使用

#### 1.pom.xml配置
```
    <dependencies>
        <dependency>
            <groupId>org.owasp.esapi</groupId>
            <artifactId>esapi</artifactId>
            <version>2.1.0</version>
        </dependency>
        <dependency>
            <groupId>org.jsoup</groupId>
            <artifactId>jsoup</artifactId>
            <version>1.7.3</version>
        </dependency>
    </dependencies>
```
#### 2.添加配置文件 resources/ESAPI.properties
```
ESAPI.printProperties=true

ESAPI.AccessControl=org.owasp.esapi.reference.DefaultAccessController
ESAPI.Authenticator=org.owasp.esapi.reference.FileBasedAuthenticator
ESAPI.Encoder=org.owasp.esapi.reference.DefaultEncoder
ESAPI.Encryptor=org.owasp.esapi.reference.crypto.JavaEncryptor
ESAPI.Executor=org.owasp.esapi.reference.DefaultExecutor
ESAPI.HTTPUtilities=org.owasp.esapi.reference.DefaultHTTPUtilities
ESAPI.IntrusionDetector=org.owasp.esapi.reference.DefaultIntrusionDetector
ESAPI.Logger=org.owasp.esapi.reference.JavaLogFactory
ESAPI.Randomizer=org.owasp.esapi.reference.DefaultRandomizer
ESAPI.Validator=org.owasp.esapi.reference.DefaultValidator


#===========================================================================
# ESAPI Encoder
Encoder.AllowMultipleEncoding=false
Encoder.AllowMixedEncoding=false
Encoder.DefaultCodecList=HTMLEntityCodec,PercentCodec,JavaScriptCodec


#===========================================================================
# ESAPI 加密模块
Encryptor.PreferredJCEProvider=
Encryptor.EncryptionAlgorithm=AES
Encryptor.CipherTransformation=AES/CBC/PKCS5Padding
Encryptor.cipher_modes.combined_modes=GCM,CCM,IAPM,EAX,OCB,CWC
Encryptor.cipher_modes.additional_allowed=CBC
Encryptor.EncryptionKeyLength=128
Encryptor.ChooseIVMethod=random
Encryptor.fixedIV=0x000102030405060708090a0b0c0d0e0f
Encryptor.CipherText.useMAC=true
Encryptor.PlainText.overwrite=true
Encryptor.HashAlgorithm=SHA-512
Encryptor.HashIterations=1024
Encryptor.DigitalSignatureAlgorithm=SHA1withDSA
Encryptor.DigitalSignatureKeyLength=1024
Encryptor.RandomAlgorithm=SHA1PRNG
Encryptor.CharacterEncoding=UTF-8
Encryptor.KDF.PRF=HmacSHA256

#===========================================================================
# ESAPI Http工具

HttpUtilities.UploadDir=C:\\ESAPI\\testUpload
HttpUtilities.UploadTempDir=C:\\temp
# Force flags on cookies, if you use HttpUtilities to set cookies
HttpUtilities.ForceHttpOnlySession=false
HttpUtilities.ForceSecureSession=false
HttpUtilities.ForceHttpOnlyCookies=true
HttpUtilities.ForceSecureCookies=true
# Maximum size of HTTP headers
HttpUtilities.MaxHeaderSize=4096
# File upload configuration
HttpUtilities.ApprovedUploadExtensions=.zip,.pdf,.doc,.docx,.ppt,.pptx,.tar,.gz,.tgz,.rar,.war,.jar,.ear,.xls,.rtf,.properties,.java,.class,.txt,.xml,.jsp,.jsf,.exe,.dll
HttpUtilities.MaxUploadFileBytes=500000000
# Using UTF-8 throughout your stack is highly recommended. That includes your database driver,
# container, and any other technologies you may be using. Failure to do this may expose you
# to Unicode transcoding injection attacks. Use of UTF-8 does not hinder internationalization.
HttpUtilities.ResponseContentType=text/html; charset=UTF-8
# This is the name of the cookie used to represent the HTTP session
# Typically this will be the default "JSESSIONID"
HttpUtilities.HttpSessionIdName=JSESSIONID



#===========================================================================
# ESAPI Executor
Executor.WorkingDirectory=
Executor.ApprovedExecutables=


#===========================================================================
# ESAPI Logging
# Set the application name if these logs are combined with other applications
Logger.ApplicationName=ExampleApplication
# If you use an HTML log viewer that does not properly HTML escape log data, you can set LogEncodingRequired to true
Logger.LogEncodingRequired=false
# Determines whether ESAPI should log the application name. This might be clutter in some single-server/single-app environments.
Logger.LogApplicationName=true
# Determines whether ESAPI should log the server IP and port. This might be clutter in some single-server environments.
Logger.LogServerIP=true
# LogFileName, the name of the logging file. Provide a full directory path (e.g., C:\\ESAPI\\ESAPI_logging_file) if you
# want to place it in a specific directory.
Logger.LogFileName=ESAPI_logging_file
# MaxLogFileSize, the max size (in bytes) of a single log file before it cuts over to a new one (default is 10,000,000)
Logger.MaxLogFileSize=10000000


#===========================================================================
# ESAPI Intrusion Detection
IntrusionDetector.Disable=false
IntrusionDetector.event.test.count=2
IntrusionDetector.event.test.interval=10
IntrusionDetector.event.test.actions=disable,log

IntrusionDetector.org.owasp.esapi.errors.IntrusionException.count=1
IntrusionDetector.org.owasp.esapi.errors.IntrusionException.interval=1
IntrusionDetector.org.owasp.esapi.errors.IntrusionException.actions=log,disable,logout

IntrusionDetector.org.owasp.esapi.errors.IntegrityException.count=10
IntrusionDetector.org.owasp.esapi.errors.IntegrityException.interval=5
IntrusionDetector.org.owasp.esapi.errors.IntegrityException.actions=log,disable,logout

IntrusionDetector.org.owasp.esapi.errors.AuthenticationHostException.count=2
IntrusionDetector.org.owasp.esapi.errors.AuthenticationHostException.interval=10
IntrusionDetector.org.owasp.esapi.errors.AuthenticationHostException.actions=log,logout


#===========================================================================
# ESAPI 校验器
#校验器的配置文件
Validator.ConfigurationFile=validation.properties

# Validators used by ESAPI
Validator.AccountName=^[a-zA-Z0-9]{3,20}$
Validator.SystemCommand=^[a-zA-Z\\-\\/]{1,64}$
Validator.RoleName=^[a-z]{1,20}$

#the word TEST below should be changed to your application
#name - only relative URL's are supported
Validator.Redirect=^\\/test.*$

# Global HTTP Validation Rules
# Values with Base64 encoded data (e.g. encrypted state) will need at least [a-zA-Z0-9\/+=]
Validator.HTTPScheme=^(http|https)$
Validator.HTTPServerName=^[a-zA-Z0-9_.\\-]*$
Validator.HTTPParameterName=^[a-zA-Z0-9_]{1,32}$
Validator.HTTPParameterValue=^[a-zA-Z0-9.\\-\\/+=@_ ]*$
Validator.HTTPCookieName=^[a-zA-Z0-9\\-_]{1,32}$
Validator.HTTPCookieValue=^[a-zA-Z0-9\\-\\/+=_ ]*$

# Note that max header name capped at 150 in SecurityRequestWrapper!
Validator.HTTPHeaderName=^[a-zA-Z0-9\\-_]{1,50}$
Validator.HTTPHeaderValue=^[a-zA-Z0-9()\\-=\\*\\.\\?;,+\\/:&_ ]*$
Validator.HTTPContextPath=^\\/?[a-zA-Z0-9.\\-\\/_]*$
Validator.HTTPServletPath=^[a-zA-Z0-9.\\-\\/_]*$
Validator.HTTPPath=^[a-zA-Z0-9.\\-_]*$
Validator.HTTPQueryString=^[a-zA-Z0-9()\\-=\\*\\.\\?;,+\\/:&_ %]*$
Validator.HTTPURI=^[a-zA-Z0-9()\\-=\\*\\.\\?;,+\\/:&_ ]*$
Validator.HTTPURL=^.*$
Validator.HTTPJSESSIONID=^[A-Z0-9]{10,30}$

# Validation of file related input
Validator.FileName=^[a-zA-Z0-9!@#$%^&{}\\[\\]()_+\\-=,.~'` ]{1,255}$
Validator.DirectoryName=^[a-zA-Z0-9:/\\\\!@#$%^&{}\\[\\]()_+\\-=,.~'` ]{1,255}$

# Validation of dates. Controls whether or not 'lenient' dates are accepted.
# See DataFormat.setLenient(boolean flag) for further details.
Validator.AcceptLenientDates=false
```

#### 3.测试代码
```
    String s = "<script>'\"";

    String s1 = ESAPI.encoder().encodeForHTML(s);
    System.out.println(s1);  // &lt;script&gt;&#x27;&quot;
```