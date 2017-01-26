$(document).ready(() => {
  //game properties
  let guessRange = 100;
  let guesses = [];
  let guess;
  let target;
  let message;
  let isValidGuess;
  let firstGuess = true;

  //game methods
  let getTarget = (num) => {
    return Math.floor(Math.random() * num) + 1;
  };

  let setGuess = (idName) => { return parseInt($(idName).val()); };

  let resetFirstGuess = () => { firstGuess = false; };

  let checkValidGuess = (guess, guessMax, guessArray) => {
   if(guess > 0 && guess < guessMax && guessArray.indexOf(guess) < 0){
    return true;
   } else { return false; }
  };

  let addGuess = (isValidGuess, guess, guessArray) => {
    if(isValidGuess){ guessArray.push(guess); }
  };

  let showGuess = (isValidGuess, idName, guess) => {
    if(isValidGuess){ $(idName).append(guess + ' '); }
  };

  let showMessage = (idName, message) => { $(idName).text(message); };

  let clearGuess = (idName) => { $(idName).val(''); };

  let updateStatusMessage = (guess, target, guessRange, guessArray) => {
    //set guess distances
    let prevGuess = guessArray[guessArray.length-1];
    let prevGuessDist = Math.abs(prevGuess - target);
    let guessDist = Math.abs(guess - target);

    //check for out of bounds guess
    if(guess > guessRange){return `Guess must be less than ${guessRange}`;}
    if(!guess){ return 'you didn\'t enter anything';}
    if(guess < 1){ return 'Guess must be greater than 1'; }
    if(guessArray.indexOf(guess) >= 0){ return 'That was a previous guess'; }

    if(guessArray.length < 1){
      //update hot cold message status
      if(guess === target){ return 'Winner Winner Chicken Dinner'; }
      else if(Math.abs(guess - target) <= 5){ return 'Hot'; }
      else if(Math.abs(guess - target) <= 10){ return 'Warm'; }
      else if(Math.abs(guess - target) <= 15){ return 'Cool'; }
      else { return 'Cold'; }
    } else{
      //update warmer colder message status
      if(guessDist < prevGuessDist){ return 'your getting warmer'; }
      else if(guessDist > prevGuessDist){ return 'your getting colder'; }
      else{ return 'you didn\'t gain any ground with that guess'; }
    }
  };

  //game driver
  let playGame = (e) =>{
    e.preventDefault();
    guess = setGuess('#guess');
    isValidGuess = checkValidGuess(guess, guessRange, guesses);
    target = getTarget(guessRange);
    message = updateStatusMessage(guess, target, guessRange, guesses);
    addGuess(isValidGuess, guess, guesses);
    showGuess(isValidGuess, '#guess_list', guess );
    showMessage('#message', message);
    clearGuess('#guess');

  };


  //Start Game
  $('#player_guess').click(playGame);


});