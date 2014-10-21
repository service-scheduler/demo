$(document).ready(function() {
	self.scrollTo(0,0);
	$('.timeSlotOuter').click(function() {
		if (!$(this).hasClass('unavailable')) {
			$('.timeSlotOuter').removeClass('selected');
			$(this).addClass('selected');
		}
	});
});