(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/checkbox/checkbox"],{"06c7":function(e,t,n){"use strict";(function(e){n("836e"),n("921b");a(n("66fd"));var t=a(n("d865"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"0aed":function(e,t,n){"use strict";n.r(t);var a=n("3578"),u=n.n(a);for(var c in a)"default"!==c&&function(e){n.d(t,e,function(){return a[e]})}(c);t["default"]=u.a},1414:function(e,t,n){"use strict";var a,u=function(){var e=this,t=e.$createElement;e._self._c},c=[];n.d(t,"b",function(){return u}),n.d(t,"c",function(){return c}),n.d(t,"a",function(){return a})},"34ff":function(e,t,n){},3578:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{title:"checkbox 复选框",items:[{value:"USA",name:"美国"},{value:"CHN",name:"中国",checked:"true"},{value:"BRA",name:"巴西"},{value:"JPN",name:"日本"},{value:"ENG",name:"英国"},{value:"FRA",name:"法国"}]}},methods:{checkboxChange:function(e){for(var t=this.items,n=e.detail.value,a=0,u=t.length;a<u;++a){var c=t[a];n.indexOf(c.value)>=0?this.$set(c,"checked",!0):this.$set(c,"checked",!1)}}}};t.default=a},d865:function(e,t,n){"use strict";n.r(t);var a=n("1414"),u=n("0aed");for(var c in u)"default"!==c&&function(e){n.d(t,e,function(){return u[e]})}(c);n("edaf");var r,o=n("f0c5"),f=Object(o["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);t["default"]=f.exports},edaf:function(e,t,n){"use strict";var a=n("34ff"),u=n.n(a);u.a}},[["06c7","common/runtime","common/vendor"]]]);