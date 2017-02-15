/**
 * Created by Administrator on 2016/12/15.
 */
$(function(){
//	头部
    $("#header").load("header.html")
//  模块化管理----函数自执行
//   轮播图模块 
    var page=0
    $(".now>li").click(function(){
        page=$(this).index();
        move();
    })   
    $(".prev").click(function(){
    	page--;
    	if(page<0){
    		page=$(".banner li").length;
    	}
    	move();
    })
    $(".next").click(function(){
    	page++;
    	if(page>$(".banner li").length){
    		page=0;
    	}
    	move();
    })
    function move(){
    	$(".banner li").eq(page).fadeIn().siblings().fadeOut()
    	$(".now>li").eq(page).css("background","blue").siblings("li").css("background","silver")
    }
//  主要产品
    $(".mc1>li").click(function(){
    	var index=$(this).index();
    	$(".mc2>img").eq(index).show().siblings().hide()
    	$(".mc3").eq(index).show().siblings().hide()
    })
//  业务范围
    $(".bn-contli5").click(function(){
    	var index=$(".bn2-li1").index();
    	$(this).toggleClass("bn5-change")
    	$(this).parent().parent().next().slideToggle()
    });
//  团队介绍
    (function(){
    	
    
    	var Prev=$(".teamban>.pos .prev");
    	var Next=$(".teamban>.pos .next");
    	var oDiv=$(".tbanbox");
    	var oUl=$(".tbanner")
    	var arrLi=$(".tbanner>li");    	
    	oUl.append(arrLi.first().clone());
    	oUl.prepend(arrLi.last().clone());
    	var arrLi=$(".tbanner>li");
    	var page=1;
    	var tbanwidth=oDiv.width()/2
    	oUl.width(arrLi.length*tbanwidth);
//  	arrLi.click(function(){
//  		
//  	})
    	Prev.click(function(){
    		page--;
    		if(page>=1){
    			oDiv.stop().animate({"left":page*-tbanwidth+"px"},300)
    		}
    		else{
    			page=arrLi.length-2;
				oDiv.stop().animate({"left":"0px"},function(){
					oDiv.css("left",(arrLi.length-2)*-tbanwidth+"px")
				})
    		}
    		
    	})
    	Next.click(function(){
    		page++;
    		if(page<=arrLi.length-2){
    			oDiv.stop().animate({"left":(page-1)*-tbanwidth+"px"}) 
    		}
    		else{
    			oDiv.stop().animate({"left":(arrLi.length-2)*-tbanwidth+"px"},
    			function(){
    				page=1;
    				oDiv.css("left","0px")
    			})
    		} 
    	})
    	
    })();	
//尾部
    $(".footer").load("footer.html")
//  返回顶部
    $(".back").load("backtop.html")
})

