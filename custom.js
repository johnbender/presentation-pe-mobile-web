$(function() {
	$( ".video" ).live( "showoff:show", function(){
		var video = $(this).find( "video" )[0];

		setTimeout(function() {
			video.play();
		}, 1000);
	});

	$( ".video" ).live( "showoff:next showoff:prev", function(){
		var video = $(this).find( "video" )[0];
		video.pause();
		video.currentTime = 0;
	});
});