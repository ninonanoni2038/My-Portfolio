/*global $*/


$(function () {
    "use strict";
    setTimeout(function () {
        $('.message').fadeOut(1000);
        $('.message-background').animate({
            'top': '-800px'
        }, 1000);
    }, 3500);
    setTimeout(function () {
        $('.menu-bar').fadeIn(1000);
    }, 4000);
});

$(function(){
    $('a[href^=#]').click(function(){
        
        var speed = 500,

            href= $(this).attr("href"),

            target = $(href == "#" || href == "" ? 'html' : href),

            position = target.offset().top,

        $("html, body").animate({scrollTop:position}, speed, "swing");

        return false;

    });

});
