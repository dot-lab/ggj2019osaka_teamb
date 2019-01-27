// phina.js をグローバル領域に展開
phina.globalize();

// アセット
var ASSETS = {
  image: {
    'Fam1'        :   './image/titi_1.png',
    'Fam1miss'    :   './image/titi_2.png',
    'Fam1success' :   './image/titi_3.png',
    'Fam2'          : './image/haha_1.png',
    'Fam2miss'      : './image/haha_2.png',
    'Fam2success'   : './image/haha_3.png',
    'Fam3'       :    './image/ani_1.png',
    'Fam3miss'   :    './image/ani_2.png',
    'Fam3success':    './image/ani_3.png',
    'Fam4'        :   './image/ane_1.png',
    'Fam4miss'    :   './image/ane_2.png',
    'Fam4success' :   './image/ane_3.png',
    'Fam5'          : './image/otouto_1.png',
    'Fam5miss'      : './image/otouto_2.png',
    'Fam5success'   : './image/otouto_3.png',
    'Fam6'       :    './image/imouto_1.png',
    'Fam6miss'   :    './image/imouto_2.png',
    'Fam6success':    './image/imouto_3.png',
    'KeyX'    :       './image/key_x_on.png',
    'KeyC'   :        './image/key_c_on.png',
    'KeyV'   :        './image/key_v_on.png',
    'KeyB'   :        './image/key_b_on.png',
    'KeyM'   :        './image/key_m_on.png',
    'KeyN'   :        './image/key_n_on.png',
    'KeyXOff':        './image/key_x_off.png',
    'KeyCOff':        './image/key_c_off.png',
    'KeyVOff':        './image/key_v_off.png',
    'KeyBOff':        './image/key_b_off.png',
    'KeyMOff':        './image/key_m_off.png',
    'KeyNOff':        './image/key_n_off.png',
    'Bg6'    :        './image/bg6.png',
    'BarInside':      './image/bar_inside.png',
    'BarOutside':     './image/bar_outside.png',
    'BarMissInside' : './image/barMissInside.png',
    'BarMissOutside': './image/barMissOutside.png',
    'Title':          './image/Title.png',
    'Word1':          './image/msg01.png',
    'Word2':          './image/msg02.png',
    'Word3':          './image/msg03.png',
    'Word4':          './image/msg04.png',
    'Word5':          './image/msg05.png',
    'Word6':          './image/msg06.png',
    'Word7':          './image/msg07.png',
    'Word8':          './image/msg08.png',
    'Word9':          './image/msg09.png',
    'Word10':         './image/msg10.png',
    'Word11':         './image/msg11.png',
    'Word12':         './image/msg12.png',
    'Word13':         './image/msg13.png',
    'Word14':         './image/msg14.png',
    'Word15':         './image/msg15.png',
    'Word16':         './image/msg16.png',
    'Word17':         './image/msg17.png',
    'Word18':         './image/msg18.png',
    'Word19':         './image/msg19.png',
    'Word20':         './image/msg20.png',
    'Word21':         './image/msg21.png',
    'Word22':         './image/msg22.png',
    'Word23':         './image/msg23.png',
    'Word1success':   './image/msg_p_01.png',
    'Word2success':   './image/msg_p_02.png',
    'Word3success':   './image/msg_p_03.png',
    'Word4success':   './image/msg_p_04.png',
    'Word5success':   './image/msg_p_05.png',
    'Word6success':   './image/msg_p_06.png',
    'Word7success':   './image/msg_p_07.png',
    'Word8success':   './image/msg_p_08.png',
    'Word9success':   './image/msg_p_09.png',
    'Word10success':   './image/msg_p_10.png',
    'Word11success':   './image/msg_p_11.png',
    'Word12success':   './image/msg_p_12.png',
    'Word13success':   './image/msg_p_13.png',
    'Word14success':   './image/msg_p_14.png',
    'Word15success':   './image/msg_p_15.png',
    'Word16success':   './image/msg_p_16.png',
    'Word17success':   './image/msg_p_17.png',
    'Word18success':   './image/msg_p_18.png',
    'Word19success':   './image/msg_p_19.png',
    'Word20success':   './image/msg_p_20.png',
    'Word21success':   './image/msg_p_21.png',
    'Word22success':   './image/msg_p_22.png',
    'Word23success':   './image/msg_p_23.png',
    'BgHeader':        './image/bg_header.png',
  }
}

