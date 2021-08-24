$(document).on('ready', function() {
    $(".full-screen").slick({
      centerMode: true, // スライドを中心に表示して部分的に前後のスライドが見えるように設定（奇数番号のスライドに使用）
      centerPadding: '34.5%', // センターモード時のサイドパディング。見切れるスライドの幅。’px’または’％’。ここで間隔調整
      dots: true, // ドットインジケーターの表示
      autoplay: true, // 自動再生を設定
      autoplaySpeed: 2700, // 自動再生のスピード（ミリ秒単位）
      speed: 1000, // スライド/フェードアニメーションの速度を設定
      infinite: true // スライドのループを有効にするか
    });
  });

//スライドショー以下コピペ　https://125naroom.com/web/3198　10番目
