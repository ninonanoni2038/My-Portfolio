 /*global $*/

 $(function () {
    'use strict'; 
     console.log ( "hogehoge ")
    $('a[href^=#]').click(function () {
        var speed = 500;
        href = $(this).attr("href");
        target = $(href == "#" || href == "" ? 'html' : href);
        position = target.offset().top;
        $("html, body").animate({
            scrollTop: position
        }, speed, "swing");
        return false;
    });
}); 