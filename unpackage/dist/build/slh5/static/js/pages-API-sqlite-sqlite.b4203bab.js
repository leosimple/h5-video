(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-sqlite-sqlite"],{"0dd6":function(t,n,e){"use strict";var a,i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("page-head",{attrs:{title:t.title}}),e("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[e("v-uni-view",{staticClass:"uni-btn-v"},[e("v-uni-button",{attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.openDB.apply(void 0,arguments)}}},[t._v("打开数据库test.db")])],1),e("v-uni-view",{staticClass:"uni-btn-v"},[e("v-uni-button",{attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.executeSQL.apply(void 0,arguments)}}},[t._v("创建表database及插入数据")])],1),e("v-uni-view",{staticClass:"uni-btn-v"},[e("v-uni-button",{attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.selectSQL.apply(void 0,arguments)}}},[t._v("查询表database的数据")])],1),e("v-uni-view",{staticClass:"uni-btn-v"},[e("v-uni-button",{attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.droptable.apply(void 0,arguments)}}},[t._v("删除表database")])],1),e("v-uni-view",{staticClass:"uni-btn-v"},[e("v-uni-button",{attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.closeDB.apply(void 0,arguments)}}},[t._v("关闭数据库test.db")])],1),e("v-uni-view",{staticClass:"uni-btn-v"},[e("v-uni-button",{attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.isOpenDB.apply(void 0,arguments)}}},[t._v("查询是否打开数据库")])],1)],1)],1)},s=[];e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return a}))},"78f0":function(t,n,e){"use strict";var a=e("e670"),i=e.n(a);i.a},"94fa":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{title:"SQLite"}},methods:{openDB:function(){plus.sqlite.openDatabase({name:"first",path:"_doc/test.db",success:function(t){plus.nativeUI.alert("打开数据库test.db成功 ")},fail:function(t){plus.nativeUI.alert("打开数据库test.db失败: "+JSON.stringify(t))}})},executeSQL:function(){plus.sqlite.executeSql({name:"first",sql:'create table if not exists database("name" CHAR(110),"sex" CHAR(10),"age" INT(11))',success:function(t){plus.sqlite.executeSql({name:"first",sql:"insert into database values('彦','女','7000')",success:function(t){plus.nativeUI.alert("创建表table和插入数据成功")},fail:function(t){plus.nativeUI.alert("创建表table成功但插入数据失败: "+JSON.stringify(t))}})},fail:function(t){plus.nativeUI.alert("创建表table失败: "+JSON.stringify(t))}})},selectSQL:function(){plus.sqlite.selectSql({name:"first",sql:"select * from database",success:function(t){plus.nativeUI.alert("查询SQL语句成功: "+JSON.stringify(t))},fail:function(t){plus.nativeUI.alert("查询SQL语句失败: "+JSON.stringify(t))}})},droptable:function(){plus.sqlite.executeSql({name:"first",sql:"drop table database",success:function(t){plus.nativeUI.alert("删除表database成功")},fail:function(t){plus.nativeUI.alert("删除表database失败: "+JSON.stringify(t))}})},closeDB:function(){plus.sqlite.closeDatabase({name:"first",success:function(t){plus.nativeUI.alert("关闭数据库成功")},fail:function(t){plus.nativeUI.alert("关闭数据库失败: "+JSON.stringify(t))}})},isOpenDB:function(){plus.sqlite.isOpenDatabase({name:"first",path:"_doc/test.db"})?plus.nativeUI.alert("Opened!"):plus.nativeUI.alert("Unopened!")}}};n.default=a},b894:function(t,n,e){"use strict";e.r(n);var a=e("0dd6"),i=e("fd55");for(var s in i)"default"!==s&&function(t){e.d(n,t,(function(){return i[t]}))}(s);e("78f0");var u,l=e("f0c5"),c=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"63a80fff",null,!1,a["a"],u);n["default"]=c.exports},e670:function(t,n,e){var a=e("e7f0");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("b9540430",a,!0,{sourceMap:!1,shadowMode:!1})},e7f0:function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,".uni-btn-v[data-v-63a80fff]{margin:%?20?% 0;padding:0}",""]),t.exports=n},fd55:function(t,n,e){"use strict";e.r(n);var a=e("94fa"),i=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(n,t,(function(){return a[t]}))}(s);n["default"]=i.a}}]);