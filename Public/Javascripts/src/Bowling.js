'use strict';

function BowlingGame() {
  this.score = 0;
  this.frameIndex = 1;
};

BowlingGame.prototype.roll = function(number) {
  return number
};

BowlingGame.prototype.newGame = function(num1,num2) {
  var roll1 = this.roll(num1);
  var roll2 = this.roll(num2);
  this.score += (roll1 + roll2);
  this.frameIndex += 1;
};
