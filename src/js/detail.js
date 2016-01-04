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
                    '</div>'+
                    '<div class="piao-button">'+
                        '<span class="tou-piao" data-status="<%=detail.is_vote%>">立即投票</span>'+
                        '<span class="bang-piao">帮忙投票</span>'+
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
	                    '</div>'+
	                    '<div class="piao-button">'+
	                        '<span class="tou-piao" data-status="0">立即投票</span>'+
	                        '<span class="bang-piao">帮忙投票</span>'+
	                    '</div>'
	};

	// 创业者事件
	var chuang = {
		init : function() {
			this.piaoStatus = true;
			
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
	        // 投过之后就不再进行投票了
			if($('.tou-piao').data('status') == true) {
				$('.tou-piao').css({
					'background' : '#ccc'
				}).html('已投票');
				this.piaoStatus = false;
			}
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
	        // 投过之后就不再进行投票了
			if($('.tou-piao').data('status') == true) {
				$('.tou-piao').css({
					'background' : '#ccc'
				}).html('已投票');
				this.piaoStatus = false;
			}
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
		    $('.tou-piao').on('click', function() {
		    	if(_this.piaoStatus == false) {
		    		return;
		    	}else{
		    		var count = Number($('.piao-count').text());
		    		var url = window.location.href;
			    	count++;
			    	$('.piao-count').html(count);
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
		    $('.bang-piao').on('click', function(event) {
		    	event.preventDefault();
		    	event.stopPropagation();
		    	$('.share').show();
		    });

		    // 取消分享mask
		    $(document).on('click', function() {
		    	$('.share').hide();
		    });

		    // 返回首页
		   	$('.back-home').on('click', function() {
		    	window.location.href="../../index.html";
		    });

		    // 查看其它人
		    $('.other-person').on('click', function() {
		    	var url = window.location.href;
		   		if(url.indexOf('tou') > 0) {
					window.location.href="list.html?from=tou";
				}else if(url.indexOf('chuang') > 0) {
					window.location.href="list.html?from=chuang";
				}
		    });
		}
	}

	chuang.init();
});