/**
 * 曲线图形初始化  渲染
 */
$(function () {
    var gateName, monthVal, showStyle;
    showStyle = $("#show_style").val();
    gateName = $("#gate_line").val();
    monthVal = $("#select_month").val();
    console.log(gateName);

    var data = getLineData(gateName, monthVal, showStyle);

    initLine(data);
    initPieOne();
    initPieTwo();

    function initLine(data) {
        var line1 = data.name1;
        var line2 = data.name2;
        var line3 = data.name3;
        var xAxisData = data.xAxisData;
        var open1 = data["2018"].openVal;
        var open2 = data["2019"].openVal;
        var open3 = data["2020"].openVal;
        var stream1 = data["2018"].openVal;
        var stream2 = data["2019"].streamVal;
        var stream3 = data["2020"].streamVal;
        var chart_openLine = echarts.init(document.getElementById("line_open"));
        var chart_streamLine = echarts.init(document.getElementById("line_stream"));
        var option_open = changeOption(line1, line2, line3, xAxisData, open1, open2, open3);
        var option_stream = changeOption(line1, line2, line3, xAxisData, stream1, stream2, stream3);
        console.log(option_open);
        chart_openLine.setOption(option_open);
        chart_streamLine.setOption(option_stream);
        window.addEventListener("resize", function () {
            chart_openLine.resize();
            chart_streamLine.resize();
        });
    }


    //曲线显示方式更改 绑定事件
    $("#show_style").on('change', function () {
        console.log($("#show_style").val())
        if ($("#show_style").val() == "month") {
            $("#select_month").removeAttr("disabled")
        } else {
            $("#select_month").attr("disabled", "disabled");
        }
    });

    //曲线图绑定确定按钮点击事件
    //渲染曲线图
    $("#enter_btn").click(function () {
        showStyle = $("#show_style").val();
        gateName = $("#gate_line").val();
        monthVal = $("#select_month").val();
        console.log(gateName + "," + showStyle + "," + monthVal)
        if (gateName != "" && monthVal != "") {
            var showData = getLineData(gateName, monthVal, showStyle)
            //渲染曲线图形
            if (showData != undefined) {
                initLine(showData)
            } else {
                alert("返回数据为空")
            }
        } else {
            alert("有选项未选择，请重试");
        }
    })

    function changeOption(name1, name2, name3, xAxisData, data1, data2, data3) {
        var option = {
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
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12,
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.2)'
                    }
                },
                data: xAxisData
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
                    data: data1
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
                    data: data2
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
                    data: data3
                }
            ]
        };

        return option;
    }

    function initPieOne() {
        var mydata = getLeftTwo();
        var myChart = echarts.init(document.getElementById('pie1'));
        option = {

            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                position:function(p){   //其中p为当前鼠标的位置
                    return [p[0] + 10, p[1] - 10];
                }
            },
            legend: {
                top: '80%',
                itemWidth: 20,
                itemHeight: 10,
                data:['在线','离线'],
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize:'14',
                }
            },
            color:['#37a2da','#ffd85c'],
            series: [
                {
                    name:'PLC',
                    type:'pie',
                    top:"10%",
                    center: ['50%', '42%'],
                    radius: ['45%', '65%'],
                    label: {show:false},
                    labelLine: {show:false},
                    data:mydata[0]
                }
            ]
        };

        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    function initPieTwo() {
        var mydata = getLeftTwo();
        var myChart = echarts.init(document.getElementById('pie2'));
        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                position:function(p){   //其中p为当前鼠标的位置
                    return [p[0] + 10, p[1] - 10];
                }
            },
            legend: {
                top: '80%',
                itemWidth: 20,
                itemHeight: 10,
                data:['在线','离线'],
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize:'14',
                }
            },
            color:['#37a2da','#ffd85c'],
            series: [
                {
                    name:'DTU',
                    type:'pie',
                    top:"10%",
                    center: ['50%', '42%'],
                    radius: ['45%', '65%'],
                    label: {show:false},
                    labelLine: {show:false},
                    data:mydata[1]
                }
            ]
        };

        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
})

















