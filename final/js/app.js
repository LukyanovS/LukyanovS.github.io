$(document).ready(function() {
    $(function(){
        $('#Container').mixItUp();
    });
    
    $('.team_hover').hover(
   function(){ $(this).addClass('rotateIn') },
   function(){ $(this).removeClass('rotateIn') 
    });
    
    var topFuns = $('#funs').offset().top;
    var flag = false;
    
    $(window).scroll(function(){
        if (flag == false && $('body').scrollTop() >= topFuns - 600  ){
            flag = true;
                $('#one')
                  .prop('number', 3000)
                  .animateNumber(
                    {
                      number: 3200
                    },
                    10000
                );    
            
                $('#two')
                  .prop('number', 0)
                  .animateNumber(
                    {
                      number: 120
                    },
                    10000
                );

                $('#three')
                  .prop('number', 0)
                  .animateNumber(
                    {
                      number: 360
                    },
                    10000
                );

                $('#four')
                  .prop('number', 0)
                  .animateNumber(
                    {
                      number: 42
                    },
                    10000
                );
        };
        
    });
    
    
    $('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom',
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300
		}
	});
    
    $(window).scroll(function(){
		if ($(this).scrollTop() > 250) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},1500);
		return false;
	});
    
    $('.smoothScroll').click(function(event) {
        event.preventDefault();
        var href=$(this).attr('href');
        var target=$(href);
        var top=target.offset().top;
        $('html,body').animate({
          scrollTop: top}, 800);
    });
    
    	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 450) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1){  
            $('nav').addClass("sticky");
        }
        else{
            $('nav').removeClass("sticky");
        }
});

});