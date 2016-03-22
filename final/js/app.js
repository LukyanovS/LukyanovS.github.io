$(document).ready(function() {
    $(function(){
        $('#Container').mixItUp();
    });
    
    $('.team_hover').hover(
   function(){ $(this).addClass('rotateIn') },
   function(){ $(this).removeClass('rotateIn') 
    });
    
});