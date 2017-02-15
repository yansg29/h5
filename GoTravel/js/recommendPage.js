$(function(){
//	侧边栏
	$(".recommendsidebar").toggle(function(){
		$(this).css("background-position-y","-30px");
		$(".recomshow").animate({"left":"0px"});
	},function(){
		$(this).css("background-position-y","0px");
		$(".recomshow").animate({"left":"-100px"});
	})
//	获取可视区域宽高
    var page=0;
    var screenWidth,screenHeight;
    function resize(){
    screenWidth=$(window).width();
    screenHeight=$(window).height(); 
    $(".recommendWrap").width(screenWidth)
                       .height(screenHeight);
    $(".recommendBox>div").width(screenWidth)
                           .height(screenHeight);
    $(".recommendBox").width(screenWidth)
                       .height($(".recommendWrap>div").length*screenHeight);
    }
    resize();   
    $(window).resize(resize);
//  全屏滚动			
	(function(){
			var isRunning=false;
		function scrollup(){
			if(!isRunning){
				isRunning=true;
				setTimeout(function(){
					isRunning=false;
				},1000);
				console.log("up")
				if(page>0){
				    page--;
				    $(".recommendBox").stop().animate({"top":-page*screenHeight+"px"},500)
			    }
			}	
			
		}
		function scrolldown(){
			if(!isRunning){
				console.log(isRunning)
				isRunning=true;
				setTimeout(function(){
					
					console.log("setTimeout")
					
					isRunning=false;
				},1000);
				
				if(page<$(".recommendBox>div").length-1){
				    page++;
				    $(".recommendBox").stop().animate({"top":-page*screenHeight+"px"},500)
			    }
			}			
		}
		$(document).on("mousewheel DOMMouseScroll",function(e){
			var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
                 (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
			if(!isRunning){
				if(delta>0){
					scrollup();
				}
				else if(delta<0){
					scrolldown();
				}
			}
//			else{
//				setTimeout(function(){
//					isRunning=false;
//				},5000);
//			}
		})
	})();
	(function(){
//		全屏轮播
		var Prev=$(".reban-prev");
		var Next=$(".reban-next");
		var oDivBan=$(".recommend-bannerbox");
		var oBigbox=$(".reban-imgbox");
		var arr=$(".reban-imgbox>img");
		oBigbox.append(arr.first().clone());
		oBigbox.prepend(arr.last().clone());
		arr=$(".reban-imgbox>img");
		arr.width(screenWidth).height(screenHeight);
		oBigbox.width(arr.size()*screenWidth).height(screenHeight);
		oBigbox.css("left",-screenWidth+"px");
		var page1=1;
		$(".reban-ul>li").click(function(){
			var index=$(this).index();
			$(this).addClass("reban-lichangge").siblings().removeClass("reban-lichangge")
			oBigbox.animate({"left":-(index+1)*screenWidth+"px"},300)
		})
		Prev.click(function(){
			page1--;			
			if(page1<1){
				page1=arr.length-2;
				oBigbox.animate({"left":"0px"},300,function(){
					oBigbox.css("left",-(arr.length-2)*screenWidth+"px")
				});
			}
			else{
				oBigbox.animate({"left":-page1*screenWidth+"px"},300);
			}
			$(".reban-ul>li").eq(page1-1).addClass("reban-lichangge").siblings().removeClass("reban-lichangge")
		})
		var next=function(){	
			page1++;
			if(page1>arr.length-2){
				page1=1;
				oBigbox.animate({"left":-(arr.length-1)*screenWidth+"px"},300,function(){
					oBigbox.css("left",-screenWidth+"px")
				});
			}
			else{
				oBigbox.animate({"left":-page1*screenWidth+"px"},300);
			}
			$(".reban-ul>li").eq(page1-1).addClass("reban-lichangge").siblings().removeClass("reban-lichangge")
		}
		Next.click(function(){
			next()
		})
		var timer=setInterval(next,2000);
		$(".recommend-bannerbox").hover(function(){
			clearInterval(timer);
			timer=0;
		},function(){
			timer=setInterval(next,2000);
		})
	})();
	
	//		替换
	var GLOBAL=GLOBAL||{};
	(function(){
    //  日本     
    loadArticleDate1(".recommend-Japan")
    function loadArticleDate1(name){  	
    	$(name).append($(".recommend-Oceania>div").clone());
    	$(name).find(".recommend-title").text(recommendData.Japan.recommend_title);
    	$(name).find(".ocaimg01").attr("src",recommendData.Japan.list[0].coverImg);
        $(name).find(".ocaimg02").attr("src",recommendData.Japan.list[1].coverImg);
        $(name).find(".oca-con2-tex").text(recommendData.Japan.list[1].describe);
        $(name).find(".oc2p-date").text(recommendData.Japan.list[1].date);
        $(name).find(".oc2p-newprice").text(recommendData.Japan.list[1].newprice);
        $(name).find(".oc2p-oldprice").text(recommendData.Japan.list[1].oldprice);
        $(name).find(".ocaimg03").attr("src",recommendData.Japan.list[2].childlist[0].coverImg);
        $(name).find(".oca-con3-tex").text(recommendData.Japan.list[2].childlist[0].describe);
        $(name).find(".oc3p-date").text(recommendData.Japan.list[2].childlist[0].date);
        $(name).find(".oldprice").text(recommendData.Japan.list[2].childlist[0].oldprice);
        $(name).find(".newprice").text(recommendData.Japan.list[2].childlist[0].newprice);
        $(name).find(".ocaimg04").attr("src",recommendData.Japan.list[2].childlist[1].coverImg);
        $(name).find(".oca-con3b-tex").text(recommendData.Japan.list[2].childlist[1].describe);
        $(name).find(".oc3pb-date").text(recommendData.Japan.list[2].childlist[1].date);
        $(name).find(".boldprice").text(recommendData.Japan.list[2].childlist[1].oldprice);
        $(name).find(".bnewprice").text(recommendData.Japan.list[2].childlist[1].newprice);
        console.log(recommendData.Japan.list[2].childlist[1].coverImg)
    }
    //  东南亚    
    loadArticleDate2(".recommend-SoutheastAsia")
    function loadArticleDate2(name){  	
    	$(name).append($(".recommend-Oceania>div").clone());
    	$(name).find(".recommend-title").text(recommendData.SoutheastAsia.recommend_title);
    	$(name).find(".ocaimg01").attr("src",recommendData.SoutheastAsia.list[0].coverImg);
        $(name).find(".ocaimg02").attr("src",recommendData.SoutheastAsia.list[1].coverImg);
        $(name).find(".oca-con2-tex").text(recommendData.SoutheastAsia.list[1].describe);
        $(name).find(".oc2p-date").text(recommendData.SoutheastAsia.list[1].date);
        $(name).find(".oc2p-newprice").text(recommendData.SoutheastAsia.list[1].newprice);
        $(name).find(".oc2p-oldprice").text(recommendData.SoutheastAsia.list[1].oldprice);
        $(name).find(".ocaimg03").attr("src",recommendData.SoutheastAsia.list[2].childlist[0].coverImg);
        $(name).find(".oca-con3-tex").text(recommendData.SoutheastAsia.list[2].childlist[0].describe);
        $(name).find(".oc3p-date").text(recommendData.SoutheastAsia.list[2].childlist[0].date);
        $(name).find(".oldprice").text(recommendData.SoutheastAsia.list[2].childlist[0].oldprice);
        $(name).find(".newprice").text(recommendData.SoutheastAsia.list[2].childlist[0].newprice);
        $(name).find(".ocaimg04").attr("src",recommendData.SoutheastAsia.list[2].childlist[1].coverImg);
        $(name).find(".oca-con3b-tex").text(recommendData.SoutheastAsia.list[2].childlist[1].describe);
        $(name).find(".oc3pb-date").text(recommendData.SoutheastAsia.list[2].childlist[1].date);
        $(name).find(".boldprice").text(recommendData.SoutheastAsia.list[2].childlist[1].oldprice);
        $(name).find(".bnewprice").text(recommendData.SoutheastAsia.list[2].childlist[1].newprice);
    }
    //  西葡    
    loadArticleDate3(".recommend-Hispanic")
    function loadArticleDate3(name){  	
    	$(name).append($(".recommend-Oceania>div").clone());
    	$(name).find(".recommend-title").text(recommendData.Hispanic.recommend_title);
    	$(name).find(".ocaimg01").attr("src",recommendData.Hispanic.list[0].coverImg);
        $(name).find(".ocaimg02").attr("src",recommendData.Hispanic.list[1].coverImg);
        $(name).find(".ocaimg03").attr("src",recommendData.Hispanic.list[2].childlist[0].coverImg);
        $(name).find(".ocaimg04").attr("src",recommendData.Hispanic.list[2].childlist[1].coverImg);
    }
    //  德瑞意     
    loadArticleDate4(".recommend-Ferrell")
    function loadArticleDate4(name){  	
    	$(name).append($(".recommend-Oceania>div").clone());
    	$(name).find(".recommend-title").text(recommendData.Ferrell.recommend_title);
    	$(name).find(".ocaimg01").attr("src",recommendData.Ferrell.list[0].coverImg);
        $(name).find(".ocaimg02").attr("src",recommendData.Ferrell.list[1].coverImg);
        $(name).find(".ocaimg03").attr("src",recommendData.Ferrell.list[2].childlist[0].coverImg);
        $(name).find(".ocaimg04").attr("src",recommendData.Ferrell.list[2].childlist[1].coverImg);
    }
    //  东欧    
    loadArticleDate5(".recommend-EasternEurope")
    function loadArticleDate5(name){  	
    	$(name).append($(".recommend-Oceania>div").clone());
    	$(name).find(".recommend-title").text(recommendData.EasternEurope.recommend_title);
    	$(name).find(".ocaimg01").attr("src",recommendData.EasternEurope.list[0].coverImg);
        $(name).find(".ocaimg02").attr("src",recommendData.EasternEurope.list[1].coverImg);
        $(name).find(".ocaimg03").attr("src",recommendData.EasternEurope.list[2].childlist[0].coverImg);
        $(name).find(".ocaimg04").attr("src",recommendData.EasternEurope.list[2].childlist[1].coverImg);
    }
    //  英国     
    loadArticleDate6(".recommend-Britain")
    function loadArticleDate6(name){  	
    	$(name).append($(".recommend-Oceania>div").clone());
    	$(name).find(".recommend-title").text(recommendData.Britain.recommend_title);
    	$(name).find(".ocaimg01").attr("src",recommendData.Britain.list[0].coverImg);
        $(name).find(".ocaimg02").attr("src",recommendData.Britain.list[1].coverImg);
        $(name).find(".ocaimg03").attr("src",recommendData.Britain.list[2].childlist[0].coverImg);
        $(name).find(".ocaimg04").attr("src",recommendData.Britain.list[2].childlist[1].coverImg);
    }
    //  美国     
    loadArticleDate7(".recommend-America")
    function loadArticleDate7(name){  	
    	$(name).append($(".recommend-Oceania>div").clone());
    	$(name).find(".recommend-title").text(recommendData.America.recommend_title);
    	$(name).find(".ocaimg01").attr("src",recommendData.America.list[0].coverImg);
        $(name).find(".ocaimg02").attr("src",recommendData.America.list[1].coverImg);
        $(name).find(".ocaimg03").attr("src",recommendData.America.list[2].childlist[0].coverImg);
        $(name).find(".ocaimg04").attr("src",recommendData.America.list[2].childlist[1].coverImg);
    }
    //  希腊    
    loadArticleDate8(".recommend-Greece")
    function loadArticleDate8(name){  	
    	$(name).append($(".recommend-Oceania>div").clone());
    	$(name).find(".recommend-title").text(recommendData.Greece.recommend_title);
    	$(name).find(".ocaimg01").attr("src",recommendData.Greece.list[0].coverImg);
        $(name).find(".ocaimg02").attr("src",recommendData.Greece.list[1].coverImg);
        $(name).find(".ocaimg03").attr("src",recommendData.Greece.list[2].childlist[0].coverImg);
        $(name).find(".ocaimg04").attr("src",recommendData.Greece.list[2].childlist[1].coverImg);
    }
     
     
	})();
	(function(){
//		推荐项目
        $(".recom-subjectbox>img").stop().hover(function(){
        	var index=$(this).index();
        	$(this).addClass("subchange").siblings().removeClass("subchange");
        })
	})();
})