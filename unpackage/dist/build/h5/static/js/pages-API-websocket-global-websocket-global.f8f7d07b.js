(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-websocket-global-websocket-global"],{"1b12":function(n,t,e){var o=e("266e1");"string"===typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);var i=e("4f06").default;i("6c3d72a0",o,!0,{sourceMap:!1,shadowMode:!1})},"266e1":function(n,t,e){var o=e("24fb");t=o(!1),t.push([n.i,".uni-padding-wrap[data-v-27bc8d74]{width:%?690?%;padding:0 %?30?%}.uni-btn-v[data-v-27bc8d74]{padding:%?10?% 0}.uni-btn-v uni-button[data-v-27bc8d74]{margin:%?20?% 0}.websocket-room[data-v-27bc8d74]{height:40px;line-height:40px;text-align:center;border-bottom:solid 1px #ddd;margin-bottom:20px}.websocket-msg[data-v-27bc8d74]{padding:40px 0;text-align:center;font-size:14px;line-height:40px;color:#666}.websocket-tips[data-v-27bc8d74]{padding:40px 0;text-align:center;font-size:14px;line-height:24px;color:#666}",""]),n.exports=t},"357c":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("6b54");var o=uni.getSystemInfoSync().platform,i={data:function(){return{connected:!1,connecting:!1,msg:!1,roomId:""}},computed:{showMsg:function(){return this.connected?this.msg?"收到消息："+this.msg:"等待接收消息":"尚未连接"}},onUnload:function(){uni.closeSocket(),uni.hideLoading()},methods:{connect:function(){var t=this;if(this.connected||this.connecting)return uni.showModal({content:"正在连接或者已经连接，请勿重复连接",showCancel:!1}),!1;this.connecting=!0,uni.showLoading({title:"连接中..."}),uni.connectSocket({url:"wss://echo.websocket.org",data:function(){return{msg:"Hello"}},success:function(n){},fail:function(n){}}),uni.onSocketOpen((function(e){t.connecting=!1,t.connected=!0,uni.hideLoading(),uni.showToast({icon:"none",title:"连接成功"}),n.log("onOpen",e)})),uni.onSocketError((function(e){t.connecting=!1,t.connected=!1,uni.hideLoading(),uni.showModal({content:"连接失败，可能是websocket服务不可用，请稍后再试",showCancel:!1}),n.log("onError",e)})),uni.onSocketMessage((function(e){t.msg=e.data,n.log("onMessage",e)})),uni.onSocketClose((function(e){t.connected=!1,t.startRecive=!1,t.msg=!1,n.log("onClose",e)}))},send:function(){uni.sendSocketMessage({data:"from "+o+" : "+parseInt(1e4*Math.random()).toString(),success:function(t){n.log(t)},fail:function(t){n.log(t)}})},close:function(){uni.closeSocket()}}};t.default=i}).call(this,e("5a52")["default"])},"456a":function(n,t,e){"use strict";var o,i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",[e("page-head",{attrs:{title:"websocket通讯示例"}}),e("v-uni-view",{staticClass:"uni-padding-wrap"},[e("v-uni-view",{staticClass:"uni-btn-v"},[e("v-uni-view",{staticClass:"websocket-msg"},[n._v(n._s(n.showMsg))]),e("v-uni-button",{attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.connect.apply(void 0,arguments)}}},[n._v("连接websocket服务")]),e("v-uni-button",{directives:[{name:"show",rawName:"v-show",value:n.connected,expression:"connected"}],attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.send.apply(void 0,arguments)}}},[n._v("发送一条消息")]),e("v-uni-button",{attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.close.apply(void 0,arguments)}}},[n._v("断开websocket服务")]),e("v-uni-view",{staticClass:"websocket-tips"},[n._v("发送消息后会收到一条服务器返回的消息（与发送的消息内容一致）")])],1)],1)],1)},c=[];e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return c})),e.d(t,"a",(function(){return o}))},a8ea:function(n,t,e){"use strict";e.r(t);var o=e("456a"),i=e("e7b1");for(var c in i)"default"!==c&&function(n){e.d(t,n,(function(){return i[n]}))}(c);e("add3");var a,s=e("f0c5"),u=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"27bc8d74",null,!1,o["a"],a);t["default"]=u.exports},add3:function(n,t,e){"use strict";var o=e("1b12"),i=e.n(o);i.a},e7b1:function(n,t,e){"use strict";e.r(t);var o=e("357c"),i=e.n(o);for(var c in o)"default"!==c&&function(n){e.d(t,n,(function(){return o[n]}))}(c);t["default"]=i.a}}]);