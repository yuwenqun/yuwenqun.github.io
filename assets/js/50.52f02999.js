(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{354:function(t,a,e){"use strict";e.r(a);var s=e(22),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"时间转换图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#时间转换图"}},[t._v("#")]),t._v(" 时间转换图")]),t._v(" "),e("p",[e("img",{attrs:{src:"/java/wiki/%E6%97%B6%E9%97%B4%E8%BD%AC%E6%8D%A2%E5%9B%BE.png",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"代码实例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码实例"}},[t._v("#")]),t._v(" 代码实例")]),t._v(" "),e("h3",{attrs:{id:"_1-获取当前时间戳"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-获取当前时间戳"}},[t._v("#")]),t._v(" 1.获取当前时间戳")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("long l = System.currentTimeMillis();\nSystem.out.println(l); // 1618366932577\n")])])]),e("h3",{attrs:{id:"_2-时间戳转时间结构体"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-时间戳转时间结构体"}},[t._v("#")]),t._v(" 2.时间戳转时间结构体")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Date date = new Date(0L); //\nSystem.out.println(date); //Thu Jan 01 08:00:00 CST 1970\n")])])]),e("h3",{attrs:{id:"_3-结构体转时间戳"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-结构体转时间戳"}},[t._v("#")]),t._v(" 3. 结构体转时间戳")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("long time1 = date.getTime();\nSystem.out.println(time1); //1618366932577\n")])])]),e("h3",{attrs:{id:"_4-结构体转时间格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-结构体转时间格式"}},[t._v("#")]),t._v(" 4. 结构体转时间格式")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");\nString format = simpleDateFormat.format(date);\nSystem.out.println(format); // 1970-01-01 08:00:00\n')])])]),e("h3",{attrs:{id:"_5-时间格式转时间戳"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-时间格式转时间戳"}},[t._v("#")]),t._v(" 5.时间格式转时间戳")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Date parse = simpleDateFormat.parse(format);\nlong time = parse.getTime();\nSystem.out.println(time);  //1618366932577\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);