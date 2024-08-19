/*
name: levitation
version: 0.1
author: Gyula Madarasz 
last update: 21:58 2010.07.29.
e-mail: gyula.madarasz@gmail.com
usage: $(Element).levitation(left, top, distance);
*/
	
(function($){

	$.fn.levitation = function(left, top, distance){
				
		var jThis = this;
		var jThisId = '#'+$(this).attr('id');        
		var jThisTop = top;				
		var jThisLeft = left;

		$(this).css('position', 'absolute');
		$(this).css('z-index', distance);
		
			$(jThis).css('top', top.toFixed(14)+'%');
			$(jThis).css('left', left.toFixed(14)+'%');           

		$(this).parent().mousemove(function(e){                    
			run(e);
		});
		
		function run(e) {
			var windowWidth = $(window).width();
			var windowHeight = $(window).height();
			var mouseTop = e.pageY;
			var mouseLeft = e.pageX;
			var mousePerWindowX = mouseLeft / windowWidth - 0.5;
			var mousePerWindowY = mouseTop / windowHeight - 0.5;
			
			var newTop = jThisTop - (mousePerWindowY * distance);
			var newLeft = jThisLeft - (mousePerWindowX * distance);
			
			$(jThis).css('top', newTop.toFixed(14)+'%');
			$(jThis).css('left', newLeft.toFixed(14)+'%');

			
		} 
		
	}
	
})(jQuery);