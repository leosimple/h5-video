(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-vibrate-vibrate"],{"21b7d":function(t,n,i){"use strict";var e=i("a469"),a=i.n(e);a.a},"39dd":function(t,n,i){"use strict";i.r(n);var e=i("a15d"),a=i.n(e);for(var u in e)"default"!==u&&function(t){i.d(n,t,(function(){return e[t]}))}(u);n["default"]=a.a},a15d:function(t,n,i){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{title:"vibrateLong/vibrateShort"}},onLoad:function(){},methods:{longshock:function(){uni.vibrateLong({success:function(){t.log("success")}})},shortshock:function(){uni.vibrateShort({success:function(){t.log("success")}})}}};n.default=i}).call(this,i("5a52")["default"])},a469:function(t,n,i){var e=i("cb07");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=i("4f06").default;a("cc6cc366",e,!0,{sourceMap:!1,shadowMode:!1})},bdb1:function(t,n,i){"use strict";i.r(n);var e=i("cebf"),a=i("39dd");for(var u in a)"default"!==u&&function(t){i.d(n,t,(function(){return a[t]}))}(u);i("21b7d");var c,o=i("f0c5"),s=Object(o["a"])(a["default"],e["b"],e["c"],!1,null,"fce6017e",null,!1,e["a"],c);n["default"]=s.exports},cb07:function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,".uni-padding-wrap[data-v-fce6017e]{margin-top:%?50?% 0}.uni-button[data-v-fce6017e]{margin:%?30?% 0}.uni-tips[data-v-fce6017e]{color:#666;font-size:%?30?%}.uni-tips-text[data-v-fce6017e]{margin-top:%?15?%;line-height:1.2;font-size:%?24?%}",""]),t.exports=n},cebf:function(t,n,i){"use strict";var e,a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",[i("page-head",{attrs:{title:t.title}}),i("v-uni-view",{staticClass:"uni-padding-wrap"},[i("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.longshock.apply(void 0,arguments)}}},[t._v("长震动")]),i("v-uni-button",{staticClass:"uni-button",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.shortshock.apply(void 0,arguments)}}},[t._v("短震动")]),i("v-uni-view",{staticClass:"uni-tips"},[i("v-uni-view",[t._v("Tips")]),i("v-uni-view",{staticClass:"uni-tips-text"},[t._v("iOS上只有长震动，没有短震动")]),i("v-uni-view",{staticClass:"uni-tips-text"},[t._v("iOS上需要手机设置“打开响铃时震动”或“静音时震动”，否则无法震动")])],1)],1)],1)},u=[];i.d(n,"b",(function(){return a})),i.d(n,"c",(function(){return u})),i.d(n,"a",(function(){return e}))}}]);