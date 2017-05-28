$(function(){
 	// Default collapsible when entering page
 	if (location.hash) {
 		console.log("My hash" + location.hash);
 		console.log($(location.hash));
 		var offset = $(location.hash).offset();
 		console.log(offset);
 		$('html, body').animate({ scrollTop: offset.top-90 });
 	}
	console.log("Hello?");
})