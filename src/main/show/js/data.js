/**
 *请求数据获取
 */


//左上1数据
function getLeftOne() {
    var res = "[{area:50, nums:101, onNums:100, ofNums:100, onNow: \"101%\", mangeArea:100}]";
    return eval(res);
}
//左上2数据
function getLeftTwo() {
    var testdata = [[
        {value:50, name:'在线'},
        {value:60, name:'离线'}
    ],[
        {value:40, name:'在线'},
        {value:80, name:'离线'}
    ]];
    return testdata;
}

function getMonitorListInfo() {
    var res = "[";
    res += "{id:1, name:\"拍照\", type: \"拍照\", openingVal: 215, gate:\"闸门1\"},";
    res += "{id:2, name:\"停闸\", type: \"停闸\", openingVal: 215, gate:\"闸门1\"},";
    res += "{id:3, name:\"拍照\", type: \"拍照\", openingVal: 200, gate:\"闸门2\"},";
    res += "{id:4, name:\"停闸\", type: \"停闸\", openingVal: 200, gate:\"闸门2\"},";
    res += "{id:5, name:\"拍照\", type: \"拍照\", openingVal: 500, gate:\"闸门3\"},";
    res += "{id:6, name:\"停闸\", type: \"停闸\", openingVal: 500, gate:\"闸门3\"},";
    res += "{id:7, name:\"拍照\", type: \"拍照\", openingVal: 245, gate:\"闸门4\"},";
    res += "{id:8, name:\"停闸\", type: \"停闸\", openingVal: 245, gate:\"闸门4\"},";
    res += "{id:9, name:\"拍照\", type: \"拍照\", openingVal: 245, gate:\"闸门5\"}";
    res += "]";
    return eval(res);
}

function getMonitorListTitle() {
    var res = ['方案名称', '方案类型', '阀门开度值', '受控闸门', '操作'];
    return res;
}

function getGateListInfo() {
    var res = "[";
    res += "{id:1, name:\"闸门1\", status: \"全部正常\", inflow: 1, cuflow:1},";
    res += "{id:2, name:\"闸门1\", status: \"全部正常\", inflow: 15, cuflow:15},";
    res += "{id:3, name:\"闸门2\", status: \"全部正常\", inflow: 15, cuflow:15},";
    res += "{id:4, name:\"闸门2\", status: \"全部正常\", inflow: 15, cuflow:15},";
    res += "{id:5, name:\"闸门3\", status: \"全部正常\", inflow: 15, cuflow:15},";
    res += "{id:6, name:\"闸门3\", status: \"全部正常\", inflow: 15, cuflow:15},";
    res += "{id:7, name:\"闸门4\", status: \"全部正常\", inflow: 15, cuflow:15},";
    res += "{id:8, name:\"闸门4\", status: \"全部正常\", inflow: 15, cuflow:15},";
    res += "{id:9, name:\"闸门5\", status: \"全部正常\", inflow: 15, cuflow:15}";
    res += "]";
    return eval(res);
}

function getGateListTitle() {
    var res = ['闸门名称', '通讯状态', '累计流量m³', '瞬时流量m³/s', '操作'];
    return res;
}

/**
 *选项动态获取
 */
function getGateSelectData() {
    var res = {
        "管理区一": ["闸门1", "闸门2"],
        "管理区二": ["闸门3", "闸门4", "闸门5"]
    };
    return res;
}

function findGateByName(name) {
    var data = getGateListInfo();
    res = [];
    var pos = 0
    for (var i = 0; i < data.length; i++) {
        console.log(data[i].name)
        console.log(pos)
        if (data[i].name == name)
            res[pos++] = data[i];
    }
    console.log(res)
    return res;
}

//曲线图例名称
var lineName, name1, name2, name3;
name1 = "2018年"
name2 = "2019年"
name3 = "2020年"
lineName = [name1, name2, name3]

//修改代码
/**
 * 返回数据构构造(请求数据)
 * 指定闸门名称，按年展示数据，默认三年每月第一天数据
 * 纵坐标为每月第一天的数据
 * 这里只做两套假数据
 */

/**
 * json格式：
 * {
 *     "2018": {
            openVal: [215, 288, 288, 158, 245, 166, 150, 330, 250, 100, 140, 260],
            streamVal: [215, 288, 288, 158, 245, 166, 150, 330, 250, 100, 140, 260],
        },
        "2019": {
            openVal: [215, 288, 288, 158, 245, 166, 150, 330, 250, 100, 140, 260],
            streamVal: [215, 288, 288, 158, 245, 166, 150, 330, 250, 100, 140, 260],
        },
        "2020": {
            openVal: [215, 288, 288, 158, 245, 166, 150, 330, 250, 100, 140, 260],
            streamVal: [215, 288, 288, 158, 245, 166, 150, 330, 250, 100, 140, 260],
        }
 * }
 */
