// phina.js をグローバル領域に展開
phina.globalize();

// アセット
var ASSETS = {
  image: {
    'Father'  : './image/brother.png',
    'Mother'  : './image/brother.png',
    'Brother' : './image/brother.png',
    'Sister'  : './image/brother.png',
    'KeyC'    : './image/key_c_on.png',
    'KeyC2'   : './image/key_c_on.png',
    'KeyC3'   : './image/key_c_on.png',
    'KeyC4'   : './image/key_c_on.png',
    'KeyCOff' : './image/key_c_off.png',
    'KeyC2Off': './image/key_c_off.png',
    'KeyC3Off': './image/key_c_off.png',
    'KeyC4Off': './image/key_c_off.png',
  }
}

// 座標情報
const spriteInfo = {
  'Father': {
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
  'Brother': {
    'x': 600,
    'y': 100
  },
  'Sister': {
    'x': 800,
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
  },
  'KeyC3': {
    'x': 600,
    'y': 230,
    'width': 80,
    'height': 80
  },
  'KeyC4': {
    'x': 800,
    'y': 230,
    'width': 80,
    'height': 80
  }
}

// キーごとの設定
const keyScore = {
  'F': {
    'score': 3,
    'assetKey': 'KeyC',
  },
  'D': {
    'score': 4,
    'assetKey': 'KeyC3',
  },
  'J': {
    'score': 5,
    'assetKey': 'KeyC2'
  },
  'K': {
    'score': 6,
    'assetKey': 'KeyC4',
  },
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
    this.isGameStart = false;
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

    // スプライトを作成
    for (var spriteKey in spriteInfo) {
      // this.spriteXXX = Sprite("XXX").addChildTo(this)を生成して評価
      eval('this.sprite' + spriteKey + ' = Sprite("' + spriteKey + '").addChildTo(this)');
      // this.spriteXXX.setPosition(spriteInfo["XXX"].x, spriteInfo["XXX"].y)を生成して評価
      eval('this.sprite' + spriteKey + '.setPosition(spriteInfo["' + spriteKey + '"].x, spriteInfo["' + spriteKey + '"].y)');
    }
  },
  /**
   * キー入力によるゲーム開始制御、点数更新処理
   */
  update: function(app) {
    var keyboard = app.keyboard;
    // ゲーム開始チェック。対象のキーが全て押された状態でゲームスタート
    if (!this.isGameStart) {
      for (var key in keyScore) {
        // 全てのキーが押されていなければゲーム開始しない
        if (!keyboard.getKey(key)) return;
      }
      this.isGameStart = true;
    }
    for (var key in keyScore) {
      // キーを押している間、スコアを更新し、ライトをonにする
      if (keyboard.getKey(key)) {
        // this.spriteXXX.setImage('XXXoff')をeval評価
        eval('this.sprite' + keyScore[key]['assetKey'] + '.setImage("' + keyScore[key]['assetKey'] + 'Off' +'")');
      } else {
        // 離している間はスコア加算
        this.score += keyScore[key]['score'];
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
