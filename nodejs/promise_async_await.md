## Promise使用
###### Promise优点:解决回调地狱的问题,链式书写,方便阅读和维护

###### 语法: 
###### 结构：new Promise((resolve,rejected)=>{ ...异步函数... })
###### resolve(data)   //成功的回调
###### rejected(e) == throw err //失败的回调


###### promise对象的数据获取
###### 方式1: .then( data =>{  ... },err => { ... } )
###### 方式2: .then( data => { ... }).catch( e=>{ ... } )

```
const dns = require('dns')

function main(ip){
    let p =new Promise((resolve,rejected)=>{
        dns.resolve(ip,(err,records)=>{
            if(err) {
                rejected(err)
            }else{
                resolve(records)
            }
        })
    })
    return p;
}

main('www.qq.com').then(data=>{
    console.log(data)
}).catch(e=>{
    console.log(e);
})
```

## 使用util.promisify
###### util.promisify(异步函数) // 直接将异步函数封装为Promise的对象
```
const util = require('util')

const request = require('request')

let get = util.promisify(request.get)

get('http://www.baidu.com').then(data=>{
    console.log(data.headers);
})
```

## async/await的使用
#### 关键点
###### 1. await 后面是promise对象，则获取到的就是成功的值
###### 2. await 后面是普通对象，则获取到的就是普通对象的值
###### 3.await 后面的是reject或者throw异常的，则需要通过catch来获取
```
const util = require('util')

const request = require('request')

let get = util.promisify(request.get)

async function doGet(){
    var data = await get('http://www.baidu.com')
    console.log(data.headers)
    console.log(data.body)
    console.log(data.statusCode)
}

doGet()
```