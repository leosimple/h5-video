(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/request-payment/request-payment"],{"0238":function(n,e,t){},7988:function(n,e,t){"use strict";t.r(e);var o=t("8a2d"),a=t.n(o);for(var c in o)"default"!==c&&function(n){t.d(e,n,function(){return o[n]})}(c);e["default"]=a.a},"7b74":function(n,e,t){"use strict";var o=t("0238"),a=t.n(o);a.a},"7d18":function(n,e,t){"use strict";t.r(e);var o=t("a629"),a=t("7988");for(var c in a)"default"!==c&&function(n){t.d(e,n,function(){return a[n]})}(c);t("7b74");var i,r=t("f0c5"),s=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);e["default"]=s.exports},"8a2d":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(t("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function c(n,e,t,o,a,c,i){try{var r=n[c](i),s=r.value}catch(u){return void t(u)}r.done?e(s):Promise.resolve(s).then(o,a)}function i(n){return function(){var e=this,t=arguments;return new Promise(function(o,a){var i=n.apply(e,t);function r(n){c(i,o,a,r,s,"next",n)}function s(n){c(i,o,a,r,s,"throw",n)}r(void 0)})}}var r={data:function(){return{title:"request-payment",loading:!1,price:1,providerList:[]}},onLoad:function(){},methods:{weixinPay:function(){var e=this;console.log("发起支付"),this.loading=!0,n.login({success:function(t){console.log("login success",t),n.request({url:"https://unidemo.dcloud.net.cn/payment/wx/mp?code=".concat(t.code,"&amount=").concat(e.price),success:function(t){if(console.log("pay request success",t),200===t.statusCode)if(0===t.data.ret){console.log("得到接口prepay_id",t.data.payment);var o=t.data.payment;n.requestPayment({timeStamp:o.timeStamp,nonceStr:o.nonceStr,package:o.package,signType:"MD5",paySign:o.paySign,success:function(e){n.showToast({title:"感谢您的赞助!"})},fail:function(e){n.showModal({content:"支付失败,原因为: "+e.errMsg,showCancel:!1})},complete:function(){e.loading=!1}})}else n.showModal({content:t.data.desc,showCancel:!1});else n.showModal({content:"支付失败，请重试！",showCancel:!1})},fail:function(t){console.log("fail",t),e.loading=!1,n.showModal({content:"支付失败,原因为: "+t.errMsg,showCancel:!1})}})},fail:function(t){console.log("fail",t),e.loading=!1,n.showModal({content:"支付失败,原因为: "+t.errMsg,showCancel:!1})}})},requestPayment:function(){var e=i(o.default.mark(function e(t,a){var c,i=this;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.providerList[a].loading=!0,e.next=3,this.getOrderInfo(t.id);case 3:if(c=e.sent,console.log("得到订单信息",c),200===c.statusCode){e.next=9;break}return console.log("获得订单信息失败",c),n.showModal({content:"获得订单信息失败",showCancel:!1}),e.abrupt("return");case 9:n.requestPayment({provider:t.id,orderInfo:c.data,success:function(e){console.log("success",e),n.showToast({title:"感谢您的赞助!"})},fail:function(e){console.log("fail",e),n.showModal({content:"支付失败,原因为: "+e.errMsg,showCancel:!1})},complete:function(){i.providerList[a].loading=!1}});case 10:case"end":return e.stop()}},e,this)}));function t(n,t){return e.apply(this,arguments)}return t}(),getOrderInfo:function(e){var t="",o="https://demo.dcloud.net.cn/payment/?payid="+e+"&appid="+t+"&total="+this.price;return new Promise(function(e){n.request({url:o,success:function(n){e(n)},fail:function(n){e(n)}})})},priceChange:function(n){console.log(n.detail.value),this.price=n.detail.value}}};e.default=r}).call(this,t("543d")["default"])},a629:function(n,e,t){"use strict";var o,a=function(){var n=this,e=n.$createElement;n._self._c},c=[];t.d(e,"b",function(){return a}),t.d(e,"c",function(){return c}),t.d(e,"a",function(){return o})},bb8d:function(n,e,t){"use strict";(function(n){t("836e"),t("921b");o(t("66fd"));var e=o(t("7d18"));function o(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])}},[["bb8d","common/runtime","common/vendor"]]]);