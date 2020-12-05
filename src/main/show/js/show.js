/**
 *页面渲染
 */

//左上一
function leftOne() {
//左上一 显示文字信息
    var data = getLeftOne();
    var data1 = function (content) {
        this.content = content;
        (function (content) {
            var div = document.createElement('div');
            div.innerHTML = content;
            div.style.color = 'yellowgreen';
            div.style.marginRight="5px"
            document.getElementById('index1').appendChild(div)
        })(content)
    };


    var data2 = function (content) {
        this.content = content;
        (function (content) {
            var div = document.createElement('div');
            div.innerHTML = content;
            div.style.color = 'yellowgreen';
            div.style.marginRight="5px"
            document.getElementById('index2').appendChild(div)
        })(content)
    };


    var data3 = function (content) {
        this.content = content;
        (function (content) {
            var div = document.createElement('div');
            div.innerHTML = content;
            div.style.color = 'rgb(11, 144, 221)';
            div.style.marginRight="5px"
            document.getElementById('index3').appendChild(div)
        })(content)
    };


    var data4 = function (content) {
        this.content = content;
        (function (content) {
            var div = document.createElement('div');
            div.innerHTML = content;
            div.style.color = 'rgb(11, 144, 221)';
            div.style.marginRight="5px"
            document.getElementById('index4').appendChild(div)
        })(content)
    };


    var data6 = function (content) {
        this.content = content;
        (function (content) {
            var div = document.createElement('div');
            div.innerHTML = content;
            div.style.color = 'rgb(11, 144, 221)';
            div.style.marginRight="45px"
            document.getElementById('index6').appendChild(div)
        })(content)
    };


    var data7 = function (content) {
        this.content = content;
        (function (content) {
            var div = document.createElement('div');
            div.innerHTML = content;
            div.style.color = 'rgb(11, 144, 221)';
            document.getElementById('index7').appendChild(div)
        })(content)
    };
    data1(data[0].area)
    data2(data[0].nums)
    data3(data[0].onNums)
    data4(data[0].ofNums)
    data6(data[0].onNow)
    data7(data[0].mangeArea)
}
leftOne()

// 左下3 显示方案列表
function showMonitor()
{
    var title = getMonitorListTitle();
    console.log(title)
    var data = getMonitorListInfo();
    for(var i=0; i<title.length;i++){
        $("#monitor_title").append("<td style=\"color: #00fcff; padding: 5px 0;\">" + title[i] + "</td>");
    }
    for(var i = 0; i < Math.min(data.length,8); i++){
        var new_line = "<tr align='center' class=\"aaa\" >";
        new_line += "<td style=\"color: #ccc; \">" + data[i].name + "</td>";
        new_line += "<td style=\"color: #ccc; \">" + data[i].type + "</td>";
        new_line += "<td style=\"color: #ccc; \">" + data[i].openingVal + "</td>";
        new_line += "<td style=\"color: #ccc; \">" + data[i].gate + "</td>";
        new_line += "<td><button class=\"b2 click_pop2\">执行方案</button><button class=\"b3 click_pop3\">查看结果</button> </td>";
        new_line += "</tr>";
        $("#monitor_list").append(new_line);
    }

}
showMonitor();

// 左上1 显示闸门列表
function showGate()
{
    var title = getGateListTitle();
    console.log(title)
    var data = getGateListInfo();
    for(var i=0; i<title.length;i++){
        $("#gate_title").append("<td style=\"color: #00fcff; padding: 5px 0;\">" + title[i] + "</td>");
    }
    for(var i = 0; i < Math.min(data.length,8); i++){
        var new_line = "<tr align='center' class=\"aaa\" >";
        new_line += "<td style=\"color: #ccc; \">" + data[i].name + "</td>";
        new_line += "<td style=\"color: #ccc; \">" + data[i].status + "</td>";
        new_line += "<td style=\"color: #ccc; \">" + data[i].inflow + "</td>";
        new_line += "<td style=\"color: #ccc; \">" + data[i].cuflow + "</td>";
        new_line += "<td><button class=\"b3 click_pop3\">查看</button> </td>";
        new_line += "</tr>";
        $("#gate_list").append(new_line);
    }
}
showGate();
tableScroll('xxx', 380, 30, 3);

