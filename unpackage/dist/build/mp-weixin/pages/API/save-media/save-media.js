(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/save-media/save-media"],{"1c46":function(e,t,n){"use strict";(function(e){n("836e"),n("921b");o(n("66fd"));var t=o(n("3f7c"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"3f7c":function(e,t,n){"use strict";n.r(t);var o=n("c476"),a=n("a861");for(var c in a)"default"!==c&&function(e){n.d(t,e,function(){return a[e]})}(c);n("e60b");var i,u=n("f0c5"),s=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);t["default"]=s.exports},a861:function(e,t,n){"use strict";n.r(t);var o=n("cd32"),a=n.n(o);for(var c in o)"default"!==c&&function(e){n.d(t,e,function(){return o[e]})}(c);t["default"]=a.a},c476:function(e,t,n){"use strict";var o,a=function(){var e=this,t=e.$createElement;e._self._c},c=[];n.d(t,"b",function(){return a}),n.d(t,"c",function(){return c}),n.d(t,"a",function(){return o})},cd32:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{title:"saveImage/saveVideo",imagePath:"",videoPath:""}},onLoad:function(){},methods:{videoErrorCallback:function(){e.showModal({content:"视频加载失败",showCancel:!1})},saveImage:function(){var t=this;e.chooseImage({count:1,sourceType:["camera"],success:function(e){t.imagePath=e.tempFilePaths[0],t.getTempFilePath(e.tempFilePaths[0],"imageTempPath")},fail:function(t){e.getSetting({success:function(t){var n=t.authSetting["scope.camera"];n||e.showModal({title:"授权失败",content:"Hello uni-app需要从您的相机获取图片，请在设置界面打开相关权限",success:function(t){t.confirm&&e.openSetting()}})}})}})},saveVideo:function(){var t=this;e.chooseVideo({count:1,sourceType:["camera"],success:function(e){console.log(e.tempFilePath),t.videoPath=e.tempFilePath,t.getTempFilePath(e.tempFilePath,"videoTempPath")},fail:function(t){e.getSetting({success:function(t){var n=t.authSetting["scope.camera"];n||e.showModal({title:"授权失败",content:"Hello uni-app需要从您的相机获取视频，请在设置界面打开相关权限",success:function(t){t.confirm&&e.openSetting()}})}})}})},getTempFilePath:function(t,n){var o={filePath:t,success:function(){console.log("save success"),e.showModal({content:"保存成功",showCancel:!1}),e.hideLoading()},fail:function(t){e.hideLoading(),e.showModal({content:"保存失败",showCancel:!1})}};e.showLoading({title:"保存中..."}),"videoTempPath"===n?e.saveVideoToPhotosAlbum(o):e.saveImageToPhotosAlbum(o)}}};t.default=n}).call(this,n("543d")["default"])},dd46:function(e,t,n){},e60b:function(e,t,n){"use strict";var o=n("dd46"),a=n.n(o);a.a}},[["1c46","common/runtime","common/vendor"]]]);