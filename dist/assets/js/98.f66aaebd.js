(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{399:function(t,e,s){"use strict";s.r(e);var a=s(22),n=Object(a.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("h2",{attrs:{id:"_1-递归删除目录和文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-递归删除目录和文件"}},[this._v("#")]),this._v(" 1.递归删除目录和文件")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("import os\nimport stat\n \n \ndef file_remove_readonly(func, path, execinfo):\n    os.chmod(path, stat.S_IWUSR)#修改文件权限\n    func(path)\n \nif os.path.exists(path):\n        shutil.rmtree(path, onerror=file_remove_readonly)\n\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);