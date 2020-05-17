
$(function () {
    map();
    function map() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('map_1'));
		var data = [
			{name: "北京", value: 2},
			{name: "吉林", value: 1},
			{name: "河北", value: 1},
			{name: "黑龙江", value: 6}
		];
		//增长因子：演示时数据量小,将数据扩大为inc倍
		var inc = 20
		//省份转换为省会
		var province_to_city = {
			'黑龙江' : '哈尔滨',
			'吉林' : '长春',
			'辽宁' : '沈阳',
			'河北' : '石家庄',
			'河南' : '郑州',
			'山东' : '济南',
			'江苏' : '南京',
			'安徽' : '合肥',
			'浙江' : '杭州',
			'湖北' : '武汉',
			'福建' : '福州',
			'江西' : '南昌',
			'湖南' : '长沙',
			'广东' : '广州',
			'广西壮族自治区' : '南宁',
			'贵州' : '贵阳',
			'四川' : '成都',
			'陕西' : '西安',
			'山西' : '太原',
			'甘肃' : '兰州',
			'云南' : '昆明',
			'宁夏回族自治区' : '银川',
			'新疆维吾尔自治区' : '乌鲁木齐',
			'西藏自治区' : '拉萨',
			'青海' : '西宁',
			'内蒙古自治区' : '呼和浩特',
			'海南' : '海口',
			'北京' : '北京',
			'上海' : '上海',
			'天津' : '天津',
			'重庆' : '重庆',
			'台湾' : '台北',
			'天津' : '天津'
		}
		//省份经纬度
		var geoCoordMap = {
				'黑龙江':[126.63,45.75],
				'吉林':[125.35,43.88],
				'辽宁':[123.38,41.8],
				'山东':[117,36.65],
				'江苏':[118.78,32.04],
				'浙江':[120.19,30.26],
				'安徽':[117.27,31.86],
				'江西':[115.89,28.68],
				'福建':[119.3,26.08],
				'湖北':[114.31,30.52],
				'河南':[113.65,34.76],
				'湖南':[113,28.21],
				'河北':[114.48,38.03],
				'山西':[112.53,37.87],
				'广东':[113.23,23.16],
				'海南':[110.35,20.02],
				'陕西':[108.95,34.27],
				'甘肃':[103.73,36.03],
				'青海':[101.74,36.56],
				'贵州':[106.71,26.57],
				'四川':[104.06,30.67],
				'云南':[102.73,25.04],
				'内蒙古自治区':[111.65,40.82],
				'宁夏回族自治区':[106.27,38.47],
				'新疆维吾尔自治区':[87.68,43.77],
				'西藏自治区':[91.11,29.97],
				'广西藏族自治区':[108.33,22.84],
				'北京':[116.46,39.92],
				'天津':[117.2,39.13],
				'上海':[121.48,31.22],
				'重庆':[106.54,29.59],
				'海门':[121.15,31.89],
		};
		
		//获取数据
		console.log($.ajax({
			url : 'https://www.bigllke.xyz/bigdata/bigMap',
			dataType: 'json',
			async:false
		}).done(function(res){
			console.log(res)
			data = res
		}));
		
		//数据格式转换 api to echarts option
		var convertData = function (data) {
			var res = [];
			for (var i = 0; i < data.length; i++) {
				var geoCoord = geoCoordMap[data[i].name];
				if (geoCoord) {
					res.push({
						name: data[i].name,
						value: geoCoord.concat(data[i].value * inc)
					});
				}
			}
			return res;
		};
		
		//echart option
		option = {
		   // backgroundColor: '#404a59',
		  /***  title: {
				text: '实时行驶车辆',
				subtext: 'data from PM25.in',
				sublink: 'http://www.pm25.in',
				left: 'center',
				textStyle: {
					color: '#fff'
				}
			},**/
			tooltip : {
				trigger: 'item',
				formatter: function (params) {
					s = "";
					if(typeof(params.value)[2] == "undefined"){
					  s += params.name + ' : ' + params.value/inc;
					} else {
						s += params.name + ' : ' + params.value[2]/inc;
					}
					s += '<br />'
					for(var i=0; i<data.length; i++){
						if(data[i].name == params.name){
							info = data[i].info;
							s += info.name + '<br />';
							s += info.subject + '  ' + info.profession +  '<br />';
							s += info.title + '  ' + info.jobtitle + '<br />'; 
							break;
						}
					}	
					return s;
				}
			},
		  
			geo: {
				map: 'china',
				label: {
					emphasis: {
						show: false
					}
				},
				roam: false,//禁止其放大缩小
				itemStyle: {
					normal: {
						areaColor: '#4c60ff',
						borderColor: '#002097'
					},
					emphasis: {
						areaColor: '#293fff'
					}
				}
			},
			series : [
				{
					name: '人数',
					type: 'scatter',
					coordinateSystem: 'geo',
					data: convertData(data),
					symbolSize: function (val) {
						return val[2] / 15;
					},
					label: {
						normal: {
							formatter: '{b}',
							position: 'right',
							show: false
						},
						emphasis: {
							show: true,
						}
					},
					itemStyle: {
						normal: {
							color: '#ffeb7b'
						}
					}
				}
				
				/**
				,
				{
					name: 'Top 5',
					type: 'effectScatter',
					coordinateSystem: 'geo',
					data: convertData(data.sort(function (a, b) {
						return b.value - a.value;
					}).slice(0, 6)),
					symbolSize: function (val) {
						return val[2] / 20;
					},
					showEffectOn: 'render',
					rippleEffect: {
						brushType: 'stroke'
					},
					hoverAnimation: true,
					label: {
						normal: {
							formatter: '{b}',
							position: 'right',
							show: true
						}
					},
					itemStyle: {
						normal: {
							color: '#ffd800',
							shadowBlur: 10,
							shadowColor: 'rgba(0,0,0,.3)'
						}
					},
					zlevel: 1
				}
				**/
			]
		};
		
		//echarts渲染
		console.log(option)
		myChart.setOption(option);
		myChart.on('click', function (params) {
			console.log(params.name)
			window.open('./list/index.html?city='+encodeURI(encodeURI(params.name)))
		})
        window.addEventListener("resize",function(){
            myChart.resize();
        });
		
    }

})

