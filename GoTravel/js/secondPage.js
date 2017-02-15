$(function(){
	(function(){
		$(".secondheader").load("header.html");
		$(".secondfooter").load("footer.html");
	})();
	(function(){
//		推荐热门地
		$(".secondmorerecom").stop().hover(function(){
			$(".secondrecommend").show()
		},function(){
			$(".secondrecommend").hide()
		})
	})();
	(function(){
//		轮播图
        var oSe=$(".seb-mar");
		var arrSe=$(".seb-mar>li");	
		arrSe.hover(function(){
			var index=$(this).index();	
			page=index;
			next();
		})
		var page=0
		var next=function(){			
			$(".seb-imgbox>img").eq(page).fadeIn().siblings().fadeOut();
			$(".seb-mar>li").eq(page).addClass("seb-marchange").siblings().removeClass("seb-marchange");
			page++;
			if(page>4){
				page=0;
			}
		}
		var timer = setInterval(next,2000);
		$(".secondbanner").hover(function(){
			clearInterval(timer);
			timer=0;
		},function(){
			timer = setInterval(next,2000);
		})
	})();
	(function(){
//		出境特惠游
        var Prev=$(".fa-prev");
        var Next=$(".fa-next");
        var oUl=$(".favor-site");
        var arrli=$(".favor-site>li")
		var width=$(".favor-site>li").width()+12;
		oUl.width(arrli.length*width+"px");
		var page=0;
		var timer=setInterval(function(){
			page++;
			if(page>arrli.size()-1){
			    page=0;
			}
			move()
		},2000);
		$(".favor-sitebox").hover(function(){
			clearInterval(timer);
			timer=0;
		},function(){
			timer=setInterval(function(){
			page++;
			if(page>arrli.size()-1){
			    page=0;
			}
			move()
		},2000)
		})
		Next.click(function(){
			page++;
			if(page>arrli.size()-1){
			    page=arrli.size()-1;
			}
			move()	
		})			
		Prev.click(function(){
			page--;
			if(page<0){
				page=0;
			}
			move()
		})
		function move(){
//			arrli.removeClass("active").eq(page).addClass("active");
			if(page==0){
				oUl.animate({"left":0});
			}else if(page==arrli.size()-1 || page==arrli.size()-2){
				var left=(arrli.size()-4)*-width;
				oUl.animate({"left":left});
			}else{
				var left=(page-1)*-width;
				oUl.animate({"left":left});
			}
			if(page>0){
				Prev.removeClass("cannot");
			}else{
				Prev.addClass("cannot");
			}
			if(page>=arrli.length-1){
				Next.addClass("cannot");
			}else{						
				Next.removeClass("cannot");
			}
		}
		
	})();
	(function(){
//		出境游尾单
		var oClick=$(".edwin-nameright");	
		var change=function(){
			var num=parseInt(Math.random()*3);
			$(".edwin-imgbox>img").attr("src","img/edwinimg0"+(num+1)+".jpg");
		}
		var timer=setInterval(change,1000);
		$(".edwin-name").hover(function(){
			clearInterval(timer);
			timer=0;
		},function(){
			timer=setInterval(change,1000);
		})
		oClick.click(function(){
			change();
		})
	})();
	(function(){
//		广告轮播
        var page=0;
        var next=function(){      	
        	$(".second-ad>img").eq(page).fadeIn().siblings("img").fadeOut(1)
        	$(".second-ad-ul>li").eq(page).addClass("second-adchange").siblings().removeClass("second-adchange")
        	page++;
        	if(page>$(".second-ad-ul>li").length-1){
        		page=0;
        	}
        }
		$(".second-ad-ul>li").hover(function(){
			page=$(this).index();
			next();
		});
        var timer=setInterval(next,3000);		
		$(".second-ad").hover(function(){
			clearInterval(timer);
			timer=0;
		},function(){
			timer=setInterval(next,3000);
		})
	})();
	(function(){
//		全球之最选项卡
		$(".wm-classify-name>li").click(function(){
			var index=$(this).index();
			$(this).addClass("wmchange").siblings().removeClass("wmchange");
			$(".wm-classify-content").eq(index).fadeIn().siblings().fadeOut();
		})
//		TA们预定了
        var page=0;
        function up(){
        	var arr=$(".sec-destine-continfo>li");
        	page++;
        	$(".sec-destine-continfo").animate({"top":-90*page+"px"});
        	if(page>arr.length-1){      		
        		$(".sec-destine-continfo").animate({"top":-(arr.length-1)*90+"px"});
        		page=0;
        	}
        }
		setInterval(up,2000);
	})();
	(function(){
//		尾部
		$(".secondfooter").load("footer.html");
	})();
})