/**
 * Created by Administrator on 2016/12/15.
alert($(window).height()); //浏览器当前窗口可视区域高度 
alert($(document).height()); //浏览器当前窗口文档的高度 
alert($(document.body).height());//浏览器当前窗口文档body的高度 
alert($(document.body).outerHeight(true));//浏览器当前窗口文档body的总高度 包括border padding margin 
alert($(window).width()); //浏览器当前窗口可视区域宽度 
alert($(document).width());//浏览器当前窗口文档对象宽度 
alert($(document.body).width());//浏览器当前窗口文档body的高度 
alert($(document.body).outerWidth(true));//浏览器当前窗口文档body的总宽度 包括border padding margin 
 */
var GLOBAL=GLOBAL || {};
$(function(){
	   //获取屏幕宽高
	    var oDivSb=$(".screen-banner");
        var oDivBc=$(".birdcontent");
        var arrScr=$(".birdcontent>div");
        var screenw,screenh;
        var page=0;
        function resize(){
        	screenw=$(window).width();
        	screenh=$(window).height();
        	oDivBc.width(screenw)
        	      .height(arrScr.length*screenh+"px")
        	oDivSb.width(screenw)
        	      .height(screenh)
        	arrScr.width(screenw)
        	      .height(screenh)
        	$(".gaishu").width(screenw).height(screenh)
        	$(".g-conbox").width(3*screenw+"px")
        	$(".g-con").width(screenw).height(screenh)
	        $(".z-texbox").width(2*screenw+"px")
	        $(".z-tex").width(screenw).height(screenh)
        	oDivBc.css("top",-page*screenh+"px");
        }
        resize();
    	$(window).resize(resize);
   //welcome动画
   GLOBAL.welcomeOver=false;
   welcomeanimate()
   function welcomeanimate(){
   	  GLOBAL.welcomeTimer=setTimeout(function(){
   	  	$(".welcont").animate({"top":"30%"},500,function(){
   	  		$(".welcome_animate").each(function(i){
   	  			var _this=$($(this));
   	  			window.setTimeout(function(){
   	  				_this.show().addClass("animated fadeInUp")
   	  			},400*(i+1));
   	  		})
   	  		setTimeout(function(){
   	  			$(".welcome").animate({"top":-$(window).height()+"px"},300);
   	  			GLOBAL.welcomeOver=true;
   	  		},3000);
   	  	})
   	  },3000);  	 
   }
    $(".welcont").dblclick(function(){
   	  	$(".welcome").animate({"top":-$(window).height()+"px"},300);
        clearTimeout(GLOBAL.welcomeTimer);
   	  	GLOBAL.welcomeOver=true;       
   	})
   //nav点击事件	
	$(".birdnav>li").click(function(){
		var index=$(this).index();
		oDivBc.css("top",-index*screenh+"px");
	})	
	//概述
	var page1=0;
	$(".prev").click(function(){		
		page1--;
		if(page1<0){
            page1=0;
		}
		changOpacity(page1);
	})
	$(".next").click(function(){
		page1++;		
		if(page1>=2){
             page1=2;
		}
        changOpacity(page1);
	})
	function changOpacity(page1){
		$(".g-conbox").stop().animate({"left":page1*-screenw+"px"},500)				
		if(page1==0){
			$(".prev").css("opacity","0.5");
		}
		else{
			$(".prev").css("opacity","1");
		}
		if(page1==2){
			$(".next").css("opacity","0.5");
		}
		else{
			$(".next").css("opacity","1");
		}
	}
	//掌云
	$(".z-li").click(function(){
		var index=$(this).index();
		$(this).addClass("z-bg").siblings().removeClass("z-bg")
		$(".z-tex").eq(index).fadeIn().siblings().fadeOut()
	})	
	//全屏滚动
	;(function(){
		
    	var isRunning=false;
    	function scrollUp(){
        	if(!isRunning){
        		isRunning=true;
        	    setTimeout(function(){   //1秒钟之后滚轴可以再次使用
        	    	isRunning=false;
        	    },1000);
       	        if(page>0){
        		    page--;
        		    oDivBc.css("top",-page*screenh+"px");
        	    }
        	}
        }
    	function scrollDown(){
        	if(!isRunning){
        		isRunning=true;
        	    setTimeout(function(){
        	    	isRunning=false;
        	    },1000);
        	    if(page<arrScr.length-1){
        		    page++;
        		    oDivBc.css("top",-page*screenh+"px");
        	    }
        	}
        }
    	$(document).on("mousewheel DOMMouseScroll", function (e) {
             var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
                 (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
        if(!isRunning){
           if (delta > 0) {
               // 向上滚
               scrollUp();
               console.log("wheelup");
           } else if (delta < 0) {
               // 向下滚
               scrollDown();
               console.log("wheeldown");
           }
       }
        else {
            setTimeout(function(){
                isRunning=false;
            },7500)
       }
       })
	})();
    
})


