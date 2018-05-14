$(document).ready(function(){

	// NavBar Scroll Effect
	$(window).scroll(function(){
		if($(this).scrollTop() > 100){
			$('.nav').addClass('header-active');
		} 
		else {
			$('.nav').removeClass('header-active');
		}
	});

	//NavBar - Side Menu
	$('.nav-icon').on('click', function(e){
		e.preventDefault();
		$('.side-menu').addClass('open');
		if($('.side-menu').hasClass('open')){
			$('.close-side-menu').on('click', function(e){
				e.preventDefault();
				$('.side-menu').removeClass('open');
			});
		}
    });
});