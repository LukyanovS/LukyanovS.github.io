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
    
    $('input#name, input#email, textarea#message').unbind().blur( function(){
             
            var id = $(this).attr('id');
            var val = $(this).val();
            switch(id)
            {
                case 'name':
                    var rv_name = /^[a-zA-Z]+$/;
                    if(val.length > 2 && val != '' && rv_name.test(val))
                    {
                       $(this).addClass('not_error');
                       $(this).next('.error-box').text('Accepted')
                                                 .css('color','green')
                                                 .animate({'paddingLeft':'10px'},400)
                                                 .animate({'paddingLeft':'5px'},400);
                    }
                    else
                    {
                       $(this).removeClass('not_error').addClass('error');
                       $(this).next('.error-box').html('&bull; The name must be at least two characters')
                                                  .css('color','red')
                                                  .animate({'paddingLeft':'10px'},400)
                                                  .animate({'paddingLeft':'5px'},400);
                    }
                break;
                case 'email':
                   var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
                   if(val != '' && rv_email.test(val))
                   {
                      $(this).addClass('not_error');
                      $(this).next('.error-box').text('Accepted')
                                                .css('color','green')
                                                .animate({'paddingLeft':'10px'},400)
                                                .animate({'paddingLeft':'5px'},400);
                   }
                   else
                   {
                      $(this).removeClass('not_error').addClass('error');
                      $(this).next('.error-box').html('&bull; "Email" field is required (example: 123@gmail.com)')
                                                 .css('color','red')
                                                 .animate({'paddingLeft':'10px'},400)
                                                 .animate({'paddingLeft':'5px'},400);
                    }
                break;
                case 'message':
                    if(val != '' && val.length < 5000)
                    {
                        $(this).addClass('not_error');
                        $(this).next('.error-box').text('Accepted')
                                            .css('color','green')
                                            .animate({'paddingLeft':'10px'},400)
                                            .animate({'paddingLeft':'5px'},400);
                    }
                    else
                    {
                    $(this).removeClass('not_error').addClass('error');
                    $(this).next('.error-box').html('&bull; "Message" field is required')
                                            .css('color','red')
                                            .animate({'paddingLeft':'10px'},400)
                                            .animate({'paddingLeft':'5px'},400);
                    }
                break;
            }
    });

    $('form#form').submit(function(e){
        e.preventDefault();
            if($('.not_error').length == 3)
            {  
                $.ajax({
                    url: 'php/send.php',
                    type: 'post',
                    data: $(this).serialize(),
                    beforeSend: function(xhr, textStatus){ 
                        $('form#form :input').attr('disabled','disabled');
                    },
                    success: function(response){
                        $('form#form :input').removeAttr('disabled');
                        $('form#form :text, textarea').val('').removeClass().next('.error-box').text('');
                        alert(response);
                        $(".mfp-close").trigger("click");
                    },
                    error: function(){
                        $(".mfp-close").trigger("click");
                    }
                    
                });
            }
            else
            {
              return false;
            }
    });
    
    $('#phone').mask('+00(000)000-00-00');
    
    $('#phone').on('focus', function(){
        var $this = $(this);
        if($this.val() == '+38(050)123-45-67'){
            $this.val('+');
        }
    }).on('blur', function(){
        var $this = $(this);
        if($this.val() == '+'){
            $this.val('+38(050)123-45-67');
        }
    });
    
    $('.nav_btn').on('click',function(){
        'block'==$('.right').css('display')?($('.right').css({display:'none'}),
        $('.nav_btn i').addClass('fa-bars').removeClass('fa-times')):($('.right').css({display:'block'}),
        $('.nav_btn i').addClass('fa-times').removeClass('fa-bars'))
    });
    
    $(window).resize(function(){
        if($(window).width() > 750){
        $('.right').css({display:'block'});
        } else {
            $('.right').css({display:'none'});
            $('.nav_btn i').addClass('fa-bars').removeClass('fa-times');
        }
    
    });

    $(window).load(function(){
        if ($(window).width() < 750){
           $('.right').css({display:'none'});
        }
    });
});