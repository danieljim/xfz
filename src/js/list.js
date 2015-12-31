$(document).ready(function() {

	var touTpl = {

	    firstPage : '<div class="swiper-slide">'+
						'<div class="head-rule-img"></div>'+
		                '<div class="head-time">'+
		                    '<span>投票时间：1月4日－10日</span>'+
		                    '<a class="look-rule">查看投票规则</a>'+
		                '</div>'+
		                '<ul class="list-1">'+
		                    '<li data-uid="1">'+
		                        '<div class="photo">'+
		                           '<img src="http://img2.3lian.com/2014/f5/158/d/87.jpg">'+
		                        '</div>'+
		                        '<div class="piao-count">100</div>'+
		                        '<div class="name">王东杰</div>'+
		                        '<div class="company">北京子木投资顾问有限公司</div>'+
		                        '<div class="position">前端开发</div>'+
		                    '</li>'+
		                '</ul>'+
		                '<div class="rule">'+
		                    '<div>'+
		                        '<div>参选标准</div>'+
		                        '<ul>'+
		                            '<li>30岁以下（含1986年）</li>'+
		                            '<li>至少主要参与过3家创业公司投资</li>'+
		                            '<li>过去一年所投公司至少1家取得不错的成绩</li>'+
		                        '</ul>'+
		                    '</div>'+
		                    '<div>'+
		                        '<div>评选标准</div>'+
		                        '<ul>'+
		                            '<li>投资人所投公司数量、轮次与估值占70%权重</li>'+
		                            '<li>投资人口碑、影响力、行业洞察力占30%权重，由公开投票决定</li>'+
		                            '<li>最终排名，由两者加权计算后的分值得出，会在小饭桌创业春晚揭晓</li>'+
		                        '</ul>'+
		                    '</div>'+
		                    '<div>'+
		                        '<div>投票标准</div>'+
		                        '<ul>'+
		                            '<li>投票时间：1月4日-1月10日</li>'+
		                            '<li>每人只能投一次票</li>'+
		                            '<li>如果有恶意刷票等行为，会取消候选资格</li>'+
		                            '<li>最终解释权归小饭桌所有</li>'+
		                        '</ul>'+
		                    '</div>'+
		                    '<div class="back">立即投票</div>'+
		                '</div>'+
		            '</div>',
		otherPage : '<div class="swiper-slide">'+
		                '<ul class="list-2">'+
		                    '<li>'+
		                        '<div class="photo">'+
		                            '<img src="http://img2.3lian.com/2014/f5/158/d/87.jpg">'+
		                        '</div>'+
		                        '<div class="piao-count">100</div>'+
		                        '<div class="name">王东杰</div>'+
		                        '<div class="company">北京子木投资顾问有限公司</div>'+
		                        '<div class="position">前端开发</div>'+
		                    '</li>'+
		                '</ul>'+
		            '</div>'
	};
	var chuangTpl = {

	    firstPage : '<div class="swiper-slide">'+
						'<div class="head-rule-img"></div>'+
		                '<div class="head-time">'+
		                    '<span>投票时间：1月4日－10日</span>'+
		                    '<a class="look-rule">查看投票规则</a>'+
		                '</div>'+
		                '<ul class="list-1">'+
		                    '<li data-uid="1">'+
		                        '<div class="photo">'+
		                           '<img src="http://img2.3lian.com/2014/f5/158/d/87.jpg">'+
		                        '</div>'+
		                        '<div class="piao-count">100</div>'+
		                        '<div class="name">王东杰</div>'+
		                        '<div class="company">北京子木投资顾问有限公司</div>'+
		                        '<div class="position">前端开发</div>'+
		                    '</li>'+
		                '</ul>'+
		                '<div class="rule">'+
		                    '<div>'+
		                        '<div>参选标准</div>'+
		                        '<ul>'+
		                            '<li>30岁以下（含1986年）</li>'+
		                            '<li>至少主要参与过3家创业公司投资</li>'+
		                            '<li>过去一年所投公司至少1家取得不错的成绩</li>'+
		                        '</ul>'+
		                    '</div>'+
		                    '<div>'+
		                        '<div>评选标准</div>'+
		                        '<ul>'+
		                            '<li>投资人所投公司数量、轮次与估值占70%权重</li>'+
		                            '<li>投资人口碑、影响力、行业洞察力占30%权重，由公开投票决定</li>'+
		                            '<li>最终排名，由两者加权计算后的分值得出，会在小饭桌创业春晚揭晓</li>'+
		                        '</ul>'+
		                    '</div>'+
		                    '<div>'+
		                        '<div>投票标准</div>'+
		                        '<ul>'+
		                            '<li>投票时间：1月4日-1月10日</li>'+
		                            '<li>每人只能投一次票</li>'+
		                            '<li>如果有恶意刷票等行为，会取消候选资格</li>'+
		                            '<li>最终解释权归小饭桌所有</li>'+
		                        '</ul>'+
		                    '</div>'+
		                    '<div class="back">立即投票</div>'+
		                '</div>'+
		            '</div>',
		otherPage : '<div class="swiper-slide">'+
		                '<ul class="list-2">'+
		                    '<li>'+
		                        '<div class="photo">'+
		                            '<img src="http://img2.3lian.com/2014/f5/158/d/87.jpg">'+
		                        '</div>'+
		                        '<div class="piao-count">100</div>'+
		                        '<div class="name">王东杰</div>'+
		                        '<div class="company">北京子木投资顾问有限公司</div>'+
		                        '<div class="position">前端开发</div>'+
		                    '</li>'+
		                '</ul>'+
		            '</div>'
	};

	// 投资者事件
	var tou = {

		init : function() {
			this.$swiperWrapper = $('.swiper-wrapper');
			this.$rule = $('.look-rule');
			this.$back = $('.back');
			this.bind();
		},

		bind : function() {

		    // 初始化swiper
		    var swiper = new Swiper('.swiper-container', {
		      	direction: 'vertical',
		      	loop: false
		    });

		    // 点击进入详情
		    this.$swiperWrapper.on('click', 'li', function() {
		    	var $self = $(this);
		    	var uid = $self.data('uid');
		    	window.location.href="detail.html?uid="+uid;
		    });

		    this.$rule.on('click', function() {
		    	$('.rule').show();
		    	$('.step-1').siblings().hide();
		    	$('.list-1').hide();
		    	$('.head-time').hide();
		    });

		    this.$back.on('click',function() {
		    	$('.rule').hide();
		    	$('.step-1').siblings().show();
		    	$('.list-1').show();
		    	$('.head-time').show();
		    })

		}
	};
	tou.init();
	// 所有功能必须包含在 WeixinApi.ready 中进行
	WeixinApi.ready(function(Api){
	 	

	    // 微信分享投资者的数据
	    var wxDataTou = {
	        "imgUrl":'www.danieljim.github.io/xfz/src/imgs/logo-icon.png',
	        "link":'http://danieljim.github.io/xfz/src/tpl/list.html?from=tou',
	        "desc":'谁是2015年度新锐投资人，你说的算！来投出你宝贵的一票！',
	        "title":"来给小饭桌创业春晚-年度新锐投资人投票！"
	    };

	    // 微信分享创业者的数据
	    var wxDataChuang = {
	        "imgUrl":'www.danieljim.github.io/xfz/src/imgs/logo-icon.png',
	        "link":'http://danieljim.github.io/xfz/src/tpl/list.html?from=chuang',
	        "desc":'正在票选2015年度小饭桌最具人气创业者，赶紧来投出你宝贵的一票！',
	        "title":"来给小饭桌创业春晚-最具人气创业者投票！"
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