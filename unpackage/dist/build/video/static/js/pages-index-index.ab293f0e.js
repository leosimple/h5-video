(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"52b7":function(i,t,e){"use strict";e.r(t);var n=e("706c"),o=e("5927");for(var a in o)"default"!==a&&function(i){e.d(t,i,(function(){return o[i]}))}(a);e("a8bc");var d,s=e("f0c5"),c=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"f627c354",null,!1,n["a"],d);t["default"]=c.exports},5927:function(i,t,e){"use strict";e.r(t);var n=e("e9f9"),o=e.n(n);for(var a in n)"default"!==a&&function(i){e.d(t,i,(function(){return n[i]}))}(a);t["default"]=o.a},"706c":function(i,t,e){"use strict";var n,o=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("v-uni-view",{staticClass:"index-bg"},i._l(i.videoList,(function(t,n){return i.videoList?e("v-uni-view",{key:n,staticClass:"uni-flex uni-column video-item",on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.turnVideoDetail(t.id,t.type)}}},[e("v-uni-view",{staticClass:"flex-item video-item-video"},[e("img",{attrs:{src:t.cover_url,alt:"视频封面"}}),e("v-uni-view",{staticClass:"video-start-icon"},[e("img",{attrs:{src:"https://aloss.hotforest.cn/video/start.png",alt:"开始"}})])],1),e("v-uni-view",{staticClass:"flex-item video-title"},[e("v-uni-text",[i._v(i._s(t.title))])],1)],1):i._e()})),1)},a=[];e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return n}))},"7cf7":function(i,t,e){var n=e("24fb");t=n(!1),t.push([i.i,".index-bg[data-v-f627c354]{height:100%;background-color:#fff}.video-item[data-v-f627c354]{background-color:#fff;padding-bottom:%?20?%}.video-item-video[data-v-f627c354]{background-color:rgba(0,0,0,.5);height:%?420?%;position:relative}.video-item-video img[data-v-f627c354]{height:100%;width:100%}.video-start-icon[data-v-f627c354]{width:%?80?%;height:%?80?%;position:absolute;left:0;right:0;top:0;bottom:0;margin:auto}.video-start-icon img[data-v-f627c354]{max-width:100%}.video-title[data-v-f627c354]{font-size:%?26?%;font-family:Lantinghei SC;font-weight:600;line-height:%?35?%;color:#333;padding:%?10?% %?33?% 0 %?22?%;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}",""]),i.exports=t},a8bc:function(i,t,e){"use strict";var n=e("fdfc"),o=e.n(n);o.a},e9f9:function(i,t,e){"use strict";(function(i){var n=e("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(e("c8bd")),a={data:function(){return{videoList:[],src:"",uid:"",token:"",ns_device_id:"",loginAppStatus:!1,activity_id:6}},onLoad:function(i){var t=this;t.uid=i.uid,t.token=i.token,t.ns_device_id=i.ns_device_id,t.getVideoList()},methods:{getVideoList:function(){var t=this;uni.request({url:o.default.sq+"/activity/api.Video/getList",success:function(e){i.log(e),200===e.statusCode?0==e.data.code?t.videoList=e.data.data:uni.showToast({title:e.data.info,icon:"none"}):uni.showToast({title:"服务出错",icon:"none"})}})},turnVideoDetail:function(t,e){var n=this,a={uid:n.uid,activity_id:n.activity_id,video_id:t};uni.request({url:o.default.sq+"/activity/api.Video/addLog",method:"POST",data:a,success:function(o){i.log(o),200==o.statusCode?(1===e&&uni.navigateTo({url:"/pages/index/video?id="+t+"&uid="+n.uid+"&token="+n.token+"&ns_device_id="+n.ns_device_id}),2===e&&uni.navigateTo({url:"/pages/index/videoY?id="+t+"&uid="+n.uid+"&token="+n.token+"&ns_device_id="+n.ns_device_id})):uni.showToast({title:"服务器错误",icon:"none"})}})},addUserInfo:function(t,e,n){var a=this,d=a.uid,s=a.activity_id,c=a.ns_device_id,u=1,r={uid:d,name:t,mobile:e,avatar_url:n,activity_id:s,ns_device_id:c,user_type:u,activity_type:s};uni.request({url:o.default.sq+"/activity/api.Users/add",data:r,method:"POST",success:function(t){200==t.statusCode?i.log(t):uni.showToast({title:"服务器错误",icon:"none"})}})}}};t.default=a}).call(this,e("5a52")["default"])},fdfc:function(i,t,e){var n=e("7cf7");"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var o=e("4f06").default;o("0f25f7a3",n,!0,{sourceMap:!1,shadowMode:!1})}}]);