(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-pagination-pagination"],{"0709":function(t,n,e){"use strict";var i={"uni-section":e("aebe").default,"uni-pagination":e("0994").default},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("uni-section",{attrs:{title:"默认样式",type:"line"}}),e("v-uni-view",{staticClass:"example-body"},[e("uni-pagination",{attrs:{total:50,title:"标题文字"}})],1),e("uni-section",{attrs:{title:"修改按钮文字",type:"line"}}),e("v-uni-view",{staticClass:"example-body"},[e("uni-pagination",{attrs:{total:50,title:"标题文字","prev-text":"前一页","next-text":"后一页"}})],1),e("uni-section",{attrs:{title:"图标样式",type:"line"}}),e("v-uni-view",{staticClass:"example-body"},[e("uni-pagination",{attrs:{"show-icon":!0,total:50,title:"标题文字"}})],1),e("uni-section",{attrs:{title:"修改数据长度",type:"line"}}),e("v-uni-view",{staticClass:"example-body"},[e("uni-pagination",{attrs:{current:t.current,total:t.total,title:"标题文字","show-icon":!0},on:{change:function(n){arguments[0]=n=t.$handleEvent(n),t.change.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"btn-view"},[e("v-uni-view",[e("v-uni-text",{staticClass:"example-info"},[t._v("当前页："+t._s(t.current)+"，数据总量："+t._s(t.total)+"条，每页数据："+t._s(t.pageSize))])],1),e("v-uni-view",{staticClass:"button word-btn",attrs:{"hover-class":"word-btn--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.add.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"word-btn-white"},[t._v("增加10条数据")])],1),e("v-uni-button",{staticClass:"button",attrs:{type:"default"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.reset.apply(void 0,arguments)}}},[t._v("重置数据")])],1)],1)},o=[];e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}))},"0994":function(t,n,e){"use strict";e.r(n);var i=e("1df5"),a=e("cd1a");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("822b");var r,c=e("f0c5"),l=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"52079946",null,!1,i["a"],r);n["default"]=l.exports},"1df5":function(t,n,e){"use strict";var i={"uni-icons":e("2a8e").default},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"uni-pagination"},[e("v-uni-view",{staticClass:"uni-pagination__btn",class:1===t.currentIndex?"uni-pagination--disabled":"uni-pagination--enabled",attrs:{"hover-class":1===t.currentIndex?"":"uni-pagination--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.clickLeft.apply(void 0,arguments)}}},[!0===t.showIcon||"true"===t.showIcon?[e("uni-icons",{attrs:{color:"#000",size:"20",type:"arrowleft"}})]:[e("v-uni-text",{staticClass:"uni-pagination__child-btn"},[t._v(t._s(t.prevText))])]],2),e("v-uni-view",{staticClass:"uni-pagination__num"},[e("v-uni-view",{staticClass:"uni-pagination__num-current"},[e("v-uni-text",{staticClass:"uni-pagination__num-current-text",staticStyle:{color:"#007aff"}},[t._v(t._s(t.currentIndex))]),e("v-uni-text",{staticClass:"uni-pagination__num-current-text"},[t._v("/"+t._s(t.maxPage||0))])],1)],1),e("v-uni-view",{staticClass:"uni-pagination__btn",class:t.currentIndex===t.maxPage?"uni-pagination--disabled":"uni-pagination--enabled",attrs:{"hover-class":t.currentIndex===t.maxPage?"":"uni-pagination--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.clickRight.apply(void 0,arguments)}}},[!0===t.showIcon||"true"===t.showIcon?[e("uni-icons",{attrs:{color:"#000",size:"20",type:"arrowright"}})]:[e("v-uni-text",{staticClass:"uni-pagination__child-btn"},[t._v(t._s(t.nextText))])]],2)],1)},o=[];e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}))},"7c68":function(t,n,e){var i=e("24fb"),a=e("1de5"),o=e("b272");n=i(!1);a(o);n.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 头条小程序组件内不能引入字体 */\n\nuni-page-body[data-v-0f72cd9c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-0f72cd9c]{font-size:14px;line-height:inherit}.example[data-v-0f72cd9c]{padding:0 15px 15px}.example-info[data-v-0f72cd9c]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-0f72cd9c]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-0f72cd9c]{padding:0 15px}.example-info[data-v-0f72cd9c]{\n\tdisplay:block;\n\tpadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-0f72cd9c]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-0f72cd9c]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-0f72cd9c]{font-size:18px;color:#fff}.word-btn[data-v-0f72cd9c]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-0f72cd9c]{background-color:#4ca2ff}.example-body[data-v-0f72cd9c]{\n\tdisplay:block\n\t}.btn-view[data-v-0f72cd9c]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;\n\tpadding:15px;text-align:center;background-color:#fff;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.button[data-v-0f72cd9c]{margin-bottom:20px;width:350px}body.?%PAGE?%[data-v-0f72cd9c]{background-color:#efeff4}",""]),t.exports=n},"822b":function(t,n,e){"use strict";var i=e("84ef"),a=e.n(i);a.a},"844f":function(t,n,e){"use strict";var i=e("8dd7"),a=e.n(i);a.a},"84ef":function(t,n,e){var i=e("bbab");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("2c084642",i,!0,{sourceMap:!1,shadowMode:!1})},"8dd7":function(t,n,e){var i=e("7c68");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("64a8d63e",i,!0,{sourceMap:!1,shadowMode:!1})},9125:function(t,n,e){"use strict";e.r(n);var i=e("e868"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},bbab:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,".uni-pagination[data-v-52079946]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\tposition:relative;overflow:hidden;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-pagination__btn[data-v-52079946]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\twidth:60px;height:30px;line-height:30px;font-size:%?28?%;position:relative;background-color:#f8f8f8;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;text-align:center;border-width:1px;border-style:solid;border-color:#e5e5e5}.uni-pagination__child-btn[data-v-52079946]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\tfont-size:%?28?%;position:relative;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;text-align:center}.uni-pagination__num[data-v-52079946]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:30px;line-height:30px;font-size:%?28?%;color:#333}.uni-pagination__num-current[data-v-52079946]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-pagination__num-current-text[data-v-52079946]{font-size:15px}.uni-pagination--enabled[data-v-52079946]{color:#333;opacity:1}.uni-pagination--disabled[data-v-52079946]{opacity:.3}.uni-pagination--hover[data-v-52079946]{color:rgba(0,0,0,.6);background-color:#f1f1f1}",""]),t.exports=n},cd0f:function(t,n,e){"use strict";e.r(n);var i=e("0709"),a=e("9125");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("844f");var r,c=e("f0c5"),l=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"0f72cd9c",null,!1,i["a"],r);n["default"]=l.exports},cd1a:function(t,n,e){"use strict";e.r(n);var i=e("dbcb"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},dbcb:function(t,n,e){"use strict";var i=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("c5f6");var a=i(e("2a8e")),o={name:"UniPagination",components:{uniIcons:a.default},props:{prevText:{type:String,default:"上一页"},nextText:{type:String,default:"下一页"},current:{type:[Number,String],default:1},total:{type:[Number,String],default:0},pageSize:{type:[Number,String],default:10},showIcon:{type:[Boolean,String],default:!1}},data:function(){return{currentIndex:1}},computed:{maxPage:function(){var t=1,n=Number(this.total),e=Number(this.pageSize);return n&&e&&(t=Math.ceil(n/e)),t}},watch:{current:function(t){this.currentIndex=+t}},created:function(){this.currentIndex=+this.current},methods:{clickLeft:function(){1!==Number(this.currentIndex)&&(this.currentIndex-=1,this.change("prev"))},clickRight:function(){Number(this.currentIndex)!==this.maxPage&&(this.currentIndex+=1,this.change("next"))},change:function(t){this.$emit("change",{type:t,current:this.currentIndex})}}};n.default=o},e868:function(t,n,e){"use strict";(function(t){var i=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("0994")),o=i(e("ad36")),r=i(e("7f88")),c=i(e("aebe")),l={components:{uniPagination:a.default,uniList:o.default,uniListItem:r.default,uniSection:c.default},data:function(){return{current:1,total:0,pageSize:10}},methods:{add:function(){this.total+=10},reset:function(){this.total=0,this.current=1},change:function(n){t.log(n),this.current=n.current}}};n.default=l}).call(this,e("5a52")["default"])}}]);