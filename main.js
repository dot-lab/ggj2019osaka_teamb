// MainScene クラスを定義
phina.define('MainScene', {
  superClass: 'DisplayScene',
  init: function() {
    this.superInit({
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT
    });
    // 背景色を指定
    this.backgroundColor = '#444';
    // ラベルを生成
    this.label = Label('Hello, phina.js!').addChildTo(this);
    this.label.x = this.gridX.center(); // x 座標
    this.label.y = this.gridY.center(); // y 座標
    this.label.fill = 'white'; // 塗りつぶし色
  },
});

// メイン処理
phina.main(function() {
  // アプリケーション生成
  var app = GameApp({
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT
  });
  // アプリケーション実行
  app.run();
});