(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{340:function(t,a,s){"use strict";s.r(a);var e=s(22),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"es查询只能查一万条数据问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#es查询只能查一万条数据问题"}},[t._v("#")]),t._v(" es查询只能查一万条数据问题")]),t._v(" "),s("h3",{attrs:{id:"_1-修改索引配置中的max-result-window"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-修改索引配置中的max-result-window"}},[t._v("#")]),t._v(" 1.修改索引配置中的max_result_window")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('由于在logstash中配置索引的时候使用es的默认的索引模板,\n默认的索引模板配置信息中的from+size最大值为10000,\n\nput http://ip:9200/_all_/_settings \n\n{ "index" : \n    {\n         "max_result_window": 10000000\n    }\n}\n\n')])])]),s("h3",{attrs:{id:"_2-查询时加上-track-total-hits-true"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-查询时加上-track-total-hits-true"}},[t._v("#")]),t._v(" 2.查询时加上?track_total_hits=true")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('方式1:\nPOST http://ip:port/index/_search?track_total_hits=true\n.......\n\n\n方式2:\n{\n "track_total_hits":true,\n  "query":{\n    "match":{\n      "name":"value"\n    }\n  }\n}\n')])])])])}),[],!1,null,null,null);a.default=n.exports}}]);