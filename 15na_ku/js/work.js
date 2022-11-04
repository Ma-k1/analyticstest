$(function () {
  'use sttict';

  /* サムネイルクリックで上に大きく表示*/
  $('.jwels').on('click', function () {
    const imgSrc = $(this).attr('src');
    const imgAlt = $(this).attr('alt');
    $('#bigimg').attr('src', imgSrc);
    $('#alt').text(imgAlt);
    return false
  });


  /* 鳥の種類クリックでサムネイルが表示・非表示 */
  /* 現在表示されている鳥種のボタンの色変更 */
  $('#buncho').on('click', function () {
    $('.buncho').toggle('.display-none');
    $('#buncho').toggleClass('active');
  })

  $('#kozakura').on('click', function () {
    $('.kozakura').toggle('.display-none');
    $('#kozakura').toggleClass('active');
  });

  $('#okame').on('click', function () {
    $('.okame').toggle('.display-none');
    $('#okame').toggleClass('active');
  });

  $('#sekisei').on('click', function () {
    $('.sekisei').toggle('.display-none');
    $('#sekisei').toggleClass('active');
  });

  $('#other-bird').on('click', function () {
    $('.other-bird').toggle('.display-none');
    $('#other-bird').toggleClass('active');
  });
});
