// phina.js をグローバル領域に展開
phina.globalize();

// アセット
var ASSETS = {
  image: {
    'father' : './image/brother.png',
    'Mother' : './image/brother.png',
    'brother': './image/brother.png',
    'KeyC' : './image/key_c_on.png',
    'KeyC2' : './image/key_c_on.png',
    'KeyCOff': './image/key_c_off.png',
    'KeyC2Off': './image/key_c_off.png'
  }
}

// 座標情報
const spriteInfo = {
  'father': {
    'x': 200,
    'y': 100,
    'width': 150,
    'height': 150
  },
  'Mother': {
    'x': 400,
    'y': 100,
    'width' : 150,
    'height': 150
  },
  'brother': {
    'x': 600,
    'y': 100
  },
  'KeyC': {
    'x': 200,
    'y': 230,
    'width': 80,
    'height': 80
  },
  'KeyC2': {
    'x': 400,
    'y': 230,
    'width': 80,
    'height': 80
  }
}

var ASSETS

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
    this.score = 0;
    this.scoreLabel = Label({
      text:"0",
      fontSize:60,
      fill:"white",
    }).addChildTo(this)
      .setPosition(this.gridX.span(1),this.gridY.span(1));

    // 父
    this.spriteFather  = Sprite('father').addChildTo(this);
    this.spriteFather.setPosition(spriteInfo['father'].x, spriteInfo['father'].y);
    this.spriteFather.width = spriteInfo['father'].width;
    this.spriteFather.height = spriteInfo['father'].height;
    // 母
    this.spriteMother  = Sprite('Mother').addChildTo(this);
    this.spriteMother.setPosition(spriteInfo['Mother'].x, spriteInfo['Mother'].y);
    this.spriteMother.width  = spriteInfo['Mother'].width;
    this.spriteMother.height = spriteInfo['Mother'].height;
    // ライト1
    this.spriteKeyC  = Sprite('KeyC').addChildTo(this);
    this.spriteKeyC.setPosition(spriteInfo['KeyC'].x, spriteInfo['KeyC'].y);
    //this.spriteKeyC.width  = spriteInfo['KeyC'].width;
    //this.spriteKeyC.height = spriteInfo['KeyC'].height;
    // ライト2
    this.spriteKeyC2  = Sprite('KeyC2').addChildTo(this);
    this.spriteKeyC2.setPosition(spriteInfo['KeyC2'].x, spriteInfo['KeyC2'].y);
    //this.spriteKeyC2.width  = spriteInfo['KeyC2'].width;
    //this.spriteKeyC2.height = spriteInfo['KeyC2'].height;
  },
  /**
   * キー入力による点数更新処理
   */
  update: function(app) {
    const keyScore = {
      'F': {
        'score': 3,
        'assetKey': 'KeyC',
      },
      'J': {
        'score': 4,
        'assetKey': 'KeyC2'
      }
    }
    var keyboard = app.keyboard;
    for (var key in keyScore) {
      // キーを押している間、スコアを更新し、ライトをonにする
      if (keyboard.getKey(key)) {
        this.score += keyScore[key]['score'];
        eval('this.sprite' + keyScore[key]['assetKey'] + '.setImage("' + keyScore[key]['assetKey'] + 'Off' +'")');
      }
      // 離したタイミングでライトをonにする
      if (keyboard.getKeyUp(key)) {
        eval('this.sprite' + keyScore[key]['assetKey'] + '.setImage("' + keyScore[key]['assetKey'] +'")');
      }
    }
    this.scoreLabel.text = this.score;
  }
});

// メイン処理
phina.main(function() {
  // アプリケーション生成
  var app = GameApp({
    startLabel: 'title',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    assets: ASSETS
  });
  // アプリケーション実行
  app.run();
});
