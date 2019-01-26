phina.globalize();

var family;

phina.define('TitleBtn', {
  superClass: 'Button',
  init: function(member,flag) {
    this.member = member;
    this.superInit({
      text: member+'人家族',
      fill: '#ccc',
    });
    this.onpushed = function() {
      family = member;
      flag = !flag;
      switch (flag) { 
        case true: 
          fill = 'skyblue';
          break;
        case false:
          fill = '#ccc';
          break;
      }
      console.log(family);
    }
    this.onpointend = function() {
      this.flare('pushed');
      console.log("!!");
    }
  }
})

// TitleScene
phina.define('TitleScene', {
  superClass: 'DisplayScene',
  init: function() {
    this.superInit({
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    });
    // タイトル
    Label({
      text: '家族の離し合い - Family Talking!'
    }).addChildTo(this).setPosition(this.gridX.center(), this.gridY.span(4));

    var btn_3 = TitleBtn(3,false).addChildTo(this).setPosition(this.gridX.center(), this.gridY.span(6))
    var btn_4 = TitleBtn(4,false).addChildTo(this).setPosition(this.gridX.center(), this.gridY.span(9))
    var btn_6 = TitleBtn(6,false).addChildTo(this).setPosition(this.gridX.center(), this.gridY.span(12))

    var startBtn = Button().addChildTo(this).setPosition(this.gridX.center(), this.gridY.span(15))
    startBtn.text = "TALK START";
    startBtn.width = 400;
    startBtn.fill = 'red';
    startBtn.onpointend = function() {
      var scene = this.getParent();
      scene.exit({
        pushBtn: family,
      });
    }
  },
});