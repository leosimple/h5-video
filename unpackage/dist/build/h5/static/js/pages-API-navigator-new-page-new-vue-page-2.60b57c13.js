(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-navigator-new-page-new-vue-page-2"],{"11c02":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,"uni-page-body[data-v-244420a1]{display:-webkit-box;display:-webkit-flex;display:flex;min-height:100%}.new-page__text[data-v-244420a1]{font-size:14px;color:#666}.root[data-v-244420a1]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.page-body[data-v-244420a1]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-top:50px}.new-page__text-box[data-v-244420a1]{padding:20px}.new-page__color[data-v-244420a1]{display:-webkit-box;display:-webkit-flex;display:flex;width:200px;height:100px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.new-page__color-text[data-v-244420a1]{font-size:14px;color:#fff;line-height:30px;text-align:center}.new-page__button-item[data-v-244420a1]{margin-top:15px;width:300px}",""]),e.exports=t},"3f983":function(e,t,n){"use strict";var i,a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"root"},[n("v-uni-view",{staticClass:"page-body"},[n("v-uni-view",{staticClass:"new-page__color",style:{backgroundColor:e.currentColor},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.setColorIndex(e.colorIndex>1?0:e.colorIndex+1)}}},[n("v-uni-text",{staticClass:"new-page__color-text"},[e._v("点击改变颜色")])],1),n("v-uni-view",{staticClass:"new-page__text-box"},[n("v-uni-text",{staticClass:"new-page__text"},[e._v("点击上方色块使用vuex在页面之间进行通讯")])],1),n("v-uni-view",{staticClass:"new-page__button"},[n("v-uni-button",{staticClass:"new-page__button-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.emitMsg.apply(void 0,arguments)}}},[e._v("向上一页面传递数据")])],1)],1)],1)},o=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}))},"495f":function(e,t,n){"use strict";var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("8e6e"),n("ac6a"),n("456d");var a=i(n("bd86")),o=n("2f62");function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){(0,a.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={data:function(){return{}},computed:c({},(0,o.mapState)(["colorIndex","colorList"]),{},(0,o.mapGetters)(["currentColor"])),methods:c({},(0,o.mapMutations)(["setColorIndex"]),{emitMsg:function(){uni.$emit("postMsg",{msg:"From: Vue Page"})}})};t.default=l},6029:function(e,t,n){var i=n("11c02");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("37d8ab50",i,!0,{sourceMap:!1,shadowMode:!1})},"617c":function(e,t,n){"use strict";var i=n("6029"),a=n.n(i);a.a},b108:function(e,t,n){"use strict";n.r(t);var i=n("495f"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},da7b:function(e,t,n){"use strict";n.r(t);var i=n("3f983"),a=n("b108");for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("617c");var r,c=n("f0c5"),l=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"244420a1",null,!1,i["a"],r);t["default"]=l.exports}}]);