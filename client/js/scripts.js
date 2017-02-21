$(document).ready(() => {

  startGame = () => {
    let game = new Game();
    game.setup();
    return game;
  }

  currentGame = startGame();

  $('#player_guess').click(currentGame.playRound.bind(currentGame));


});


