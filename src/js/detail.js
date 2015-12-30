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
			var _this = this;

		    // 初始化swiper
		    var swiper = new Swiper('.swiper-container', {
		      	direction: 'vertical',
		      	loop: false
		    });

		    // 点击投资人按钮
		    _this.$touEntrance.on('click', function() {
		    	_this.$swiperWrapper.fadeOut();
		    });

		    // 点击创业者按钮
		    _this.$chuangEntrance.on('click', function() {
		    	_this.$swiperWrapper.fadeOut();
		    });

		}
	};
	// 投资者事件
	var tou = {
		init :function() {

		},
		bind :function() {

		}
	};
	// 创业者事件
	var chuang = {
		init :function() {

		},
		bind :function() {

		}
	}

	swipe.init();
});