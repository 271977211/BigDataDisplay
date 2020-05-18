var host ="https://www.bigllke.xyz/bigdata";
$(function () {
    echarts_1();
    echarts_2();
    echarts_31();
    echarts_32();
    echarts_33();
    echarts_41();
    echarts_42();
    echarts_43();
    echarts_5();
    echarts_6();

    function echarts_1() {
        var xAxis, yAxis;
        $.ajax({
            type: "GET",
            url: host + "/authority",
            dataType: "JSON",
            async: false,
            success: function (data) {
                console.log(data);
                xAxis = data.location;
                yAxis = data.nums;
            },
            error: function (jqXHR) {
                alert("发生错误1：" + jqXHR.status);
            }
        });

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));

        option = {
            //  backgroundColor: '#00265f',
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '0%',
                top: '10px',
                right: '0%',
                bottom: '4%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: xAxis,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 1,
                        type: "solid"
                    },
                },

                axisTick: {
                    show: false,
                },
                axisLabel: {
                    interval: 0,
                    // rotate:50,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
                },
            }],
            yAxis: [{
                type: 'value',
                axisLabel: {
                    //formatter: '{value} %'
                    show: true,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1	)",
                        width: 1,
                        type: "solid"
                    },
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                    }
                }
            }],
            series: [
                {
                    type: 'bar',
                    data: yAxis,
                    barWidth: '35%', //柱子宽度
                    // barGap: 1, //柱子之间间距
                    itemStyle: {
                        normal: {
                            color: '#2f89cf',
                            opacity: 1,
                            barBorderRadius: 5,
                        }
                    }
                }

            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        myChart.on('click', function (params) {
            console.log(params.name)
            window.open('./list/index.html?type=user&authority=' + encodeURI(encodeURI(params.name)))
        })
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }


    function echarts_2() {
        var xAxis, yAxis;
        $.ajax({
            type: "GET",
            url: host + "/provincial",
            dataType: "JSON",
            async: false,
            success: function (data) {
                console.log(data);
                xAxis = data.provincial;
                yAxis = data.nums;
            },
            error: function (jqXHR) {
                alert("发生错误2：" + jqXHR.status);
            }
        });

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));

        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {type: 'shadow'}
            },
            grid: {
                left: '0%',
                top: '10px',
                right: '0%',
                bottom: '4%',
                containLabel: true
            },
            dataZoom: [
                {
                    show: false,
                    id: 'dataZoomX',
                    type: 'slider',
                    xAxisIndex: [0],
                    filterMode: 'filter',
                    startValue: 0,
                    endValue: 10,
                },
                {
                    show: false,
                    id: 'dataZoomY',
                    type: 'slider',
                    yAxisIndex: [0],
                    filterMode: 'empty'
                },
                {
                    type: 'inside',
                    realtime: true
                }
            ],
            xAxis: [{
                type: 'category',
                data: xAxis,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 1,
                        type: "solid"
                    },
                },

                axisTick: {
                    show: false,
                },
                axisLabel: {
                    interval: 0,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
                },
            }],
            yAxis: [{
                type: 'value',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    }
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1	)",
                        width: 1,
                        type: "solid"
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                    }
                }
            }],
            series: [
                {
                    type: 'bar',
                    data: yAxis,
                    barWidth: '35%', //柱子宽度
                    // barGap: 1, //柱子之间间距
                    itemStyle: {
                        normal: {
                            color: '#27d08a',
                            opacity: 1,
                            barBorderRadius: 5,
                        }
                    }
                }

            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        myChart.on('click', function (params) {
            console.log(params.name)
            window.open('./list/index.html?type=expert&city=' + encodeURI(encodeURI(params.name)))
        })
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echarts_5() {
        var yAxis1, yAxis2;
        $.ajax({
            type: "GET",
            url: host + "/technologyTopN",
            dataType: "JSON",
            async: false,
            success: function (data) {
                console.log(data);
                yAxis1 = data.technology;
                yAxis2 = data.nums;
            },
            error: function (jqXHR) {
                alert("发生错误6：" + jqXHR.status);
            }
        });

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart5'));

        option = {
            title: {},
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: []
            },
            grid: {
                left: '2%',
                top: '10px',
                right: '0%',
                bottom: '4%',
                containLabel: true
            },
            xAxis: {
                show: false,
                type: 'value'
            },
            yAxis: [{
                type: 'category',
                inverse: true,
                axisLine: {
                    show: false
                },
                axisLabel: {
                    interval: 0,
                    show: true,
                    textStyle: {
                        align: "right",
                        color: "rgba(255,255,255,.6)",
                        fontSize: '16'
                    }
                },
                axisTick: {
                    show: false,
                },
                data: yAxis1
            }, {
                type: 'category',
                inverse: true,
                axisLine: {
                    show: false,
                },
                axisLabel: {
                    interval: 0,
                    show: true,
                    textStyle: {
                        align: "left",
                        color: "rgba(255,255,255,.6)",
                        fontSize: '16'
                    }
                },
                axisTick: {
                    show: false,
                },
                data: yAxis2
            }],
            series: [
                {
                    name: '点击量',
                    type: 'bar',
                    data: yAxis2,
                    barWidth: '50%', //柱子宽度
                    // barGap: 1, //柱子之间间距
                    itemStyle: {
                        normal: {
                            //每根柱子颜色设置
                            color: function (params) {
                                var _this = this;
                                let colorList = [
                                    ['#065aab', '#066eab'],
                                    ["#4186EC", "#3AB3FB"],
                                    ['#0682ab', '#0696ab'],
                                    ["#1AA291", "#1AA291"],
                                    ["#00C0DD", "#00C0DD"],
                                    ['#06c8ab', '#06dcab'],
                                    ["#FEB763", "#F9CF9E"],
                                    ["#E56E6E", "#EFA4A4"]
                                ];
                                var index = params.dataIndex;
                                return {
                                    colorStops: [
                                        {
                                            offset: 0.8, //颜色的开始位置
                                            color: colorList[index][0] // 0% 处的颜色
                                        },
                                        {
                                            offset: 0, //颜色的结束位置
                                            color: colorList[index][1] // 100% 处的颜色
                                        }
                                    ]
                                };
                            },
                            opacity: 1,
                            barBorderRadius: 50,
                        }
                    }
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echarts_6() {
        var yAxis1, yAxis2, yAxis3, name1, name2, name3;
        $.ajax({
            type: "GET",
            url: host + "/technologyNum",
            dataType: "JSON",
            async: false,
            success: function (data) {
                console.log(data);
                var year = parseInt(new Date().getFullYear());
                yAxis1 = data[String(year - 2)];
                yAxis2 = data[String(year - 1)];
                yAxis3 = data[String(year)]
                name1 = String(year - 2) + "年";
                name2 = String(year - 1) + "年";
                name3 = String(year) + "年";

            },
            error: function (jqXHR) {
                alert("发生错误6：" + jqXHR.status);
            }
        });

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart6'));

        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#dddc6b'
                    }
                }
            },
            legend: {
                top: '0%',
                data: [name1, name2, name3],
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '12',
                }
            },
            grid: {
                left: '10',
                top: '30',
                right: '10',
                bottom: '10',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12,
                    },
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.2)'
                    }
                },
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
            }, {
                axisPointer: {show: false},
                axisLine: {show: false},
                position: 'bottom',
                offset: 20,
            }],
            yAxis: [{
                type: 'value',
                axisTick: {show: false},
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12,
                    },
                },

                splitLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                }
            }],
            series: [
                {
                    name: name1,
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 5,
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            color: '#0184d5',
                            width: 2
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(1, 132, 213, 0.4)'
                            }, {
                                offset: 0.8,
                                color: 'rgba(1, 132, 213, 0.1)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#0184d5',
                            borderColor: 'rgba(221, 220, 107, .1)',
                            borderWidth: 12
                        }
                    },
                    data: yAxis1
                },
                {
                    name: name2,
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 5,
                    showSymbol: false,
                    lineStyle: {

                        normal: {
                            color: '#00d887',
                            width: 2
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(0, 216, 135, 0.4)'
                            }, {
                                offset: 0.8,
                                color: 'rgba(0, 216, 135, 0.1)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#00d887',
                            borderColor: 'rgba(221, 220, 107, .1)',
                            borderWidth: 12
                        }
                    },
                    data: yAxis2
                },
                {
                    name: name3,
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 5,
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            color: "#F9CF9E",
                            width: 2
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(1, 132, 213, 0.4)'
                            }, {
                                offset: 0.8,
                                color: 'rgba(1, 132, 213, 0.1)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: "#F9CF9E",
                            borderColor: 'rgba(221, 220, 107, .1)',
                            borderWidth: 12
                        }
                    },
                    data: yAxis3
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echarts_31() {
        var pieData;
        var names = [];
        $.ajax({
            type: "GET",
            url: host + "/age",
            dataType: "JSON",
            async: false,
            success: function (data) {
                console.log(data);
                pieData = data;
                for (var i = 0; i < data.length; i++) {
                    names.push(data[i].name)
                }
            },
            error: function (jqXHR) {
                alert("发生错误：" + jqXHR.status);
            }
        });

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('lpie_1'));
        option = {

            title: [{
                text: '年龄分布',
                left: 'center',
                textStyle: {
                    color: '#fff',
                    fontSize: '16'
                }

            }],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                position: function (p) {   //其中p为当前鼠标的位置
                    return [p[0] + 10, p[1] - 10];
                }
            },
            legend: {
                top: '70%',
                itemWidth: 10,
                itemHeight: 10,
                data: names,
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '12',
                }
            },
            series: [
                {
                    name: '年龄分布',
                    type: 'pie',
                    center: ['50%', '42%'],
                    radius: ['40%', '60%'],
                    color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab', '#06b4ab', '#06c8ab', '#06dcab', '#06f0ab'],
                    label: {show: false},
                    labelLine: {show: false},
                    data: pieData
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        myChart.on('click', function (params) {
            console.log(params.name)
            //parseInt()
            var str = params.name
            var beginage, endage;
            if (str.indexOf("-") != -1) {
                beginage = parseInt(str.substring(0, str.indexOf("-")));
                endage = parseInt(str.substring(str.indexOf("-") + 1, str.length))
                console.log(beginage)
                console.log(endage)
            } else if (str.indexOf("上") != -1) {
                beginage = parseInt(str)
                endage = 200;
                console.log(beginage)
            } else if (str.indexOf("下") != -1) {
                beginage = 0
                endage = parseInt(str);
                console.log(endage)
            }
            window.open('./list/index.html?type=expert&beginage=' + beginage + '&endage=' + endage)
        })
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echarts_32() {
        var pieData;
        var names = [];
        $.ajax({
            type: "GET",
            url: host + "/subject",
            dataType: "JSON",
            async: false,
            success: function (data) {
                console.log(data);
                pieData = data;
                for (var i = 0; i < data.length; i++) {
                    names.push(data[i].name)
                }
            },
            error: function (jqXHR) {
                alert("发生错误：" + jqXHR.status);
            }
        });

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('lpie_2'));
        option = {

            title: [{
                text: '学科分布',
                left: 'center',
                textStyle: {
                    color: '#fff',
                    fontSize: '16'
                }

            }],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                position: function (p) {   //其中p为当前鼠标的位置
                    return [p[0] + 10, p[1] - 10];
                }
            },
            legend: {

                top: '70%',
                itemWidth: 10,
                itemHeight: 10,
                data: names,
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '12',
                }
            },
            series: [
                {
                    name: '学科分布',
                    type: 'pie',
                    center: ['50%', '42%'],
                    radius: ['40%', '60%'],
                    color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab', '#06b4ab', '#06c8ab', '#06dcab', '#06f0ab'],
                    label: {show: false},
                    labelLine: {show: false},
                    data: pieData
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        myChart.on('click', function (params) {
            console.log(params.name)
            window.open('./list/index.html?type=expert&subject=' + encodeURI(encodeURI(params.name)))
        })
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echarts_33() {
        var pieData;
        var names = [];
        $.ajax({
            type: "GET",
            url: host + "/leftProfessionalDistribution",
            dataType: "JSON",
            async: false,
            success: function (data) {
                console.log(data);
                pieData = data;
                for (var i = 0; i < data.length; i++) {
                    names.push(data[i].name)
                }
            },
            error: function (jqXHR) {
                alert("发生错误：" + jqXHR.status);
            }
        });

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('lpie_3'));
        option = {
            title: [{
                text: '专业分布',
                left: 'center',
                textStyle: {
                    color: '#fff',
                    fontSize: '16'
                }

            }],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                position: function (p) {   //其中p为当前鼠标的位置
                    return [p[0] + 10, p[1] - 10];
                }
            },
            legend: {
                top: '70%',
                itemWidth: 10,
                itemHeight: 10,
                data: names,
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '12',
                }
            },
            series: [
                {
                    name: '专业分布',
                    type: 'pie',
                    center: ['50%', '42%'],
                    radius: ['40%', '60%'],
                    color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab', '#06b4ab', '#06c8ab', '#06dcab', '#06f0ab'],
                    label: {show: false},
                    labelLine: {show: false},
                    data: pieData
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        myChart.on('click', function (params) {
            console.log(params.name)
            window.open('./list/index.html?type=expert&profession=' + encodeURI(encodeURI(params.name)))
        })
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echarts_41() {
        var pieData;
        var names = [];
        $.ajax({
            type: "GET",
            url: host + "/disciplineDistribution",
            dataType: "JSON",
            async: false,
            success: function (data) {
                console.log(data);
                pieData = data;
                for (var i = 0; i < data.length; i++) {
                    names.push(data[i].name)
                }
            },
            error: function (jqXHR) {
                alert("发生错误：" + jqXHR.status);
            }
        });

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('rpie_1'));
        option = {

            title: [{
                text: '学科分布',
                left: 'center',
                textStyle: {
                    color: '#fff',
                    fontSize: '16'
                }

            }],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                position: function (p) {   //其中p为当前鼠标的位置
                    return [p[0] + 10, p[1] - 10];
                }
            },
            legend: {

                top: '70%',
                itemWidth: 10,
                itemHeight: 10,
                data: names,
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '12',
                }
            },
            series: [
                {
                    name: '学科分布',
                    type: 'pie',
                    center: ['50%', '42%'],
                    radius: ['40%', '60%'],
                    color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab', '#06b4ab', '#06c8ab', '#06dcab', '#06f0ab'],
                    label: {show: false},
                    labelLine: {show: false},
                    data: pieData
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        myChart.on('click', function (params) {
            console.log(params.name)
            window.open('./list/index.html?type=result&subject=' + encodeURI(encodeURI(params.name)))
        })
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echarts_42() {
        var pieData;
        var names = [];
        $.ajax({
            type: "GET",
            url: host + "/professionalDistribution",
            dataType: "JSON",
            async: false,
            success: function (data) {
                console.log(data);
                pieData = data;
                for (var i = 0; i < data.length; i++) {
                    names.push(data[i].name)
                }
            },
            error: function (jqXHR) {
                alert("发生错误：" + jqXHR.status);
            }
        });

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('rpie_2'));
        option = {

            title: [{
                text: '专业分布',
                left: 'center',
                textStyle: {
                    color: '#fff',
                    fontSize: '16'
                }

            }],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                position: function (p) {   //其中p为当前鼠标的位置
                    return [p[0] + 10, p[1] - 10];
                }
            },
            legend: {

                top: '70%',
                itemWidth: 10,
                itemHeight: 10,
                data: names,
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '12',
                }
            },
            series: [
                {
                    name: '专业分布',
                    type: 'pie',
                    center: ['50%', '42%'],
                    radius: ['40%', '60%'],
                    color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab', '#06b4ab', '#06c8ab', '#06dcab', '#06f0ab'],
                    label: {show: false},
                    labelLine: {show: false},
                    data: pieData
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        myChart.on('click', function (params) {
            console.log(params.name)
            window.open('./list/index.html?type=result&profession=' + encodeURI(encodeURI(params.name)))
        })
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echarts_43() {
        var pieData;
        var names = [];
        $.ajax({
            type: "GET",
            url: host + "/specialDistribution",
            dataType: "JSON",
            async: false,
            success: function (data) {
                console.log(data);
                pieData = data;
                for (var i = 0; i < data.length; i++) {
                    names.push(data[i].name)
                }
            },
            error: function (jqXHR) {
                alert("发生错误：" + jqXHR.status);
            }
        });

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('rpie_3'));
        option = {
            title: [{
                text: '专项',
                left: 'center',
                textStyle: {
                    color: '#fff',
                    fontSize: '16'
                }

            }],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                position: function (p) {   //其中p为当前鼠标的位置
                    return [p[0] + 10, p[1] - 10];
                }
            },
            legend: {
                top: '70%',
                itemWidth: 10,
                itemHeight: 10,
                data: names,
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '12',
                }
            },
            series: [
                {
                    name: '专项',
                    type: 'pie',
                    center: ['50%', '42%'],
                    radius: ['40%', '60%'],
                    color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab', '#06b4ab', '#06c8ab', '#06dcab', '#06f0ab'],
                    label: {show: false},
                    labelLine: {show: false},
                    data: pieData
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        myChart.on('click', function (params) {
            console.log(params.name)
            window.open('./list/index.html?type=result&special=' + encodeURI(encodeURI(params.name)))
        })
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    //加载人数
    $.ajax({
        type: "GET",
        url: host + "/intermediateInformation",
        dataType: "JSON",
        async: false,
        success: function (data) {
            console.log(data);
            expertsNum = data.expertsNum;
            technologyNum = data.technologyNum;
            $("#technologyNum").append(technologyNum);
            $("#expertsNum").append(expertsNum);

        }
    });
})



		
		
		


		









