(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/sports/sports"],{"126d":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(e("841a")),u=r(e("e89b")),o=r(e("fb8e"));function r(n){return n&&n.__esModule?n:{default:n}}var c={name:"sports",data:function(){return{msg_modal_share:!1,uid:null,now_time:(new Date).getTime(),answer_chance:null}},onLoad:function(t){var e=a.default.randomWord(10,1,50);this.uid=e,n.setStorageSync("uid",e)},methods:{msg_modal_close:function(){this.msg_modal_share=!1},turn_rank:function(){n.navigateTo({url:"/pages/sports/rank"})},turn_rule:function(){n.navigateTo({url:"/pages/sports/rule"})},update_answer_chance:function(n){var t={uid:this.uid,chance:n};u.default.post(o.default.sq+"/api/v1.h5.Questions/updateUserAnswerChance",t).then(function(n){console.log(n)}).catch(function(n){}).finally(function(){})},turn_question:function(){var t=this;console.log(this.now_time);var e={uid:this.uid,timestamp:this.now_time};u.default.post(o.default.sq+"/api/v1.h5.Questions/getUserAnswerChance",e).then(function(e){console.log(e);var a=e.data.data.chance;0==a?t.msg_modal_share=!0:(t.update_answer_chance(-1),n.navigateTo({url:"/pages/sports/question"}))}).catch(function(n){}).finally(function(){})}}};t.default=c}).call(this,e("543d")["default"])},"31b7":function(n,t,e){"use strict";var a,u=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"b",function(){return u}),e.d(t,"c",function(){return o}),e.d(t,"a",function(){return a})},"3a69":function(n,t,e){"use strict";(function(n){e("836e"),e("921b");a(e("66fd"));var t=a(e("76e6"));function a(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},"4c0b":function(n,t,e){"use strict";e.r(t);var a=e("126d"),u=e.n(a);for(var o in a)"default"!==o&&function(n){e.d(t,n,function(){return a[n]})}(o);t["default"]=u.a},"76e6":function(n,t,e){"use strict";e.r(t);var a=e("31b7"),u=e("4c0b");for(var o in u)"default"!==o&&function(n){e.d(t,n,function(){return u[n]})}(o);e("8042");var r,c=e("f0c5"),s=Object(c["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);t["default"]=s.exports},8042:function(n,t,e){"use strict";var a=e("9b3c"),u=e.n(a);u.a},"9b3c":function(n,t,e){}},[["3a69","common/runtime","common/vendor"]]]);