

$('<a name="top" style="height: 1px; width: 1px; display: block;"/>').insertBefore($('body').children().eq(0));
window.location.hash = 'top';
	$('.timeSlotOuter').click(function() {
		if (!$(this).hasClass('unavailable')) {
			$('.timeSlotOuter').removeClass('selected');
			$(this).addClass('selected');
		}
	});