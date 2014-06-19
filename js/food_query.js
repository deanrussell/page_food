$(document).ready(function(){
	var $nav = $('#nav-buttonsId');
	var $drop = $('#nav-dropId');
	if ($(window).width() < 1115) {
			$nav.addClass('hide');
			$drop.removeClass('hide');
		} else {
			$nav.removeClass('hide');
			$drop.addClass('hide');
		}
	$(window).bind('resize', function() {
		if ($(window).width() < 1115) {
			$nav.addClass('hide');
			$drop.removeClass('hide');
		} else {
			$nav.removeClass('hide');
			$drop.addClass('hide');
		}
	});
	$(window).scroll(function () {
		var	$head = $('#site-titleId');
		if ($(this).scrollTop() > 110) {
			$head.addClass('move-site-title-r').addClass('trans25');
		} else {
			$head.removeClass('move-site-title-r');
		}
	});
});