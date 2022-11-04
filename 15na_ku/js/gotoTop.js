'use strict';

$(window).on('scroll', function () {
  if ($(window).scrollTop() > 300) {
    $('#gotoTop').fadeIn(400);
  } else {
    $('#gotoTop').fadeOut(400);
  }
});

$(function () {
  // 「TOPに戻る」ボタンがクリックされた時の動きを指定します。
  $("#gotoTop").click(function () {
    // ページの一番上までスクロールさせます。
    $('body, html').scrollTop(0);
  });
});

