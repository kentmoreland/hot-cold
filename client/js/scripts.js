$(document).ready(() => {

  currentGame = startGame();

  $('#player_guess').click(currentGame.playRound.bind(currentGame));

});


