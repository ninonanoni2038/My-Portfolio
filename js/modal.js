$(function () {
    // 「Open」ボタンをクリック時に、fadeInメソッドでHTML要素を表示する
    $('#open').on('click', function () {
        $('#overlay, .modal-work1').fadeIn();
//        var current_scrollY = $( window ).scrollTop(); 
//        $('body').css({
//            position: 'fixed',
//            width: '100%',
//            top: -1 * current_scrollY;
//        });
    });
    
//    $('#open').on('click', function () {
//        var current_scrollY = $( window ).scrollTop(); 
//        $('body').css({
//            position: 'fixed',
//            width: '100%',
//            top: -1 * current_scrollY;
//        });
//    });
    // 「Close」ボタンをクリック時に、fadeOutメソッドでHTML要素を非表示にする
    $('#close').on('click', function () {
        $('#overlay, .modal-work1').fadeOut();
    });

    locateCenter(); // => モーダルウィンドウを中央配置するための初期値を設定する
    $(window).resize(locateCenter); // => ウィンドウのリサイズに合わせて、モーダルウィンドウの配置を変える

    // モーダルウィンドウを中央配置するための配置場所を計算する関数
    function locateCenter() {
        let w = $(window).width();
        let h = $(window).height();

        let cw = $('.modal-work1').outerWidth();
        let ch = $('.modal-work1').outerHeight();

        $('.modal-work1').css({
            'left': ((w - cw) / 2) + 'px',
            'top': ((h - ch) / 2) + 'px'
        });
    }
})