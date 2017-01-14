$(document).ready(() => {

  //Set up initial game state
  let gameControlVariable = false;
  let num;
  var guess;
  let guesses = [];

  let resetGame = () => {
    num = undefined;
    guess = undefined;
    guesses = [];
  };

  let endGame = () => {
    event.preventDefault();
    gameControlVariable = false;
    $('#gameForm').hide();
    $('#start').show();
    $('#end').hide();
    resetGame();
  };

  $('#gameForm').hide();
  $('#end').hide();
  $('#replay').hide();

  //Start Button Controller
  $('#start').click((event) => {
    event.preventDefault();
    //clear any messages
    $('#message').empty();
    //clear input
    $('#guess').val('');

    //Set up game start state
    gameControlVariable = true;
    $('#gameForm').show()
    $('#end').show();
    $('#start').hide();


    //Generate a Random Number
    num = Math.floor((Math.random() * 10) + 1);

    //Game Control
    $('#player_guess').click((event) => {
      event.preventDefault();

      guess = $('#guess').val() || undefined;
      guess = Number(guess);
      guess ? guesses.push(guess) : guess;
      console.log('Guess: ', guess, ' Rando: ', num, ' Guesses: ', guesses );

      //guess equals number and the game is over
      if(guess === num){
        $('#message').text('YOU WIN')
        endGame();
        $('#start').hide();
        $('#replay').show();

      }else {

        //guess not equal to number | off-by calculation
        let firstGuess;

        //check for first guess
        guesses.length > 1 ? firstGuess = false : firstGuess = true;

        if(firstGuess){
          //calculate offBy
          let offBy = Math.abs(guess - num);

          //check for warm cold
          if(offBy <= 10){ $('#message').text("You're Hot") }
          else if(offBy > 10 && offBy <= 20 ){ $('#message').text("You're Warm") }
          else if (offBy > 20 <= 30){ $('#message').text("You're a bit Cool") }
          else{ $('#message').text("You're Cold") };

          //reset input
          $('#guess').val('');

        } else {

          let previousOffBy = Math.abs(guesses[guesses.length - 2] - num);
          let offBy = Math.abs(guess - num);

          if (previousOffBy < offBy){ $('#message').text("Oh no... you're getting colder") }
          else if(previousOffBy > offBy){ $('#message').text("Yay... you're warming up ") }
          else { $('#message').text("meh... you're still the same") };

          //reset input
          $('#guess').val('');
        };
      }

    });
  });

  $('#end').click((event) => {
    endGame();
  });

  $('#replay').click(() => {
    location.reload();
  });

});