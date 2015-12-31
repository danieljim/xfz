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
 
    /* 这里省略了一堆代码……下面直接看调用接口 */ 
    return {
        ready           :wxJsBridgeReady,
        shareToTimeline :weixinShareTimeline,
        shareToWeibo    :weixinShareWeibo,
        shareToFriend   :weixinSendAppMessage,
        showOptionMenu  :showOptionMenu,
        hideOptionMenu  :hideOptionMenu,
        showToolbar     :showToolbar,
        hideToolbar     :hideToolbar,
        getNetworkType  :getNetworkType,
        imagePreview    :imagePreview
    };    
 
});
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


