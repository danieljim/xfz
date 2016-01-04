$(document).ready(function() {

	var tpl = {
		first : '<div class="head-rule-img"></div>'+
                '<div class="head-time">'+
                    '<span>投票时间：1月4日－10日</span>'+
                    '<a class="look-rule">查看投票规则</a>'+
                '</div>'+
                '<ul class="listUl">'+
                    '<li>'+
                        '<div class="photo">'+
                            '<img src="<%=data.photo%>">'+
                        '</div>'+
                        '<div class="piao-count">100</div>'+
                        '<div class="name"><%=data.name%></div>'+
                        '<div class="company"><%=data.company%></div>'+
                        '<div class="position"><%=data.position%></div>'+
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
                '</div>',

		list : '<ul class="listUl">'+
                    '<li>'+
                        '<div class="photo">'+
                            '<img src="<%=data.simgUrl%>">'+
                        '</div>'+
                        '<div class="piao-count">100</div>'+
                        '<div class="name"><%=data.name%></div>'+
                        '<div class="company"><%=data.company%></div>'+
                        '<div class="position"><%=data.position%></div>'+
                    '</li>'+
                '</ul>'
		            
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
			var listArr1 = [data.data[0],data.data[1],data.data[2],data.data[3],data.data[4],data.data[5]];
			var listArr2 = [data.data[6]];
			var listArr3 = [data.data[12]];
			var listArr4 = [data.data[18]];
			var listArr5 = [data.data[24]];
			var listArr6 = [data.data[30]];

			var first = template.compile(tpl.first),
                html = first({data : data.data[0]});
            $('.step-1').html(html);
            this.bind();
		},

		bind : function() {
			var _this = this;
		    // 初始化swiper
		    var swiper = new Swiper('.swiper-container', {
		      	direction: 'vertical',
		      	loop: false,
		      	onSlideChangeStart: function(swiper){
		      		alert($('.swiper-slide').index());
			    	_this.dealList();
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