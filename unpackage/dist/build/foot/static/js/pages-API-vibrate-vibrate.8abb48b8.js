(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-vibrate-vibrate"],{"00be":function(t,n,i){"use strict";i.r(n);var a=i("35f9"),e=i.n(a);for(var u in a)"default"!==u&&function(t){i.d(n,t,(function(){return a[t]}))}(u);n["default"]=e.a},"35f9":function(t,n,i){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{title:"vibrateLong/vibrateShort"}},onLoad:function(){},methods:{longshock:function(){uni.vibrateLong({success:function(){t.log("success")}})},shortshock:function(){uni.vibrateShort({success:function(){t.log("success")}})}}};n.default=i}).call(this,i("5a52")["default"])},4035:function(t,n,i){"use strict";var a=i("6059"),e=i.n(a);e.a},6059:function(t,n,i){var a=i("639e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=i("4f06").default;e("fab4eb8c",a,!0,{sourceMap:!1,shadowMode:!1})},"639e":function(t,n,i){var a=i("24fb");n=a(!1),n.push([t.i,".uni-padding-wrap[data-v-75b5573f]{margin-top:%?50?% 0}.uni-button[data-v-75b5573f]{margin:%?30?% 0}.uni-tips[data-v-75b5573f]{color:#666;font-size:%?30?%}.uni-tips-text[data-v-75b5573f]{margin-top:%?15?%;line-height:1.2;font-size:%?24?%}",""]),t.exports=n},"77a01":function(t,n,i){"use strict";i.r(n);var a=i("bd18"),e=i("00be");for(var u in e)"default"!==u&&function(t){i.d(n,t,(function(){return e[t]}))}(u);i("4035");var o,s=i("f0c5"),c=Object(s["a"])(e["default"],a["b"],a["c"],!1,null,"75b5573f",null,!1,a["a"],o);n["default"]=c.exports},bd18:function(t,n,i){"use strict";var a,e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",[i("page-head",{attrs:{title:t.title}}),i("v-uni-view",{staticClass:"uni-padding-wrap"},[i("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.longshock.apply(void 0,arguments)}}},[t._v("长震动")]),i("v-uni-button",{staticClass:"uni-button",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.shortshock.apply(void 0,arguments)}}},[t._v("短震动")]),i("v-uni-view",{staticClass:"uni-tips"},[i("v-uni-view",[t._v("Tips")]),i("v-uni-view",{staticClass:"uni-tips-text"},[t._v("iOS上只有长震动，没有短震动")]),i("v-uni-view",{staticClass:"uni-tips-text"},[t._v("iOS上需要手机设置“打开响铃时震动”或“静音时震动”，否则无法震动")])],1)],1)],1)},u=[];i.d(n,"b",(function(){return e})),i.d(n,"c",(function(){return u})),i.d(n,"a",(function(){return a}))}}]);