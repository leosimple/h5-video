(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/soter/soter"],{2161:function(n,e,o){"use strict";o.r(e);var t=o("8dda"),c=o.n(t);for(var l in t)"default"!==l&&function(n){o.d(e,n,function(){return t[n]})}(l);e["default"]=c.a},"7fd1":function(n,e,o){"use strict";o.r(e);var t=o("ffc6"),c=o("2161");for(var l in c)"default"!==l&&function(n){o.d(e,n,function(){return c[n]})}(l);var s,a=o("f0c5"),i=Object(a["a"])(c["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],s);e["default"]=i.exports},"8dda":function(n,e,o){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{title:"生物认证",result:""}},onLoad:function(){},methods:{checkIsSupportSoterAuthentication:function(){n.checkIsSupportSoterAuthentication({success:function(e){n.showModal({content:"支持的认证方式："+e.supportMode,showCancel:!1}),console.log(e)},fail:function(n){console.log(n)}})},checkIsSoterEnrolledInDeviceFingerPrint:function(){n.checkIsSoterEnrolledInDevice({checkAuthMode:"fingerPrint",success:function(e){e.isEnrolled?n.showToast({icon:"none",title:"已录入指纹"}):n.showModal({content:"未录入指纹",showCancel:!1}),console.log(e)},fail:function(e){n.showModal({content:"未录入指纹",showCancel:!1}),console.log(e)}})},checkIsSoterEnrolledInDeviceFaceID:function(){n.checkIsSoterEnrolledInDevice({checkAuthMode:"facial",success:function(e){e.isEnrolled?n.showToast({icon:"none",title:"已录入FaceID"}):n.showModal({content:"未录入FaceID",showCancel:!1}),console.log(e)},fail:function(e){n.showModal({content:"未录入FaceID",showCancel:!1}),console.log(e)}})},startSoterAuthenticationFingerPrint:function(){n.startSoterAuthentication({requestAuthModes:["fingerPrint"],challenge:"123456",authContent:"请用指纹解锁",success:function(e){n.showToast({icon:"none",title:"指纹验证成功"}),console.log(e)},fail:function(e){n.showModal({content:"指纹验证失败，errCode："+e.errCode,showCancel:!1}),console.log(e)}})},startSoterAuthenticationFaceID:function(){n.startSoterAuthentication({requestAuthModes:["facial"],challenge:"123456",authContent:"请用FaceID解锁",success:function(e){n.showToast({icon:"none",title:"FaceID验证成功"}),console.log(e)},fail:function(e){n.showModal({content:"FaceID验证失败，errCode："+e.errCode,showCancel:!1}),console.log(e)}})}}};e.default=o}).call(this,o("543d")["default"])},"9ce2":function(n,e,o){"use strict";(function(n){o("836e"),o("921b");t(o("66fd"));var e=t(o("7fd1"));function t(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,o("543d")["createPage"])},ffc6:function(n,e,o){"use strict";var t,c=function(){var n=this,e=n.$createElement;n._self._c},l=[];o.d(e,"b",function(){return c}),o.d(e,"c",function(){return l}),o.d(e,"a",function(){return t})}},[["9ce2","common/runtime","common/vendor"]]]);