'use strict';

describe('BowlingGame', function() {

  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  it('starts at 0', function() {
    expect(game.score).toEqual(0);
  });

  it('returns roll amount', function() {
    expect(game.roll(2)).toEqual(2);
    expect(game.roll(3)).toEqual(3);
    expect(game.roll(7)).toEqual(7);
  });
});
