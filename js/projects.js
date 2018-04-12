$(function(){
	// Filter Collapsibles
	$('input.form-check-input').on('change', function(e){
		var myId = this.id.replace('catRadios','');
		if(this.checked) {
			$('div.card.cat' + myId).removeClass('display-none').addClass('display-flex');
		} else {
			$('div.card.cat' + myId).removeClass('display-flex').addClass('display-none');
		}
	})

	// Stop Youtube video when closing modal
	jQuery("div#pzoModal").on("hide.bs.modal", function(e) {
		var url = $('#pzoFrame').attr('src');
		$('#pzoFrame').attr('src', '');
		$('#pzoFrame').attr('src', url);
	})

	jQuery("div#clawModal").on("hide.bs.modal", function(e) {
		var url = $('#clawFrame').attr('src');
		$('#clawFrame').attr('src', '');
		$('#clawFrame').attr('src', url);
	})

	// Scroll to collapsible shown
 	$('.collapse').on('shown.bs.collapse', function (e) {
		var offset = $(e.target).offset();
		$('html, body').animate({ scrollTop: offset.top-120 });
	})

 	// Default collapsible when entering page
	$(location.hash || '#collapsePZO').collapse('show');
})