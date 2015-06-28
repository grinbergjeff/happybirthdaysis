$( document ).ready(function() {	
	$('.header').hide();
	$('.mean').hide();
	$('.nice').hide();
	$('.circle').click(function() {
		$('.circle').fadeOut('medium');
		$('.header').delay(800).fadeIn(500, function() {
			$('.mean').delay(800).fadeIn(500, function() {
			$('.nice').delay(800).fadeIn(500);
			});	
			
		});		
	});
	
	
	
});