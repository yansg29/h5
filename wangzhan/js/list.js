/**
 * Created by Administrator on 2016/12/15.
 */
$(function(){
	$(".listheader").load("header.html")
	//内容开始
	$(".img2").click(function(){
		$(".img1").css({"width":"60px"})
		$(".img1").animate({"width":"1000px"},1000)		
	})
    $(".con-ul").delegate(".content_one","click",function(){
    	window.open("article.html?type=xiaoniaoNews&articleid="
    	+$(this).attr("articleid"))
    })
	var pageTimes=0;
	$(".con-ul").html("")
	loadlistData()
	$(".list-more").click(function(){
		pageTimes++;
		loadlistData()
	})
	function loadlistData(){		
		var list=listData["listData0"+pageTimes]
//		list.js:25 Uncaught TypeError: Cannot read property 'success' of undefined
		if(!list || !list.data.list.length){
			return;
		    }
		if(list.success=="成功"){			
			var data=list.data;
			var arrlist=data.list;
			for(var i=0;i<arrlist.length;i++){
				var itemHtml=$("#itemHtml").html()
				itemHtml=itemHtml.replace("$articleCover$",arrlist[i].coverImg)
				      .replace("$articleTitle$",arrlist[i].title)
				      .replace("$updateTime$",arrlist[i].creatAt)
				      .replace("$describe$",arrlist[i].describe)
				      .replace("$articleId$",arrlist[i].sysId)
				 $(".con-ul").append(itemHtml);                
			}				
			var count=data.count;
			var pagesize=data.pageSize;
			var pagestart=data.pageStart;
			if(Math.floor(count/pagesize)==pagestart){
				$(".list-more").css("opacity","0.3")
				$(".list-more").prev().attr("src","images/list_gomore_bg_nomore.jpg")
			}else{
				//还有数据可以加载
			}
		}
	}
	//内容结束
	$(".listfooter").load("footer.html")
	$(".listback").load("backtop.html")
})
