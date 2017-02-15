$(function(){
	$(".islandheader").load("header.html");
	$(".islandfooter").load("footer.html");
	(function(){
//		海岛推荐
		$(".islandrecom>li").hover(function(){
			var index=$(this).index();
			$(this).find("img").addClass("animated rotateIn")
		},function(){
			$(this).find("img").removeClass("animated rotateIn")
		})
	})();
})