$(document).ready(function() {

	var tpl = {
		detailTou : '<div data-uid="<%=detail.uid%>">'+
                        '<div class="photo">'+
                            '<img src="<%=detail.photo%>">'+
                        '</div>'+
                        '<div class="piao-count"><%=detail.count%></div>'+
                        '<div class="name"><%=detail.name%></div>'+
                        '<div class="company">'+
                            '<span><%=detail.company%></span>'+
                            '<span><%=detail.worker%></span>'+
                        '</div>'+
                        '<div class="des"><%=detail.intro%></div>'+
                    '</div>',
        detailChuang : '<div data-uid="<%=detail.uid%>">'+
                        '<div class="photo">'+
                            '<img src="<%=detail.photo%>">'+
                        '</div>'+
                        '<div class="piao-count"><%=detail.count%></div>'+
                        '<div class="name"><%=detail.name%>/第<%=detail.session_number%>届</div>'+
                        '<div class="company">'+
                            '<span><%=detail.project%></span>'+
                        '</div>'+
                        '<div class="des"><%=detail.intro%></div>'+
                    '</div>'
	};

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
			var url = window.location.href;
			if(url.indexOf('tou') > 0) {
				this.getDetailTou();
			}else if(url.indexOf('chuang') > 0) {
				this.getDetailChuang();
			}
		},

		getDetailTou : function() {
			var _this = this;

			// var data = {

			// };

			// $.ajax({
		 //        url : '/home/banner',
		 //        type : 'get',
		 //        data : data,
		 //        dataType : 'json',
		 //        success : function(msg) {
		 //            if (msg.code != '0000') {
		 //                return;
		 //            }
		 //            var first = template.compile(tpl.firstPage),
   //              	html = render({data : msg.data[0]});

   //              	var other = template.compile(tpl.otherPage),
   //              	html = render({data : msg.data[0]});
		 //            $('.head-time').append(html);

		 //            _this.bind();
		 //        }
		 	//    });
			var data = {
			    "message": "",
			    "code": 200,
			    "data": {
			        "count": 0,
			        "is_vote": false,
			        "session_number": 1,
			        "uid": 2,
			        "photo": "http://7xpr29.com1.z0.glb.clouddn.com/liuchuanjun.jpg",
			        "project": "美菜",
			        "intro": "中国科学院空间物理学硕士，前窝窝团联合创始人，期望用互联网的方式来改变农业、农村和农民。",
			        "name": "刘传军"
			    }
			};
			var render = template.compile(tpl.detailChuang),
	            html = render({
	            	detail : data.data
	            });
	        $('.content').html(html);
	        _this.bind();
		},

		getDetailChuang : function() {
			var _this = this;

			var data = {
			    "message": "",
			    "code": 200,
			    "data": {
			        "count": 0,
			        "uid": 2,
			        "photo": "http://7xpr29.com1.z0.glb.clouddn.com/chenxin.jpg",
			        "company": "红杉资本",
			        "worker": "投资经理",
			        "is_vote": false,
			        "intro": "关注交易平台、互联网房产及蓝领服务，负责杭州地区，投资项目包括房产销冠、觅食、窝客等。",
			        "name": "陈新"
			    }
			};
			var render = template.compile(tpl.detailTou),
	            html = render({
	            	detail : data.data
	            });
	        $('.content').html(html);
	        _this.bind();
		},

		postTouVote : function(data) {
			var _this = this;

			var data = {
				vote : data
			};
			$.ajax({
		        url : '/home/banner',
		        type : 'post',
		        data : data,
		        dataType : 'json',
		        success : function(msg) {
		            window.reload();
		        }
		 	});
		},

		postChuangVote : function(data) {
			var _this = this;

			var data = {
				vote : data
			};
			$.ajax({
		        url : '/home/banner',
		        type : 'post',
		        data : data,
		        dataType : 'json',
		        success : function(msg) {
		            window.reload();
		        }
		 	});
		},

		bind : function() {
			var _this = this;

		    // 点击投票
		    _this.$touPiao.on('click', function() {
		    	if(_this.piaoStatus == false) {
		    		return;
		    	}else{
		    		var count = Number(_this.$piaoCount.text());
		    		var url = window.location.href;
			    	count++;
			    	_this.$piaoCount.html(count);
			    	if(url.indexOf('tou') > 0) {
						_this.postTouVote(count);
					}else if(url.indexOf('chuang') > 0) {
						_this.postChuangVote(count);
					}
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
});