function createPacmen() {
  var radius = 50;
  var startPos = 50;
  var mouthIncrement = 15;
  for(var i = 0; i < 4; i++) {
      var mouthAngleTop = 0 + mouthIncrement * i;
      var mouthAngleBottom = 359 - mouthIncrement * i;
      var pacman;
      if(mouthAngleTop !== 0 && mouthAngleBottom !== 0) {
          pacman = new Arc(radius, mouthAngleTop, mouthAngleBottom, 0);
      }
      else {
          pacman = new Circle(radius);
      }
      pacman.setPosition(startPos + 100 * i, 120);
      pacman.setColor(Color.yellow);
      add(pacman);
  }
}