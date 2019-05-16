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


