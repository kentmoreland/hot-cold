$(document).ready(() => {

  let guessRange = 100;
  let guesses = [];
  let guess;
  let target;
  let message;
  let firstGuess = true;

  let getRandom = (num) => {
    return Math.floor(Math.random() * num) + 1;
  };

  let checkFirstGuess = (guess, target) => {
    if(guess === target){ return 'Winner Winner Chicken Dinner'; }
    else if(Math.abs(guess - target) <= 5){ return 'Hot'; }
    else if(Math.abs(guess - target) <= 10){ return 'Warm'; }
    else if(Math.abs(guess - target) <= 15){ return 'Cool'; }
    else { return 'Cold'; }
  };

  let checkNextGuess = (prevGuess, currGuess, target) => {
    if(currGuess === target){ return 'Winner Winner Chicken Dinner'; }

    let prevGuessDist = Math.abs(prevGuess - target);
    let currGuessDist = Math.abs(currGuess - target);


    if(currGuessDist < prevGuessDist){ return 'your getting warmer'; }
    else if(currGuessDist > prevGuessDist){ return 'your getting colder'; }
    else{ return 'you didn\'t gain any ground with that guess'; }
};


  let playGuess = (e) =>{
    e.preventDefault();
    guess = $('#guess').val();
    guess = parseInt(guess);
    guesses.push(guess);

    if(firstGuess === true){
      firstGuess = false;
      target = getRandom(guessRange);
      message = checkFirstGuess(guess, target);

    } else {

      let previousGuess = guesses[guesses.length-2];
      message = checkNextGuess(previousGuess, guess, target);
    }

    $('#guess_list').append(guess + ' ');
    $('#message').text(message);
    $('#guess').val('');

  };

  getRandom(guessRange);


   $('#player_guess').click(playGuess);


});