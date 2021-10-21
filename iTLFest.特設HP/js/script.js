$(document).ready(function(){
  $('.full-screen').slick({
    arrows: false, // 矢印を非表示
    dots: true, // ドットナビゲーションを表示
    autoplay: true, // 自動性を有効
    centerMode: true, // センターモードを有効
    centerPadding: '5%', // センター画像の左右の余白を指定
    slidesToShow: 3, //表示するスライドの枚数
    responsive: [ //レスポンシブ対応を画面サイズでパターン分けしてる
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, //表示するスライドの枚数
          centerPadding: '10%' // センター画像の左右の余白を指定
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1, //表示するスライドの枚数
          centerPadding: '0' // センター画像の左右の余白を指定
        }
      }]
  });
});

//スライドショー以下コピペ　よく使うslickのオプション設定をコピペ　https://ryob.net/slick-responsive/
//CSSの.sliderの値を左右に余白が出るよう一部編集　https://teratail.com/questions/197927
//slidesToShowは以下の4番目を参照　https://qiita.com/ymeeto/items/7fc56eea4bd44487cdb7

//変更前：スライドショー以下コピペ　https://125naroom.com/web/3198　10番目


//以下没になったが一応。スクロールするとトップに戻るボタンが表示される。
//＜参考1番より＞https://www.webopixel.net/javascript/538.html
/*$(function() {
  var topBtn = $('#info');    
  topBtn.hide();
  //スクロールが100に達したらボタン表示
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
          topBtn.fadeIn();
      } else {
          topBtn.fadeOut();
      }
  });
  //スクロールしてトップ
  /*topBtn.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500);
      return false;
  });
});
*/

//押すと消えるボタン
//参考：https://qiita.com/sunnyG/items/faf1821ae09820e30ce8
$(function () {
  $('button').on('click', () => {
      $('#info').hide();
  });
});

