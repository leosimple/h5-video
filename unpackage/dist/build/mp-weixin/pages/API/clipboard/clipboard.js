(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/clipboard/clipboard"],{"0711":function(t,n,a){"use strict";(function(t){a("836e"),a("921b");e(a("66fd"));var n=e(a("5e28a"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,a("543d")["createPage"])},"5e28a":function(t,n,a){"use strict";a.r(n);var e=a("db1b"),o=a("6f03");for(var c in o)"default"!==c&&function(t){a.d(n,t,function(){return o[t]})}(c);var u,i=a("f0c5"),l=Object(i["a"])(o["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],u);n["default"]=l.exports},"6f03":function(t,n,a){"use strict";a.r(n);var e=a("9ce5"),o=a.n(e);for(var c in e)"default"!==c&&function(t){a.d(n,t,function(){return e[t]})}(c);n["default"]=o.a},"9ce5":function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{title:"get/setClipboardData",data:""}},methods:{dataChange:function(t){this.data=t.detail.value},getClipboard:function(){t.getClipboardData({success:function(n){console.log(n.data);var a=n.data?"剪贴板内容为:"+n.data:"剪贴板暂无内容";t.showModal({content:a,title:"读取剪贴板",showCancel:!1})},fail:function(){t.showModal({content:"读取剪贴板失败!",showCancel:!1})}})},setClipboard:function(){var n=this.data;0===n.length?t.showModal({title:"设置剪贴板失败",content:"内容不能为空",showCancel:!1}):t.setClipboardData({data:n,success:function(){},fail:function(){}})}}};n.default=a}).call(this,a("543d")["default"])},db1b:function(t,n,a){"use strict";var e,o=function(){var t=this,n=t.$createElement;t._self._c},c=[];a.d(n,"b",function(){return o}),a.d(n,"c",function(){return c}),a.d(n,"a",function(){return e})}},[["0711","common/runtime","common/vendor"]]]);