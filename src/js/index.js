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
			alert(1)
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
	
});