// 座標情報
const spriteInfo = {
  'BgHeader': {
    'x': 420,
    'y': 125
  },
  'Fam1': {
    'x': 70,
    'y': 160
  },
  'Fam2': {
    'x': 210,
    'y': 160
  },
  'Fam3': {
    'x': 350,
    'y': 160
  },
  'Fam4': {
    'x': 490,
    'y': 160
  },
  'Fam5': {
    'x': 630,
    'y': 160
  },
  'Fam6': {
    'x': 770,
    'y': 160
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
  'KeyN': {
    'x': 630,
    'y': 240,
  },
  'KeyM': {
    'x': 770,
    'y': 240,
  },
  'BarOutside': {
    'x': 950,
    'y': 384
  },
  'BarInside': {
    'x': 950,
    'y': 426.7
  },
  'Title': {
    'x': 500,
    'y': 400
  },
}

const spriteWordInfo = {
  'Word1': {
    'x': 60,
    'y': 1200,
    'time': 5,
    'button': 'X',
  },
  'Word2': {
    'x': 620,
    'y': 1200,
    'time': 10,
    'button': 'N',
  },
  'Word3': {
    'x': 760,
    'y': 1200,
    'time': 10,
    'button': 'M',
  },
  'Word4': {
    'x': 60,
    'y': 1200,
    'time': 12,
    'button': 'X',
  },
  'Word5': {
    'x': 480,
    'y': 1200,
    'time': 14,
    'button': 'B',
  },
  'Word6': {
    'x': 620,
    'y': 1200,
    'time': 20,
    'button': 'N',
  },
  'Word7': {
    'x': 60,
    'y': 1200,
    'time': 21,
    'button': 'X',
  },
  'Word8': {
    'x': 340,
    'y': 1200,
    'time': 23,
    'button': 'V',
  },
  'Word9': {
    'x': 480,
    'y': 1200,
    'time': 29,
    'button': 'B',
  },
  'Word10': {
    'x': 760,
    'y': 1200,
    'time': 29,
    'button': 'M',
  },
  'Word11': {
    'x': 200,
    'y': 1200,
    'time': 33,
    'button': 'C',
  },
  'Word12': {
    'x': 340,
    'y': 1200,
    'time': 36,
    'button': 'V',
  },
  'Word13': {
    'x': 760,
    'y': 1200,
    'time': 36,
    'button': 'M',
  },
  'Word14': {
    'x': 60,
    'y': 1200,
    'time': 39,
    'button': 'B',
  },
  'Word15': {
    'x': 620,
    'y': 1200,
    'time': 39,
    'button': 'N',
  },
  'Word16': {
    'x': 340,
    'y': 1200,
    'time': 41,
    'button': 'V',
  },
  'Word17': {
    'x': 60,
    'y': 1200,
    'time': 43,
    'button': 'X',
  },
  'Word18': {
    'x': 480,
    'y': 1200,
    'time': 44,
    'button': 'B',
  },
  'Word19': {
    'x': 620,
    'y': 1200,
    'time': 44,
    'button': 'N',
  },
  'Word20': {
    'x': 200,
    'y': 1200,
    'time': 48,
    'button': 'C',
  },
  'Word21': {
    'x': 620,
    'y': 1200,
    'time': 49,
    'button': 'N',
  },
  'Word22': {
    'x': 60,
    'y': 1200,
    'time': 52,
    'button': 'X',
  },
  'Word23': {
    'x': 620,
    'y': 1200,
    'time': 55,
    'button': 'N',
  }
}

// キーごとの設定
const keyScore = {
  'X': {
    'score': 1,
    'assetKey': 'KeyX',
    'famIndex': 1
  },
  'C': {
    'score': 1,
    'assetKey': 'KeyC',
    'famIndex': 2
  },
  'V': {
    'score': 1,
    'assetKey': 'KeyV',
    'famIndex': 3
  },
  'B': {
    'score': 1,
    'assetKey': 'KeyB',
    'famIndex': 4
  },
  'N': {
    'score': 1,
    'assetKey': 'KeyN',
    'famIndex': 5
  },
  'M': {
    'score': 0.2,
    'assetKey': 'KeyM',
    'famIndex': 6
  },
}

//
const MAX_SCORE = 2000;
// player_lineのy座標値
const PLAYER_LINE_Y = 240;
// 制限時間
const TIME_LIMIT = 60;
// 移動速度
const MOVE_SPEED = 15;
// スコア発生管理関数
const SCORE_GET     = 'success';
const SCORE_STAY    = 'stay';
const SCORE_FAILURE = 'failure';

// wordオブジェクト
const aryLaneX = {};
const aryLaneC = {};
const aryLaneV = {};
const aryLaneB = {};
const aryLaneN = {};
const aryLaneM = {};

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
    this.score = 1000;
    this.elapsedTime = 0; // 時間計測関数

    // 背景spriteを作成
    this.spriteBg6 = Sprite("Bg6").addChildTo(this);
    this.spriteBg6.setPosition(512, 384);

    // wordスプライトを作成
    for (var wordSpriteKey in spriteWordInfo) {
      eval('this.sprite' + wordSpriteKey + ' = Sprite("' + wordSpriteKey + '").addChildTo(this)');
      eval('this.sprite' + wordSpriteKey + '.setPosition(spriteWordInfo["' + wordSpriteKey + '"].x, spriteWordInfo["' + wordSpriteKey + '"].y)');
      eval('aryLane' + spriteWordInfo[wordSpriteKey]['button'] + '["' + wordSpriteKey + '"] = this.sprite' + wordSpriteKey);
    }

    // スプライトを作成
    for (var spriteKey in spriteInfo) {
      // this.spriteXXX = Sprite("XXX").addChildTo(this)を生成して評価
      eval('this.sprite' + spriteKey + ' = Sprite("' + spriteKey + '").addChildTo(this)');
      // this.spriteXXX.setPosition(spriteInfo["XXX"].x, spriteInfo["XXX"].y)を生成して評価
      eval('this.sprite' + spriteKey + '.setPosition(spriteInfo["' + spriteKey + '"].x, spriteInfo["' + spriteKey + '"].y)');
    }

    this.timeLabel = Label({
      text:this.elapsedTime,
      fontSize:100,
      fill:"white",
    }).addChildTo(this)
      .setPosition(this.gridX.span(8),50);
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
    //タイトル消滅
    this.spriteTitle.hide();
    // 時間計測
    this.ctlTimeLabel(app);
    // wordを動かす
    this.moveWord();
    // 1レーンでもfalseがあるとscoreが下がっていく
    let isScoreGet = SCORE_STAY;
    for (var key in keyScore) {
      // キーを押している間、スコアを更新し、ライトをoffにする
      if (keyboard.getKey(key)) {
        // 顔を通常に戻す
        eval('this.spriteFam' + keyScore[key]['famIndex'] + '.setImage("Fam' + keyScore[key]['famIndex'] +'")');
        // this.spriteXXX.setImage('XXXoff')をeval評価
        eval('this.sprite' + keyScore[key]['assetKey'] + '.setImage("' + keyScore[key]['assetKey'] + 'Off' +'")');
        // ボタンを押している間にwordが通っていたらmiss
        const isHitWord = this.checkWordHit(eval('aryLane' + key));
        if (isHitWord['isHit']) {
          isScoreGet = SCORE_FAILURE;
          // wordブロックをピンクに
          eval('this.sprite' + isHitWord['hitKey'] + '.setImage("' + isHitWord['hitKey'] + '")');
          // 顔を泣き顔に
          eval('this.spriteFam' + keyScore[key]['famIndex'] + '.setImage("Fam' + keyScore[key]['famIndex'] + 'miss' +'")');
        }
      } else {
        // 離している、かつwordブロックがplayer_lineに重なっている間はスコア加算し、顔を笑顔に
        const isHitWord = this.checkWordHit(eval('aryLane' + key));
        if (isHitWord['isHit']) {
          isScoreGet = SCORE_GET;
          // wordブロックをピンクに
          eval('this.sprite' + isHitWord['hitKey'] + '.setImage("' + isHitWord['hitKey'] + 'success")');
          // this.spriteXXX.setImage('XXXoff')をeval評価 顔を笑顔に
          eval('this.spriteFam' + keyScore[key]['famIndex'] + '.setImage("Fam' + keyScore[key]['famIndex'] + 'success' +'")');
        } else {
          isScoreGet = SCORE_FAILURE;
          // 顔を泣き顔に
          eval('this.spriteFam' + keyScore[key]['famIndex'] + '.setImage("Fam' + keyScore[key]['famIndex'] + 'miss' +'")');
        }
      }
      // 離したタイミングでライトをonにする
      if (keyboard.getKeyUp(key)) {
        eval('this.sprite' + keyScore[key]['assetKey'] + '.setImage("' + keyScore[key]['assetKey'] +'")');
      }
    }
    // 制限時間がきたらスコア更新しない
    if (this.timeLabel.text >= TIME_LIMIT) return;
    // スコア計算
    if (isScoreGet === SCORE_GET) {
      this.score += 10;
    } else if (isScoreGet === SCORE_FAILURE){
      this.score -= 10;
    }
  },
  /**
   * 対象レーンのブロックがplayer_line（仮）に重なっているか確認する
   * @param ary_lane array
   * @return object ブロックが重なっているかのbooleanとどのキーが重なっているか
   */
  checkWordHit: function(ary_lane) {
    const wordHitInfo = {
      'isHit': false,
      'hitKey': 0,
    }
    // mock処理
    for (var key in ary_lane) {
      if (ary_lane[key].y - ary_lane[key].height / 2 <= PLAYER_LINE_Y && PLAYER_LINE_Y <= (ary_lane[key].y + ary_lane[key].height / 2)) {
        wordHitInfo['isHit']  = true;
        wordHitInfo['hitKey'] = key;
        return wordHitInfo;
      }
    }
    return wordHitInfo;
  },
  /**
   * スコアバーの表示を調節する
   */
   ctlScoreBar: function() {
     // scoreが30%を超えているかどうかで画像を切り替える
     if (this.score / MAX_SCORE < 0.3) {
       this.spriteBarInside.setImage('BarMissInside');
       this.spriteBarOutside.setImage('BarMissOutside');
     } else {
       this.spriteBarInside.setImage('BarInside');
       this.spriteBarOutside.setImage('BarOutside');
     }
     this.spriteBarInside.height = 598 * this.score / MAX_SCORE;
     // 上限下限を設定
     if (this.score > MAX_SCORE) this.score = MAX_SCORE;
     if (this.score < 0) this.score = 0;
     // 表示位置を調整
     this.spriteBarInside.y = spriteInfo['BarInside']['y'] + (598 - this.spriteBarInside.height)  / 2;
   },
   /**
    * 時間管理をする
    */
    ctlTimeLabel: function(app) {
      if (this.timeLabel.text < TIME_LIMIT) {
        this.elapsedTime += app.deltaTime;
        this.timeLabel.text = Math.floor(this.elapsedTime / 1000);
      }
    },
    /**
     * wordを上昇させる
     */
     moveWord: function() {
       for (var spriteWordKey in aryLaneX) {
         if (spriteWordInfo[spriteWordKey].time <= this.timeLabel.text) {
           aryLaneX[spriteWordKey].y -= MOVE_SPEED;
         }
       }
       for (var spriteWordKey in aryLaneC) {
         if (spriteWordInfo[spriteWordKey].time <= this.timeLabel.text) {
           aryLaneC[spriteWordKey].y -= MOVE_SPEED;
         }
       }
       for (var spriteWordKey in aryLaneV) {
         if (spriteWordInfo[spriteWordKey].time <= this.timeLabel.text) {
           aryLaneV[spriteWordKey].y -= MOVE_SPEED;
         }
       }
       for (var spriteWordKey in aryLaneB) {
         if (spriteWordInfo[spriteWordKey].time <= this.timeLabel.text) {
           aryLaneB[spriteWordKey].y -= MOVE_SPEED;
         }
       }
       for (var spriteWordKey in aryLaneN) {
         if (spriteWordInfo[spriteWordKey].time <= this.timeLabel.text) {
           aryLaneN[spriteWordKey].y -= MOVE_SPEED;
         }
       }
       for (var spriteWordKey in aryLaneM) {
         if (spriteWordInfo[spriteWordKey].time <= this.timeLabel.text) {
           aryLaneM[spriteWordKey].y -= MOVE_SPEED;
         }
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
