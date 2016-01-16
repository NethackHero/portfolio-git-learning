
/**
$('.nav>li>a').click(function(){
		$('html, body').animate( 
		{ scrollTop: $( $(this).attr('href') ).offset().top } 
		, 500 );
	});
**/


$(document).ready(function(){
	
	$('.nav>li>a').click(function(e){
		e.preventDefault();
			$('html, body').animate( 
			{ scrollTop: $( $(this).attr('href') ).offset().top } 
			, 1000 );
		});
	});


