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
	// Price Table
	var individual_price_table = $('#price_tables').find('.individual');
	var company_price_table = $('#price_tables').find('.company');


	$('.switch-toggles').find('.individual').addClass('active');
	$('#price_tables').find('.individual').addClass('active');

	$('.switch-toggles').find('.individual').on('click', function(){
		$(this).addClass('active');
		$(this).closest('.switch-toggles').removeClass('active');
		$(this).siblings().removeClass('active');
		individual_price_table.addClass('active');
		company_price_table.removeClass('active');
	});

	$('.switch-toggles').find('.company').on('click', function(){
		$(this).addClass('active');
		$(this).closest('.switch-toggles').addClass('active');
		$(this).siblings().removeClass('active');
		company_price_table.addClass('active');
		individual_price_table.removeClass('active');
	});
		/*
			===================== Scroll Smothy =====================
		*/
		// Select all links with hashes
		$('a[href*="#"]')
			// Remove links that don't actually link to anything
			.not('[href="#"]')
			.not('[href="#0"]')
			.not('[href="#quote-carousel"]')
			.click(function(event) {
			// On-page links
			if (
			  location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
			  &&
			  location.hostname == this.hostname
			) {
			  // Figure out element to scroll to
			  var target = $(this.hash);
			  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			  // Does a scroll target exist?
			  if (target.length) {
			    // Only prevent default if animation is actually gonna happen
			    event.preventDefault();
			    $('html, body').animate({
			      scrollTop: target.offset().top
			    }, 1000, function() {
			      // Callback after animation
			      // Must change focus!
			      var $target = $(target);
			      $target.focus();
			      if ($target.is(":focus")) { // Checking if the target was focused
			        return false;
			      } else {
			        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
			        $target.focus(); // Set focus again
			      };
			    });
			  }
			}
		});

	// Wow Animations
	wow = new WOW(
		{
			boxClass:     'wow',      // default
			animateClass: 'animated', // default
			offset:       0,          // default
			mobile:       true,       // default
			live:         true        // default
		}
	)
	wow.init();

	// Magnific Popup
	$(".lightbox").magnificPopup();

});