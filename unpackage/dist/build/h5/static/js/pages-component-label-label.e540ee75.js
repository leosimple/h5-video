(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-label-label"],{"35ac":function(e,t,i){"use strict";var a,n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("page-head",{attrs:{title:e.title}}),i("v-uni-view",{staticClass:"uni-common-mt"},[i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-view",{staticClass:"title"},[e._v("表单组件在label内")]),i("v-uni-checkbox-group",{staticClass:"uni-list",on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.checkboxChange.apply(void 0,arguments)}}},e._l(e.checkboxItems,function(t){return i("v-uni-label",{key:t.name,staticClass:"uni-list-cell uni-list-cell-pd"},[i("v-uni-view",[i("v-uni-checkbox",{attrs:{value:t.name,checked:t.checked}})],1),i("v-uni-view",[e._v(e._s(t.value))])],1)}),1)],1),i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-view",{staticClass:"title"},[e._v("label用for标识表单组件")]),i("v-uni-radio-group",{staticClass:"uni-list",on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.radioChange.apply(void 0,arguments)}}},e._l(e.radioItems,function(t,a){return i("v-uni-view",{key:a,staticClass:"uni-list-cell uni-list-cell-pd"},[i("v-uni-view",[i("v-uni-radio",{attrs:{id:t.name,value:t.name,checked:t.checked}})],1),i("v-uni-label",{staticClass:"label-2-text",attrs:{for:t.name}},[i("v-uni-text",[e._v(e._s(t.value))])],1)],1)}),1)],1),i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-view",{staticClass:"title"},[e._v("label内有多个时选中第一个")]),i("v-uni-checkbox-group",{staticClass:"uni-list",on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.checkboxChange.apply(void 0,arguments)}}},[i("v-uni-label",{staticClass:"label-3"},[i("v-uni-view",{staticClass:"uni-list-cell uni-list-cell-pd"},[i("v-uni-checkbox",{staticClass:"checkbox-3"},[e._v("选项一")])],1),i("v-uni-view",{staticClass:"uni-list-cell uni-list-cell-pd"},[i("v-uni-checkbox",{staticClass:"checkbox-3"},[e._v("选项二")])],1),i("v-uni-view",{staticClass:"uni-link uni-center",staticStyle:{"margin-top":"20rpx"}},[e._v("点击该label下的文字默认选中第一个checkbox")])],1)],1)],1)],1)],1)},l=[];i.d(t,"b",function(){return n}),i.d(t,"c",function(){return l}),i.d(t,"a",function(){return a})},"482e":function(e,t,i){"use strict";i.r(t);var a=i("35ac"),n=i("9067");for(var l in n)"default"!==l&&function(e){i.d(t,e,function(){return n[e]})}(l);i("62a9");var c,u=i("f0c5"),s=Object(u["a"])(n["default"],a["b"],a["c"],!1,null,"8db93306",null,!1,a["a"],c);t["default"]=s.exports},"4c9b":function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{title:"label",checkboxItems:[{name:"USA",value:"美国"},{name:"CHN",value:"中国",checked:"true"}],radioItems:[{name:"USA",value:"美国"},{name:"CHN",value:"中国",checked:"true"}],hidden:!1}},methods:{checkboxChange:function(t){var i=t.detail.value;e.log(i)},radioChange:function(t){var i=t.detail.value;e.log(i)}}};t.default=i}).call(this,i("5a52")["default"])},"62a9":function(e,t,i){"use strict";var a=i("faf5"),n=i.n(a);n.a},9067:function(e,t,i){"use strict";i.r(t);var a=i("4c9b"),n=i.n(a);for(var l in a)"default"!==l&&function(e){i.d(t,e,function(){return a[e]})}(l);t["default"]=n.a},cf71:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".uni-list-cell[data-v-8db93306]{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.uni-list .label-3[data-v-8db93306]{padding:0}.label-2-text[data-v-8db93306]{-webkit-box-flex:1;-webkit-flex:1;flex:1}",""])},faf5:function(e,t,i){var a=i("cf71");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("9809ac46",a,!0,{sourceMap:!1,shadowMode:!1})}}]);