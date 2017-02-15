$(function(){
	$(".nav>li").hover(function(){
		var width=$(this).width();
		var left=$(this).position().left;
		$(".nav-move").stop(true,true).animate({"left":left,"width":width},200)
	})
})