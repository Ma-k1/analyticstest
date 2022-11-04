'use strict';

$(function () {
  const windowWidth = $(window).width();
  const windowSm = 600;
  if (windowWidth <= windowSm) {
    // 「OPEN」アイコンクリックでメニューが開き、ハンバーガーから×アイコンに変換
    $('#open').on('click', function () {
      $('#open').css('display', 'none')
      $('#close').css('display', 'block');
      $('nav').css('display', 'block')
    });

    //「CLOSE]ボタンかリンクをクリックしたら元の状態に戻る
    $('#close').on('click', function () {
      $('#close').css('display', 'none');
      $('#open').css('display', 'block');
      $('nav').css('display', 'none');
    });

    $('.main-nav li').on('click', function () {
      $('#close').css('display', 'none');
      $('#open').css('display', 'block');
      $('nav').css('display', 'none');
    });
  }
});
