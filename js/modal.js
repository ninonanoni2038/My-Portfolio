$(function () {
    // 「Open」ボタンをクリック時に、fadeInメソッドでHTML要素を表示する
    $('#open1').on('click', function () {
        $('#overlay, #modal-work1').fadeIn();
        $('html').css({
            overflow:hidden
        });
        $('body').css({
            overflow:hidden
        });
    });
    // 「Close」ボタンをクリック時に、fadeOutメソッドでHTML要素を非表示にする
    $('#close1').on('click', function () {
        $('#overlay, #modal-work1').fadeOut();
    });

    // モーダルウィンドウを中央配置するための配置場所を計算する関数
    function locateCenter() {
        let w = $(window).width();
        let h = $(window).height();

        let cw = $('#modal-work1').outerWidth();
        let ch = $('#modal-work1').outerHeight();
        console.log(w,cw,(w - cw) / 2)
        $('#modal-work1').css({
            'left': ((w - cw) / 2) + 'px',
            'top': ((h - ch) / 2) + 'px'
        });
    }
    
    locateCenter(); // => モーダルウィンドウを中央配置するための初期値を設定する
    $(window).resize(locateCenter); // => ウィンドウのリサイズに合わせて、モーダルウィンドウの配置を変える
    
})

$(function () {
    // 「Open」ボタンをクリック時に、fadeInメソッドでHTML要素を表示する
    $('#open2').on('click', function () {
        $('#overlay, #modal-work2').fadeIn();
    });
    // 「Close」ボタンをクリック時に、fadeOutメソッドでHTML要素を非表示にする
    $('#close2').on('click', function () {
        $('#overlay, #modal-work2').fadeOut();
    });

    // モーダルウィンドウを中央配置するための配置場所を計算する関数
    function locateCenter() {
        let w = $(window).width();
        let h = $(window).height();

        let cw = $('#modal-work2').outerWidth();
        let ch = $('#modal-work2').outerHeight();

        $('#modal-work2').css({
            'left': ((w - cw) / 2) + 'px',
            'top': ((h - ch) / 2) + 'px'
        });
    }
    
    locateCenter(); // => モーダルウィンドウを中央配置するための初期値を設定する
    $(window).resize(locateCenter); // => ウィンドウのリサイズに合わせて、モーダルウィンドウの配置を変える
    
})

$(function () {
    // 「Open」ボタンをクリック時に、fadeInメソッドでHTML要素を表示する
    $('#open3').on('click', function () {
        $('#overlay, #modal-work3').fadeIn();
    });
    // 「Close」ボタンをクリック時に、fadeOutメソッドでHTML要素を非表示にする
    $('#close3').on('click', function () {
        $('#overlay, #modal-work3').fadeOut();
    });

    // モーダルウィンドウを中央配置するための配置場所を計算する関数
    function locateCenter() {
        let w = $(window).width();
        let h = $(window).height();

        let cw = $('#modal-work3').outerWidth();
        let ch = $('#modal-work3').outerHeight();

        $('#modal-work3').css({
            'left': ((w - cw) / 2) + 'px',
            'top': ((h - ch) / 2) + 'px'
        });
    }
    
    locateCenter(); // => モーダルウィンドウを中央配置するための初期値を設定する
    $(window).resize(locateCenter); // => ウィンドウのリサイズに合わせて、モーダルウィンドウの配置を変える
    
})

$(function () {
    // 「Open」ボタンをクリック時に、fadeInメソッドでHTML要素を表示する
    $('#open4').on('click', function () {
        $('#overlay, #modal-work4').fadeIn();
    });
    // 「Close」ボタンをクリック時に、fadeOutメソッドでHTML要素を非表示にする
    $('#close4').on('click', function () {
        $('#overlay, #modal-work4').fadeOut();
    });

    // モーダルウィンドウを中央配置するための配置場所を計算する関数
    function locateCenter() {
        let w = $(window).width();
        let h = $(window).height();

        let cw = $('#modal-work4').outerWidth();
        let ch = $('#modal-work4').outerHeight();

        $('#modal-work4').css({
            'left': ((w - cw) / 2) + 'px',
            'top': ((h - ch) / 2) + 'px'
        });
    }
    
    locateCenter(); // => モーダルウィンドウを中央配置するための初期値を設定する
    $(window).resize(locateCenter); // => ウィンドウのリサイズに合わせて、モーダルウィンドウの配置を変える
    
})