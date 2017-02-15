$(function(){
	$(".relationheader").load("header.html");
	$(".relationfooter").load("footer.html");
//	背景宽度    
	var width=$(window).width();	
	$(".relationWrap").resize("width",width+"px");
	
})