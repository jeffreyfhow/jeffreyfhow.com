$(function(){
 	// Default collapsible when entering page
 	if (location.hash) {
 		var offset = $(location.hash).offset();
 		$('html, body').animate({ scrollTop: offset.top-90 });
 	}
})