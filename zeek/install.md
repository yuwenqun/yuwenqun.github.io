## 官方页
[安装](https://docs.zeek.org/en/master/install.html)

## 安装依赖
* 安装依赖
```
yum install cmake make gcc gcc-c++ flex bison libpcap-devel openssl-devel python3 python3-devel swig zlib-devel
```

## yum安装


* 此外，在RHEL/CentOS 7 上，您可以安装并激活devtoolset以访问最新的 GCC 版本。您还必须安装并激活 CMake 3。例如：
```
yum install cmake3 devtoolset-7
scl enable devtoolset-7 bash
```

* 安装
```
对于 CentOS 8，以 root 身份运行以下命令：
cd /etc/yum.repos.d/
wget https://download.opensuse.org/repositories/security:zeek/CentOS_8/security:zeek.repo
yum install zeek

对于 CentOS 7，以 root 身份运行以下命令：

cd /etc/yum.repos.d/
wget https://download.opensuse.org/repositories/security:zeek/CentOS_7/security:zeek.repo
yum install zeek

```
## 源代码安装
```
git clone  https://github.com/zeek/zeek
./configure
make
make install
```
