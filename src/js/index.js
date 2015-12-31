$(document).ready(function() {
	// 首页和入口页面的滑动
	var swipe = {
		init : function() {
			this.$swiperWrapper = $('.swiper-wrapper');
			this.$touEntrance = $('.tou-entrance');
			this.$chuangEntrance = $('.chuang-entrance');
			this.bind();
		},

		bind : function() {

		    // 初始化swiper
		    var swiper = new Swiper('.swiper-container', {
		      	direction: 'vertical',
		      	loop: false
		    });

		    // 点击投资人按钮
		    this.$touEntrance.on('click', function() {
		    	window.location.href="src/tpl/list.html?from=tou";
		    });

		    // 点击创业者按钮
		    this.$chuangEntrance.on('click', function() {
		    	window.location.href="src/tpl/list.html?from=chuang";
		    });

		}
	};

	swipe.init();

	
	var WeixinApi = (function () {

	    "use strict";
	    function weixinShareTimeline(data, callbacks) {
	        callbacks = callbacks || {};
	        var shareTimeline = function (theData) {
	            WeixinJSBridge.invoke('shareTimeline', {
	                "appid":theData.appId ? theData.appId : '',
	                "img_url":theData.imgUrl,
	                "link":theData.link,
	                "desc":theData.title,
	                "title":theData.desc, // 注意这里要分享出去的内容是desc
	                "img_width":"640",
	                "img_height":"640"
	            }, function (resp) {
	                switch (resp.err_msg) {
	                    // share_timeline:cancel 用户取消
	                    case 'share_timeline:cancel':
	                        callbacks.cancel && callbacks.cancel(resp);
	                        break;
	                    // share_timeline:confirm 发送成功
	                    case 'share_timeline:confirm':
	                    case 'share_timeline:ok':
	                        callbacks.confirm && callbacks.confirm(resp);
	                        break;
	                    // share_timeline:fail　发送失败
	                    case 'share_timeline:fail':
	                    default:
	                        callbacks.fail && callbacks.fail(resp);
	                        break;
	                }
	                // 无论成功失败都会执行的回调
	                callbacks.all && callbacks.all(resp);
	            });
	        };
	        WeixinJSBridge.on('menu:share:timeline', function (argv) {
	            if (callbacks.async && callbacks.ready) {
	                window["_wx_loadedCb_"] = callbacks.dataLoaded || new Function();
	                if(window["_wx_loadedCb_"].toString().indexOf("_wx_loadedCb_") > 0) {
	                    window["_wx_loadedCb_"] = new Function();
	                }
	                callbacks.dataLoaded = function (newData) {
	                    window["_wx_loadedCb_"](newData);
	                    shareTimeline(newData);
	                };
	                // 然后就绪
	                callbacks.ready && callbacks.ready(argv);
	            } else {
	                // 就绪状态
	                callbacks.ready && callbacks.ready(argv);
	                shareTimeline(data);
	            }
	        });
	    }
	    function weixinSendAppMessage(data, callbacks) {
	        callbacks = callbacks || {};
	        var sendAppMessage = function (theData) {
	            WeixinJSBridge.invoke('sendAppMessage', {
	                "appid":theData.appId ? theData.appId : '',
	                "img_url":theData.imgUrl,
	                "link":theData.link,
	                "desc":theData.desc,
	                "title":theData.title,
	                "img_width":"640",
	                "img_height":"640"
	            }, function (resp) {
	                switch (resp.err_msg) {
	                    // send_app_msg:cancel 用户取消
	                    case 'send_app_msg:cancel':
	                        callbacks.cancel && callbacks.cancel(resp);
	                        break;
	                    // send_app_msg:confirm 发送成功
	                    case 'send_app_msg:confirm':
	                    case 'send_app_msg:ok':
	                        callbacks.confirm && callbacks.confirm(resp);
	                        break;
	                    // send_app_msg:fail　发送失败
	                    case 'send_app_msg:fail':
	                    default:
	                        callbacks.fail && callbacks.fail(resp);
	                        break;
	                }
	                // 无论成功失败都会执行的回调
	                callbacks.all && callbacks.all(resp);
	            });
	        };
	        WeixinJSBridge.on('menu:share:appmessage', function (argv) {
	            if (callbacks.async && callbacks.ready) {
	                window["_wx_loadedCb_"] = callbacks.dataLoaded || new Function();
	                if(window["_wx_loadedCb_"].toString().indexOf("_wx_loadedCb_") > 0) {
	                    window["_wx_loadedCb_"] = new Function();
	                }
	                callbacks.dataLoaded = function (newData) {
	                    window["_wx_loadedCb_"](newData);
	                    sendAppMessage(newData);
	                };
	                // 然后就绪
	                callbacks.ready && callbacks.ready(argv);
	            } else {
	                // 就绪状态
	                callbacks.ready && callbacks.ready(argv);
	                sendAppMessage(data);
	            }
	        });
	    }

	    function weixinGeneralShare(data, callbacks) {
	        callbacks = callbacks || {};
	        var generalShare = function (general,theData) {

	            // 如果是分享到朋友圈，则需要把title和desc交换一下
	            if(general.shareTo == 'timeline') {
	                var title = theData.title;
	                theData.title = theData.desc || title;
	                theData.desc = title;
	            }

	            // 分享出去
	            general.generalShare({
	                "appid":theData.appId ? theData.appId : '',
	                "img_url":theData.imgUrl,
	                "link":theData.link,
	                "desc":theData.desc,
	                "title":theData.title,
	                "img_width":"640",
	                "img_height":"640"
	            }, function (resp) {
	                switch (resp.err_msg) {
	                    // general_share:cancel 用户取消
	                    case 'general_share:cancel':
	                        callbacks.cancel && callbacks.cancel(resp ,general.shareTo);
	                        break;
	                    // general_share:confirm 发送成功
	                    case 'general_share:confirm':
	                    case 'general_share:ok':
	                        callbacks.confirm && callbacks.confirm(resp ,general.shareTo);
	                        break;
	                    // general_share:fail　发送失败
	                    case 'general_share:fail':
	                    default:
	                        callbacks.fail && callbacks.fail(resp ,general.shareTo);
	                        break;
	                }
	                // 无论成功失败都会执行的回调
	                callbacks.all && callbacks.all(resp ,general.shareTo);
	            });
	        };
	        WeixinJSBridge.on('menu:general:share', function (general) {
	            if (callbacks.async && callbacks.ready) {
	                window["_wx_loadedCb_"] = callbacks.dataLoaded || new Function();
	                if(window["_wx_loadedCb_"].toString().indexOf("_wx_loadedCb_") > 0) {
	                    window["_wx_loadedCb_"] = new Function();
	                }
	                callbacks.dataLoaded = function (newData) {
	                    window["_wx_loadedCb_"](newData);
	                    generalShare(general,newData);
	                };
	                // 然后就绪
	                callbacks.ready && callbacks.ready(general,general.shareTo);
	            } else {
	                // 就绪状态
	                callbacks.ready && callbacks.ready(general,general.shareTo);
	                generalShare(general,data);
	            }
	        });
	    }

	    function getNetworkType(callback) {
	        if (callback && typeof callback == 'function') {
	            WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
	                // 在这里拿到e.err_msg，这里面就包含了所有的网络类型
	                callback(e.err_msg);
	            });
	        }
	    }


	    function wxJsBridgeReady(readyCallback) {
	        if (readyCallback && typeof readyCallback == 'function') {
	            var Api = this;
	            var wxReadyFunc = function () {
	                readyCallback(Api);
	            };
	            if (typeof window.WeixinJSBridge == "undefined"){
	                if (document.addEventListener) {
	                    document.addEventListener('WeixinJSBridgeReady', wxReadyFunc, false);
	                } else if (document.attachEvent) {
	                    document.attachEvent('WeixinJSBridgeReady', wxReadyFunc);
	                    document.attachEvent('onWeixinJSBridgeReady', wxReadyFunc);
	                }
	            }else{
	                wxReadyFunc();
	            }
	        }
	    }

	    return {
	        version         :"2.0",
	        ready           :wxJsBridgeReady,
	        shareToTimeline :weixinShareTimeline,
	        shareToWeibo    :weixinShareWeibo,
	        shareToFriend   :weixinSendAppMessage,
	        generalShare    :weixinGeneralShare,
	        addContact      :addContact,
	        showOptionMenu  :showOptionMenu,
	        hideOptionMenu  :hideOptionMenu,
	        showToolbar     :showToolbar,
	        hideToolbar     :hideToolbar,
	        getNetworkType  :getNetworkType,
	        imagePreview    :imagePreview,
	        closeWindow     :closeWindow
	    };
	})();
	// 所有功能必须包含在 WeixinApi.ready 中进行
	WeixinApi.ready(function(Api){
	 
	    // 微信分享的数据
	    var wxData = {
	        "imgUrl":'www.danieljim.github.io/xfz/src/imgs/logo-icon.png',
	        "link":'www.danieljim.github.io/xfz',
	        "desc":'年度新锐投资人和最具人气创业者都在这里了，赶紧来投出你的选票！',
	        "title":"邀请你给小饭桌创业春晚-年度新锐投资人和最具人气创业者投票！"
	    };
	 
	    // 分享的回调
	    var wxCallbacks = {
	        // 分享操作开始之前
	        ready:function () {
	            // 你可以在这里对分享的数据进行重组
	        },
	        // 分享被用户自动取消
	        cancel:function (resp) {
	            // 你可以在你的页面上给用户一个小Tip，为什么要取消呢？
	        },
	        // 分享失败了
	        fail:function (resp) {
	            // 分享失败了，是不是可以告诉用户：不要紧，可能是网络问题，一会儿再试试？
	        },
	        // 分享成功
	        confirm:function (resp) {
	            // 分享成功了，我们是不是可以做一些分享统计呢？
	        },
	        // 整个分享过程结束
	        all:function (resp) {
	            // 如果你做的是一个鼓励用户进行分享的产品，在这里是不是可以给用户一些反馈了？
	        }
	    };
	 
	    // 用户点开右上角popup菜单后，点击分享给好友，会执行下面这个代码
	    Api.shareToFriend(wxData, wxCallbacks);
	 
	    // 点击分享到朋友圈，会执行下面这个代码
	    Api.shareToTimeline(wxData, wxCallbacks);
	 
	    // 点击分享到腾讯微博，会执行下面这个代码
	    Api.shareToWeibo(wxData, wxCallbacks);
	});
});


