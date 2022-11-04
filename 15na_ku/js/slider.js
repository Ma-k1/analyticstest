'use strict';


$(function () {

  // レスポンシブ用に要素の幅を取得
  let img_width = $("image").outerWidth();

  // 動かす数値（×-1)
  let finder = img_width * -1;

  // const images = [
  //   'img/topSlider/top1.jpg',
  //   'img/topSlider/top2.jpg',
  //   'img/topSlider/top3.jpg',
  //   'img/topSlider/top4.jpg',
  // ];
  const images = document.querySelectorAll('.image');

  let count = 0;

  // 右に画像を追加
  const add_right_image = function () {
    count += 1;
    if (count > (images.length - 1)) count = -1;
    // 配列が0から始まるので「2」は3枚目の画像になる
    const $img = `<img src ="${images[count + 1]}" alt="" class="image">`
    $('#img-group').append($img)
  };

  // next動作
  const move_to_next = function () {
    $('#img-group')
      .css('transition', 'margin-left 0.5s')
      .css('margin-left', finder);
  };


  // 左の画像を削除 (margin-leftを0)
  const del_left_image = function () {
    $('.image:first').remove();
    $('#img-group')
      .css('transition', 'initial')
      .css('margin-left', '0');
  };
  const next = function () {


    // 右に画像を追加
    add_right_image();

    // next動作（transitionの動作の為に、動くのを少し遅らせる(setTimeout)
    setTimeout(move_to_next, 100);

    // 左の画像を削除 (margin-leftを0)
    del_left_image();

  }
  $('#next').on('click', function () {
    next();
  });

  //繰り返し
  setInterval(next, 1000);

});