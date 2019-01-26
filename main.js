// phina.js をグローバル領域に展開
phina.globalize();

// アセット
var ASSETS = {
  image: {
    'Brother'        : './image/otouto_1.png',
    'Brothermiss'    : './image/otouto_2.png',
    'Brothersuccess' : './image/otouto_3.png',
    'Ane'          : './image/ane_1.png',
    'Anemiss'      : './image/ane_2.png',
    'Anesuccess'   : './image/ane_3.png',
    'Imouto'       : './image/ane_1.png',
    'Imoutomiss'   : './image/ane_2.png',
    'Imoutosyccess': './image/ane_3.png',
    'Brother2'        : './image/otouto_1.png',
    'Brother2miss'    : './image/otouto_2.png',
    'Brother2success' : './image/otouto_3.png',
    'Ane2'          : './image/ane_1.png',
    'Ane2miss'      : './image/ane_2.png',
    'Ane2success'   : './image/ane_3.png',
    'Imouto2'       : './image/ane_1.png',
    'Imouto2miss'   : './image/ane_2.png',
    'Imouto2syccess': './image/ane_3.png',
    'KeyX'    : './image/key_x_on.png',
    'KeyC'   : './image/key_c_on.png',
    'KeyV'   : './image/key_v_on.png',
    'KeyB'   : './image/key_b_on.png',
    'KeyM'   : './image/key_m_on.png',
    'KeyN'   : './image/key_n_on.png',
    'KeyXOff': './image/key_x_off.png',
    'KeyCOff': './image/key_c_off.png',
    'KeyVOff': './image/key_v_off.png',
    'KeyBOff': './image/key_b_off.png',
    'KeyMOff': './image/key_m_off.png',
    'KeyNOff': './image/key_n_off.png',
    'Bg6'    : './image/bg6.png',
    'BarOutside': './image/bar_outside.png',
    'WordDammy': './image/WordDammy.jpg'
  }
}

// 座標情報
const spriteInfo = {
  'Bg6': {
    'x': 512,
    'y': 384
  },
  'Brother': {
    'x': 70,
    'y': 100
  },
  'Ane': {
    'x': 210,
    'y': 100
  },
  'Imouto': {
    'x': 350,
    'y': 100
  },
  'Brother2': {
    'x': 490,
    'y': 100
  },
  'Ane2': {
    'x': 630,
    'y': 100
  },
  'Imouto2': {
    'x': 770,
    'y': 100
  },
  'KeyX': {
    'x': 70,
    'y': 240,
  },
  'KeyC': {
    'x': 210,
    'y': 240,
  },
  'KeyV': {
    'x': 350,
    'y': 240,
  },
  'KeyB': {
    'x': 490,
    'y': 240,
  },
  'KeyM': {
    'x': 630,
    'y': 240,
  },
  'KeyN': {
    'x': 770,
    'y': 240,
  },
  'BarOutside': {
    'x': 950,
    'y': 384
  }
}

// キーごとの設定
const keyScore = {
  'S': {
    'score': 2,
    'assetKey': 'KeyX',
  },
  'D': {
    'score': 3,
    'assetKey': 'KeyC',
  },
  'F': {
    'score': 4,
    'assetKey': 'KeyV',
  },
  'J': {
    'score': 5,
    'assetKey': 'KeyB'
  },
  'K': {
    'score': 6,
    'assetKey': 'KeyM',
  },
  'L': {
    'score': 6,
    'assetKey': 'KeyN',
  },
}

// player_lineのy座標値
const PLAYER_LINE_Y = 100;

// wordオブジェクト
const aryLaneS = [];
const aryLaneD = [];
const aryLaneF = [];
const aryLaneJ = [];
const aryLaneK = [];
const aryLaneL = [];

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
      console.log();
      eval('this.sprite' + spriteKey + ' = Sprite("' + spriteKey + '").addChildTo(this)');
      // this.spriteXXX.setPosition(spriteInfo["XXX"].x, spriteInfo["XXX"].y)を生成して評価
      eval('this.sprite' + spriteKey + '.setPosition(spriteInfo["' + spriteKey + '"].x, spriteInfo["' + spriteKey + '"].y)');
    }
  },
  /**
   * キー入力によるゲーム開始制御、点数更新処理
   * @param app object
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
        // ボタンを押している間にwordが通っていたらmiss
        const isHitWord = this.checkWordHit(eval('aryLane' + key));
        if (isHitWord) {}
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
  },
  /**
   * 対象レーンのブロックがplayer_line（仮）に重なっているか確認する
   * @param ary_lane array
   * @return boolean
   */
  checkWordHit: function(ary_lane) {
    // mock処理
    /*
    if (this.spriteDammy.y <= PLAYER_LINE_Y && PLAYER_LINE_Y <= (this.spriteDammy.y + this.spriteDammy.height)) {
      return true;
    }
    return false;
    */
    return true;
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
