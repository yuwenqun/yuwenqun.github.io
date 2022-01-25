## 1.递归删除目录和文件
```
import os
import stat
 
 
def file_remove_readonly(func, path, execinfo):
    os.chmod(path, stat.S_IWUSR)#修改文件权限
    func(path)
 
if os.path.exists(path):
        shutil.rmtree(path, onerror=file_remove_readonly)

```