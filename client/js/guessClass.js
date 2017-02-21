  class Guess {
    constructor() {
      this.guesses = [];
      this.guessValue;
      this.isValid = false;
      this.count = 0;
      this.previousGuess;
      this.message;
      this.status;
    };

    validateGuess() {
      if( this.inputHasValue() && this.inputGreaterThanZero() &&
        this.inputLessThanMax() && this.inputIsNotDuplicateGuess() ) {
        this.clearGuess();
        this.inputFocus();
        return this.isValid = true;
      }
    };

    getGuessValueFromFieldId() {
      this.setValueFromFormId(INPUT_ID);
      if(this.validateGuess()) {
        this.addToStorage(this.guessValue);
        this.incrementGuessCount();
      return this.guessValue
      }
    };

                  // Guess Distance From Target
// --------------------------------------------------------

    isCloserTo(target) {
      if(this.getDistanceFrom(target) <
        this.previousGuess.getDistanceFrom(target)){
        this.message = new GuessStatusIsGettingWarm();
        this.message.displayMessage();
        return true;
      }
    };

    isFartherFrom(target){
      if(this.getDistanceFrom(target) >
        this.previousGuess.getDistanceFrom(target)){
        this.message = new GuessStatusIsGettingColder();
        this.message.displayMessage();
        return true;
      }
    };

    isEquallyCloseTo(target) {
      if( this.getDistanceFrom(target) ===
        this.previousGuess.getDistanceFrom(target) ){
        this.message = new GuessStatusUnchanged();
        this.message.displayMessage();
        return true;
      }
    };

    guessEquals(target) {
      if(this.guessValue === target) {
        this.status.clearStatus();
        throw 'Winner Winner Chicken Dinner!';
      }
    }

    guessDistanceLessThanFive(target) {
      if(this.getDistanceFrom(target) <= 5){
        this.status = new GuessStatusIsHot();
        this.status.displayStatus();
        return true;
      }
    };

    guessDistanceLessThanTen(target) {
      if(this.getDistanceFrom(target) > 5 &&
        this.getDistanceFrom(target) <= 10){
        this.status = new GuessStatusIsWarm();
        this.status.displayStatus();
        return true;
      }
    };

    guessDistanceLessThanFifteen(target) {
      if(this.getDistanceFrom(target) > 10 &&
        this.getDistanceFrom(target) <= 15){
        this.status = new GuessStatusIsCool();
        this.status.displayStatus();
        return true;
      }
    };

    guessDistanceGreaterThanFifteen(target) {
      if(this.getDistanceFrom(target) > 15) {
        this.status = new GuessStatusIsCold();
        this.status.displayStatus();
        return true;
      }
    };


    processDistanceFrom(target) {
      this.guessEquals(target)
      this.guessDistanceGreaterThanFifteen(target);
      this.guessDistanceLessThanFifteen(target);
      this.guessDistanceLessThanTen(target);
      this.guessDistanceLessThanFive(target);
    };

    compareCurrentAndPreviousGuess(target){
      this.isCloserTo(target);
      this.isFartherFrom(target);
      this.isEquallyCloseTo(target);
    }

// --------------------------------------------------------
    incrementGuessCount() {
      this.count++;
    };

    getPreviousGuess() {
      return this.guesses[this.guesses.length - 2];
    };

    setPreviousGuess() {
      if(this.guesses.length){
        this.previousGuess = new PreviousGuess(this.getPreviousGuess());
      }
    };

    addToStorage(guess) {
      this.guesses.push(guess)
      return this.guesses;
    };

    displayGuessAtFieldId() {
      $(GUESS_DISPLAY_ID).append(this.guessValue + ' ')
    };

    clearGuess() {
      $(INPUT_ID).val('');
    };

                    // Input
// --------------------------------------------------------
    inputHasValue(){
      if(isNaN(this.guessValue) === false){
        return true;
      }else{
        throw'inputEmpty failed'
      }
    };

    inputGreaterThanZero() {
      if(this.guessValue > 0){
        return this.isValid = true;
      }else{
        throw 'greaterThanZero failed'
      }
    };

    inputLessThanMax() {
      if(this.guessValue < MAX_NUMBER){
        return this.isValid = true;
      }else{
        throw 'lessThanMax failed'
      }
    };

    inputIsNotDuplicateGuess() {
      if(this.guesses.indexOf(this.guessValue) < 0){
        return this.isValid = true;
      }else{
        throw 'isNotDuplicateGuess failed'
      }
    };

    inputFocus(){
      $(INPUT_ID).focus();
    };

// --------------------------------------------------------
    getDistanceFrom(target){
      return Math.abs(this.guessValue - target);
    };

    setValueFromFormId() {
      this.guessValue = parseInt($(INPUT_ID).val());
    };
  };






