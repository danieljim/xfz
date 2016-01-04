$(document).ready(function() {

	var tpl = {
		first : '<div class="head-rule-img"></div>'+
                '<div class="head-time">'+
                    '<span>投票时间：1月4日－10日</span>'+
                    '<a class="look-rule">查看投票规则</a>'+
                '</div>'+
                '<%for(var i=0;i<list.length;i++){%>'+
                '<ul class="listUl">'+
                    '<li>'+
                        '<div class="photo">'+
                            '<img src="<%=list[i].photo%>">'+
                        '</div>'+
                        '<div class="piao-count">100</div>'+
                        '<div class="name"><%=list[i].name%></div>'+
                        '<div class="company"><%=list[i].company%></div>'+
                        '<div class="position"><%=list[i].position%></div>'+
                    '</li>'+
                '</ul>'+
                '<%}%>'+
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
                '</div>',

		list : 	'<%for(var i=0;i<list.length;i++){%>'+
					'<ul class="listUl">'+
	                    '<li>'+
	                        '<div class="photo">'+
	                            '<img src="<%=list[i].photo%>">'+
	                        '</div>'+
	                        '<div class="piao-count">100</div>'+
	                        '<div class="name"><%=list[i].name%></div>'+
	                        '<div class="company"><%=list[i].company%></div>'+
	                        '<div class="position"><%=list[i].position%></div>'+
	                    '</li>'+
	                '</ul>'+
	            '<%}%>',
		            
	};

	// 投资者事件
	var tou = {

		init : function() {
			this.$swiperWrapper = $('.swiper-wrapper');
			this.$rule = $('.look-rule');
			this.$back = $('.back');
			this.getList();
		},

		getList : function() {
			var _this = this;
			// $.ajax({
		 //        url : '/home/banner',
		 //        type : 'get',
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
						    "code": "0000",
						    "msg": "处理成功",
						    "data": [
						        {
						            "id": 16,
						            "mainTitle": "",
						            "subTitle": "",
						            "photo": "http://spimg.qunarzz.com/gongyu/20150806/qunarbanner_150X60.jpg",
						            "name" : "王东杰",
						            "company":"北京子木投资顾问有限公司",
						            "position":"前端开发"
						        },
						        {
						            "id": 16,
						            "mainTitle": "",
						            "subTitle": "",
						            "photo": "http://spimg.qunarzz.com/gongyu/20150806/qunarbanner_150X60.jpg",
						            "name" : "王东杰",
						            "company":"北京子木投资顾问有限公司",
						            "position":"前端开发"
						        },
						        {
						            "id": 16,
						            "mainTitle": "",
						            "subTitle": "",
						            "photo": "http://spimg.qunarzz.com/gongyu/20150806/qunarbanner_150X60.jpg",
						            "name" : "王东杰",
						            "company":"北京子木投资顾问有限公司",
						            "position":"前端开发"
						        },
						        {
						            "id": 16,
						            "mainTitle": "",
						            "subTitle": "",
						            "photo": "http://spimg.qunarzz.com/gongyu/20150806/qunarbanner_150X60.jpg",
						            "name" : "王东杰",
						            "company":"北京子木投资顾问有限公司",
						            "position":"前端开发"
						        },
						        {
						            "id": 16,
						            "mainTitle": "",
						            "subTitle": "",
						            "photo": "http://spimg.qunarzz.com/gongyu/20150806/qunarbanner_150X60.jpg",
						            "name" : "王东杰",
						            "company":"北京子木投资顾问有限公司",
						            "position":"前端开发"
						        },
						        {
						            "id": 16,
						            "mainTitle": "",
						            "subTitle": "",
						            "photo": "http://spimg.qunarzz.com/gongyu/20150806/qunarbanner_150X60.jpg",
						            "name" : "王东杰",
						            "company":"北京子木投资顾问有限公司",
						            "position":"前端开发"
						        },
						        {
						            "id": 16,
						            "mainTitle": "",
						            "subTitle": "",
						            "photo": "http://spimg.qunarzz.com/gongyu/20150806/qunarbanner_150X60.jpg",
						            "name" : "王东杰",
						            "company":"北京子木投资顾问有限公司",
						            "position":"前端开发"
						        },
						        {
						            "id": 16,
						            "mainTitle": "",
						            "subTitle": "",
						            "photo": "http://spimg.qunarzz.com/gongyu/20150806/qunarbanner_150X60.jpg",
						            "name" : "王东杰",
						            "company":"北京子木投资顾问有限公司",
						            "position":"前端开发"
						        },
						        {
						            "id": 16,
						            "mainTitle": "",
						            "subTitle": "",
						            "photo": "http://spimg.qunarzz.com/gongyu/20150806/qunarbanner_150X60.jpg",
						            "name" : "王东杰",
						            "company":"北京子木投资顾问有限公司",
						            "position":"前端开发"
						        },
						        {
						            "id": 16,
						            "mainTitle": "",
						            "subTitle": "",
						            "photo": "http://spimg.qunarzz.com/gongyu/20150806/qunarbanner_150X60.jpg",
						            "name" : "王东杰",
						            "company":"北京子木投资顾问有限公司",
						            "position":"前端开发"
						        },
						        {
						            "id": 16,
						            "mainTitle": "",
						            "subTitle": "",
						            "photo": "http://spimg.qunarzz.com/gongyu/20150806/qunarbanner_150X60.jpg",
						            "name" : "王东杰",
						            "company":"北京子木投资顾问有限公司",
						            "position":"前端开发"
						        },
						        {
						            "id": 16,
						            "mainTitle": "",
						            "subTitle": "",
						            "photo": "http://spimg.qunarzz.com/gongyu/20150806/qunarbanner_150X60.jpg",
						            "name" : "王东杰",
						            "company":"北京子木投资顾问有限公司",
						            "position":"前端开发"
						        },
						        {
						            "id": 16,
						            "mainTitle": "",
						            "subTitle": "",
						            "photo": "http://spimg.qunarzz.com/gongyu/20150806/qunarbanner_150X60.jpg",
						            "name" : "王东杰",
						            "company":"北京子木投资顾问有限公司",
						            "position":"前端开发"
						        },
						        {
						            "id": 16,
						            "mainTitle": "",
						            "subTitle": "",
						            "photo": "http://spimg.qunarzz.com/gongyu/20150806/qunarbanner_150X60.jpg",
						            "name" : "王东杰",
						            "company":"北京子木投资顾问有限公司",
						            "position":"前端开发"
						        },
						        {
						            "id": 16,
						            "mainTitle": "",
						            "subTitle": "",
						            "photo": "http://spimg.qunarzz.com/gongyu/20150806/qunarbanner_150X60.jpg",
						            "name" : "王东杰",
						            "company":"北京子木投资顾问有限公司",
						            "position":"前端开发"
						        },
						        {
						            "id": 16,
						            "mainTitle": "",
						            "subTitle": "",
						            "photo": "http://spimg.qunarzz.com/gongyu/20150806/qunarbanner_150X60.jpg",
						            "name" : "王东杰",
						            "company":"北京子木投资顾问有限公司",
						            "position":"前端开发"
						        },
						        {
						            "id": 16,
						            "mainTitle": "",
						            "subTitle": "",
						            "photo": "http://spimg.qunarzz.com/gongyu/20150806/qunarbanner_150X60.jpg",
						            "name" : "王东杰",
						            "company":"北京子木投资顾问有限公司",
						            "position":"前端开发"
						        },
						        {
						            "id": 16,
						            "mainTitle": "",
						            "subTitle": "",
						            "photo": "http://spimg.qunarzz.com/gongyu/20150806/qunarbanner_150X60.jpg",
						            "name" : "王东杰",
						            "company":"北京子木投资顾问有限公司",
						            "position":"前端开发"
						        },
						        {
						            "id": 16,
						            "mainTitle": "",
						            "subTitle": "",
						            "photo": "http://spimg.qunarzz.com/gongyu/20150806/qunarbanner_150X60.jpg",
						            "name" : "王东杰",
						            "company":"北京子木投资顾问有限公司",
						            "position":"前端开发"
						        },
						        {
						            "id": 16,
						            "mainTitle": "",
						            "subTitle": "",
						            "photo": "http://spimg.qunarzz.com/gongyu/20150806/qunarbanner_150X60.jpg",
						            "name" : "王东杰",
						            "company":"北京子木投资顾问有限公司",
						            "position":"前端开发"
						        },
						        {
						            "id": 16,
						            "mainTitle": "",
						            "subTitle": "",
						            "photo": "http://spimg.qunarzz.com/gongyu/20150806/qunarbanner_150X60.jpg",
						            "name" : "王东杰",
						            "company":"北京子木投资顾问有限公司",
						            "position":"前端开发"
						        },
						        {
						            "id": 16,
						            "mainTitle": "",
						            "subTitle": "",
						            "photo": "http://spimg.qunarzz.com/gongyu/20150806/qunarbanner_150X60.jpg",
						            "name" : "王东杰",
						            "company":"北京子木投资顾问有限公司",
						            "position":"前端开发"
						        },
						        {
						            "id": 16,
						            "mainTitle": "",
						            "subTitle": "",
						            "photo": "http://spimg.qunarzz.com/gongyu/20150806/qunarbanner_150X60.jpg",
						            "name" : "王东杰",
						            "company":"北京子木投资顾问有限公司",
						            "position":"前端开发"
						        },
						        {
						            "id": 16,
						            "mainTitle": "",
						            "subTitle": "",
						            "photo": "http://spimg.qunarzz.com/gongyu/20150806/qunarbanner_150X60.jpg",
						            "name" : "王东杰",
						            "company":"北京子木投资顾问有限公司",
						            "position":"前端开发"
						        },
						        {
						            "id": 16,
						            "mainTitle": "",
						            "subTitle": "",
						            "photo": "http://spimg.qunarzz.com/gongyu/20150806/qunarbanner_150X60.jpg",
						            "name" : "王东杰",
						            "company":"北京子木投资顾问有限公司",
						            "position":"前端开发"
						        },
						        {
						            "id": 16,
						            "mainTitle": "",
						            "subTitle": "",
						            "photo": "http://spimg.qunarzz.com/gongyu/20150806/qunarbanner_150X60.jpg",
						            "name" : "王东杰",
						            "company":"北京子木投资顾问有限公司",
						            "position":"前端开发"
						        },
						        {
						            "id": 16,
						            "mainTitle": "",
						            "subTitle": "",
						            "photo": "http://spimg.qunarzz.com/gongyu/20150806/qunarbanner_150X60.jpg",
						            "name" : "王东杰",
						            "company":"北京子木投资顾问有限公司",
						            "position":"前端开发"
						        },
						        {
						            "id": 16,
						            "mainTitle": "",
						            "subTitle": "",
						            "photo": "http://spimg.qunarzz.com/gongyu/20150806/qunarbanner_150X60.jpg",
						            "name" : "王东杰",
						            "company":"北京子木投资顾问有限公司",
						            "position":"前端开发"
						        },
						        {
						            "id": 16,
						            "mainTitle": "",
						            "subTitle": "",
						            "photo": "http://spimg.qunarzz.com/gongyu/20150806/qunarbanner_150X60.jpg",
						            "name" : "王东杰",
						            "company":"北京子木投资顾问有限公司",
						            "position":"前端开发"
						        },
						        {
						            "id": 16,
						            "mainTitle": "",
						            "subTitle": "",
						            "photo": "http://spimg.qunarzz.com/gongyu/20150806/qunarbanner_150X60.jpg",
						            "name" : "王东杰",
						            "company":"北京子木投资顾问有限公司",
						            "position":"前端开发"
						        },
						        {
						            "id": 16,
						            "mainTitle": "",
						            "subTitle": "",
						            "photo": "http://spimg.qunarzz.com/gongyu/20150806/qunarbanner_150X60.jpg",
						            "name" : "王东杰",
						            "company":"北京子木投资顾问有限公司",
						            "position":"前端开发"
						        },
						        {
						            "id": 16,
						            "mainTitle": "",
						            "subTitle": "",
						            "photo": "http://spimg.qunarzz.com/gongyu/20150806/qunarbanner_150X60.jpg",
						            "name" : "王东杰",
						            "company":"北京子木投资顾问有限公司",
						            "position":"前端开发"
						        }
						    ]
						} ;
			_this.dealList(data);
		},

		dealList : function(data) {
			var _this = this;
			var listData = data;
			var listArr1 = [data.data[0],data.data[1],data.data[2],data.data[3],data.data[4],data.data[5]];
			var listArr2 = [data.data[6],data.data[7],data.data[8],data.data[9]];
			var listArr3 = [data.data[12],data.data[13],data.data[14]];
			var listArr4 = [data.data[18],data.data[19]];
			var listArr5 = [data.data[24]];
			var listArr6 = [data.data[30]];
			
			// 初始化swiper
		    var swiper = new Swiper('.swiper-container', {
		      	direction: 'vertical',
		      	loop: false,
		      	onInit : function(swiper) {
		      		var first = template.compile(tpl.first),
		                html = first({
		                	list : listArr1
		                });
		            $('.step-1').html(html);
		            _this.bind();
		      	},
		      	onSlideChangeStart: function(swiper){
		      		var id = $('.swiper-slide-active').data('id');
			    	if(id == 1) {
			    		var first = template.compile(tpl.first),
			                html = first({
			                	list : listArr1
			                });
			            $('.step-1').html(html);
			            
			    	}else if(id == 2) {
			    		var first2 = template.compile(tpl.list),
			                html2 = first2({
			                	list : listArr2
			                });
			            $('.step-2').html(html2);
			            
			    	}else if(id == 3) {
			    		var first3 = template.compile(tpl.list),
			                html3 = first3({
			                	list : listArr3
			                });
			            $('.step-3').html(html3);
			            
			    	}else if(id == 4) {
			    		var first4 = template.compile(tpl.list),
			                html4 = first4({
			                	list : listArr4
			                });
			            $('.step-4').html(html4);
			            
			    	}else if(id == 5) {
			    		var first5 = template.compile(tpl.list),
			                html5 = first5({
			                	list : listArr5
			                });
			            $('.step-5').html(html5);
			            
			    	}else if(id == 6) {
			    		var first6 = template.compile(tpl.list),
			                html6 = first6({
			                	list : listArr6
			                });
			            $('.step-6').html(html6);
			            
			    	}
			    	_this.bind();
			    }
		    });
		},

		bind : function() {
			var _this = this;

		    // 点击进入详情
		    this.$swiperWrapper.off().on('click', 'li', function() {
		    	var $self = $(this);
		    	var uid = $self.data('uid');
		    	window.location.href="detail.html?uid="+uid;
		    });

		    this.$rule.off().on('click', function() {
		    	$('.rule').show();
		    	$('.step-1').siblings().hide();
		    	$('.list-1').hide();
		    	$('.head-time').hide();
		    });

		    this.$back.off().on('click',function() {
		    	$('.rule').hide();
		    	$('.step-1').siblings().show();
		    	$('.list-1').show();
		    	$('.head-time').show();
		    })

		}
	};
	tou.init();
});