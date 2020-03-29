(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-websocket-socketTask-websocket-socketTask"],{1180:function(t,n,e){"use strict";var o,s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("page-head",{attrs:{title:"websocket通讯示例"}}),e("v-uni-view",{staticClass:"uni-padding-wrap"},[e("v-uni-view",{staticClass:"uni-btn-v"},[e("v-uni-view",{staticClass:"websocket-msg"},[t._v(t._s(t.showMsg))]),e("v-uni-button",{attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.connect.apply(void 0,arguments)}}},[t._v("连接websocket服务")]),e("v-uni-button",{directives:[{name:"show",rawName:"v-show",value:t.connected,expression:"connected"}],attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.send.apply(void 0,arguments)}}},[t._v("发送一条消息")]),e("v-uni-button",{attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.close.apply(void 0,arguments)}}},[t._v("断开websocket服务")]),e("v-uni-view",{staticClass:"websocket-tips"},[t._v("发送消息后会收到一条服务器返回的消息（与发送的消息内容一致）")])],1)],1)],1)},c=[];e.d(n,"b",function(){return s}),e.d(n,"c",function(){return c}),e.d(n,"a",function(){return o})},"334d":function(t,n,e){"use strict";e.r(n);var o=e("1180"),s=e("c233");for(var c in s)"default"!==c&&function(t){e.d(n,t,function(){return s[t]})}(c);e("ea9c");var i,a=e("f0c5"),u=Object(a["a"])(s["default"],o["b"],o["c"],!1,null,"122db204",null,!1,o["a"],i);n["default"]=u.exports},"6b96":function(t,n,e){var o=e("d8e6");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var s=e("4f06").default;s("013cc7f2",o,!0,{sourceMap:!1,shadowMode:!1})},7587:function(t,n,e){"use strict";(function(t){var o=e("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s=o(e("e814"));e("6b54");var c=uni.getSystemInfoSync().platform,i={data:function(){return{connected:!1,connecting:!1,socketTask:!1,msg:!1}},computed:{showMsg:function(){return this.connected?this.msg?"收到消息："+this.msg:"等待接收消息":"尚未连接"}},onUnload:function(){uni.hideLoading(),this.socketTask&&this.socketTask.close&&this.socketTask.close()},methods:{connect:function(){var n=this;if(this.connected||this.connecting)return uni.showModal({content:"正在连接或者已经连接，请勿重复连接",showCancel:!1}),!1;this.connecting=!0,uni.showLoading({title:"连接中..."}),this.socketTask=uni.connectSocket({url:"wss://echo.websocket.org",data:function(){return{msg:"Hello"}},success:function(t){},fail:function(t){}}),t.log(this.socketTask),this.socketTask.onOpen(function(e){n.connecting=!1,n.connected=!0,uni.hideLoading(),uni.showToast({icon:"none",title:"连接成功"}),t.log("onOpen",e)}),this.socketTask.onError(function(e){n.connecting=!1,n.connected=!1,uni.hideLoading(),uni.showModal({content:"连接失败，可能是websocket服务不可用，请稍后再试",showCancel:!1}),t.log("onError",e)}),this.socketTask.onMessage(function(e){n.msg=e.data,t.log("onMessage",e)}),this.socketTask.onClose(function(e){n.connected=!1,n.startRecive=!1,n.socketTask=!1,n.msg=!1,t.log("onClose",e)}),t.log("task",this.socketTask)},send:function(){this.socketTask.send({data:"from "+c+" : "+(0,s.default)(1e4*Math.random()).toString(),success:function(n){t.log(n)},fail:function(n){t.log(n)}})},close:function(){this.socketTask&&this.socketTask.close&&this.socketTask.close()}}};n.default=i}).call(this,e("5a52")["default"])},c233:function(t,n,e){"use strict";e.r(n);var o=e("7587"),s=e.n(o);for(var c in o)"default"!==c&&function(t){e.d(n,t,function(){return o[t]})}(c);n["default"]=s.a},d8e6:function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,".uni-padding-wrap[data-v-122db204]{width:%?690?%;padding:0 %?30?%}.uni-btn-v[data-v-122db204]{padding:%?10?% 0}.uni-btn-v uni-button[data-v-122db204]{margin:%?20?% 0}.websocket-msg[data-v-122db204]{padding:40px 0;text-align:center;font-size:14px;line-height:40px;color:#666}.websocket-tips[data-v-122db204]{padding:40px 0;text-align:center;font-size:14px;line-height:24px;color:#666}",""])},ea9c:function(t,n,e){"use strict";var o=e("6b96"),s=e.n(o);s.a}}]);