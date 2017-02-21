const MAX_NUMBER = 100;
const INPUT_ID = '#guess';
const MESSAGE_ID = '#message';
const GUESS_DISPLAY_ID = '#guess_list';
const STATUS_ID = '#status';

startGame = () => {
  let game = new Game();
  game.setup();
  return game;
}