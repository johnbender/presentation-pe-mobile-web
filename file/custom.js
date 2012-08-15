$(function() {
	$( ".video" ).live( "showoff:show", function(){
		var video = $(this).find( "video" )[0];
		video.currentTime = 0;

		setTimeout(function() {
			video.play();
		}, 1000);
	});

	$( ".video" ).live( "showoff:next showoff:prev", function(){
		var video = $(this).find( "video" )[0];
		video.pause();
		video.currentTime = 0;
	});

	$( ".content" ).live( "showoff:show", function() {
		var notes = $.trim($(this).find( ".notes" ).text());
		if( window.console && notes ) console.log( notes );
	});
});