function getDataByYear(gateName) {
    var openVal1, streamVal1, openVal2, streamVal2, openVal3, streamVal3, xAxisData;
    var openVal4, streamVal4, openVal5, streamVal5, openVal6, streamVal6;
    /**
     * 调用请求
     * @type {number[]}
     */
    openVal1 = [90, 40, 20, 30, 50, 40, 35, 45, 20, 50, 80, 50];
    streamVal1 = [400, 240, 150, 210, 180, 290, 350, 280, 130, 200, 300, 280];
    openVal2 = [20, 60, 40, 70, 60, 50, 70, 20, 40, 55, 60, 30];
    streamVal2 = [412, 320, 466, 300, 140, 208, 340, 260, 300, 200, 150, 250];
    openVal3 = [80, 20, 30, 50, 60, 70, 50, 40, 50, 45, 80, 60];
    streamVal3 = [300, 413, 150, 240, 130, 200, 400, 300, 150, 280, 300, 200];

    openVal4 = [30, 20, 50, 40, 20, 80, 60, 85, 45, 60, 70, 40];
    streamVal4 = [215, 288, 288, 158, 245, 166, 150, 330, 250, 100, 140, 260];
    openVal5 = [50, 70, 30, 20, 50, 60, 40, 70, 20, 30, 60, 50];
    streamVal5 = [314, 213, 405, 200, 103, 150, 266, 310, 142, 218, 350, 300];
    openVal6 = [60, 30, 40, 20, 50, 70, 60, 20, 55, 80, 50, 70];
    streamVal6 = [240, 180, 250, 400, 218, 350, 180, 350, 400, 250, 200, 240];
    xAxisData = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

    var result1 = {
        name1: "2018年",
        name2: "2019年",
        name3: "2020年",
        xAxisData: xAxisData,
        "2018": {
            openVal: openVal1,
            streamVal: streamVal1,
        },
        "2019": {
            openVal: openVal2,
            streamVal: streamVal2,
        },
        "2020": {
            openVal: openVal3,
            streamVal: streamVal3,
        }
    };

    var result2 = {
        name1: "2018年",
        name2: "2019年",
        name3: "2020年",
        xAxisData: xAxisData,
        "2018": {
            openVal: openVal4,
            streamVal: streamVal4,
        },
        "2019": {
            openVal: openVal5,
            streamVal: streamVal5,
        },
        "2020": {
            openVal: openVal6,
            streamVal: streamVal6,
        }
    };

    //简单实现动态
    if (gateName == "闸门1") {
        return result1;
    } else {
        return result2;
    }
}

/**
 * 返回数据构构造(请求数据)
 * 指定闸门名称，按月展示数据
 * 纵坐标为指定月的每天的数据
 * 也是三套假数据
 */
function getDataByMonth(gateName, monthVal) {
    var openVal1, streamVal1, openVal2, streamVal2, openVal3, streamVal3, xAxisData;
    var openVal4, streamVal4, openVal5, streamVal5, openVal6, streamVal6;
    /**
     * 调用请求
     */
    openVal1 = [90, 40, 20, 30, 50, 40, 35, 45, 20, 50, 80, 50];
    streamVal1 = [400, 240, 150, 210, 180, 290, 350, 280, 130, 200, 300, 280];
    openVal2 = [20, 60, 40, 70, 60, 50, 70, 20, 40, 55, 60, 30];
    streamVal2 = [412, 320, 466, 300, 140, 208, 340, 260, 300, 200, 150, 250];
    openVal3 = [80, 20, 30, 50, 60, 70, 50, 40, 50, 45, 80, 60];
    streamVal3 = [300, 413, 150, 240, 130, 200, 400, 300, 150, 280, 300, 200];

    openVal4 = [30, 20, 50, 40, 20, 80, 60, 85, 45, 60, 70, 40];
    streamVal4 = [215, 288, 288, 158, 245, 166, 150, 330, 250, 100, 140, 260];
    openVal5 = [50, 70, 30, 20, 50, 60, 40, 70, 20, 30, 60, 50];
    streamVal5 = [314, 213, 405, 200, 103, 150, 266, 310, 142, 218, 350, 300];
    openVal6 = [60, 30, 40, 20, 50, 70, 60, 20, 55, 80, 50, 70];
    streamVal6 = [240, 180, 250, 400, 218, 350, 180, 350, 400, 250, 200, 240];
    xAxisData = [];

    var month = parseInt(monthVal);
    var num = [1, 3, 5, 7, 8, 10, 12].includes(month) ? 31 : ([4, 6, 9, 11].includes(month) ? 30 : 29)
    for (var i = 1; i <= num; i++) {
        xAxisData.push(monthVal + "/" + i);
    }

    var result1 = {
        name1: "2018年",
        name2: "2019年",
        name3: "2020年",
        xAxisData: xAxisData,
        "2018": {
            openVal: openVal1,
            streamVal: streamVal1,
        },
        "2019": {
            openVal: openVal2,
            streamVal: streamVal2,
        },
        "2020": {
            openVal: openVal3,
            streamVal: streamVal3,
        }
    };

    var result2 = {
        name1: "2018年",
        name2: "2019年",
        name3: "2020年",
        xAxisData: xAxisData,
        "2018": {
            openVal: openVal4,
            streamVal: streamVal4,
        },
        "2019": {
            openVal: openVal5,
            streamVal: streamVal5,
        },
        "2020": {
            openVal: openVal6,
            streamVal: streamVal6,
        }
    };

    //简单实现动态
    if (gateName == "闸门1") {
        return result1;
    } else {
        return result2;
    }
}

/**
 * 通过选项框中的闸门名称 和 日期 决定返回的数据
 * 通过显示方式不同决定日期的查询条件(按年/按月)
 * 日期格式：年/月/日
 */
function getLineData(gateName, monthVal, showStyle) {
    var data;
    if (showStyle == "year") {
        data = getDataByYear(gateName);
    } else if (showStyle == "month") {
        data = getDataByMonth(gateName, monthVal);
    }
    return data;
}

//end

