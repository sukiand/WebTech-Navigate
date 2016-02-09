var whereYouWantYourButtonToAppear = 400;

$(window).scroll(function(){
        var position = $(window).scrollTop();
            if(position > whereYouWantYourButtonToAppear)
{
            $('#backToTop').fadeIn();
}
    else
    {
                $('#backToTop').fadeOut();
    }

});

$('#backToTop').on('click', function(){
        $(window).scrollTop(0);
            $(this).fadeOut();
});

$('#scrollToContent').on('click',function(){
    $(window).scrollTop(550);
});
