## 1.async简述
###### 为了适应异步编程，减少回调的嵌套。
* git仓库开源地址：https://github.com/caolan/async
* 官方文档地址:http://caolan.github.io/async/v3/docs.html


###### Async的内容分为三部分：

* 流程控制：简化十种常见流程的处理
* 集合处理：如何使用异步操作处理集合中的数据
* 工具类：几个常用的工具类

###### 由于nodejs是异步编程模型，有一些在同步编程中很容易做到的事情，现在却变得很麻烦。Async的流程控制就是为了简化这些操作。


## 2.串行执行
#### 函数间无关联
###### async.series([task1,task2,....],callback) 
* 有多个异步函数需要依次调用
* 一个完成之后才能执行下一个
* 各函数之间没有数据的交换，仅仅需要保证其执行顺序
```
async.series([
    function(callback){
        // do something
        callback(null,1)
    },
    function(callback){
        // do something
        callback(null,2)
    }
],function(err,result){
    if(err){
        // do something
    }else{
       // do something 
    }
})
```
###### 具体流程规则执行如下:
* 列表中的function中的callback使用规则:
  * 第一个参数为null表示程序正常往下执行,第二个参数开始为最后一个function的result值,追加模式
  * 第一个参数非null表示程序终止,直接跳转到执行最后一个function回调函数,第二个参数开始为最后一个function的result值,追加模式
* 无论所有的函数是否都正常执行,回调函数一定会被执行
  
![](/nodejs/async_series.jpg)

#### 函数间参数传递
```
async.waterfall([
    function(callback){
        // do something
        callback(null,1)
    },
    function(arg1,callback){
        // do something
        callback(null,2)
    }
],function(err,result){
    console.log('err:'+err)
    console.log('result:'+result)
})
```
###### 具体流程规则执行如下:
* 列表中的function中的callback使用规则:
  * 第一个参数为null表示程序正常往下执行,第二个参数开始为下一个函数的参数
  * 第一个参数非null表示程序终止,直接跳转到执行最后一个function回调函数,第二个参数开始为最后一个function的result值
* 无论所有的函数是否都正常执行,回调函数一定会被执行

![](/nodejs/async_waterfall.jpg)

## 3.并行执行
#### 3.1 并行执行多个函数
###### async.parallelLimit([task1,task2....],num,callback)
* 并行执行多个(num为个数并发限制)函数
* 传给最终callback的数组中的数据按照tasks中声明的顺序，而不是执行完成的顺序。
* 如果某个函数出错，则立刻将err和已经执行完的函数的结果值传给parallel最终的callback,其它未执行完的函数的值不会传到最终数据。
```
async.parallelLimit([
    function(callback){
        setTimeout(function(){
            // do something
            callback(null,11)
        },2000)
    },
    function(callback){
        setTimeout(function(){
            // do something
            callback(null,22)
        },2000)
    },
    function(callback){
        setTimeout(function(){
            // do something
            callback(null,33)
        },2000)
    },
    function(callback){
        setTimeout(function(){
            // do something
            callback(null,44)
        },2000)
    },
    ......
],2,function(err,result){
    console.log(err)
    console.log(result)
})
```
#### 3.2 对集合或者数组遍历并发执行
###### async.mapLimit(Array | Iterable | AsyncIterable | Object,limit,AsyncFunction,callback) 
###### limit  ： 并发数
###### AsyncFunction : 并发的函数
###### callback : 回调函数

```
var hosts=['www','ns','abc','login','test']
async.mapLimit(hosts,3,function(item,callback){
        dns.resolve(item+'.baidu.com', (err,records)=>{
            if(!err){
                console.log(item+'.qq.com:'+records);
                callback(null,records)
            }else{
                
                // console.log(err);
                callback(null)
            }
        })
},function(err,result){
    console.log('err:'+err);
    console.log('result:'+result)
})

//备注：
1.依次从hosts取出1个数据赋值给item
2.并发3个function执行
```
