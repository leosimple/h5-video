(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-navigator-new-page-new-nvue-page-2"],{1204:function(t,e,n){var a=n("57a1");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=n("4f06").default;o("6a39948e",a,!0,{sourceMap:!1,shadowMode:!1})},"1d57c":function(t,e,n){"use strict";var a=n("1204"),o=n.n(a);o.a},"57a1":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".new-page__text[data-v-1a52bd35]{font-size:14px;color:#666}.root[data-v-1a52bd35]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.page-body[data-v-1a52bd35]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-top:50px}.new-page__text-box[data-v-1a52bd35]{padding:20px}.new-page__color[data-v-1a52bd35]{width:200px;height:100px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.new-page__color-text[data-v-1a52bd35]{font-size:14px;color:#fff;line-height:30px;text-align:center}.new-page__button-item[data-v-1a52bd35]{margin-top:15px;width:300px}",""])},"7e4c":function(t,e,n){"use strict";var a=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("cebc")),i=n("2f62"),r={data:function(){return{}},computed:(0,o.default)({},(0,i.mapState)(["colorIndex","colorList"]),(0,i.mapGetters)(["currentColor"])),methods:(0,o.default)({},(0,i.mapMutations)(["setColorIndex"]))};e.default=r},"8e27":function(t,e,n){"use strict";var a,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"root"},[n("v-uni-view",{staticClass:"page-body"},[n("v-uni-view",{staticClass:"new-page__color",style:{backgroundColor:t.currentColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setColorIndex(t.colorIndex>1?0:t.colorIndex+1)}}},[n("v-uni-text",{staticClass:"new-page__color-text"},[t._v("点击改变颜色")])],1),n("v-uni-view",{staticClass:"new-page__text-box"},[n("v-uni-text",{staticClass:"new-page__text"},[t._v("点击上方色块使用vuex在页面之间进行通讯")])],1)],1)],1)},i=[];n.d(e,"b",function(){return o}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return a})},9859:function(t,e,n){"use strict";n.r(e);var a=n("7e4c"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=o.a},a582:function(t,e,n){"use strict";n.r(e);var a=n("8e27"),o=n("9859");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("1d57c");var r,c=n("f0c5"),l=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,"1a52bd35",null,!1,a["a"],r);e["default"]=l.exports}}]);