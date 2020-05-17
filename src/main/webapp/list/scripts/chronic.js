//获取get参数
(function ($) {
  $.getUrlParam = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
  }
})(jQuery);

function drawList(page_num)
{
  //获取get参数的城市信息
  var city = $.getUrlParam('city')
  if(city==null)return;

  //获取数据
  $.ajax({
    url : 'https://www.bigllke.xyz/bigdata/provinceAndExpert/'+(page_num)+'/10/'+city,
    dataType: 'json',
    async:false
  }).done(function(data){
	if(data.items.length == 0){
		$('#expert_list').append("<tr>暂无专家</tr>");
		return;
	}
	
    //在表格中添加数据
    $('#expert_list').empty();
    for(let i in data.items){
      var s = "<tr>";
      for(let j in data.items[i]){
        s += "<td>" + (data.items[i][j]==null?'暂无':data.items[i][j]) + "</td>";
      }
      s += "</tr>";
      $('#expert_list').append(s);
    }
    //填补空白
    for(i=data.items.length; i< 10; i++){
      $('#expert_list').append('<tr></tr>');
    }
    
    //分页
    $("#pagination").pagination({
        currentPage: page_num,
        totalPage: data.totalPage,
        isShow: true,
        count: 5,
        homePageText: "首页",
        endPageText: "尾页",
        prevPageText: "上一页",
        nextPageText: "下一页",
        callback: function(current) {
            drawList(current)
        }
    });
  });
}

$(function(){
  var Theight = $(window).height() - 260;
  $(".div_any_child").height(Theight);

  drawList(1);
})
