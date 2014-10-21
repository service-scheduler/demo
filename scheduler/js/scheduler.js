$(document).ready(function() {
	$('html, body').animate({ scrollTop: 0 }, 'fast');
	$('.timeSlotOuter').click(function() {
		if (!$(this).hasClass('unavailable')) {
			$('.timeSlotOuter').removeClass('selected');
			$(this).addClass('selected');
		}
	});
});