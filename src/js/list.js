$(document).ready(function() {
	// 投资者事件
	var tou = {
		init : function() {
			this.$swiperWrapper = $('.swiper-wrapper');
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

		}
	};
	tou.init();
});