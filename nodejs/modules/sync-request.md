## 1.Usage
#### Requires at least node 8
```
npm install sync-request

request(method, url, options);
```

## 2.GET
```
var request = require('sync-request');
var res = request('GET', 'https://example.com', {
  headers: {
    'user-agent': 'example-user-agent',
  },
});
console.log(res.getBody());
```

## 3.POST
```
var request = require('sync-request');
var res = request('POST', 'https://example.com/create-user', {
  json: {username: 'ForbesLindesay'},
});
var user = JSON.parse(res.getBody('utf8'));
```

## 4.Options
```
qs - an object containing querystring values to be appended to the uri
headers - http headers (default: {})
body - body for PATCH, POST and PUT requests. Must be a Buffer or String (only strings are accepted client side)
json - sets body but to JSON representation of value and adds Content-type: application/json. 
cache - Set this to 'file' to enable a local cache of content. A separate process is still spawned even for cache requests. This option is only used if running in node.js
followRedirects - defaults to true but can be explicitly set to false on node.js to prevent then-request following redirects automatically.
maxRedirects - sets the maximum number of redirects to follow before erroring on node.js (default: Infinity)
allowRedirectHeaders (default: null) - an array of headers allowed for redirects (none if null).
gzip - defaults to true but can be explicitly set to false on node.js to prevent then-request automatically supporting the gzip encoding on responses.
timeout (default: false) - times out if no response is returned within the given number of milliseconds.
socketTimeout (default: false) - calls req.setTimeout internally which causes the request to timeout if no new data is seen for the given number of milliseconds. This option is ignored in the browser.
retry (default: false) - retry GET requests. Set this to true to retry when the request errors or returns a status code greater than or equal to 400
retryDelay (default: 200) - the delay between retries in milliseconds
maxRetries (default: 5) - the number of times to retry before giving up.
```
## 5.Response
```
res.getBody('utf-8')
res.statusCode
res.body.toString()
res.headers
```
