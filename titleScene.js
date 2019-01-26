phina.globalize();
// TitleScene
phina.define('TitleScene', {
  superClass: 'DisplayScene',
  init: function() {
    this.superInit({
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT
    });
    // タイトル
    Label({
      text: '家族の離し合い - Family Talking!'
    }).addChildTo(this).setPosition(this.gridX.center(), this.gridY.span(4));

    Label({
      text: "START",
      fontSize: 32,
    }).addChildTo(this)
      .setPosition(this.gridX.center(), this.gridY.span(12))
    // 画面タッチ時
    this.on('pointend', function() {
      // 次のシーンへ
      this.exit();
    });
  }
});