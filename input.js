/**
 * @param app
 */
function getIput(app) {
  var keyboard = app.keyboard;
  if (keyboard.getKey('S')) {
    this.scoreLabel.text = 'S';
  } else if (keyboard.getKey('D')) {
    this.scoreLabel.text = 'D';
  } else if (keyboard.getKey('F')) {
    console.log('F');
  }
}
