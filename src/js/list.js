$(document).ready(function() {

	var touTpl = {
		first : '<div class="head-rule-img"></div>'+
                '<div class="head-time">'+
                    '<span>投票时间：1月4日－10日</span>'+
                    '<a class="look-rule">查看投票规则</a>'+
                '</div>'+
                '<ul class="listUl">'+
                	'<%for(var i=0;i<list.length;i++){%>'+
                    '<li data-uid="<%=list[i].uid%>">'+
                        '<div class="photo">'+
                            '<img src="<%=list[i].photo%>">'+
                        '</div>'+
                        '<div class="piao-count"><%=list[i].count%></div>'+
                        '<div class="name"><%=list[i].name%></div>'+
                        '<div class="company"><%=list[i].company%></div>'+
                        '<div class="position"><%=list[i].worker%></div>'+
                    '</li>'+
                    '<%}%>'+
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

		list : 	'<ul class="listUl">'+
					'<%for(var i=0;i<list.length;i++){%>'+
	                    '<li data-uid="<%=list[i].uid%>">'+
	                        '<div class="photo">'+
	                            '<img src="<%=list[i].photo%>">'+
	                        '</div>'+
	                        '<div class="piao-count"><%=list[i].count%></div>'+
	                        '<div class="name"><%=list[i].name%></div>'+
	                        '<div class="company"><%=list[i].company%></div>'+
	                        '<div class="position"><%=list[i].worker%></div>'+
	                    '</li>'+
	                '<%}%>'+
	            '</ul>'        
	};
	var chuangTpl = {
		first : '<div class="chuang-title"></div>'+
                '<div class="head-time">'+
                    '<span>投票时间：1月4日－10日</span>'+
                    '<a class="look-rule">查看投票规则</a>'+
                '</div>'+
                '<ul class="listUl">'+
                '<%for(var i=0;i<list.length;i++){%>'+
                    '<li data-uid="<%=list[i].uid%>">'+
                        '<div class="photo">'+
                            '<img src="<%=list[i].photo%>">'+
                        '</div>'+
                        '<div class="piao-count"><%=list[i].count%></div>'+
                        '<div class="name"><%=list[i].name%></div>'+
                        '<div class="company"><%=list[i].project%></div>'+
                        '<div class="position">第<%=list[i].session_number%>届桌友</div>'+
                    '</li>'+
                    '<%}%>'+
                '</ul>'+
                '<div class="rule">'+
                    '<div>'+
                        '<div>参选标准</div>'+
                        '<ul>'+
                            '<li>小饭桌创业课堂的所有正式学员</li>'+
                        '</ul>'+
                    '</div>'+
                    '<div>'+
                        '<div>评选标准</div>'+
                        '<ul>'+
                            '<li>海选阶段：评委会根据候选人在创业课堂表现，项目成长速度以及在桌友中的人气选出50名候选人进入评选%权重</li>'+
                            '<li> 线上投票阶段：线上投票数前10名获得最具人气创业者奖项，将会在小饭桌创业春晚揭晓</li>'+
                        '</ul>'+
                    '</div>'+
                    '<div>'+
                        '<div>投票标准</div>'+
                        '<ul>'+
                            '<li>投票时间：1月4日-1月10日</li>'+
                            '<li>每人只能投一次票</li>'+
                            '<li>如果有恶意刷票等行为，会取消候选资格</li>'+
                        '</ul>'+
                    '</div>'+
                    '<div class="back">立即投票</div>'+
                '</div>',

		list : 	'<ul class="listUl">'+
					'<%for(var i=0;i<list.length;i++){%>'+
	                    '<li data-uid="<%=list[i].uid%>">'+
	                        '<div class="photo">'+
	                            '<img src="<%=list[i].photo%>">'+
	                        '</div>'+
	                        '<div class="piao-count"><%=list[i].count%></div>'+
	                        '<div class="name"><%=list[i].name%></div>'+
	                        '<div class="company"><%=list[i].project%></div>'+
	                        '<div class="position">第<%=list[i].session_number%>届桌友</div>'+
	                    '</li>'+
	                '<%}%>'+
	            '</ul>'        
	};

	// 投资者事件
	var tou = {

		init : function() {
			var url = window.location.href;
			if(url.indexOf('tou') > 0) {
				this.getTouList();
			}else if(url.indexOf('chuang') > 0) {
				this.getChuangList();
			}
			
		},

		getTouList : function() {
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
				    "message": "",
				    "code": 200,
				    "data": [
				        {
				            "count": 0,
				            "uid": 2,
				            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/chenxin.jpg",
				            "company": "红杉资本",
				            "worker": "投资经理",
				            "intro": "关注交易平台、互联网房产及蓝领服务，负责杭州地区，投资项目包括房产销冠、觅食、窝客等。",
				            "name": "陈新"
				        },
				        {
				            "count": 0,
				            "uid": 3,
				            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/chenyingyu.jpg",
				            "company": "险峰长青",
				            "worker": "投资经理",
				            "intro": "关注企业服务、生活服务O2O和跨境电商（出口方向），投资项目包括易快报、壹箱子、仙贝旅行等。",
				            "name": "陈英育"
				        },
				        {
				            "count": 0,
				            "uid": 4,
				            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/chengguo.jpg",
				            "company": "中路资本",
				            "worker": "合伙人",
				            "intro": "关注O2O、B2B领域，投资案例包括正益无线（appcan）、来一火、 指南猫等。",
				            "name": "程果"
				        },
				        {
				            "count": 0,
				            "uid": 5,
				            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/duanyu.jpg",
				            "company": "顺为资本",
				            "worker": "投资经理",
				            "intro": "关注智能硬件、运动健康、新型房产、在线教育，投资项目包括一起作业网、宝宝巴士、华米科技等。",
				            "name": "段誉"
				        },
				        {
				            "count": 0,
				            "uid": 6,
				            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/guminman.jpg",
				            "company": "真格基金",
				            "worker": "投资总监",
				            "intro": "关注女性消费、运动健康、大数据等领域，投资项目包括大姨吗、出门问问、我赢职场、凹凸租车等。",
				            "name": "顾旻曼"
				        },
				        {
				            "count": 0,
				            "uid": 7,
				            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/qiminghuangyu.jpg",
				            "company": "启明创投",
				            "worker": "投资经理",
				            "intro": "长期看好互联网改造传统行业方向，投资项目包括找塑料（A轮）、学霸君（B轮）、现金巴士（A轮）。",
				            "name": "黄宇"
				        },
				        {
				            "count": 0,
				            "uid": 8,
				            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/hongtaihuangyu.jpg",
				            "company": "洪泰基金",
				            "worker": "投资经理",
				            "intro": "负责互联网金融、企业服务以及消费升级领域，投资项目包括易点租、悦装网、优优宝等。",
				            "name": "黄瑀"
				        },
				        {
				            "count": 0,
				            "uid": 9,
				            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/huangyungang.jpg",
				            "company": "经纬创投",
				            "worker": "投资副总裁",
				            "intro": "关注交易平台项目，也就是互联网+，投资项目包括快的打车、口袋购物、猎聘网等。",
				            "name": "黄云刚"
				        },
				        {
				            "count": 0,
				            "uid": 10,
				            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/jiangshun.jpg",
				            "company": "盈动资本",
				            "worker": "合伙人",
				            "intro": "关注金融、文创、体育，已投资项目包括树熊网络、59store、空格等。",
				            "name": "蒋舜"
				        },
				        {
				            "count": 0,
				            "uid": 11,
				            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/kangwensheng.jpg",
				            "company": "创东方投资",
				            "worker": "投资总监",
				            "intro": "关注互联网金融，内部发起成立互联网金融专项投资基金，投资项目包括企查查、众投邦和亿金融。",
				            "name": "康文胜"
				        },
				        {
				            "count": 0,
				            "uid": 12,
				            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/lihaojun.jpg",
				            "company": "纪源资本",
				            "worker": "投资副总裁",
				            "intro": "关注O2O、移动电商、社交，投资项目包括小红书、Keep，典典养车等。",
				            "name": "李浩军"
				        },
				        {
				            "count": 0,
				            "uid": 13,
				            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/lizhanglu.jpg",
				            "company": "红杉资本",
				            "worker": "投资经理",
				            "intro": "关注互联网金融及传统产业升级领域，投资项目包括运满满、云鸟、铜板街。",
				            "name": "李张鲁"
				        },
				        {
				            "count": 0,
				            "uid": 14,
				            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/liuyudong.jpg",
				            "company": "五岳天下",
				            "worker": "投资总监",
				            "intro": "关注电商、视频、社交领域，投资项目包括抹茶美妆、小影和迷橙Ofashion等。",
				            "name": "刘昱东"
				        },
				        {
				            "count": 0,
				            "uid": 15,
				            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/luwei.jpg",
				            "company": "光信资本",
				            "worker": "投资副总裁",
				            "intro": "负责医疗、电商、O2O等方向，投资项目包括河狸家、掌控糖尿病、轻松家电等。",
				            "name": "吕薇"
				        },
				        {
				            "count": 0,
				            "uid": 16,
				            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/lvyuemei.jpg",
				            "company": "源码资本",
				            "worker": "投资经理",
				            "intro": "关注B2B、金融、消费等领域，投资案例包括卡考、格上理财、易酒批等",
				            "name": "吕月梅"
				        },
				        {
				            "count": 0,
				            "uid": 17,
				            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/maoshengye.jpg",
				            "company": "原子创投",
				            "worker": "投资经理",
				            "intro": "关注文化内容、运动健康、汽车后市场领域，投资项目包括爱燃烧、念、抖动文化等。",
				            "name": "卯升晔"
				        },
				        {
				            "count": 0,
				            "uid": 18,
				            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/panxiang.jpg",
				            "company": "光速安振",
				            "worker": "投资经理",
				            "intro": "关注领域包括车、O2O、社交，投资项目包括青云，车101，E代驾，运满满等。",
				            "name": "潘翔"
				        },
				        {
				            "count": 0,
				            "uid": 19,
				            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/pujunchen.jpg",
				            "company": "五岳天下",
				            "worker": "投资总监",
				            "intro": "关注领域B2B，车，房，已投资项目包括斑马王国，车101，车三百等",
				            "name": "蒲俊臣"
				        },
				        {
				            "count": 0,
				            "uid": 20,
				            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/qiubinbin.jpg",
				            "company": "3W基金",
				            "worker": "投资总监",
				            "intro": "关注泛娱乐、消费升级，投资项目有嘟嘟巴士、巢台灯、米花可乐等。",
				            "name": "邱彬彬"
				        },
				        {
				            "count": 0,
				            "uid": 21,
				            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/shinuo.jpg",
				            "company": "华创资本",
				            "worker": "投资经理",
				            "intro": "关注物流、汽车和消费领域的中早期投资，投资项目包括700Bike、物流小秘、美丽来等。",
				            "name": "施诺"
				        },
				        {
				            "count": 0,
				            "uid": 22,
				            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/sunjiecong.jpg",
				            "company": "复星昆仲",
				            "worker": "投资经理",
				            "intro": "关注B2B、O2O等领域，投资项目包括百年建筑网、爱玩主题游、摩贝等。",
				            "name": "孙杰璁"
				        },
				        {
				            "count": 0,
				            "uid": 23,
				            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/wangtianfan.jpg",
				            "company": "贝塔斯曼",
				            "worker": "投资经理",
				            "intro": "关注生活方式、在线教育、房产与汽车，投资项目包括大姨吗，拉勾网，mo9等",
				            "name": "汪天凡"
				        },
				        {
				            "count": 0,
				            "uid": 24,
				            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/wangcongji.jpg",
				            "company": "洪泰基金",
				            "worker": "投资经理",
				            "intro": "关注社交、教育、医疗等方向，投资项目包括逗你学、云阅、UU客等。",
				            "name": "王聪佶"
				        },
				        {
				            "count": 0,
				            "uid": 25,
				            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/wanghongye.jpg",
				            "company": "水木资本",
				            "worker": "投资经理",
				            "intro": "关注领域互联网+及智能制造业，投资项目包括车脉、HouseVR等",
				            "name": "王弘业"
				        },
				        {
				            "count": 0,
				            "uid": 26,
				            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/wangjin.jpg",
				            "company": "华晟资本",
				            "worker": "投资副总裁",
				            "intro": "关注领域文化娱乐、O2O，投资项目包括英雄互娱、同程旅游、英威诺等。",
				            "name": "王津"
				        },
				        {
				            "count": 0,
				            "uid": 27,
				            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/wubinneng.jpg",
				            "company": "险峰长青",
				            "worker": "投资经理",
				            "intro": "关注互联网金融、企业服务，投资案例包括未来研究所、1217驾驶学院、换手率等。",
				            "name": "吴彬能"
				        },
				        {
				            "count": 0,
				            "uid": 28,
				            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/wubingjian.jpg",
				            "company": "联想之星",
				            "worker": "投资副总裁",
				            "intro": "关注IoT与人工智能、互联网教育、农村互联网，投资项目包括作业盒子、学吧教育、欧瑞博等。",
				            "name": "吴炳见"
				        },
				        {
				            "count": 0,
				            "uid": 29,
				            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/xiayu.jpg",
				            "company": "险峰长青",
				            "worker": "投资经理",
				            "intro": "关注泛娱乐、消费升级和新媒体，投资项目包括young美妆、口袋自考、优极等。",
				            "name": "夏宇"
				        },
				        {
				            "count": 0,
				            "uid": 30,
				            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/xiaoyongqiang.jpg",
				            "company": "顺为资本",
				            "worker": "投资经理",
				            "intro": "关注传媒、农村互联网、O2O、智能电视，投资项目包括有米传媒、小站教育和蓝兔子等。",
				            "name": "肖永强"
				        },
				        {
				            "count": 0,
				            "uid": 31,
				            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/yangyang.jpg",
				            "company": "原子创投",
				            "worker": "投资经理",
				            "intro": "关注互联网+、电子商务、在线旅游，投资项目包括水果管家、淘淘特价车、日事清等。",
				            "name": "杨阳"
				        },
				        {
				            "count": 0,
				            "uid": 32,
				            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/yinpeng.jpg",
				            "company": "洪泰基金",
				            "worker": "投资经理",
				            "intro": "关注消费升级、互联网金融、文化、科技类项目，投资项目包括107间、踪视通、悦糖、i烘焙等。",
				            "name": "殷鹏"
				        },
				        {
				            "count": 0,
				            "uid": 33,
				            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/yulu.jpg",
				            "company": "零一创投",
				            "worker": "投资副总裁",
				            "intro": "聚焦企业SaaS，物流行业和互联网消费领域，投资项目包括小满科技、极企科技、车满满等。",
				            "name": "余璐"
				        },
				        {
				            "count": 0,
				            "uid": 34,
				            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/yuyue.jpg",
				            "company": "华创资本",
				            "worker": "投资经理",
				            "intro": "关注领域包括消费升级、企业服务软件等，投资项目包括云报销、智齿科技、玲珑沙龙等。",
				            "name": "余跃"
				        },
				        {
				            "count": 0,
				            "uid": 35,
				            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/yushiying.jpg",
				            "company": "赛富基金",
				            "worker": "投资经理",
				            "intro": "关注娱乐文化、媒体、高科技及企业服务领域，投资项目包括500mi、映客、vShare等。",
				            "name": "俞诗盈"
				        },
				        {
				            "count": 0,
				            "uid": 36,
				            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/zhangxingchen.jpg",
				            "company": "源码资本",
				            "worker": "投资经理",
				            "intro": "关注互联网金融、电商、教育等领域，投资案例包括懒投资、银客网、百布等。",
				            "name": "张星辰"
				        },
				        {
				            "count": 0,
				            "uid": 37,
				            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/zhangxuan.jpg",
				            "company": "天使投资王刚团队",
				            "worker": "投资经理",
				            "intro": "关注互联网金融、B2B、本地消费生活服务，投资项目包括万能小哥、UMU、奇点金融等",
				            "name": "张璇"
				        },
				        {
				            "count": 0,
				            "uid": 38,
				            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/zhaoyang.jpg",
				            "company": "原子创投",
				            "worker": "投资经理",
				            "intro": "专注互联网金融和B2B行业早期投资，投资项目包括西瓜理财、网化信息、宝贝全计划等。",
				            "name": "赵旸"
				        },
				        {
				            "count": 0,
				            "uid": 39,
				            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/zhaozhiyuan .jpg",
				            "company": "峰瑞资本",
				            "worker": "投资经理",
				            "intro": "侧重互联网金融，互联网医疗，以及娱乐和新媒体方向的投资，投资项目包括什马金融、冰鉴、农孵等",
				            "name": "赵治远"
				        },
				        {
				            "count": 0,
				            "uid": 40,
				            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/zhenghao.jpg",
				            "company": "洪泰基金",
				            "worker": "投资经理",
				            "intro": "重点关注消费升级，投资项目包括大V店、宜生到家、人人湘等。",
				            "name": "郑昊"
				        },
				        {
				            "count": 0,
				            "uid": 41,
				            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/zhouqingdi.jpg",
				            "company": "经纬中国",
				            "worker": "投资经理",
				            "intro": "关注文化娱乐、社交以及体育，投资项目包括元气直播、莱可传媒、壹酷文化、橘子娱乐等。",
				            "name": "周清迪"
				        },
				        {
				            "count": 0,
				            "uid": 42,
				            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/zhouxiaoyu.jpg",
				            "company": "晨兴资本",
				            "worker": "投资经理",
				            "intro": "关注金融、保险、B2B、人工智能、区块链等方向,投资项目包括拍拍贷、易到用车、团车网等。",
				            "name": "周啸雨"
				        },
				        {
				            "count": 0,
				            "uid": 43,
				            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/zuwenbo.jpg",
				            "company": "力合清源",
				            "worker": "投资副总监",
				            "intro": "关注文体娱乐、医疗健康、新媒体，投资项目有钛度电竞、爱牙、兰度生物等",
				            "name": "祖文博"
				        }
				    ]
				}
			_this.dealTouList(data);
		},

		getChuangList : function() {
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
					    "message": "",
					    "code": 200,
					    "data": [
					        {
					            "count": 0,
					            "session_number": 1,
					            "uid": 2,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/liuchuanjun.jpg",
					            "project": "美菜",
					            "intro": "中国科学院空间物理学硕士，前窝窝团联合创始人，期望用互联网的方式来改变农业、农村和农民。",
					            "name": "刘传军"
					        },
					        {
					            "count": 0,
					            "session_number": 1,
					            "uid": 3,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/mengbing.jpg",
					            "project": "西少爷",
					            "intro": "毕业于西安交通大学，曾任腾讯百度高级工程师，2014年创立互联网餐饮第一品牌西少爷。",
					            "name": "孟兵"
					        },
					        {
					            "count": 0,
					            "session_number": 1,
					            "uid": 4,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/yangtianrui.jpg",
					            "project": "DreamVR",
					            "intro": "93年生，曾招募团队为微软开发数千款应用。创业做虚拟现实，已获光线传媒系PreA轮融资。",
					            "name": "杨天睿"
					        },
					        {
					            "count": 0,
					            "session_number": 2,
					            "uid": 5,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/sunpeng.jpg",
					            "project": "一米鲜",
					            "intro": "水果生鲜O2O电商领先者一米鲜联合创始人，小饭桌二期学员。",
					            "name": "孙鹏"
					        },
					        {
					            "count": 0,
					            "session_number": 3,
					            "uid": 6,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/jinyechen.jpg",
					            "project": "红沙发RedCouch",
					            "intro": "持有段子手8级证书，资深码字工、搬砖工。如果你觉得他有智慧，那是因为他站在了巨人头顶上。",
					            "name": "金叶宸"
					        },
					        {
					            "count": 0,
					            "session_number": 4,
					            "uid": 7,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/sunjiajun.jpg",
					            "project": "可乐学习",
					            "intro": "清华数学系毕业，可乐学习联合创始人。做过几款教育产品，跑过几次马拉松。听说长得像奥巴马。",
					            "name": "孙佳骏"
					        },
					        {
					            "count": 0,
					            "session_number": 5,
					            "uid": 8,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/heyi.jpg",
					            "project": "偶像计划",
					            "intro": "坐拥800萌妹和鲜肉的连续创业者，梦想帮助更多的\n年轻人实现明星梦，顺便解决下自己的问题~",
					            "name": "何怡"
					        },
					        {
					            "count": 0,
					            "session_number": 5,
					            "uid": 9,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/sungaofeng.jpg",
					            "project": "宅米",
					            "intro": "1993年生，退学创业3次失败，现创办宅米，一年完成四轮融资，融资额数亿，团队人数上千。",
					            "name": "孙高峰"
					        },
					        {
					            "count": 0,
					            "session_number": 6,
					            "uid": 10,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/jinlong.jpg",
					            "project": "租客帮",
					            "intro": "85后连续创业者，做过产品、整过运营、弄过战略、搞过投资、开过公司。",
					            "name": "金龙"
					        },
					        {
					            "count": 0,
					            "session_number": 6,
					            "uid": 11,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/shaxinzhe.jpg",
					            "project": "knewone",
					            "intro": "前苹果三里屯店创始员工，苹果资深专家，目前在做 KnewOne 旗下图片社交项目LESS。",
					            "name": "沙昕哲"
					        },
					        {
					            "count": 0,
					            "session_number": 6,
					            "uid": 12,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/shuxiangguniang.jpg",
					            "project": "乡亲直供 ",
					            "intro": "92年退学创业，融资两轮，历经两年探索农产品社会化电商，以帮助千万农人连接消费者为使命！",
					            "name": "书香姑娘 "
					        },
					        {
					            "count": 0,
					            "session_number": 7,
					            "uid": 13,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/linxiaoxian.jpg",
					            "project": "小仙炖",
					            "intro": "出生于中医世家，毕业于南方医科大学，擅长滋补，立志用互联网的方式传承中国滋补文化。",
					            "name": "林小仙"
					        },
					        {
					            "count": 0,
					            "session_number": 7,
					            "uid": 14,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/lishuai.jpg",
					            "project": "圈子账本",
					            "intro": "前美团首席iOS技术专家，ASO优化专家。带领圈子账本团队成为记账理财领域的后起之秀。\n",
					            "name": "李帅"
					        },
					        {
					            "count": 0,
					            "session_number": 8,
					            "uid": 15,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/leiAmin.jpg",
					            "project": "葱课",
					            "intro": "连续创业者，大三创业“考研日历”，目前100多万用户。14年第二次创业“葱课”。",
					            "name": "雷阿敏"
					        },
					        {
					            "count": 0,
					            "session_number": 8,
					            "uid": 16,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/wujiasi.jpg",
					            "project": "好老师联盟",
					            "intro": "2011年休学回国创业，深耕K12，2015接受险峰投资，即将结束新一轮并开始准备新三板。",
					            "name": "吴佳斯"
					        },
					        {
					            "count": 0,
					            "session_number": 9,
					            "uid": 17,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/luxiaoxu.jpg",
					            "project": "小旭音乐",
					            "intro": "中国游戏音乐第一品牌创始人，二次元音乐社区“音萌”CEO",
					            "name": "卢小旭"
					        },
					        {
					            "count": 0,
					            "session_number": 9,
					            "uid": 18,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/wangsi.jpg",
					            "project": "犀牛小姐",
					            "intro": "一个会焊电路板，会做机器人，也会写代码的工科女汉子，要为中国姑娘们的找到合适的内衣。",
					            "name": "王思"
					        },
					        {
					            "count": 0,
					            "session_number": 9,
					            "uid": 19,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/xiajieming.jpg",
					            "project": "万能小哥",
					            "intro": "万能小哥，一直奔跑在路上的维修小哥，脚步从未停歇。",
					            "name": "夏杰明"
					        },
					        {
					            "count": 0,
					            "session_number": 10,
					            "uid": 20,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/huangxiang.jpg",
					            "project": "法大大",
					            "intro": "法大大创始人，瀛和律师机构联合创始人之一，在律所管理、运营及公司治理方面有丰富经验及资源。",
					            "name": "黄翔"
					        },
					        {
					            "count": 0,
					            "session_number": 11,
					            "uid": 21,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/weibingqing.jpg",
					            "project": "面包求职",
					            "intro": "人大金融学毕业，毕业后就职于红杉资本。面包求职联合创始人兼CEO，获洪泰基金百万天使投资。",
					            "name": "魏冰清"
					        },
					        {
					            "count": 0,
					            "session_number": 12,
					            "uid": 22,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/shenkemin.jpg",
					            "project": "质造",
					            "intro": "85后，四次创业，从一个杯子开始做中国的有印良品，奇葩的获得种子+天使+pre-a轮融资。",
					            "name": "沈克敏"
					        },
					        {
					            "count": 0,
					            "session_number": 12,
					            "uid": 23,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/wangguangzhi.jpg",
					            "project": "对勾",
					            "intro": "93年连续创业者，多年校园市场创业经验。2015年创立兼职平台对勾网，立志改变兼职行业。",
					            "name": "汪广智 "
					        },
					        {
					            "count": 0,
					            "session_number": 13,
					            "uid": 24,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/fanrongchao.jpg",
					            "project": "种瓜得瓜",
					            "intro": "曾就读于卡耐基梅隆大学，硅谷明星创业公司早期员工，荣获小饭桌A轮班最不苦逼创业者称号。",
					            "name": "范荣超"
					        },
					        {
					            "count": 0,
					            "session_number": 13,
					            "uid": 25,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/lumai.jpg",
					            "project": "好物",
					            "intro": "毕业于斯坦福大学的折腾小能手，做过机器人，搞过娱乐业，开过烤鸭店。现在的产品好物是一个场景化居家生活指南。",
					            "name": "鲁迈"
					        },
					        {
					            "count": 0,
					            "session_number": 13,
					            "uid": 26,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/meizijia.jpg",
					            "project": "动网",
					            "intro": "6年世界500强高管工作经历，创立的动网已成为国内唯一提供全项目运动场地及关联服务的平台。",
					            "name": "梅子佳"
					        },
					        {
					            "count": 0,
					            "session_number": 13,
					            "uid": 27,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/pushilin.jpg",
					            "project": "Sales+",
					            "intro": "拥有近十年管理咨询及企业管理经验，现为Sales+CEO，帮助企业实现销售众包。",
					            "name": "蒲世林"
					        },
					        {
					            "count": 0,
					            "session_number": 14,
					            "uid": 28,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/huanghaoming.jpg",
					            "project": "惠租车",
					            "intro": "前携程用车事业部专车平台负责人，电脑之家初创成员，现为惠租车CEO&联合创始人\n",
					            "name": "黄昊鸣"
					        },
					        {
					            "count": 0,
					            "session_number": 14,
					            "uid": 29,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/kuangming.jpg",
					            "project": "掌上糖医",
					            "intro": "毕业于上海交大和剑桥大学。先后任职于英特尔和强生，后创立掌上糖医。",
					            "name": "匡明"
					        },
					        {
					            "count": 0,
					            "session_number": 15,
					            "uid": 30,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/liyuxuan.jpg",
					            "project": "智坐标HUD",
					            "intro": "原高露洁全球电商创始人，美赞臣数字营销高级经理，2015年创业做车联网，车载智能硬件。",
					            "name": "李雨轩"
					        },
					        {
					            "count": 0,
					            "session_number": 15,
					            "uid": 31,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/pengchao.jpg",
					            "project": "极牛",
					            "intro": "极牛创始合伙人，全栈型连续创业者，做过开发、干过市场、做过运营，当过主编的文艺中年。",
					            "name": "彭超"
					        },
					        {
					            "count": 0,
					            "session_number": 16,
					            "uid": 32,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/fuyu.jpg",
					            "project": "轻松家电",
					            "intro": "前深圳刑警，于2014年创办轻松家电，现担任轻松家电VP，负责轻松家电全国运营。",
					            "name": "付裕"
					        },
					        {
					            "count": 0,
					            "session_number": 16,
					            "uid": 33,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/zengyinglong.jpg",
					            "project": "我要",
					            "intro": "93年生的射手男，2015毕业于深圳大学，在深广模特圈打滚了几年，结识了一批新生代男神。",
					            "name": "曾映龙"
					        },
					        {
					            "count": 0,
					            "session_number": 17,
					            "uid": 34,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/wangpu.jpg",
					            "project": "数人云",
					            "intro": "George Mason计算机博士，曾在Google任架构师，2014年回国创立数人科技。",
					            "name": "王璞"
					        },
					        {
					            "count": 0,
					            "session_number": 17,
					            "uid": 35,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/zhangliang.jpg",
					            "project": "LAFAVO",
					            "intro": "北京大学计算机学院毕业，10年餐饮&供应链操盘经验，现为高端餐饮电商LAFAVO创始人。",
					            "name": "张亮"
					        },
					        {
					            "count": 0,
					            "session_number": 18,
					            "uid": 36,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/jianglu.jpg",
					            "project": "程序员客栈",
					            "intro": "宝洁系创业者，程序员客栈合伙人，远程工作拥趸，正在和团队一起打造国内最好用的远程工作平台。",
					            "name": "蒋露"
					        },
					        {
					            "count": 0,
					            "session_number": 19,
					            "uid": 37,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/wanghan.jpg",
					            "project": "希望之地",
					            "intro": "14年追逐游戏梦想，希望之地创始人，试图通过玩家社区帮助更多热爱游戏的人证明他们的力量。",
					            "name": "王瀚"
					        },
					        {
					            "count": 0,
					            "session_number": 19,
					            "uid": 38,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/xudongxu.jpg",
					            "project": "银利普惠",
					            "intro": "曾就职兴业证券、庆余投资，任华南区总裁。现为中小商户大数据金融平台银利普惠CEO。",
					            "name": "徐东旭"
					        },
					        {
					            "count": 0,
					            "session_number": 20,
					            "uid": 39,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/wanliangzhong.jpg",
					            "project": "爱钱帮",
					            "intro": "互联网金融平台爱钱帮的联合创始人。七年公益经验转型互联网金融，是个行业里的热心人。",
					            "name": "万良中"
					        },
					        {
					            "count": 0,
					            "session_number": 20,
					            "uid": 40,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/wubing.jpg",
					            "project": "石墨文档",
					            "intro": "石墨文档创始人，毕业于武大和哥大，毕业后进入纽约巴克莱资本核心技术组，回国后创办石墨文档。",
					            "name": "吴冰"
					        },
					        {
					            "count": 0,
					            "session_number": 21,
					            "uid": 41,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/chenxi.jpg",
					            "project": "垂衣",
					            "intro": "一开始班主任叫我来参加评选我是抗拒的。后来她说只看脸，我就放心了。\n创业，最紧要系开心。",
					            "name": "陈曦"
					        },
					        {
					            "count": 0,
					            "session_number": 21,
					            "uid": 42,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/pangxiaomin.jpg",
					            "project": "屌私型格",
					            "intro": "一个IT宅男，每月竟在衣服上花费数万。创办微信号屌私型格，为近20万男性提供形象消费建议。",
					            "name": "庞晓敏"
					        },
					        {
					            "count": 0,
					            "session_number": 22,
					            "uid": 43,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/liangzhuo.jpg",
					            "project": "Pipex 派贝",
					            "intro": "Monash大学毕业，2015年创立Pipex，打造极致供应链SaaS平台，提倡精益库存。",
					            "name": "梁卓"
					        },
					        {
					            "count": 0,
					            "session_number": 22,
					            "uid": 44,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/zhanjun.jpg",
					            "project": "微众银行",
					            "intro": "项目经历从QQ农场到腾讯开放平台再到国内外银行，目前在国内首家互联网银行消费金融事业部。",
					            "name": "詹俊"
					        },
					        {
					            "count": 0,
					            "session_number": 23,
					            "uid": 45,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/chenangke.jpg",
					            "project": "Focus.Do",
					            "intro": "曾任Amazon总部数据挖掘工程师，Saas项目服务客户包括 Facebook, Microsoft。",
					            "name": "陈盎可"
					        },
					        {
					            "count": 0,
					            "session_number": 23,
					            "uid": 46,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/zhangmingjing.jpg",
					            "project": "Hammer Studio",
					            "intro": "程序猿出身，后进入管理咨询，如今，和小伙伴打磨手游公司“Hammer Studio”。",
					            "name": "张明镜"
					        },
					        {
					            "count": 0,
					            "session_number": 25,
					            "uid": 47,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/luda.jpg",
					            "project": "涓涓互助",
					            "intro": "转基因科研人员、销售总监、媒体主编...20年终于找到了自己的使命——中国人的互助社区。",
					            "name": "鲁达"
					        },
					        {
					            "count": 0,
					            "session_number": 25,
					            "uid": 48,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/wuwendong.jpg",
					            "project": "Will",
					            "intro": "川大毕业的小正太在阿里敲了多年代码，离职后创立游戏化社交平台Will，找回了萌萌哒的自己。",
					            "name": "吴文东"
					        },
					        {
					            "count": 0,
					            "session_number": 26,
					            "uid": 49,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/liyonglong.jpg",
					            "project": "下班约",
					            "intro": "农民工人大代表，多只基金LP。下班约就是让奋斗在流水线上的产业工人的业余生活过得快乐！",
					            "name": "李永龙"
					        },
					        {
					            "count": 0,
					            "session_number": 26,
					            "uid": 50,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/zhangchuwu.jpg",
					            "project": "微美神",
					            "intro": "前腾讯产品经理，电商领域连续创业者，目前在B2B领域希望通过个人微薄的力量为中国电商服务。",
					            "name": "张楚武"
					        },
					        {
					            "count": 0,
					            "session_number": 28,
					            "uid": 51,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/tianjiaxin.jpg",
					            "project": "star理财",
					            "intro": "近十年财富管理经验，曾为杨澜等知名人士提供服务。华尔街财富创始人，star理财联合创始人。",
					            "name": "田佳欣"
					        },
					        {
					            "count": 0,
					            "session_number": 28,
					            "uid": 52,
					            "photo": "http://7xpr29.com1.z0.glb.clouddn.com/zhouyi.jpg",
					            "project": "枪调",
					            "intro": "互联网教育领域里吉他玩的最好的音乐制作人。现创办吉他弹唱在线学习平台枪调。",
					            "name": "周一"
					        }
					    ]
					};
			_this.dealChuangList(data);
		},

		dealTouList : function(data) {
			var _this = this;
			var listData = data;
			var listArr1 = [data.data[0],data.data[1],data.data[2],data.data[3],data.data[4],data.data[5]];
			var listArr2 = [data.data[6],data.data[7],data.data[8],data.data[9],data.data[10],data.data[11],,data.data[12],,data.data[13],,data.data[14]];
			var listArr3 = [data.data[15],data.data[16],data.data[17],data.data[18],data.data[19],data.data[20],data.data[21],data.data[22],data.data[23]];
			var listArr4 = [data.data[24],data.data[25],data.data[26],data.data[27],data.data[28],data.data[29],data.data[30],data.data[31],data.data[32]];
			var listArr5 = [data.data[33],data.data[34],data.data[35],data.data[36],data.data[37],data.data[38],data.data[39],data.data[40],data.data[41]];
			// var listArr6 = [data.data[42],data.data[43],data.data[44],data.data[45],data.data[46],data.data[47],data.data[48],data.data[49],data.data[50]];
			
			// 初始化swiper
		    var swiper = new Swiper('.swiper-container', {
		      	direction: 'vertical',
		      	loop: false,
		      	onInit : function(swiper) {
		      		var first = template.compile(touTpl.first),
		                html = first({
		                	list : listArr1
		                });
		            $('.step-1').html(html);
		            _this.bind();
		      	},
		      	onSlideChangeStart: function(swiper){
		      		var id = $('.swiper-slide-active').data('id');
			    	if(id == 1) {
			    		var first = template.compile(touTpl.first),
			                html = first({
			                	list : listArr1
			                });
			            $('.step-1').html(html);
			            
			    	}else if(id == 2) {
			    		console.log(touTpl.list);
			    		console.log(listArr2);
			    		var first2 = template.compile(touTpl.list),
			                html2 = first2({
			                	list : listArr2
			                });
			            $('.step-2').html(html2);
			            
			    	}else if(id == 3) {
			    		var first3 = template.compile(touTpl.list),
			                html3 = first3({
			                	list : listArr3
			                });
			            $('.step-3').html(html3);
			            
			    	}else if(id == 4) {
			    		var first4 = template.compile(touTpl.list),
			                html4 = first4({
			                	list : listArr4
			                });
			            $('.step-4').html(html4);
			            
			    	}else if(id == 5) {
			    		var first5 = template.compile(touTpl.list),
			                html5 = first5({
			                	list : listArr5
			                });
			            $('.step-5').html(html5);
			            
			    	}else if(id == 6) {
			    		var first6 = template.compile(touTpl.list),
			                html6 = first6({
			                	list : listArr6
			                });
			            $('.step-6').html(html6);
			            
			    	}
			    	_this.bind();
			    }
		    });
		},

		dealChuangList : function(data) {
			var _this = this;
			var listData = data;
			var listArr1 = [data.data[0],data.data[1],data.data[2],data.data[3],data.data[4],data.data[5]];
			var listArr2 = [data.data[6],data.data[7],data.data[8],data.data[9],data.data[10],data.data[11],,data.data[12],,data.data[13],,data.data[14]];
			var listArr3 = [data.data[15],data.data[16],data.data[17],data.data[18],data.data[19],data.data[20],data.data[21],data.data[22],data.data[23]];
			var listArr4 = [data.data[24],data.data[25],data.data[26],data.data[27],data.data[28],data.data[29],data.data[30],data.data[31],data.data[32]];
			var listArr5 = [data.data[33],data.data[34],data.data[35],data.data[36],data.data[37],data.data[38],data.data[39],data.data[40],data.data[41]];
			var listArr6 = [data.data[42],data.data[43],data.data[44],data.data[45],data.data[46],data.data[47],data.data[48],data.data[49],data.data[50]];
			
			// 初始化swiper
		    var swiper = new Swiper('.swiper-container', {
		      	direction: 'vertical',
		      	loop: false,
		      	onInit : function(swiper) {
		      		var first = template.compile(chuangTpl.first),
		                html = first({
		                	list : listArr1
		                });
		            $('.step-1').html(html);
		            _this.bind();
		      	},
		      	onSlideChangeStart: function(swiper){
		      		var id = $('.swiper-slide-active').data('id');
			    	if(id == 1) {
			    		var first = template.compile(chuangTpl.first),
			                html = first({
			                	list : listArr1
			                });
			            $('.step-1').html(html);
			            
			    	}else if(id == 2) {
			    		var first2 = template.compile(chuangTpl.list),
			                html2 = first2({
			                	list : listArr2
			                });
			            $('.step-2').html(html2);
			            
			    	}else if(id == 3) {
			    		var first3 = template.compile(chuangTpl.list),
			                html3 = first3({
			                	list : listArr3
			                });
			            $('.step-3').html(html3);
			            
			    	}else if(id == 4) {
			    		var first4 = template.compile(chuangTpl.list),
			                html4 = first4({
			                	list : listArr4
			                });
			            $('.step-4').html(html4);
			            
			    	}else if(id == 5) {
			    		var first5 = template.compile(chuangTpl.list),
			                html5 = first5({
			                	list : listArr5
			                });
			            $('.step-5').html(html5);
			            
			    	}else if(id == 6) {
			    		var first6 = template.compile(chuangTpl.list),
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
		    $('.swiper-wrapper').off().on('click', 'li', function() {
		    	var $self = $(this);
		    	var uid = $self.data('uid');
		    	window.location.href="detail.html?uid="+uid;
		    });

		    $('.look-rule').off().on('click', function() {
		    	$('.rule').show();
		    	$('.step-1').siblings().hide();
		    	$('.listUl').hide();
		    	$('.head-time').hide();
		    });

		    $('.back').off().on('click',function() {
		    	$('.rule').hide();
		    	$('.step-1').siblings().show();
		    	$('.listUl').show();
		    	$('.head-time').show();
		    })

		}
	};
	tou.init();
});