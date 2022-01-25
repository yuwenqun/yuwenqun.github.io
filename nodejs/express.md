## 1.路由模块化

#### 定义模块路由文件 route/admin.js
```
const express = require('express');
const admin = express.Router();

admin.get('/index',(req,res,next)=>{
    res.send({
        'admin':1
    });
})

module.exports=admin
```


#### app.js中引用模块路由 app.js
```
const express = require('express');
const app = express();

app.use('/admin',require('./route/admin'));
app.use('/home',require('./route/home'));
......

```


## 2.请求参数
#### 获取请求头
```
req.headers
```

#### GET参数获取
```
请求url:
http://localhost:3000/index?
username=zhangsan&password=123

var { username,password } = req.query
```

#### POST参数获取
```
const bodyParser = require('body-parser');
app.use(bodyParser.urlencode({extended:false}))

var { username,password } = req.body

```

## 3.中间件
#### 3.1 中间件的应用：
* 1.路由保护[登录session校验]
* 2.维护公告
* 3.自定义404页面（将该中间件设置到最后面）
* 4.错误处理中间件
	
###### 注意:可在模块路由中使用，也可以在app.js使用，模块中使用的表示针对模块生效,app.js中使用表示所有模块都会生效,需要放在路由的最前面，否则无法生效

#### 3.2 使用
##### app.js使用
```
app.use((req,res,next)=>{
    console.log(1111);
    if(){
	
	}else{
		next();
	}
})
```

##### 模块路由使用
```
const express = require('express');
const admin = express.Router();

admin.use((req,res,next)=>{
    if(){
	
	}else{
		next();
	}
    
})
```


#### 错误处理中间件
```
app.use((error,req,res,next)=>{ ... })  
//当程序出现异常时会调用该中间件
1.如果函数是异步的api，例如fs。readFile等，需要在回调函数中使用next(error)来触发调用错误中间件
2.如果是async/await的则需要通过try/catch捕获异常后在catch中使用next(error)触发异常中间件

```


### 中间件传递参数
#### 1.req.xxx 赋值
#### 2.app.set(key,value)
```
app.set('ssoHostname','xxxxx');
var value=app.settings.ssoHostname;
```

## 4.响应数据
#### 4.1 设置响应头
```
res.append('fuck', 'you')

注意点:需在res.send之前调用

```

#### 4.2 提供附件下载
```
admin.get('/download',function (req,res) {
    res.download('files/1.txt','模板.txt',function (err) {
        if(err){
          console.log(err)
       }else{
         //res.send('ok')   
       }
    })
})

说明
path:要下在的文件所在的路径,以项目为相对路径
filename：文件下载后的名字,浏览器显示的名字
fn：回调函数
```


#### 4.3 设置状态码和响应体
```
res.status(200|404|500).send(json|string|array)
```

#### 4.4重定向
###### res.redirect(301, 'http://example.com')


## 5.session## session的支持
#### 1.依赖express-session第三方模块
#### 2.代码
```
const session = require('express-session')
//app.js中开启session的支持
app.use(session({
	secret:'secret key', //secretkey设置加密key
	saveUninitialized:false, //false未设置时不设置cookie
	cookie:{
		maxAge:24*60*60*&1000  //一天有效期
	}
	}))  //这一步后就会在req上添加session的值

//setCookie动作
req.session.name='123'


退出：
req.session.destroy(function(){
	res.clearCookie('connect.sid');
	res.redirect('/login')
})
```
![](/nodejs/express-session.jpg)

## 6.开放静态资源
```
app.use(express.static([static,]path.join(__dirname,'public')))
//表示在该目录下的所有文件都可以直接访问
```