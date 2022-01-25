(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{369:function(e,t,n){"use strict";n.r(t);var r=n(22),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[e._v("#")]),e._v(" 简介")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("攻击者利用XSS(Cross-site scripting)漏洞攻击可以在用户的浏览器中执行JS恶意脚本\nXSS攻击可以实现用户会话劫持、钓鱼攻击、恶意重定向、点击劫持、挂马、XSS蠕虫等.\nXSS攻击类型分为：反射型、存储型、DOM型。\n\nJAVA中没有现成的直接过滤的渐变函数方法.如下提供2个思路:\n    * 1.自定义过滤函数\n    * 2.使用ESAPI提供的方法\n")])])]),n("h2",{attrs:{id:"解决方案"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[e._v("#")]),e._v(" 解决方案")]),e._v(" "),n("h4",{attrs:{id:"_1-使用自定义的xss过滤代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用自定义的xss过滤代码"}},[e._v("#")]),e._v(" 1.使用自定义的XSS过滤代码")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("/**\n * 实现htmlSpecialChars函数把一些预定义的字符转换为HTML实体编码\n *\n * @param content 输入的字符串内容\n * @return HTML实体化转义后的字符串\n */\npublic static String htmlSpecialChars(String content) {\n  if (content == null) {\n    return null;\n  }\n\n  char[]        charArray = content.toCharArray();\n  StringBuilder sb        = new StringBuilder();\n\n  for (char c : charArray) {\n    switch (c) {\n      case '&':\n        sb.append(\"&amp;\");\n        break;\n      case '\"':\n        sb.append(\"&quot;\");\n        break;\n      case '\\'':\n        sb.append(\"&#039;\");\n        break;\n      case '<':\n        sb.append(\"&lt;\");\n        break;\n      case '>':\n        sb.append(\"&gt;\");\n        break;\n      default:\n        sb.append(c);\n        break;\n    }\n  }\n\n  return sb.toString();\n}\n")])])]),n("h4",{attrs:{id:"_2-espai使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-espai使用"}},[e._v("#")]),e._v(" 2.ESPAI使用")]),e._v(" "),n("h4",{attrs:{id:"_1-pom-xml配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-pom-xml配置"}},[e._v("#")]),e._v(" 1.pom.xml配置")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("    <dependencies>\n        <dependency>\n            <groupId>org.owasp.esapi</groupId>\n            <artifactId>esapi</artifactId>\n            <version>2.1.0</version>\n        </dependency>\n        <dependency>\n            <groupId>org.jsoup</groupId>\n            <artifactId>jsoup</artifactId>\n            <version>1.7.3</version>\n        </dependency>\n    </dependencies>\n")])])]),n("h4",{attrs:{id:"_2-添加配置文件-resources-esapi-properties"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-添加配置文件-resources-esapi-properties"}},[e._v("#")]),e._v(" 2.添加配置文件 resources/ESAPI.properties")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("ESAPI.printProperties=true\n\nESAPI.AccessControl=org.owasp.esapi.reference.DefaultAccessController\nESAPI.Authenticator=org.owasp.esapi.reference.FileBasedAuthenticator\nESAPI.Encoder=org.owasp.esapi.reference.DefaultEncoder\nESAPI.Encryptor=org.owasp.esapi.reference.crypto.JavaEncryptor\nESAPI.Executor=org.owasp.esapi.reference.DefaultExecutor\nESAPI.HTTPUtilities=org.owasp.esapi.reference.DefaultHTTPUtilities\nESAPI.IntrusionDetector=org.owasp.esapi.reference.DefaultIntrusionDetector\nESAPI.Logger=org.owasp.esapi.reference.JavaLogFactory\nESAPI.Randomizer=org.owasp.esapi.reference.DefaultRandomizer\nESAPI.Validator=org.owasp.esapi.reference.DefaultValidator\n\n\n#===========================================================================\n# ESAPI Encoder\nEncoder.AllowMultipleEncoding=false\nEncoder.AllowMixedEncoding=false\nEncoder.DefaultCodecList=HTMLEntityCodec,PercentCodec,JavaScriptCodec\n\n\n#===========================================================================\n# ESAPI 加密模块\nEncryptor.PreferredJCEProvider=\nEncryptor.EncryptionAlgorithm=AES\nEncryptor.CipherTransformation=AES/CBC/PKCS5Padding\nEncryptor.cipher_modes.combined_modes=GCM,CCM,IAPM,EAX,OCB,CWC\nEncryptor.cipher_modes.additional_allowed=CBC\nEncryptor.EncryptionKeyLength=128\nEncryptor.ChooseIVMethod=random\nEncryptor.fixedIV=0x000102030405060708090a0b0c0d0e0f\nEncryptor.CipherText.useMAC=true\nEncryptor.PlainText.overwrite=true\nEncryptor.HashAlgorithm=SHA-512\nEncryptor.HashIterations=1024\nEncryptor.DigitalSignatureAlgorithm=SHA1withDSA\nEncryptor.DigitalSignatureKeyLength=1024\nEncryptor.RandomAlgorithm=SHA1PRNG\nEncryptor.CharacterEncoding=UTF-8\nEncryptor.KDF.PRF=HmacSHA256\n\n#===========================================================================\n# ESAPI Http工具\n\nHttpUtilities.UploadDir=C:\\\\ESAPI\\\\testUpload\nHttpUtilities.UploadTempDir=C:\\\\temp\n# Force flags on cookies, if you use HttpUtilities to set cookies\nHttpUtilities.ForceHttpOnlySession=false\nHttpUtilities.ForceSecureSession=false\nHttpUtilities.ForceHttpOnlyCookies=true\nHttpUtilities.ForceSecureCookies=true\n# Maximum size of HTTP headers\nHttpUtilities.MaxHeaderSize=4096\n# File upload configuration\nHttpUtilities.ApprovedUploadExtensions=.zip,.pdf,.doc,.docx,.ppt,.pptx,.tar,.gz,.tgz,.rar,.war,.jar,.ear,.xls,.rtf,.properties,.java,.class,.txt,.xml,.jsp,.jsf,.exe,.dll\nHttpUtilities.MaxUploadFileBytes=500000000\n# Using UTF-8 throughout your stack is highly recommended. That includes your database driver,\n# container, and any other technologies you may be using. Failure to do this may expose you\n# to Unicode transcoding injection attacks. Use of UTF-8 does not hinder internationalization.\nHttpUtilities.ResponseContentType=text/html; charset=UTF-8\n# This is the name of the cookie used to represent the HTTP session\n# Typically this will be the default \"JSESSIONID\"\nHttpUtilities.HttpSessionIdName=JSESSIONID\n\n\n\n#===========================================================================\n# ESAPI Executor\nExecutor.WorkingDirectory=\nExecutor.ApprovedExecutables=\n\n\n#===========================================================================\n# ESAPI Logging\n# Set the application name if these logs are combined with other applications\nLogger.ApplicationName=ExampleApplication\n# If you use an HTML log viewer that does not properly HTML escape log data, you can set LogEncodingRequired to true\nLogger.LogEncodingRequired=false\n# Determines whether ESAPI should log the application name. This might be clutter in some single-server/single-app environments.\nLogger.LogApplicationName=true\n# Determines whether ESAPI should log the server IP and port. This might be clutter in some single-server environments.\nLogger.LogServerIP=true\n# LogFileName, the name of the logging file. Provide a full directory path (e.g., C:\\\\ESAPI\\\\ESAPI_logging_file) if you\n# want to place it in a specific directory.\nLogger.LogFileName=ESAPI_logging_file\n# MaxLogFileSize, the max size (in bytes) of a single log file before it cuts over to a new one (default is 10,000,000)\nLogger.MaxLogFileSize=10000000\n\n\n#===========================================================================\n# ESAPI Intrusion Detection\nIntrusionDetector.Disable=false\nIntrusionDetector.event.test.count=2\nIntrusionDetector.event.test.interval=10\nIntrusionDetector.event.test.actions=disable,log\n\nIntrusionDetector.org.owasp.esapi.errors.IntrusionException.count=1\nIntrusionDetector.org.owasp.esapi.errors.IntrusionException.interval=1\nIntrusionDetector.org.owasp.esapi.errors.IntrusionException.actions=log,disable,logout\n\nIntrusionDetector.org.owasp.esapi.errors.IntegrityException.count=10\nIntrusionDetector.org.owasp.esapi.errors.IntegrityException.interval=5\nIntrusionDetector.org.owasp.esapi.errors.IntegrityException.actions=log,disable,logout\n\nIntrusionDetector.org.owasp.esapi.errors.AuthenticationHostException.count=2\nIntrusionDetector.org.owasp.esapi.errors.AuthenticationHostException.interval=10\nIntrusionDetector.org.owasp.esapi.errors.AuthenticationHostException.actions=log,logout\n\n\n#===========================================================================\n# ESAPI 校验器\n#校验器的配置文件\nValidator.ConfigurationFile=validation.properties\n\n# Validators used by ESAPI\nValidator.AccountName=^[a-zA-Z0-9]{3,20}$\nValidator.SystemCommand=^[a-zA-Z\\\\-\\\\/]{1,64}$\nValidator.RoleName=^[a-z]{1,20}$\n\n#the word TEST below should be changed to your application\n#name - only relative URL's are supported\nValidator.Redirect=^\\\\/test.*$\n\n# Global HTTP Validation Rules\n# Values with Base64 encoded data (e.g. encrypted state) will need at least [a-zA-Z0-9\\/+=]\nValidator.HTTPScheme=^(http|https)$\nValidator.HTTPServerName=^[a-zA-Z0-9_.\\\\-]*$\nValidator.HTTPParameterName=^[a-zA-Z0-9_]{1,32}$\nValidator.HTTPParameterValue=^[a-zA-Z0-9.\\\\-\\\\/+=@_ ]*$\nValidator.HTTPCookieName=^[a-zA-Z0-9\\\\-_]{1,32}$\nValidator.HTTPCookieValue=^[a-zA-Z0-9\\\\-\\\\/+=_ ]*$\n\n# Note that max header name capped at 150 in SecurityRequestWrapper!\nValidator.HTTPHeaderName=^[a-zA-Z0-9\\\\-_]{1,50}$\nValidator.HTTPHeaderValue=^[a-zA-Z0-9()\\\\-=\\\\*\\\\.\\\\?;,+\\\\/:&_ ]*$\nValidator.HTTPContextPath=^\\\\/?[a-zA-Z0-9.\\\\-\\\\/_]*$\nValidator.HTTPServletPath=^[a-zA-Z0-9.\\\\-\\\\/_]*$\nValidator.HTTPPath=^[a-zA-Z0-9.\\\\-_]*$\nValidator.HTTPQueryString=^[a-zA-Z0-9()\\\\-=\\\\*\\\\.\\\\?;,+\\\\/:&_ %]*$\nValidator.HTTPURI=^[a-zA-Z0-9()\\\\-=\\\\*\\\\.\\\\?;,+\\\\/:&_ ]*$\nValidator.HTTPURL=^.*$\nValidator.HTTPJSESSIONID=^[A-Z0-9]{10,30}$\n\n# Validation of file related input\nValidator.FileName=^[a-zA-Z0-9!@#$%^&{}\\\\[\\\\]()_+\\\\-=,.~'` ]{1,255}$\nValidator.DirectoryName=^[a-zA-Z0-9:/\\\\\\\\!@#$%^&{}\\\\[\\\\]()_+\\\\-=,.~'` ]{1,255}$\n\n# Validation of dates. Controls whether or not 'lenient' dates are accepted.\n# See DataFormat.setLenient(boolean flag) for further details.\nValidator.AcceptLenientDates=false\n")])])]),n("h4",{attrs:{id:"_3-测试代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-测试代码"}},[e._v("#")]),e._v(" 3.测试代码")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('    String s = "<script>\'\\"";\n\n    String s1 = ESAPI.encoder().encodeForHTML(s);\n    System.out.println(s1);  // &lt;script&gt;&#x27;&quot;\n')])])])])}),[],!1,null,null,null);t.default=a.exports}}]);