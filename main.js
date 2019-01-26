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
    'WordDammy': './image/WordDammy.jpg'
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
  },
}

// キーごとの設定
const keyScore = {
  'D': {
    'score': 3,
    'assetKey': 'KeyC',
  },
  'F': {
    'score': 4,
    'assetKey': 'KeyC2',
  },
  'J': {
    'score': 5,
    'assetKey': 'KeyC3'
  },
  'K': {
    'score': 6,
    'assetKey': 'KeyC4',
  },
}

// player_lineのy座標値
const PLAYER_LINE_Y = 100;

// wordオブジェクト
const aryLaneD = [];
const aryLaneF = [];
const aryLaneJ = [];
const aryLaneK = [];

// MainScene クラスを定義
phina.define('MainScene', {
  superClass: 'DisplayScene',
  init: function() {
    this.superInit({
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT
    });
    this.isGameStart = false;
    this.backgroundColor = '#444';
    
    // ラベルを生成（将来消すかも？）
    this.message = Label({
      text: 'Stand by?',
      x: this.gridX.center(),
      y: this.gridY.center(),
      fill: 'white',
    }).addChildTo(this);

    // スコア表示
    this.score = 0;
    this.scoreLabel = Label({
      text: "0",
      fontSize: 60,
      fill: "white",
    }).addChildTo(this)
      .setPosition(this.gridX.span(1),this.gridY.span(1));


    // WordDammy
    this.spriteDammy = Sprite('WordDammy').addChildTo(this);
    this.spriteDammy.setPosition(800, 400);
    this.spriteDammy.width = 50;
    this.spriteDammy.height = 600;

    // スプライトを作成
    for (var spriteKey in spriteInfo) {
      // dammy
      if (spriteKey === 'WordDammy') continue;
      // this.spriteXXX = Sprite("XXX").addChildTo(this)を生成して評価
      eval('this.sprite' + spriteKey + ' = Sprite("' + spriteKey + '").addChildTo(this)');
      // this.spriteXXX.setPosition(spriteInfo["XXX"].x, spriteInfo["XXX"].y)を生成して評価
      eval('this.sprite' + spriteKey + '.setPosition(spriteInfo["' + spriteKey + '"].x, spriteInfo["' + spriteKey + '"].y)');
    }
    // 経過時間の管理
    var time = 0;
  /**
   * キー入力によるゲーム開始制御、点数更新処理
   * @param app object
   */
  this.update = function(app) {
    var keyboard = app.keyboard;
    // ゲーム開始チェック。対象のキーが全て押された状態でゲームスタート
    if (!this.isGameStart) {
      for (var key in keyScore) {
        // 全てのキーが押されていなければゲーム開始しない
        if (!keyboard.getKey(key)) return;
      }
      // ゲーム開始後の処理をモリモリ
      this.isGameStart = true;
      this.message.text = 'Go!!';
      this.spriteDammy.update = function() {
        this.moveBy(0,-1);
        console.log(this.y);
      }
    }
    for (var key in keyScore) {
      // キーを押している間、スコアを更新し、ライトをoffにする
      if (keyboard.getKey(key)) {
        // this.spriteXXX.setImage('XXXoff')をeval評価
        eval('this.sprite' + keyScore[key]['assetKey'] + '.setImage("' + keyScore[key]['assetKey'] + 'Off' +'")');
      } else {
        // 離している、かつwordブロックがplayer_lineに重なっている間はスコア加算
        const isHitWord = this.checkWordHit(eval('aryLane' + key));
        if (isHitWord) this.score += keyScore[key]['score'];
      }
      // 離したタイミングでライトをonにする
      if (keyboard.getKeyUp(key)) {
        eval('this.sprite' + keyScore[key]['assetKey'] + '.setImage("' + keyScore[key]['assetKey'] +'")');
      }
    }
    this.scoreLabel.text = this.score;
    
    // 時間関係
    time += app.deltaTime;
    var elapsed = Math.floor(time / 1000);
    

  }
    /**
     * 対象レーンのブロックがplayer_line（仮）に重なっているか確認する
     * @param ary_lane array
     * @return boolean
     */
    this.checkWordHit = function(ary_lane) {
      // mock処理
      // if (this.spriteDammy.y <= PLAYER_LINE_Y) {
      // // if (this.spriteDammy.y <= PLAYER_LINE_Y && PLAYER_LINE_Y <= (this.spriteDammy.y + this.spriteDammy.height)) {
      //   return true;
      // }
      // return false;
      return true;
    }
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
