$(document).ready(function() {
	// 创业者事件
	var chuang = {
		init : function() {
			this.piaoStatus = true; 
			this.$backHome = $('.back-home');
			this.$otherPerson = $('.other-person');
			this.$touPiao = $('.tou-piao');
			this.$bangPiao = $('.bang-piao');
			this.$piaoCount = $('.piao-count');
			this.$share = $('.share');
			// 投过之后就不再进行投票了
			if(this.$touPiao.data('status') == 1) {
				this.$touPiao.css({
					'background' : '#ccc'
				}).html('已投票');
				this.piaoStatus = false;
			}
			this.bind();
		},

		bind : function() {
			var _this = this;

		    // 点击投票
		    _this.$touPiao.on('click', function() {
		    	if(_this.piaoStatus == false) {
		    		return;
		    	}else{
		    		var count = Number(_this.$piaoCount.text());
			    	count++;
			    	_this.$piaoCount.html(count);
			    	$(this).css({
						'background' : '#ccc'
					}).html('已投票');
					_this.piaoStatus = false;
		    	}
		    });

		    // 帮忙拉票
		    _this.$bangPiao.on('click', function(event) {
		    	event.preventDefault();
		    	event.stopPropagation();
		    	_this.$share.show();
		    });

		    // 取消分享mask
		    $(document).on('click', function() {
		    	_this.$share.hide();
		    });

		    // 返回首页
		    _this.$backHome.on('click', function() {
		    	window.location.href="../../index.html";
		    });

		    // 查看其它人
		    _this.$otherPerson.on('click', function() {
		    	window.location.href="list.html";
		    });
		}
	}

	chuang.init();

	// 所有功能必须包含在 WeixinApi.ready 中进行
	WeixinApi.ready(function(Api){
	 	

	    // 微信分享投资者的数据
	    var wxDataTou = {
	        "imgUrl":'www.danieljim.github.io/xfz/src/imgs/logo-icon.png',
	        "link":'http://danieljim.github.io/xfz/src/tpl/list.html?from=tou',
	        "desc":'我是xx名字，正在参选年度新锐投资人评选，邀请你来帮我投票！',
	        "title":"年度新锐投资人和最具人气创业者都在小饭桌创业春晚！"
	    };

	    // 微信分享创业者的数据
	    var wxDataChuang = {
	        "imgUrl":'www.danieljim.github.io/xfz/src/imgs/logo-icon.png',
	        "link":'http://danieljim.github.io/xfz/src/tpl/list.html?from=chuang',
	        "desc":'我是xx名字，正在参选小饭桌最具人气创业者，邀请你来帮我投票！',
	        "title":"我是xx名字，正在参选小饭桌最具人气创业者，邀请你来帮我投票！"
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
	 	
	 	var from = window.location.href.indexOf('tou');
	 	if(from > 0) {
	 		// 用户点开右上角popup菜单后，点击分享给好友，会执行下面这个代码
		    Api.shareToFriend(wxDataTou, wxCallbacks);
		 
		    // 点击分享到朋友圈，会执行下面这个代码
		    Api.shareToTimeline(wxDataTou, wxCallbacks);
		 
		    // 点击分享到腾讯微博，会执行下面这个代码
		    Api.shareToWeibo(wxDataTou, wxCallbacks);
	 	}else{
	 		// 用户点开右上角popup菜单后，点击分享给好友，会执行下面这个代码
		    Api.shareToFriend(wxDataChuang, wxCallbacks);
		 
		    // 点击分享到朋友圈，会执行下面这个代码
		    Api.shareToTimeline(wxDataChuang, wxCallbacks);
		 
		    // 点击分享到腾讯微博，会执行下面这个代码
		    Api.shareToWeibo(wxDataChuang, wxCallbacks);
	 	}
	    
	});
});