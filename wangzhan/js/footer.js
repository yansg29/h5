$(function(){
	$(".footer1 li").hover(function(){
		var index=$(this).index();
		$(this).css("background-position-y","-57px")
	},function(){
		$(this).css("background-position-y","")
	})
	musicIndex=0;
	$(".footer").find("li").click(function(){
		musicIndex++;
		index=$(this).index();
		if(navigator.appName=="Microsoft Internet Explorer"){
			$("body").append('<bgsound class="myaudio'+ musicIndex +'" src="music/sound0'+ index +'.mp3" autostart=true loop=false>');
		}else if(navigator.userAgent.indexOf("Firefox")>0){
			$("body").append('<object data="music/sound0'+ index +'.mp3" type="application/x-mplayer2" width="0" height="0">'+
                    '<param name="src" value="music/sound0'+ index +'.mp3">'+
                    '<param name="autostart" value="1">'+
                    '<param name="playcount" value="infinite">'+
                '</object>')
		}else{
			$("body").append('<embed class="myaudio'+ musicIndex +'" src="music/sound0'+ index +'.mp3" autostart="" loop="false" hidden="true" ></embed>');
		}
		//3s后删除点击标签
		var musicRemove=".myaudio"+musicIndex;
        setTimeout(function(){
        	$(musicRemove).remove()
        },3000);
	})
	$("#ipc").click(function(){
		window.open("http://www.miitbeian.gov.cn")
	})
})