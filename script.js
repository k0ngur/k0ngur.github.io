$(function() {
	
	/**
	 * slide
	 * */
	
	$.fn.animateRotate = function(angle, duration, easing, complete) {
	  return this.each(function() {
		var $elem = $(this);

		$({deg: 0}).animate({deg: angle}, {
		  duration: duration,
		  easing: easing,
		  step: function(now) {
			$elem.css({
			   transform: 'rotate(' + now + 'deg)'
			 });
		  },
		  complete: complete || $.noop
		});
	  });
	};

	$("#eye").animateRotate(360, 1500, "swing", function() {
	});
	
	$("#eye").delay(200).fadeOut(1500, "linear", function() {
		$(".slide").slideUp(800, "swing");
		$("#darkness").delay(1500).fadeOut(1000);
	});
	
});