var length_of_header = 380;
var speed_of_moving_window = 750;

$body = $('body');
$(document).on({
    ajaxStart:function(){$body.addClass('loading');},
    ajaxStop:function(){$body.removeClass('loading');}
});

$(document).ready(function(){
    $('#backToTop').hide();

    $(window).scroll(function(){
        var position = $(window).scrollTop();

        if(position > length_of_header)
        {
            $('#backToTop').fadeIn();
            $('#menu').attr('class','ui large secondary pointing menu');
            $('#menu_fixed').attr('class','following bar light fixed');
        }
        else
        {
            $('#backToTop').fadeOut();
            $('#menu').attr('class','ui large secondary inverted pointing menu');
            $('#menu_fixed').attr('class','following bar');
        }
    });

    $('#backToTop').on('click', function(e){
       // $(window).scrollTop(0);
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, speed_of_moving_window);
            $(this).fadeOut();
    });

    $('#scrollToContent').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 540
        }, speed_of_moving_window);
        //  $(window).scrollTop(550);
    });

});

