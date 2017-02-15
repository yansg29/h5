$(function(){
    (function(){
//  	头部
    	$(".index-header").load("header.html")   	
    })();
    (function(){
    	//  	底部
    	$(".index-footer").load("footer.html")
    })();
	(function(){
    //	全部旅游目的地选项卡		
		$(".alltraveldestination>dd").hover(function(){
			$(this).find(".menu").stop(true,true).fadeIn()
		},function(){
			$(this).find(".menu").stop(true,true).fadeOut(1)
		})
	})();
	(function(){
//		轮播图		
		$(".banner").hover(function(){
			$(this).find(".prev").stop().animate({"left":"0px"},300)
			$(this).find(".next").stop().animate({"right":"0px"},300)
		},function(){
			$(this).find(".prev").stop().animate({"left":"-40px"},300)
			$(this).find(".next").stop().animate({"right":"-40px"},300)
		})
		$(".now").hover(function(){
			var index=$(this).index();
			page=index;
			next();
		})				
		var page=0;
		$(".prev").click(function(){
			page--;
			if(page<0){
				page=$(".banimgbox>img").size()-1;
			}
			next()
		})
		$(".next").click(function(){
			page++;
			if(page>$(".banimgbox>img").size()-1){
				page=0;
			}
			next();
		})
		function next(){
			$(".now").eq(page).addClass("banchange").siblings("li").removeClass("banchange")
			$(".banimgbox>img").eq(page).stop(true,true).fadeIn(400).siblings().stop().fadeOut(10)
		}
		var timer=setInterval(function(){
			page++;
			if(page>$(".banimgbox>img").size()-1){
				page=0;
			}
			next();
		},3000);
		$(".banner").hover(function(){
			clearInterval(timer);
			timer=0;
		},function(){
			timer=setInterval(next,3000);
		})
	})();
	(function(){
//		广告轮播图
		$(".adbannav>li").mouseover(function(){
			var index=$(this).index();
			$(this).addClass("adbannav-change").siblings().removeClass("adbannav-change")
			$(".adimgbox>img").eq(index).stop(true,true).fadeIn().siblings().stop().hide()
		})
	})();
	(function(){
//		跟团游选项卡
		$(".ft-nav>dd").click(function(){
			var index=$(this).index();
			var width=$(this).width();
			$(this).addClass("ft-navchange").siblings("dd").removeClass("ft-navchange")	
			
			$(".ft-cont-place").eq(index-1).show().siblings().hide();
		})
		
	})();
	(function(){
//		广告轮播图 - new
		$(".adbannav-new>li").mouseover(function(){
			var index=$(this).index();
			$(this).addClass("adbannav-change")
			       .siblings().removeClass("adbannav-change")
			$(".adimgbox-new>img").eq(index).stop(true,true).fadeIn().siblings().fadeOut(1)
		})
	})();
	(function(){
//		达人点评
		$(".personspeech").click(function(){
			window.open("remark.html");
		})
	})();
})