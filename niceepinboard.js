$(function(){
	
	$('.pin').click(function(){
	   $('.niceemodal').slideDown("fast");
	   $('.niceemodalback').show();
   
	});
	$('.niceemodalback').click(function(){
	    $('.niceemodal').slideUp("fast");
	    $('.niceemodalback').css('display', 'none');
	});
	
});
