module.exports = {
    title: '90后老男人',
    description: '风起于青萍之末,浪成于微澜之间',
    head: [
        ['link', {
            rel: 'icon',
            href: `/person/person.icon`
        }]
    ],
    dest: './docs/dist',
    ga: '',
    evergreen: true,
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: '安全', link: '/websec/' },
          { text: '编程', 
            items: 
                [
                    { text: 'PYTHON', link: '/python/' },
                    { text: 'PHP', link: '/php/' },
                    { text: 'VUE', link: '/vue/' },
                    { text: 'MYSQL', link: '/mysql/' },
                    { text: 'NodeJs',link:'/nodejs/'},
                    { text: 'Java',link:'/java/'},
                    { text: 'Elasticsearch',link:'/es/'},
                    { text: 'Zeek',link:'/zeek/'}
            ]
        },
          { text: 'Delphinidae项目', link: '/delphinidae/' },
          { text: 'PassiveScan项目', link: '/passiveproxy/' },
          { text: 'JavaSSM靶场项目', link: '/webssm/' },
          // { text: '旧博客(已下线)', link: 'https://www.yu2lulu.xyz' },
          { text: '关于我', link: '/about/' },
        ],
        // sidebar:sidebar
        sidebar: {
            "/websec/": [
                {
                  title: "web安全",
                  collapsable: false,
                //   path: "install",
                  children: [
                    { title: "同源策略", path: "wiki/cors" },
                    { title: "wAF识别", path: "wiki/wafsignature" },
                    { title: "XML注入", path: "wiki/xxe" },
                    { title: "webpack安全", path: "wiki/webpack_" },
                  ],
                },
                {
                    title: "解决方案",
                    collapsable: false,
                  //   path: "install",
                    children: [
                      { title: "防越权方案", path: "programme/noultravires" },
                      { title: "全加密方案", path: "programme/encrypt" },
                      { title: "常用安全设备默认口令", path: "programme/secdeviceweakpass" },
                      { title: "越权自动化测试", path: "programme/autotest" },
                    ],
                  },
                {
                    title: "工具篇",
                    collapsable: false,
                    children: [
                      { title: "nmap", path: "tools/nmap" },
                      { title: "hydra", path: "tools/hydra" },
                      { title: "sqlmap", path: "tools/sqlmap" },
                      { title:"metersploit",path:"tools/metersploit"}
                    ],
                  }
            ],
            "/delphinidae/": [
                {
                    title:"项目",
                    collapsable: false,
                    children: [
                        { title: "关于", path: "about" }
                    ]
                },
                {   
                    title:"信息收集",
                    collapsable: false,
                    children: [
                        { title: "端口扫描", path: "information/portscan" },
                        { title: "C端扫描", path: "information/cscan" },
                        { title: "WEB扫描", path: "information/webscan" },
                        { title: "CMS识别", path: "information/cms" },
                        { title: "子域名爆破", path: "information/subdomaincrack" },
                        { title: "子域名探测", path: "information/subdomaintest" },
                    ]
            
                },
                {   
                    title:"漏洞扫描",
                    collapsable: false,
                    children: [
                        { title: "weblogic", path: "vulscan/weblogic" },
                        { title: "struts2", path: "vulscan/struts2" },
                    ],
            
                },
                {   
                    title:"暴力破解",
                    collapsable: false,
                    children: [
                        { title: "协议破解", path: "burpforce/protocal" },
                        { title: "中间件", path: "burpforce/middleware" },
                        { title: "一句话", path: "burpforce/oneworld" },
                        { title: "wifi破解", path: "burpforce/wifi" },
                    ],
            
                },
                {   
                    title:"漏洞利用",
                    collapsable: false,
                    children: [
                        { title: "redis", path: "vulhunter/redis" },
                        { title: "shiro", path: "vulhunter/shiro" },
                        { title: "shellshock", path: "vulhunter/shellshock" },
                        { title: "TH5.x RCE", path: "vulhunter/tp5.x" },
                    ],
            
                },
                {   
                    title:"被动扫描器",
                    collapsable: false,
                    children: [
                        { title: "启动配置", path: "passivescan/settings" },
                        { title: "漏洞列表", path: "passivescan/vuldetail" },
                    ],
            
                },
                {   
                    title:"系统设置",
                    collapsable: false,
                    children: [
                        { title: "加解密", path: "settings/crypt" },
                        { title: "字典管理", path: "settings/dictmanager" },
                        { title: "DNSLOG", path: "settings/dnslog" },
                        { title: "终端管理", path: "settings/terminal" },
                    ],
            
                },
            ],
            "/passiveproxy/": [
                {
                  title: "介绍",
                  collapsable: false,
                //   path: "install",
                  children: [
                    { title: "简介", path: "about" },
                  ],
                },
                {
                  title: "使用简介",
                  collapsable: false,
                //   path: "install",
                  children: [
                    { title: "安装证书", path: "usage/cert" },
                    { title: "控制台", path: "usage/console" },
                  ],
                },
                {
                    title: "安全插件",
                    collapsable: false,
                  //   path: "install",
                    children: [
                      { title: "重发包功能", path: "feature/sendRequest" },
                      { title: "SQL注入检测", path: "feature/sqlinject" },
                      { title: "XSS注入检测", path: "feature/xss" },
                      { title: "文件包含检测", path: "feature/include" },
                      { title: "敏感信息检测", path: "feature/sensivecheck" },
                      { title: "敏感文件目录扫描", path: "feature/sensivefile" },
                      { title: "webpack文件扫描", path: "feature/jsmap" },
                    ],
                  }
            ],
            "/webssm/":[
              {
                title: "关于",
                collapsable: false,
              //   path: "install",
                children: [
                  { title: "说明", path: "about" },
                ],
              },
              {
                  title: "操作指引",
                  collapsable: false,
                  children: [
                    { title: "SQL注入", path: "wiki/sqlinject" },
                    { title: "命令执行", path: "wiki/command" },
                    { title: "任意文件操作", path: "wiki/fileread" },
                    { title:"文件上传",path:"wiki/fileupload"},
                    { title:"SSRF",path:"wiki/ssrf"},
                    { title:"XXE",path:"wiki/xxe"},
                    { title:"XSS",path:"wiki/xss"}
                  ],
                }
            ],
            "/nodejs/": [
              {
                  title: "总结",
                  collapsable: false,
                //   path: "install",
                  children: [
                    { title: "express总结", path: "express" },
                    { title: "pm2工具", path: "pm2" },
                    { title: "代理功能", path: "proxy" },
                    { title: "promise和async/await的使用", path: "promise_async_await" },
                  ],
                },
              {
                title: "第三方模块",
                collapsable: false,
                children: [
                  { title: "sync-request", path: "modules/sync-request" },
                  { title: "request", path: "modules/request" },
                  { title: "mysql", path: "modules/mysql" },
                  { title: "async", path: "modules/async" },
                ],
              },
            ],
            "/java/": [
              {
                title: "知识梳理",
                collapsable: false,
                children: [
                  { title: "时间转换", path: "wiki/time" },
                  { title: "Calendar", path: "wiki/Calendar" },
                  { title: "随机数", path: "wiki/random" },
                  { title: "迭代器和增强for使用", path: "wiki/iterator_for" },
                  { title: "List/Set/Map", path: "wiki/list_set_map" },
                  { title: "线程并发安全问题", path: "wiki/threadSafe" },
                  { title: "文件操作", path: "wiki/fileAction" },
                  { title: "IO输入输出流", path: "wiki/InputOutput" },
                  { title: "JDBC", path: "wiki/jdbc" },
                  { title: "JavaWeb", path: "wiki/javaweb" },
                  { title: "spring", path: "wiki/spring.md" },
                  { title: "springMVC", path: "wiki/springMVC.md" },
                  { title: "ssm整合", path: "wiki/ssm.md" },
                ],
              },
              {
                  title: "安全开发",
                  collapsable: false,
                //   path: "install",
                  children: [
                    { title: "反射", path: "reflex" },
                    { title: "线程安全", path: "threadsec" },
                    { title: "SQL注入", path: "sqlinject" },
                    { title: "XSS漏洞", path: "xss" },
                    { title: "ESAPI使用", path: "esapi" },
                    { title: "Mybatis", path: "Mybatis" },

                  ],
                },
                {
                  title: "漏洞分析",
                  collapsable: false,
                //   path: "install",
                  children: [
                    { title: "反射", path: "vulable/reflex" },
                    { title: "RMI", path: "vulable/rmi" },
                    { title: "URLDNS", path: "vulable/urldns" },
                    { title: "fastjson分析", path: "vulable/fastjson" },
                    { title: "内存马分析", path: "vulable/shell" },
                    { title: "shiro分析", path: "vulable/shiro" },
                    { title: "CommonsCollections分析", path: "vulable/CommonsCollections" },
                    { title: "反序列化漏洞回显分析", path: "vulable/vulecho" },
                  ],
                },
                {
                  title: "案例",
                  collapsable: false,
                //   path: "install",
                  children: [
                    { title: "基于源代码接口文档生成工具", path: "case/smart_doc" },
                    { title: "基于springMVC生成Controller信息", path: "case/spring_controller" },

                  ],
                }
              ],
            "/python/": [
              {
                  title: "项目",
                  collapsable: false,
                //   path: "install",
                  children: [
                    { title: "Q&A", path: "qa.md" },
                    { title: "BurpSuit敏感信息插件", path: "burpsuit" },
                    { title: "多进程高并发暴力破解", path: "mcrack" },

                  ],
                },
                // {
                //   title: "案例",
                //   collapsable: false,
                // //   path: "install",
                //   children: [
                //     { title: "基于源代码接口文档生成工具", path: "smart_doc" },

                //   ],
                // }
              ],
              "/vue/": [
                {
                    title: "笔记",
                    collapsable: false,
                  //   path: "install",
                    children: [
                      { title: "eCharts子组件渲染", path: "echarts" },
                      { title: "nginx部署VUE项目", path: "nginx_vue" },
                      { title: "excel导出json数据", path: "vue-json-excel" },
                      { title: "常规账密登陆流程", path: "commonlogin" },
                      { title: "4A登陆认证流程", path: "4alogin" },
                    ],
                  },
                ],
              "/mysql/": [
                // {
                //   title: "介绍",
                //   collapsable: false,
                //   children: [
                //     { title: "关于", path: "about" },
                //   ],
                // },
                {
                    title: "功能",
                    collapsable: false,
                  //   path: "install",
                    children: [
                      { title: "判断字符串是否包含某子串", path: "islocate" }, 
                      { title: "触发器使用", path: "trigger" },  
                      { title: "索引的使用", path: "mysqlIndex" },  
                    ],
                  }
                ],
                "/es/": [
                  {
                      title: "笔记",
                      collapsable: false,
                    //   path: "install",
                      children: [
                        { title: "Elasticsearch安装", path: "install" }, 
                        { title: "restfulAPI", path: "restfulAPI" }, 
                        { title: "packetbeat", path: "packetbeat" }, 
                        { title: "filebeat", path: "filebeat" }, 
                        { title: "Q&A", path: "qa" },  
                      ],
                    }
                  ],
                "/zeek/": [
                  {
                      title: "笔记",
                      collapsable: false,
                    //   path: "install",
                      children: [
                        { title: "安装", path: "install" }, 
                        { title: "入门", path: "begin" }, 
                        { title: "数据类型", path: "datatype" }, 
                        { title: "日志格式", path: "log" }, 
                        { title: "写入日志", path: "recordLog" }, 
                        { title: "协议事件", path: "event" }, 
                      ],
                    }
                  ]
        }
    },

}