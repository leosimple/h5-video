(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/API/API"],{"095d":function(e,a,n){},"36aa":function(e,a,n){},4034:function(e,a,n){"use strict";var t=n("36aa"),o=n.n(t);o.a},"46b5":function(e,a,n){"use strict";var t,o=function(){var e=this,a=e.$createElement;e._self._c},r=[];n.d(a,"b",function(){return o}),n.d(a,"c",function(){return r}),n.d(a,"a",function(){return t})},"7e50":function(e,a,n){"use strict";n.r(a);var t=n("46b5"),o=n("d362");for(var r in o)"default"!==r&&function(e){n.d(a,e,function(){return o[e]})}(r);n("f8ae"),n("4034");var i,u=n("f0c5"),l=Object(u["a"])(o["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],i);a["default"]=l.exports},8380:function(e,a,n){"use strict";(function(e){n("836e"),n("921b");t(n("66fd"));var a=t(n("7e50"));function t(e){return e&&e.__esModule?e:{default:e}}e(a.default)}).call(this,n("543d")["createPage"])},bd60:function(e,a,n){"use strict";(function(e){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=function(){return n.e("components/uLink").then(n.bind(null,"152c"))},o=function(){return n.e("components/api-set-tabbar").then(n.bind(null,"a4ba"))},r={components:{uLink:t,setTabBar:o},data:function(){var e=[{name:"图片",url:"image"},{name:"录音",url:"voice"},{name:"背景音频",url:"background-audio"},{name:"视频",url:"video"},{name:"文件",url:"file"},{name:"保存媒体到本地",url:"save-media"}],a=[{id:"page",name:"界面",open:!1,pages:[{name:"设置导航条",url:"set-navigation-bar-title"},{name:"页面跳转",url:"navigator"},{name:"设置TabBar",url:"set-tabbar"},{name:"下拉刷新",url:"pull-down-refresh"},{name:"创建动画",url:"animation"},{name:"创建绘画",url:"canvas"},{name:"节点信息",url:"get-node-info"},{name:"节点布局交互状态",url:"intersection-observer"},{name:"显示操作菜单",url:"action-sheet"},{name:"显示模态弹窗",url:"modal"},{name:"显示加载提示框",url:"show-loading"},{name:"显示消息提示框",url:"toast"}]},{id:"device",name:"设备",open:!1,pages:[{name:"获取手机网络状态",url:"get-network-type"},{name:"获取手机系统信息",url:"get-system-info"},{name:"打电话",url:"make-phone-call"},{name:"震动",url:"vibrate"},{name:"添加手机联系人",url:"add-phone-contact"},{name:"扫码",url:"scan-code"},{name:"剪贴板",url:"clipboard"},{name:"屏幕亮度",url:"brightness"},{name:"蓝牙",url:"bluetooth"},{name:"生物认证",url:"soter"},{name:"iBeacon",url:"ibeacon"},{name:"监听加速度传感器",url:"on-accelerometer-change"},{name:"监听罗盘数据",url:"on-compass-change"}]},{id:"network",name:"网络",open:!1,pages:[{name:"发起一个请求",url:"request"},{name:"上传文件",url:"upload-file"},{name:"下载文件",url:"download-file"}]},{id:"websocket",name:"websocket",open:!1,pages:[{name:"socketTask",url:"websocket-socketTask"},{name:"全局websocket",url:"websocket-global"}]},{id:"media",name:"媒体",open:!1,pages:e},{id:"location",name:"位置",open:!1,pages:[{name:"获取当前位置",url:"get-location"},{name:"使用地图查看位置",url:"open-location"},{name:"使用地图选择位置",url:"choose-location"},{name:"地图控制",url:"map"}]},{id:"storage",name:"数据",open:!1,pages:[{name:"数据存储（key-value）",url:"storage"}]},{url:"rewarded-video-ad",name:"激励视频广告",open:!1},{id:"login",name:"登录",open:!1,pages:[{name:"登录",url:"login"},{name:"获取用户信息",url:"get-user-info"}]},{id:"share",name:"分享",open:!1,pages:[{name:"分享",url:"share"}]},{id:"payment",name:"支付",open:!1,pages:[{name:"发起支付",url:"request-payment"}]}];return{showSetTabBarPage:!1,list:a,navigateFlag:!1}},onShareAppMessage:function(){return{title:"欢迎体验uni-app",path:"/pages/tabBar/API/API"}},onNavigationBarButtonTap:function(a){e.navigateTo({url:"/pages/about/about"})},onLoad:function(){},onReady:function(){},onShow:function(){this.navigateFlag=!1,this.leaveSetTabBarPage()},onHide:function(){this.leaveSetTabBarPage()},methods:{triggerCollapse:function(e){if(this.list[e].pages)for(var a=0;a<this.list.length;++a)this.list[a].open=e===a&&!this.list[e].open;else this.goDetailPage(this.list[e].url)},goDetailPage:function(a){if(!this.navigateFlag)if(this.navigateFlag=!0,"set-tabbar"!==a){var n=~a.indexOf("platform")?a:"/pages/API/"+a+"/"+a;e.navigateTo({url:n})}else this.showSetTabBarPage=!0},leaveSetTabBarPage:function(){var e=this;setTimeout(function(){e.navigateFlag=!1},200),this.showSetTabBarPage=!1}}};a.default=r}).call(this,n("543d")["default"])},d362:function(e,a,n){"use strict";n.r(a);var t=n("bd60"),o=n.n(t);for(var r in t)"default"!==r&&function(e){n.d(a,e,function(){return t[e]})}(r);a["default"]=o.a},f8ae:function(e,a,n){"use strict";var t=n("095d"),o=n.n(t);o.a}},[["8380","common/runtime","common/vendor"]]]);