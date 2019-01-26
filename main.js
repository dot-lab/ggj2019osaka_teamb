// phina.js をグローバル領域に展開
phina.globalize();

// アセット
var ASSETS = {
  image: {
    'Fam1'        : './image/titi_1.png',
    'Fam1miss'    : './image/titi_2.png',
    'Fam1success' : './image/titi_3.png',
    'Fam2'          : './image/haha_1.png',
    'Fam2miss'      : './image/haha_2.png',
    'Fam2success'   : './image/haha_3.png',
    'Fam3'       : './image/ani_1.png',
    'Fam3miss'   : './image/ani_2.png',
    'Fam3success': './image/ani_3.png',
    'Fam4'        : './image/ane_1.png',
    'Fam4miss'    : './image/ane_2.png',
    'Fam4success' : './image/ane_3.png',
    'Fam5'          : './image/otouto_1.png',
    'Fam5miss'      : './image/otouto_2.png',
    'Fam5success'   : './image/otouto_3.png',
    'Fam6'       : './image/imouto_1.png',
    'Fam6miss'   : './image/imouto_2.png',
    'Fam6success': './image/imouto_3.png',
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
    'BarInside': './image/bar_inside.png',
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
  'Fam1': {
    'x': 70,
    'y': 100
  },
  'Fam2': {
    'x': 210,
    'y': 100
  },
  'Fam3': {
    'x': 350,
    'y': 100
  },
  'Fam4': {
    'x': 490,
    'y': 100
  },
  'Fam5': {
    'x': 630,
    'y': 100
  },
  'Fam6': {
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
  },
  'BarInside': {
    'x': 950,
    'y': 430
  }
}

// キーごとの設定
const keyScore = {
  'S': {
    'score': 1,
    'assetKey': 'KeyX',
    'famIndex': 1
  },
  'D': {
    'score': 1,
    'assetKey': 'KeyC',
    'famIndex': 2
  },
  'F': {
    'score': 1,
    'assetKey': 'KeyV',
    'famIndex': 3
  },
  'J': {
    'score': 1,
    'assetKey': 'KeyB',
    'famIndex': 4
  },
  'K': {
    'score': 1,
    'assetKey': 'KeyM',
    'famIndex': 5
  },
  'L': {
    'score': 0.2,
    'assetKey': 'KeyN',
    'famIndex': 6
  },
}

//
const MAX_SCORE = 2000;
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
    this.score = 1000;
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
    // スコアバーの調節
    this.ctlScoreBar();
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
      // キーを押している間、スコアを更新し、ライトをoffにする
      if (keyboard.getKey(key)) {
        // 顔を通常に戻す
        eval('this.spriteFam' + keyScore[key]['famIndex'] + '.setImage("Fam' + keyScore[key]['famIndex'] +'")');
        // this.spriteXXX.setImage('XXXoff')をeval評価
        eval('this.sprite' + keyScore[key]['assetKey'] + '.setImage("' + keyScore[key]['assetKey'] + 'Off' +'")');
        // ボタンを押している間にwordが通っていたらmiss
        const isHitWord = this.checkWordHit(eval('aryLane' + key));
        if (isHitWord) {}
      } else {
        // 離している、かつwordブロックがplayer_lineに重なっている間はスコア加算し、顔を笑顔に
        const isHitWord = this.checkWordHit(eval('aryLane' + key));
        if (isHitWord) {
          // this.spriteXXX.setImage('XXXoff')をeval評価 顔を笑顔に
          eval('this.spriteFam' + keyScore[key]['famIndex'] + '.setImage("Fam' + keyScore[key]['famIndex'] + 'success' +'")');
          this.score += keyScore[key]['score'];
        } else {
          // miss
        }
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
  },
  /**
   * スコアバーの表示を調節する
   */
   ctlScoreBar: function() {
     this.spriteBarInside.height = 598 * this.score / MAX_SCORE;
     if (this.spriteBarInside.height > 598) this.spriteBarInside.height = 598;
     this.spriteBarInside.y = 430 + (598 - this.spriteBarInside.height)  / 2;
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
