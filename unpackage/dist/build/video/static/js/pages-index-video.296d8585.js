(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-video"],{"36f4":function(t,i,e){"use strict";var o=e("8595"),n=e.n(o);n.a},"800b":function(t,i,e){"use strict";(function(t){var o=e("ee27");e("a15b"),e("d3b7"),e("25f0"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=o(e("c8bd")),a=o(e("40db")),d={data:function(){return{videoId:"",video:"",src:"",commentContent:"",commentList:[],activity_id:6,uid:"",token:"",ns_device_id:"",hasComemnts:!1,showVideoBackIcon:!1,showVideoReplayIcon:!1}},onReady:function(t){this.videoContext=uni.createVideoContext("myVideo")},onLoad:function(t){var i=this;i.videoId=t.id,i.uid=t.uid,i.token=t.token,i.ns_device_id=t.ns_device_id,i.getVideoDetail(i.videoId),i.getVideoCommentList(i.videoId)},methods:{showVideoTitle:function(){t.log("show"),this.showVideoBackIcon=!0},hideVideoTitle:function(){t.log("hide");var i=this;setTimeout((function(){i.showVideoBackIcon=!1}),5e3)},share:function(){var t={types:["wx","wxline","qq","qzone","sina"],fnDoShare:function(t){}};a.default.popup(t)},backIndex:function(){uni.navigateTo({url:"/"})},getVideoDetail:function(i){var e=this,o={videoId:i};uni.request({url:n.default.sq+"/activity/api.Video/getVideoDetail",data:o,success:function(i){t.log(i),200===i.statusCode?0==i.data.code?e.video=i.data.data:uni.showToast({title:i.data.info,icon:"none"}):uni.showToast({title:"服务出错",icon:"none"})}})},addComment:function(){var i=this,e={activity_id:i.activity_id,uid:i.uid,video_id:i.videoId,parent_id:0,content:i.commentContent};uni.request({url:n.default.sq+"/activity/api.Video/addComment",data:e,method:"POST",success:function(e){t.log(e),200===e.statusCode?0==e.data.code?uni.showToast({title:"留言成功",icon:"none",success:function(){i.getVideoCommentList(i.videoId),i.commentContent=""}}):uni.showToast({title:e.data.info,icon:"none"}):uni.showToast({title:"服务出错",icon:"none"})}})},getVideoCommentList:function(i){var e=this,o={activity_id:e.activity_id,video_id:i};uni.request({url:n.default.sq+"/activity/api.Video/getVideoCommentList",data:o,method:"GET",success:function(i){t.log(i),200===i.statusCode?0==i.data.code&&(e.commentList=i.data.data,e.commentList.length>0&&(e.hasComemnts=!0)):uni.showToast({title:"服务器错误",icon:"none"})}})},sendDanmu:function(){this.videoContext.sendDanmu({text:this.danmuValue,color:this.getRandomColor()}),this.danmuValue=""},videoErrorCallback:function(t){uni.showModal({content:t.target.errMsg,showCancel:!1})},getRandomColor:function(){for(var t=[],i=0;i<3;++i){var e=Math.floor(256*Math.random()).toString(16);e=1==e.length?"0"+e:e,t.push(e)}return"#"+t.join("")},videoEnd:function(){t.log("video-end"),this.showVideoReplayIcon=!0},videoReplay:function(){t.log("replay"),this.videoContext.play(),this.showVideoReplayIcon=!1}}};i.default=d}).call(this,e("5a52")["default"])},8595:function(t,i,e){var o=e("86cd");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=e("4f06").default;n("33e98b43",o,!0,{sourceMap:!1,shadowMode:!1})},"86cd":function(t,i,e){var o=e("24fb");i=o(!1),i.push([t.i,".video-container[data-v-cf4024a6]{width:100%;height:auto;position:fixed;z-index:100;top:0;background-color:#fff\n\t/* padding-bottom: 18rpx; */}[data-v-cf4024a6] .uni-video-cover-play-button{width:%?180?%;height:%?180?%;border-radius:%?180?%;background-image:url(https://aloss.hotforest.cn/video/start.png)!important}[data-v-cf4024a6] .uni-video-cover-duration{display:none}.video-bg[data-v-cf4024a6]{height:100%;background-color:#fff}#myVideo[data-v-cf4024a6]{width:100%!important\n\t/* height: 420rpx; */}.uni-padding-wrap[data-v-cf4024a6]{width:100%;padding:0;margin:0}.video-title[data-v-cf4024a6]{font-size:%?26?%;font-family:Lantinghei SC;font-weight:600;color:#333;line-height:%?35?%;padding:0 %?33?% 0 %?22?%;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.video-description[data-v-cf4024a6]{font-size:%?24?%;font-family:Lantinghei SC;font-weight:200;color:#666;line-height:%?35?%;padding:%?18?% %?33?% 0 %?22?%;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.comment-container[data-v-cf4024a6]{padding-top:%?480?%;padding-bottom:%?100?%}.comment-item[data-v-cf4024a6]{padding-top:%?22?%;padding-left:%?22?%;padding-right:%?22?%;padding-bottom:%?22?%;border-bottom:1px solid #f2f2f2;background-color:#fff}.comment-t[data-v-cf4024a6]{margin-top:%?20?%;border-top:1px solid #f2f2f2;padding-left:%?22?%;padding-top:%?10?%}.comment-l[data-v-cf4024a6]{width:14%;float:left}.comment-l img[data-v-cf4024a6]{margin-top:%?6?%;width:%?68?%;height:%?68?%;border-radius:%?68?%}.comment-r[data-v-cf4024a6]{width:86%;float:left}.comment-r-1[data-v-cf4024a6]{font-size:%?24?%;font-family:Lantinghei SC;font-weight:200;color:#666}.comment-r-2[data-v-cf4024a6]{font-size:%?24?%;font-family:Lantinghei SC;font-weight:200;color:#333}.comment-input-bg[data-v-cf4024a6]{position:fixed;z-index:100;bottom:%?0?%;padding-top:%?20?%;padding-bottom:%?40?%;width:100%;background-color:#fff}.comment-input[data-v-cf4024a6]{width:78%;float:left}.comment-input uni-input[data-v-cf4024a6]{width:90%;margin:0 auto;height:%?55?%;background:#f1f1f1;border-radius:%?28?%;text-indent:%?30?%}.comment-button[data-v-cf4024a6]{width:18%;float:left}.comment-button uni-button[data-v-cf4024a6]{width:%?137?%;height:%?55?%;background:#d84949;border-radius:%?28?%;line-height:%?55?%;font-size:%?24?%;font-family:Lantinghei SC;font-weight:200;color:#fff}\n/* .comment-share{\n\twidth: 12%;\n\tfloat: left;\n\ttext-align: center;\n}\n.comment-share img{\n\twidth: 46rpx;\n\theight: 41rpx;\n\tmargin-top: 8rpx;\n} */.back-icon[data-v-cf4024a6]{\n\t/* background-color: rgba(0,0,0,1); */padding-top:%?20?%;padding-left:%?26?%;padding-bottom:%?20?%}.back-icon img[data-v-cf4024a6]{width:%?41?%;height:%?45?%}.comment-no-comments[data-v-cf4024a6]{margin-top:%?100?%}.comment-no-comments-img[data-v-cf4024a6]{text-align:center}.comment-no-comments-img img[data-v-cf4024a6]{width:%?146?%;height:%?134?%}.comment-no-comments-text[data-v-cf4024a6]{text-align:center;font-size:%?24?%;font-family:Lantinghei SC;font-weight:200;color:#999}.video-replay[data-v-cf4024a6]{width:%?100?%;height:%?100?%;position:absolute;margin:auto;left:0;right:0;top:0;bottom:0;font-size:%?28?%;color:#0a98d5}.video-replay img[data-v-cf4024a6]{width:100%}",""]),t.exports=i},"97a3":function(t,i,e){"use strict";e.r(i);var o=e("800b"),n=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(i,t,(function(){return o[t]}))}(a);i["default"]=n.a},c839:function(t,i,e){"use strict";var o,n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"video-bg"},[e("v-uni-view",{staticClass:"uni-flex uni-column video-container"},[e("v-uni-view",{staticClass:"flex-item",on:{touchstart:function(i){arguments[0]=i=t.$handleEvent(i),t.showVideoTitle.apply(void 0,arguments)},touchend:function(i){arguments[0]=i=t.$handleEvent(i),t.hideVideoTitle.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[t.video?e("v-uni-view",[e("v-uni-video",{attrs:{id:"myVideo",poster:t.video.cover_url,src:t.video.source_url,controls:!0,autoplay:"true","object-fit":"contain"},on:{error:function(i){arguments[0]=i=t.$handleEvent(i),t.videoErrorCallback.apply(void 0,arguments)},ended:function(i){arguments[0]=i=t.$handleEvent(i),t.videoEnd.apply(void 0,arguments)}}},[t.showVideoBackIcon?e("v-uni-cover-view",{staticClass:"back-icon"},[e("img",{attrs:{src:"https://aloss.hotforest.cn/video/video-back-icon.png",alt:"back"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.backIndex.apply(void 0,arguments)}}})]):t._e(),t.showVideoReplayIcon?e("v-uni-cover-view",{staticClass:"video-replay",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.videoReplay.apply(void 0,arguments)}}},[e("img",{attrs:{src:"https://aloss.hotforest.cn/video/start.png",alt:"重播"}})]):t._e()],1)],1):t._e()],1)],1)],1),e("v-uni-view",{staticClass:"uni-flex uni-column comment-container"},[e("v-uni-view",{staticClass:"flex-item video-title"},[t._v(t._s(t.video.title))]),e("v-uni-view",{staticClass:"flex-item video-description"},[t._v(t._s(t.video.description))]),e("v-uni-view",{staticClass:"flex-item comment-t"},[t._v("最新评论")]),t.hasComemnts?t._e():e("v-uni-view",{staticClass:"flex-item comment-no-comments"},[e("v-uni-view",{staticClass:"comment-no-comments-img"},[e("img",{attrs:{src:"https://aloss.hotforest.cn/video/no-comments-icon.png",alt:"无评论图"}})]),e("v-uni-view",{staticClass:"comment-no-comments-text"},[t._v("暂无评论，说说你的看法")])],1),t._l(t.commentList,(function(i,o){return t.hasComemnts?e("v-uni-view",{key:o,staticClass:"flex-item comment-item"},[e("v-uni-view",{staticClass:"comment-l"},[""!=i.avatar_url?e("img",{attrs:{src:i.avatar_url,alt:"avatar"}}):t._e(),""==i.avatar_url?e("img",{attrs:{src:"https://aloss.hotforest.cn/web/default-header.png",alt:"avatar"}}):t._e()]),e("v-uni-view",{staticClass:"comment-r"},[e("v-uni-view",{staticClass:"flex-item comment-r-1"},[t._v(t._s(i.name))]),e("v-uni-view",{staticClass:"flex-item comment-r-2"},[t._v(t._s(i.content))])],1)],1):t._e()}))],2),e("v-uni-view",{staticClass:"comment-input-bg"},[e("div",{staticClass:"m-share"}),e("v-uni-view",{staticClass:"comment-input"},[e("v-uni-input",{attrs:{type:"text",placeholder:"我想说的话"},model:{value:t.commentContent,callback:function(i){t.commentContent=i},expression:"commentContent"}})],1),e("v-uni-view",{staticClass:"comment-button"},[e("v-uni-button",{attrs:{type:"default"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.addComment()}}},[t._v("发表")])],1)],1)],1)},a=[];e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return o}))},d3a9:function(t,i,e){"use strict";e.r(i);var o=e("c839"),n=e("97a3");for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);e("36f4");var d,c=e("f0c5"),s=Object(c["a"])(n["default"],o["b"],o["c"],!1,null,"cf4024a6",null,!1,o["a"],d);i["default"]=s.exports}}]);