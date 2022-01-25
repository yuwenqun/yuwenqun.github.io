## 封装同步方法
#### request.js
```
const requestSync = require("request");

let synchronous_post = function (url, params) {

    let options = {
        url: url,
        form: params
    };

    return new Promise(function (resolve, reject) {
        requestSync.get(options, function (error, response, body) {
            if (error) {
                reject(error);
            } else {
                resolve(body);
            }
        });
    });
}

let syncBody = async function (url) {
    var url = url;
    let body = await synchronous_post(url);
    return body.toString('utf-8');
}

module.exports = syncBody;  //暴露请求方法,该方法是GET,POST同理
```

## 使用
```
// 在其他函数内部使用
app.get('/', async (req, res)=>{
    var data=await syncBody('http://www.baidu.com')  //在其他函数中使用，可以直接获取数据,express举例
    res.send(data);
})

// 在外部使用
var urls=[
     'http://www.qq.com',
     'http://www.baidu.com',
     'http://www.sina.com.cn'
]
urls.forEach(element => {
    var body = syncBody(element);	//函数外部使用,返回的是promise需要.then去解析数据
body.then(data=>{
    console.log(data);
    })
});

```