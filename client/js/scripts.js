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

  let getGuess = (idName) => {
    return parseInt($(idName).val());
  }

  let checkValidGuess = (guess, guessMax) => {
   return  guess > 0 && guess < guessMax ? true : false;
  };

  let addGuess = (isValidGuess, guess, guessArray) => {
    if(isValidGuess){ guessArray.push(guess) };
  };

  let showGuess = (isValidGuess, idName, guess) => {
    if(isValidGuess){ $(idName).append(guess + ' ') }
  }

  let checkFirstGuess = (guess, target, guessRange) => {
    if(guess > guessRange){return `Guess must be less than ${guessRange}`}
    else if(guess === target){ return 'Winner Winner Chicken Dinner'; }
    else if(Math.abs(guess - target) <= 5){ return 'Hot'; }
    else if(Math.abs(guess - target) <= 10){ return 'Warm'; }
    else if(Math.abs(guess - target) <= 15){ return 'Cool'; }
    else { return 'Cold'; }
  };

  let checkNextGuess = (prevGuess, currGuess, target, guessRange) => {
    if(currGuess > guessRange){return `Guess must be less than ${guessRange}`}
    if(currGuess === target){ return 'Winner Winner Chicken Dinner'; }

    let prevGuessDist = Math.abs(prevGuess - target);
    let currGuessDist = Math.abs(currGuess - target);


    if(currGuessDist < prevGuessDist){ return 'your getting warmer'; }
    else if(currGuessDist > prevGuessDist){ return 'your getting colder'; }
    else{ return 'you didn\'t gain any ground with that guess'; }
  };


  let playGuess = (e) =>{
    e.preventDefault();

    guess = getGuess('#guess');

    let isValidGuess = checkValidGuess(guess, guessRange);

    addGuess(isValidGuess, guess, guesses);


    if(firstGuess === true){
      firstGuess = false;
      target = getRandom(guessRange);
      message = checkFirstGuess(guess, target, guessRange);

    } else {

      let previousGuess = guesses[guesses.length-2];
      message = checkNextGuess(previousGuess, guess, target);
    }

    showGuess(isValidGuess, '#guess_list', guess )
    $('#message').text(message);
    $('#guess').val('');

  };

  getRandom(guessRange);


   $('#player_guess').click(playGuess);


});