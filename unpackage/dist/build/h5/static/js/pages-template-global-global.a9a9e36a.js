(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-global-global"],{"38bc":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".button[data-v-b612073c]{margin:%?30?%;color:#007aff}.text[data-v-b612073c]{margin-left:%?30?%}",""]),t.exports=e},7897:function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"pa"},[n("v-uni-view",{staticClass:"uni-divider"},[n("v-uni-view",{staticClass:"uni-divider__content"},[t._v("globalData")]),n("v-uni-view",{staticClass:"uni-divider__line"})],1),n("v-uni-text",{staticClass:"text"},[t._v("globalData中text的值: "+t._s(t.gd.test))]),n("v-uni-button",{staticClass:"button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setGD()}}},[t._v("修改上述值为123")]),n("v-uni-view",{staticClass:"uni-divider"},[n("v-uni-view",{staticClass:"uni-divider__content"},[t._v("vuex")]),n("v-uni-view",{staticClass:"uni-divider__line"})],1),n("v-uni-text",{staticClass:"text"},[t._v("vuex中hasLogin的值: "+t._s(t.testvuex))]),n("v-uni-button",{staticClass:"button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setVUEX(!0)}}},[t._v("修改上述值为true")]),n("v-uni-button",{staticClass:"button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setVUEX(!1)}}},[t._v("修改上述值为false")])],1)},s=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}))},"798f":function(t,e,n){"use strict";n.r(e);var i=n("cde3"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},"96c7":function(t,e,n){var i=n("38bc");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("ce51c3de",i,!0,{sourceMap:!1,shadowMode:!1})},b5ce:function(t,e,n){"use strict";n.r(e);var i=n("7897"),a=n("798f");for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("cc81");var c,r=n("f0c5"),u=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"b612073c",null,!1,i["a"],c);e["default"]=u.exports},cc81:function(t,e,n){"use strict";var i=n("96c7"),a=n.n(i);a.a},cde3:function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("8e6e"),n("ac6a"),n("456d");var a=i(n("bd86")),s=n("2f62");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){(0,a.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u={data:function(){return{gd:{}}},computed:r({},(0,s.mapState)(["testvuex"])),methods:r({},(0,s.mapMutations)(["setTestTrue"]),{},(0,s.mapMutations)(["setTestFalse"]),{setGD:function(){getApp().globalData.test="123"},setVUEX:function(t){t?this.setTestTrue(this.$store.state):this.setTestFalse(this.$store.state)}}),onShow:function(){this.gd=getApp().globalData}};e.default=u}}]);