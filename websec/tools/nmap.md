# nmap


<!-- Network Mapping：网络扫描，扫描网络网段主机
Port Scanning：扫描开放端口
    NMAP的6种端口状态：
    open：TCP打开，UDP打开的。
    closed：关闭该端口的主机是可访问的，只是没有应用在侦听。
    filtered：没有回应，可能被过滤掉。
    unfiltered：没有被过滤的端口的主机是可访问的，无法判断open还是closed。（ACK SCAN专用）。
    open|filtered：（UDP, IP Proto, FIN, Null, Xmas scans使用）无法判断是Open还是被过滤掉了。
    closed|filtered：（IP ID idle scan专用）无法判断端口是closed还是被过滤掉了。
Service and Version Detection：判断服务和版本
OS Detection：判断操作系统版本 -->