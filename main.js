// MainScene クラスを定義
phina.define('MainScene', {
  superClass: 'DisplayScene',
  init: function(param) {
    this.superInit(param);
    this.superInit({
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
      backgroundColor: 'blue',
    });
    Label({
      text: param.pushBtn,
    })
    .addChildTo(this)
    .setPosition(this.gridX.center(), this.gridY.center())
  },
});

// メイン処理
phina.main(function() {
  var app = GameApp({
    startLabel: 'title',
    scenes: [
      {
        className: 'TitleScene',
        label: 'title',
        nextLabel: 'play',
      },
      {
        className: 'MainScene',
        label: 'play',
        nextLabel: 'title',
      },
    ],
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT
  });
  // アプリケーション実行
  app.run();
});