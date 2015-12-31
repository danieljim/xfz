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
		    _this.$bangPiao.on('click', function() {
		    	_this.$share.show();
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
});