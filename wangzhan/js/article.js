/**
 * Created by Administrator on 2016/12/15.
 */
var GLOBAL=GLOBAL||{};
$(function(){
	(function(){
		$(".articleheader").load("header.html")
	})();
	(function(){
		$(".img2").click(function(){
		    $(".img1").css({"width":"60px"})
		    $(".img1").animate({"width":"711px"},1000)		
	    })
		var arr=["第一句","第二句","第三句","最后一句"]
		$(".art-lik").click(function(){
			var con=arr[Math.floor(Math.random()*arr.length)];
			$(".articlemove").text(con)
			$(".articlemove").animate({"bottom":"100px","opacity":"1"},500)
			                 .delay(500)
			                 .animate({"left":"-200px","opacity":"0"},500,function(){
			                 	$(".art-lik").animate({"background-position-y":"-73px"},600)
			                 })
		})				
	})();
	(function(){
		
		GLOBAL.articleType=getUrlParams("type");
		GLOBAL.articleid=getUrlParams("articleid");
		loadArticleDate()		
    function loadArticleDate(){
	var aData=articleData[GLOBAL.articleType+GLOBAL.articleid];
	
	$(".title_big").text(aData.data.typeTitle);
	$(".typeEntitle").text(aData.data.typeEntitle);	
	$(".title_list").text(aData.data.title);
	$(".art-tex1").text(aData.data.updateAt);
	$(".art-tex2").text(aData.data.updateByFullName);
	$(".art-img").find("img").attr("src",aData.data.coverImg);
	$("#content").html(aData.data.content);
    }
	   console.log(JSON.stringify(articleData[GLOBAL.articleType+GLOBAL.articleid]));
       function getUrlParams(name){
			var reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)");
			var r=window.location.search.substr(1).match(reg);
			if(r!=null)
			    return r[2];
			else
			    return "";
		}
	})();
	(function(){
		$(".articlefooter").load("footer.html")
	})();
	
})

