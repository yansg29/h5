$(function(){
	$(".remarkheader").load("header.html");
	$(".remarkfooter").load("footer.html");
	(function(){
//		瀑布流加载
        var pageTimes=0;
        $(".loading").click(function(){
		    pageTimes++;
		    loadremarkData()
	    })
		function loadremarkData(){	
		var remark=remarkData["remarkData0"+pageTimes]
		if(!remark){
			$(".loading").css("opacity","0.5");
			alert("没有更多评论了!")
		}else{
		    var itemHtml=$("#itemHtml").html()
		    itemHtml=itemHtml.replace("$remarkimgCover$",remark.coverImg)
				             .replace("$describe$",remark.describe)
		    $(".remarkBox").append(itemHtml); 
		  }
		}
	})();	
})