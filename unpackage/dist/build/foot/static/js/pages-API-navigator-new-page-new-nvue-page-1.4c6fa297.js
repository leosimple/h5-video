(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-navigator-new-page-new-nvue-page-1"],{"0ce1":function(e,t,n){"use strict";var i,o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"root"},[n("v-uni-view",{staticClass:"page-body"},[n("v-uni-view",{staticClass:"new-page__color",style:{backgroundColor:e.currentColor},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.setColorIndex(e.colorIndex>1?0:e.colorIndex+1)}}},[n("v-uni-text",{staticClass:"new-page__color-text"},[e._v("点击改变颜色")])],1),n("v-uni-view",{staticClass:"new-page__text-box"},[n("v-uni-text",{staticClass:"new-page__text"},[e._v("点击上方色块使用vuex在页面之间进行通讯")])],1),n("v-uni-view",{staticClass:"new-page__button"},[n("v-uni-button",{staticClass:"new-page__button-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navToNvue.apply(void 0,arguments)}}},[e._v("跳转NVUE页面")]),n("v-uni-button",{staticClass:"new-page__button-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navToVue.apply(void 0,arguments)}}},[e._v("跳转VUE页面")])],1)],1)],1)},a=[];n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}))},1273:function(e,t,n){"use strict";n.r(t);var i=n("d1b7"),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=o.a},"1e37":function(e,t,n){var i=n("e1d2");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("4f06").default;o("4e739917",i,!0,{sourceMap:!1,shadowMode:!1})},"3dde":function(e,t,n){"use strict";var i=n("1e37"),o=n.n(i);o.a},"4edb":function(e,t,n){"use strict";n.r(t);var i=n("0ce1"),o=n("1273");for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("3dde");var c,r=n("f0c5"),u=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"5bd80bf4",null,!1,i["a"],c);t["default"]=u.exports},d1b7:function(e,t,n){"use strict";var i=n("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n("f3f3")),a=n("2f62"),c={data:function(){return{}},computed:(0,o.default)({},(0,a.mapState)(["colorIndex","colorList"]),{},(0,a.mapGetters)(["currentColor"])),methods:(0,o.default)({},(0,a.mapMutations)(["setColorIndex"]),{navToNvue:function(){uni.navigateTo({url:"new-nvue-page-2"})},navToVue:function(){uni.navigateTo({url:"new-vue-page-2"})}})};t.default=c},e1d2:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,".new-page__text[data-v-5bd80bf4]{font-size:14px;color:#666}.root[data-v-5bd80bf4]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.page-body[data-v-5bd80bf4]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-top:50px}.new-page__text-box[data-v-5bd80bf4]{padding:20px}.new-page__color[data-v-5bd80bf4]{width:200px;height:100px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.new-page__color-text[data-v-5bd80bf4]{font-size:14px;color:#fff;line-height:30px;text-align:center}.new-page__button-item[data-v-5bd80bf4]{margin-top:15px;width:300px}",""]),e.exports=t}}]);