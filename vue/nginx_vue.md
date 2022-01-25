## 问题描述
* 适用于开发环境部署和测试环境部署

## 0.架构图
![](/vue/nginx_vue_express.jpg)

## 1.API接口以express为例部署
* 正常部署即可

## 2.vue静态代码部署
* 将build之后的代码复制到nginx的root目录下即可。
  * root /Users//dist;      //VUE项目dist的目录路径位置


## 3.nginx配置文件
```
http {

    upstream my_server {      //Express调度配置                                                   
        server 127.0.0.1:3000;                                                
    }

    server {
        ......

        #access_log  logs/host.access.log  main;
        root /Users//dist;      //VUE项目dist的目录路径位置

        location / {     //VUE单页配置
            try_files $uri $uri/ @router;
            index  index.html index.htm;
        }

        location @router {   //VUE单页配置
            rewrite ^.*$ /index.html last;
        }

        location /api/ {   //Express调度配置
            proxy_pass http://my_server;
            proxy_set_header Host $host:$server_port;
        }

}

```