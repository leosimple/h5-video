(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-video"],{"00ec":function(t,i,e){"use strict";var n,o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"video-bg"},[e("v-uni-view",{staticClass:"uni-flex uni-column video-container"},[e("v-uni-view",{staticClass:"flex-item",on:{touchstart:function(i){arguments[0]=i=t.$handleEvent(i),t.showVideoTitle.apply(void 0,arguments)},touchend:function(i){arguments[0]=i=t.$handleEvent(i),t.hideVideoTitle.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[t.video?e("v-uni-view",[e("v-uni-video",{attrs:{id:"myVideo",poster:t.video.cover_url,src:t.video.source_url,controls:t.controlsValue,muted:t.mutedValue,autoplay:"true",duration:"null","object-fit":"contain"},on:{error:function(i){arguments[0]=i=t.$handleEvent(i),t.videoErrorCallback.apply(void 0,arguments)},play:function(i){arguments[0]=i=t.$handleEvent(i),t.videoPlay.apply(void 0,arguments)},ended:function(i){arguments[0]=i=t.$handleEvent(i),t.videoEnd.apply(void 0,arguments)}}},[t.showVideoBackIcon?e("v-uni-cover-view",{staticClass:"back-icon"}):t._e(),t.showMutedIcon?e("v-uni-cover-view",{staticClass:"muted-icon",class:t.mutedActivited?"muted-icon-active":""},[t.mutedActivited?e("v-uni-text",{staticClass:"muted-icon-active",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.cancelVideoMuted.apply(void 0,arguments)}}},[t._v("静音")]):t._e(),t.mutedActivited?t._e():e("v-uni-text",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.videoMuted.apply(void 0,arguments)}}},[t._v("静音")])],1):t._e(),t.showVideoReplayIcon?e("v-uni-cover-view",{staticClass:"video-replay",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.videoReplay.apply(void 0,arguments)}}},[e("img",{attrs:{src:"https://aloss.hotforest.cn/video/start.png",alt:"重播"}})]):t._e()],1)],1):t._e()],1)],1)],1),e("v-uni-view",{staticClass:"uni-flex uni-column comment-container"},[e("v-uni-view",{staticClass:"flex-item video-title"},[t._v(t._s(t.video.title))]),e("v-uni-view",{staticClass:"flex-item video-description"},[t._v(t._s(t.video.description))]),e("v-uni-view",{staticClass:"flex-item comment-t"},[t._v("最新评论")]),t.hasComemnts?t._e():e("v-uni-view",{staticClass:"flex-item comment-no-comments"},[e("v-uni-view",{staticClass:"comment-no-comments-img"},[e("img",{attrs:{src:"https://aloss.hotforest.cn/video/no-comments-icon.png",alt:"无评论图"}})]),e("v-uni-view",{staticClass:"comment-no-comments-text"},[t._v("暂无评论，说说你的看法")])],1),t._l(t.commentList,(function(i,n){return t.hasComemnts?e("v-uni-view",{key:n,staticClass:"flex-item comment-item"},[e("v-uni-view",{staticClass:"comment-l"},[""!=i.avatar_url?e("img",{attrs:{src:i.avatar_url,alt:"avatar"}}):t._e(),""==i.avatar_url?e("img",{attrs:{src:"https://aloss.hotforest.cn/web/default-header.png",alt:"avatar"}}):t._e()]),e("v-uni-view",{staticClass:"comment-r"},[e("v-uni-view",{staticClass:"flex-item comment-r-1"},[t._v(t._s(i.name))]),e("v-uni-view",{staticClass:"flex-item comment-r-2"},[t._v(t._s(i.content))])],1)],1):t._e()}))],2),e("v-uni-view",{staticClass:"comment-input-bg"},[e("div",{staticClass:"m-share"}),e("v-uni-view",{staticClass:"comment-input"},[e("v-uni-input",{attrs:{type:"text",placeholder:"我想说的话"},model:{value:t.commentContent,callback:function(i){t.commentContent=i},expression:"commentContent"}})],1),e("v-uni-view",{staticClass:"comment-button"},[e("v-uni-button",{attrs:{type:"default"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.addComment()}}},[t._v("发表")])],1)],1)],1)},a=[];e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}))},3250:function(t,i,e){var n=e("3ace");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("91c67aa2",n,!0,{sourceMap:!1,shadowMode:!1})},"3ace":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,".video-container[data-v-97225dda]{width:100%;height:auto;position:fixed;z-index:100;top:0;background-color:#fff\r\n\t/* padding-bottom: 18rpx; */}[data-v-97225dda] .uni-video-cover-play-button{width:%?180?%;height:%?180?%;border-radius:%?180?%;background-image:url(https://aloss.hotforest.cn/video/start.png)!important}[data-v-97225dda] .uni-video-cover-duration{display:none}.video-bg[data-v-97225dda]{height:100%;background-color:#fff}#myVideo[data-v-97225dda]{width:100%!important\r\n\t/* height: 420rpx; */}.uni-padding-wrap[data-v-97225dda]{width:100%;padding:0;margin:0}.video-title[data-v-97225dda]{font-size:%?26?%;font-family:Lantinghei SC;font-weight:600;color:#333;line-height:%?35?%;padding:0 %?33?% 0 %?22?%;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.video-description[data-v-97225dda]{font-size:%?24?%;font-family:Lantinghei SC;font-weight:200;color:#666;line-height:%?35?%;padding:%?18?% %?33?% 0 %?22?%;height:%?120?%;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical}.comment-container[data-v-97225dda]{padding-top:%?480?%;padding-bottom:%?100?%}.comment-item[data-v-97225dda]{padding-top:%?22?%;padding-left:%?22?%;padding-right:%?22?%;padding-bottom:%?22?%;border-bottom:1px solid #f2f2f2;background-color:#fff}.comment-t[data-v-97225dda]{margin-top:%?20?%;border-top:1px solid #f2f2f2;padding-left:%?22?%;padding-top:%?10?%}.comment-l[data-v-97225dda]{width:14%;float:left}.comment-l img[data-v-97225dda]{margin-top:%?6?%;width:%?68?%;height:%?68?%;border-radius:%?68?%}.comment-r[data-v-97225dda]{width:86%;float:left}.comment-r-1[data-v-97225dda]{font-size:%?24?%;font-family:Lantinghei SC;font-weight:200;color:#666}.comment-r-2[data-v-97225dda]{font-size:%?24?%;font-family:Lantinghei SC;font-weight:200;color:#333}.comment-input-bg[data-v-97225dda]{position:fixed;z-index:100;bottom:%?0?%;padding-top:%?20?%;padding-bottom:%?40?%;width:100%;background-color:#fff}.comment-input[data-v-97225dda]{width:78%;float:left}.comment-input uni-input[data-v-97225dda]{width:90%;margin:0 auto;height:%?55?%;background:#f1f1f1;border-radius:%?28?%;text-indent:%?30?%}.comment-button[data-v-97225dda]{width:18%;float:left}.comment-button uni-button[data-v-97225dda]{width:%?137?%;height:%?55?%;background:#d84949;border-radius:%?28?%;line-height:%?55?%;font-size:%?24?%;font-family:Lantinghei SC;font-weight:200;color:#fff}\r\n/* .comment-share{\r\n\t\twidth: 12%;\r\n\t\tfloat: left;\r\n\t\ttext-align: center;\r\n\t}\r\n\t.comment-share img{\r\n\t\twidth: 46rpx;\r\n\t\theight: 41rpx;\r\n\t\tmargin-top: 8rpx;\r\n\t} */.back-icon[data-v-97225dda]{\r\n\t/* background-color: rgba(0,0,0,1); */padding-top:%?20?%;padding-left:%?26?%;padding-bottom:%?20?%}.back-icon img[data-v-97225dda]{width:%?41?%;height:%?45?%}.muted-icon[data-v-97225dda]{position:absolute;width:%?80?%;height:%?40?%;bottom:%?40?%;right:%?40?%;font-size:%?28?%;text-align:center;line-height:%?40?%;background-color:rgba(0,0,0,.5);color:#eee}.muted-icon-active[data-v-97225dda]{color:#0a98d5}.comment-no-comments[data-v-97225dda]{margin-top:%?100?%}.comment-no-comments-img[data-v-97225dda]{text-align:center}.comment-no-comments-img img[data-v-97225dda]{width:%?146?%;height:%?134?%}.comment-no-comments-text[data-v-97225dda]{text-align:center;font-size:%?24?%;font-family:Lantinghei SC;font-weight:200;color:#999}.video-replay[data-v-97225dda]{width:%?100?%;height:%?100?%;position:absolute;margin:auto;left:0;right:0;top:0;bottom:0;font-size:%?28?%;color:#0a98d5}.video-replay img[data-v-97225dda]{width:100%}",""]),t.exports=i},"7fc7":function(t,i,e){"use strict";var n=e("3250"),o=e.n(n);o.a},"800b":function(t,i,e){"use strict";(function(t){var n=e("ee27");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=n(e("c8bd")),a=n(e("40db")),d={data:function(){return{videoId:"",video:"",src:"",commentContent:"",commentList:[],activity_id:6,uid:"",token:"",ns_device_id:"",hasComemnts:!1,showVideoBackIcon:!1,showVideoReplayIcon:!1,loginAppStatus:!1,mutedValue:!0,mutedActivited:!0,showMutedIcon:!1,controlsValue:!0}},onReady:function(t){this.videoContext=uni.createVideoContext("myVideo")},onLoad:function(i){var e=this;if(e.videoId=1,e.uid=i.uid,e.token=i.token,e.ns_device_id=i.ns_device_id,e.getVideoDetail(e.videoId),e.getVideoCommentList(e.videoId),"undefined"!==typeof contact)if(""!==e.uid&&"null"!==e.uid&&void 0!==e.uid){uni.setStorageSync("uid",e.uid),uni.setStorageSync("token",e.token),uni.setStorageSync("ns_device_id",e.ns_device_id),this.loginAppStatus=!0;var n=o.default.bd+"/v3/user/info",a={ns_device_id:e.ns_device_id,uid:e.uid,token:e.token};uni.request({url:n,header:a,method:"GET",success:function(i){if(t.log(i),200==i.statusCode){if(1==i.data.Status){var n=i.data.Data.avatar_url,o=i.data.Data.nickname,a=i.data.Data.phone;e.addUserInfo(o,a,n)}}else uni.showToast({title:"服务器错误",icon:"none"})}})}else{e=this;e.loginAppStatus=!1,contact.onLoginDone=function(t,i){uni.reLaunch({url:"/pages/mid/mid?uid="+t+"&token="+i+"&ns_device_id="+e.ns_device_id+"&videoId="+e.videoId})}}},methods:{showVideoTitle:function(){t.log("show"),this.showVideoBackIcon=!0,this.showMutedIcon=!0},hideVideoTitle:function(){t.log("hide");var i=this;setTimeout((function(){i.showVideoBackIcon=!1,i.showMutedIcon=!1}),5e3)},share:function(){var t={types:["wx","wxline","qq","qzone","sina"],fnDoShare:function(t){}};a.default.popup(t)},backIndex:function(){uni.navigateTo({url:"/"})},addUserInfo:function(i,e,n){var a=this,d=a.uid,c=a.activity_id,s=a.ns_device_id,u=1,l={uid:d,name:i,mobile:e,avatar_url:n,activity_id:c,ns_device_id:s,user_type:u,activity_type:c};uni.request({url:o.default.sq+"/activity/api.Users/add",data:l,method:"POST",success:function(i){200==i.statusCode?t.log(i):uni.showToast({title:"服务器错误",icon:"none"})}})},getVideoDetail:function(i){var e=this,n={videoId:i};uni.request({url:o.default.sq+"/activity/api.Video/getVideoDetail",data:n,success:function(i){t.log(i),200===i.statusCode?0==i.data.code?(e.video=i.data.data,1==e.video.is_live&&(e.controlsValue=!1),0==e.video.is_live&&(e.controlsValue=!0)):uni.showToast({title:i.data.info,icon:"none"}):uni.showToast({title:"服务出错",icon:"none"})}})},addComment:function(){var i=this;if("undefined"===typeof contact)uni.showModal({title:"如需留言请下载全民体育",content:"APP留言还可以参加抽奖活动哦~",success:function(i){if(i.confirm){var e=OpenInstall.parseUrlParams();new OpenInstall({appKey:"y346df",onready:function(){var t=this;t.wakeupOrInstall()}},e),t.log("确定")}else i.cancel&&t.log("取消")}});else{var e=i.loginAppStatus;if(e){var n={activity_id:i.activity_id,uid:i.uid,video_id:i.videoId,parent_id:0,content:i.commentContent};uni.request({url:o.default.sq+"/activity/api.Video/addComment",data:n,method:"POST",success:function(e){t.log(e),200===e.statusCode?0==e.data.code?uni.showToast({title:"留言成功",icon:"none",success:function(){i.getVideoCommentList(i.videoId),i.commentContent=""}}):uni.showToast({title:e.data.info,icon:"none"}):uni.showToast({title:"服务出错",icon:"none"})}})}else contact.requireLogin()}},getVideoCommentList:function(i){var e=this,n={activity_id:e.activity_id,video_id:i};uni.request({url:o.default.sq+"/activity/api.Video/getVideoCommentList",data:n,method:"GET",success:function(i){t.log(i),200===i.statusCode?0==i.data.code&&(e.commentList=i.data.data,e.commentList.length>0&&(e.hasComemnts=!0)):uni.showToast({title:"服务器错误",icon:"none"})}})},videoErrorCallback:function(i){t.log(i);var e=this,n=e.uid,o=e.token,a=e.ns_device_id,d=e.videoId;uni.showModal({title:"视频播放出错",content:"是否重新加载",success:function(i){i.confirm?(uni.reLaunch({url:"/pages/mid/midY?uid="+n+"&token="+o+"&ns_device_id="+a+"&videoId="+d}),t.log("确定")):i.cancel&&t.log("取消")}})},videoTimeUpdate:function(){},cancelVideoMuted:function(){this.mutedValue=!1,this.mutedActivited=!1,t.log(this.mutedValue)},videoMuted:function(){this.mutedValue=!0,this.mutedActivited=!0,t.log(this.mutedValue)},videoPlay:function(){t.log("video-play")},videoEnd:function(){t.log("video-end"),this.showVideoReplayIcon=!0},videoReplay:function(){t.log("replay"),this.videoContext.play(),this.showVideoReplayIcon=!1}}};i.default=d}).call(this,e("5a52")["default"])},"97a3":function(t,i,e){"use strict";e.r(i);var n=e("800b"),o=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=o.a},d3a9:function(t,i,e){"use strict";e.r(i);var n=e("00ec"),o=e("97a3");for(var a in o)"default"!==a&&function(t){e.d(i,t,(function(){return o[t]}))}(a);e("7fc7");var d,c=e("f0c5"),s=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"97225dda",null,!1,n["a"],d);i["default"]=s.exports}}]);