class Game {
  constructor() {
    this.currentGuess;
    this.currentTarget;
    this.currentMessageBanner;
  };

  createTarget() {
    let target = this.currentTarget = new Target(MAX_NUMBER);
    target.createTargetBetweenOneAnd(MAX_NUMBER);
    return target;
  };

  setCurrentTarget() {
    this.currentTarget = this.createTarget()
  };

  getTarget() {
     return this.currentTarget;
  };

  setCurrentGuess() {
    this.currentGuess = new Guess();
  };

  getCurrentGuess() {
    return this.currentGuess.getGuessValueFromFieldId(INPUT_ID);
  };

  setCurrentMessageBanner() {
    this.currentMessageBanner = new Message();
  }

  setup() {
    $(INPUT_ID).focus();
    this.createTarget();
    this.setCurrentTarget();
    this.setCurrentGuess();
    this.setCurrentMessageBanner();
  };

  playRound(event) {
    try{
      event.preventDefault();
      this.getCurrentGuess();
      this.currentGuess.setPreviousGuess();
      this.currentGuess.evaluateDistanceFrom(this.getTarget().value)
      this.currentGuess
      .compareCurrentAndPreviousGuessDistanceFrom(this.getTarget().value)
    }
    catch(error){
      $(MESSAGE_ID).text(error);
      this.currentGuess.status.clearStatus();
      this.currentGuess.clearGuess();
    }
  };
  };