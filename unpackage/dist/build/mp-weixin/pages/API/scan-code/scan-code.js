(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/scan-code/scan-code"],{"1bc5":function(n,t,e){},4639:function(n,t,e){"use strict";var u,c=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"b",function(){return c}),e.d(t,"c",function(){return r}),e.d(t,"a",function(){return u})},5838:function(n,t,e){"use strict";var u=e("1bc5"),c=e.n(u);c.a},a21c:function(n,t,e){"use strict";e.r(t);var u=e("e043"),c=e.n(u);for(var r in u)"default"!==r&&function(n){e.d(t,n,function(){return u[n]})}(r);t["default"]=c.a},aa48:function(n,t,e){"use strict";e.r(t);var u=e("4639"),c=e("a21c");for(var r in c)"default"!==r&&function(n){e.d(t,n,function(){return c[n]})}(r);e("5838");var a,o=e("f0c5"),i=Object(o["a"])(c["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],a);t["default"]=i.exports},e043:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=c(e("a34a"));c(e("c133"));function c(n){return n&&n.__esModule?n:{default:n}}function r(n,t,e,u,c,r,a){try{var o=n[r](a),i=o.value}catch(s){return void e(s)}o.done?t(i):Promise.resolve(i).then(u,c)}function a(n){return function(){var t=this,e=arguments;return new Promise(function(u,c){var a=n.apply(t,e);function o(n){r(a,u,c,o,i,"next",n)}function i(n){r(a,u,c,o,i,"throw",n)}o(void 0)})}}var o={data:function(){return{title:"scanCode",result:""}},methods:{scan:function(){var t=a(u.default.mark(function t(){var e=this;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:n.scanCode({success:function(n){e.result=n.result},fail:function(t){n.getSetting({success:function(t){var e=t.authSetting["scope.camera"];e||n.showModal({title:"授权失败",content:"Hello uni-app需要使用您的相机，请在设置界面打开相关权限",success:function(t){t.confirm&&n.openSetting()}})}})}});case 1:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}};t.default=o}).call(this,e("543d")["default"])},e845:function(n,t,e){"use strict";(function(n){e("836e"),e("921b");u(e("66fd"));var t=u(e("aa48"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])}},[["e845","common/runtime","common/vendor"]]]);