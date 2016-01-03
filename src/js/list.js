$(document).ready(function() {

	var tpl = {

	    firstPage : '<ul class="list-1">'+
	                    '<li data-uid="1">'+
	                        '<div class="photo">'+
	                           '<img src="http://img2.3lian.com/2014/f5/158/d/87.jpg">'+
	                        '</div>'+
	                        '<div class="piao-count">100</div>'+
	                        '<div class="name">王东杰</div>'+
	                        '<div class="company">北京子木投资顾问有限公司</div>'+
	                        '<div class="position">前端开发</div>'+
	                    '</li>'+
	                '</ul>',
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

		getList : function() {
			var _this = this;
			$.ajax({
		        url : '/home/banner',
		        type : 'get',
		        dataType : 'json',
		        success : function(msg) {
		            if (msg.code != '0000') {
		                return;
		            }
		            var first = template.compile(tpl.firstPage),
                	html = render({data : msg.data[0]});

                	var other = template.compile(tpl.otherPage),
                	html = render({data : msg.data[0]});
		            $('.head-time').append(html);

		            slide.init();
		        }
		    });
		},

		bind : function() {

		    // 初始化swiper
		    var swiper = new Swiper('.swiper-container', {
		      	direction: 'vertical',
		      	loop: false,
		      	onTouchMove: function(swiper){
			    	alert('haha')
			    }
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
});