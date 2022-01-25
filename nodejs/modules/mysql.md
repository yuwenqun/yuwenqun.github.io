## 封装同步方法
#### dbconnect.js
```
const mysql = require('mysql')

// 创建数据池
const pool  = mysql.createPool({
  host     : '127.0.0.1',   // 数据库地址
  user     : 'root',    // 数据库用户
  password : '123456',   // 数据库密码
  database : 'mysql'  // 选中数据库
})

// 在数据池中进行会话操作
function query( sql, values ) {
    // 返回一个 Promise
    return new Promise(( resolve, reject ) => {
      pool.getConnection(function(err, connection) {
        if (err) {
          reject( err )
        } else {
          connection.query(sql, values, ( err, rows) => {
  
            if ( err ) {
              reject( err )
            } else {
              resolve( rows )
            }
            // 结束会话
            connection.release()
          })
        }
      })
    })
  }

module.exports = query

```

## 使用
#### 函数外部使用,需要使用.then处理promise
```
var sql="insert into auth(username,ipaddress,password)value(?,?,?)"
var params=['zhang666','127.9.9.9','123123123123123123']
query(sql,params).then(data=>{
    console.log(data);
    /*
    OkPacket {
        fieldCount: 0,
        affectedRows: 1,
        insertId: 7,
        serverStatus: 2,
        warningCount: 0,
        message: '',
        protocol41: true,
        changedRows: 0
    }
    */
    或者
    /*
    [{'username':'zhangsan','age':12,.....},{},......]
    */
})
```

#### 函数内部使用
```
app.get('/', async (req, res)=>{
    var sql="select * from mysql.user"
    var params=[]
    var data=await query(sql,params)  //在其他函数中使用，可以直接获取数据,express举例
    ......
})
```
