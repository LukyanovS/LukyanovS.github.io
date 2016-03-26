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

});