# web前端工程化带来的安全问题


## webpack


## 安全复现
```
npm install -g Yukaii/restore-source-tree#98ccfc2

restore-source-tree -n --out-dir <dir> bundle-54fbd34f.js.map

# -n 參數是包含 node_modules 資料夾
# --out-dir 參數後面加要存進的目錄
# 請參考原專案 github 說明：https://github.com/alexkuz/restore-source-tree
```

## 解决方法

##### 删除webpack打包后的.js.map文件