var MyMarhq;
var gate_select;
function GateInit()
{
    //下拉框获取数据，初始化
    var selectinfo = getGateSelectData();
    console.log(selectinfo);
    var data =""
    for(var i in selectinfo){
        console.log(i)
        data = "<optgroup label='" + i + "'>";
        for(var j in selectinfo[i]){
            data += "<option>" + selectinfo[i][j] + "</option>";
        }
        data +="</optgroup>";
        $("#gate_select").append(data)
        $("#gate_line").append(data)
    }

    //月份下拉框内容初始化
    var month = document.getElementById("select_month");
    month.options.length = 0;
    for (var j = 0; j < 12; j++) {
        var textNode = document.createTextNode("" + (j + 1));
        var eleNode = document.createElement("option");
        eleNode.appendChild(textNode);
        month.appendChild(eleNode);
    }

    //表格 绑定确定按钮事件
    $("#gate_button").click(function (){
        var gate_select = $("#gate_input").val();
        var data = findGateByName(gate_select);

        clearTimeout(MyMarhq);
        $("#xxx").css("margin-top", 0);
        $("#xxx tbody").empty();
        for(var i = 0; i < Math.min(data.length,10); i++){
            var new_line = "<tr align='center' class=\"aaa\" >";
            new_line += "<td style=\"color: #ccc; \">" + data[i].name + "</td>";
            new_line += "<td style=\"color: #ccc; \">" + data[i].status + "</td>";
            new_line += "<td style=\"color: #ccc; \">" + data[i].inflow + "</td>";
            new_line += "<td style=\"color: #ccc; \">" + data[i].cuflow + "</td>";
            new_line += "<td><button class=\"b3 click_pop3\">查看</button> </td>";
            new_line += "</tr>";
            $("#gate_list").append(new_line);
        }

    })
}
GateInit();


function tableScroll(tableid, hei, speed, len) {
    clearTimeout(MyMarhq);
    $('#' + tableid).parent().find('.tableid_').remove()
    $('#' + tableid).parent().prepend(
        '<table class="tableid_"><thead bgcolor=\"#0e4ae0\" align=\"center\">' + $('#' + tableid + ' thead').html() + '</thead></table>'
    ).css({
        'position': 'relative',
        'overflow': 'hidden',
        'height': hei + 'px'
    })
    $(".tableid_").find('th').each(function(i) {
        $(this).css('width', $('#' + tableid).find('th:eq(' + i + ')').width());
    });
    $(".tableid_").css({
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'z-index': 9
    })
    $('#' + tableid).css({
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'z-index': 1
    })

    if ($('#' + tableid).find('tbody tr').length > len) {
        $('#' + tableid).find('tbody').html($('#' + tableid).find('tbody').html() + $('#' + tableid).find('tbody').html());
        $(".tableid_").css('top', 0);
        $('#' + tableid).css('top', 0);
        var tblTop = 0;
        var outerHeight = $('#' + tableid).find('tbody').find("tr").outerHeight();

        function Marqueehq() {
            if (tblTop <= -outerHeight * $('#' + tableid).find('tbody').find("tr").length) {
                tblTop = 0;
            } else {
                tblTop -= 1;
            }
            $('#' + tableid).css('margin-top', tblTop + 'px');
            clearTimeout(MyMarhq);
            MyMarhq = setTimeout(function() {
                Marqueehq()
            }, speed);
        }

        MyMarhq = setTimeout(Marqueehq, speed);
        $('#' + tableid).find('tbody').hover(function() {
            clearTimeout(MyMarhq);
        }, function() {
            clearTimeout(MyMarhq);
            if ($('#' + tableid).find('tbody tr').length > len) {
                MyMarhq = setTimeout(Marqueehq, speed);
            }
        })
    }
}