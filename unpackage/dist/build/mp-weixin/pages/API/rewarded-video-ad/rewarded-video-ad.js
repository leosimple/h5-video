(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/rewarded-video-ad/rewarded-video-ad"],{"12b8":function(o,n,t){"use strict";t.r(n);var e=t("4278"),d=t.n(e);for(var i in e)"default"!==i&&function(o){t.d(n,o,function(){return e[o]})}(i);n["default"]=d.a},"39be":function(o,n,t){},4278:function(o,n,t){"use strict";(function(o){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=[-5001,-5002,-5003,-5004,-5005,-5006],e={data:function(){return{title:"激励视频广告",loading:!1,loadError:!1}},onReady:function(){this.adOption={adUnitId:""},this.createAd()},methods:{createAd:function(){var n=this,e=this.rewardedVideoAd=o.createRewardedVideoAd(this.adOption);e.onLoad(function(){n.loading=!1,n.loadError=!1,console.log("onLoad event")}),e.onClose(function(t){n.loading=!0,t&&t.isEnded,console.log("onClose "+t.isEnded),setTimeout(function(){o.showToast({title:"激励视频"+(t.isEnded?"成功":"未")+"播放完毕",duration:1e4,position:"bottom"})},500)}),e.onError(function(o){n.loading=!1,o.code&&-1!==t.indexOf(o.code)&&(n.loadError=!0),console.log("onError event",o)}),this.loading=!0},show:function(){var n=this.rewardedVideoAd;n.show().catch(function(){n.load().then(function(){return n.show()}).catch(function(n){console.log("激励视频 广告显示失败",n),o.showToast({title:n.errMsg||n.message,duration:5e3,position:"bottom"})})})},reloadAd:function(){this.loading=!0,this.rewardedVideoAd.load()}}};n.default=e}).call(this,t("543d")["default"])},"694c":function(o,n,t){"use strict";t.r(n);var e=t("9860"),d=t("12b8");for(var i in d)"default"!==i&&function(o){t.d(n,o,function(){return d[o]})}(i);t("8ed4");var r,a=t("f0c5"),c=Object(a["a"])(d["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],r);n["default"]=c.exports},"8ed4":function(o,n,t){"use strict";var e=t("39be"),d=t.n(e);d.a},9860:function(o,n,t){"use strict";var e,d=function(){var o=this,n=o.$createElement;o._self._c},i=[];t.d(n,"b",function(){return d}),t.d(n,"c",function(){return i}),t.d(n,"a",function(){return e})},c074:function(o,n,t){"use strict";(function(o){t("836e"),t("921b");e(t("66fd"));var n=e(t("694c"));function e(o){return o&&o.__esModule?o:{default:o}}o(n.default)}).call(this,t("543d")["createPage"])}},[["c074","common/runtime","common/vendor"]]]);