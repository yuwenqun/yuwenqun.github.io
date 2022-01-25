## 记录日志



## 自定义添加字段



## 自定义日志路径
```
module SSHTTP;
export {
redef enum Log::ID += { LOG };
redef record HTTP::Info += {  //从http中添加字段，需要明确是哪个模块中的数据(HTTP)
          req_headers:  string &log &optional;
          resp_headers:  string &log &optional;
           req_data: string &log &optional;
           resp_data: string &log &optional;
           resp_version: string &log &optional;
           resp_code: count &log &optional;
           resp_reason: string &log &optional;
           req_method: string &log &optional;
           req_version : string &log &optional;
           req_original_URI : string &log &optional;
           req_unescaped_URI : string &log &optional;
           isNeedData: string &log &optional;
	};


}
```

```
event zeek_init() &priority=5
	{
	Log::create_stream(SSHTTP::LOG, [$columns=HTTP::Info, $path="xhttp"]); //默认是当前的路径下，日志文件名为xhttp
	}
```

```
event http_message_done(c: connection, is_orig: bool, stat: http_message_stat) &priority=6{
	if ( ! is_orig )
		{
		# If the response was an informational 1xx, we're still expecting
		# the real response later, so we'll continue using the same record.
			if(c$http$isNeedData == "T"){
				Log::write(SSHTTP::LOG, c$http);
				delete c$http_state$pending[c$http_state$current_response];
			  }
		}
}
```



## 写入ES模块