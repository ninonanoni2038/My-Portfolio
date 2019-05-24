$(function(){
    $(window).scroll(function (){
        $('.fadeinUp').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
        
        $('.fadeinRight').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 0){
                $(this).css('opacity','1');
                $(this).css('transform','translateX(0)');
            }
        });
        
        $('.fadeinRight-1').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 0){
                $(this).css('opacity','1');
                $(this).css('transform','translateX(0)');
            }
        });
        
        $('.fadeinRight-2').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 150){
                $(this).css('opacity','1');
                $(this).css('transform','translateX(0)');
            }
        });
        
        $('.fadeinRight-3').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 300){
                $(this).css('opacity','1');
                $(this).css('transform','translateX(0)');
            }
        });
        
         $('.fadeinLeft').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200){
                $(this).css('opacity','1');
                $(this).css('transform','translateX(0)');
            }
        });
    });
});