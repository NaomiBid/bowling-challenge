$(document).ready(function() {
  var game = new BowlingGame();
  updateScore();

// $('#roll-1').text(game.roll());

function updateScore() {
  $('#score').text(game.score);
}
//still in progress, not correct yet
//trying to get the user to enter their score in index.html, and for the
//interface.js to take it and pass as the argument for the roll() function
//in Bowling.js
$("#F1-roll-1").click()

});





//these are examples from thermostat, delete these afterwards.
// $('#powersaving-on').click(function() {
  // thermostat.switchPowerSavingModeOn();
  // $('#power-saving-status').text('on');
  // updateTemperature();
// })

// function updateTemperature() {
  // $('#temperature').text(thermostat.temperature);
  // $('#temperature').attr('class', thermostat.energyUsage());
// }
