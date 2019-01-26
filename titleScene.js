phina.globalize();
var family = 0;
var btnFlag = false;
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

    var btn_3 = Button().addChildTo(this).setPosition(this.gridX.center(), this.gridY.span(6))
    btn_3.text = '3人家族';
    btn_3.onpointend = function() {
      family = 3;
      btnFlag = true;
      console.log(family);
    }
    var btn_4 = Button().addChildTo(this).setPosition(this.gridX.center(), this.gridY.span(9))
    btn_4.text = '4人家族';
    btn_4.onpointend = function() {
      family = 4;
      btnFlag = true;
      console.log(family);
    }
    var btn_6 = Button().addChildTo(this).setPosition(this.gridX.center(), this.gridY.span(12))
    btn_6.text = '6人家族';
    btn_6.onpointend = function() {
      family = 6;
      btnFlag = true;
      console.log(family);
    }

    var startBtn = Button().addChildTo(this).setPosition(this.gridX.center(), this.gridY.span(15))
    startBtn.text = "TALK START";
    startBtn.width = 400;
    startBtn.onpointend = function() {
      console.log("!");
      var scene = this.getParent();
      scene.exit({
        pushBtn: family,
      });
    }
  },
});