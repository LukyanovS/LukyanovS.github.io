$(document).ready(function() {
    
    $('#banner-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        animateOut: 'slideOutDown',
        animateIn: 'slideInDown',
        stagePadding:30,
        smartSpeed:450,
        items: 1,
        navigation:true,
    });
    
});