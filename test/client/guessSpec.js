expect = chai.expect;

describe('Guess includes all methods', function() {

  guess = new Guess();

  it('should be a class', function() {
    expect(guess).to.exist;
  });

  it('should create a new object', function() {
    expect(guess).to.be.an('object');
  });

  it('should have a method getGuessValueFromFieldId', function() {
    expect(guess.getGuessValueFromFieldId).to.exist;
  });


  it('should have a method validateGuess', function() {
    expect(guess.validateGuess).to.exist;
  });

  it('should have a method evaluateDistanceFrom', function() {
    expect(guess.evaluateDistanceFrom).to.exist;
  });

  it('should have a method compareCurrentAndPreviousGuessDistanceFrom', function() {
    expect(guess.compareCurrentAndPreviousGuessDistanceFrom).to.exist;
  });

  it('should have a method guessEquals', function() {
    expect(guess.guessEquals).to.exist;
  });

  it('should have a method guessDistanceLessThanFive', function() {
    expect(guess.guessDistanceLessThanFive).to.exist;
  });

  it('should have a method guessDistanceLessthanTen', function() {
    expect(guess.guessDistanceLessThanTen).to.exist;
  });

  it('should have a method guessDistanceLessThanFifteen', function() {
    expect(guess.guessDistanceLessThanFifteen).to.exist;
  });

  it('should have a method isCloserTo', function() {
    expect(guess.isCloserTo).to.exist;
  });

  it('should have a method isFartherFrom', function() {
    expect(guess.isFartherFrom).to.exist;
  });

  it('should have a method isEquallyCloseTo', function(){
    expect(guess.isEquallyCloseTo).to.exist;
  });

  it('should have a method incrementGuessCount', function() {
    expect(guess.incrementGuessCount).to.exist;
  });

  it('should have a method getPreviousGuess', function() {
    expect(guess.getPreviousGuess).to.exist;
  });

  it('should have a method setPreviousGuess', function() {
    expect(guess.setPreviousGuess).to.exist;
  });

  it('should have a method addToStorage', function(){
    expect(guess.addToStorage).to.exist;
  });

  it('should have a method displayGuessAtFieldId', function() {
    expect(guess.displayGuessAtFieldId).to.exist;
  });

  it('should have a method clearGuess', function() {
    expect(guess.clearGuess).to.exist;
  });

  it('should have a method inputHasValue', function() {
    expect(guess.inputHasValue).to.exist;
  });

  it('should have a method inputGreaterThanZero', function() {
    expect(guess.inputGreaterThanZero).to.exist;
  });

  it('shoud have a method inputLessThanMax', function() {
    expect(guess.inputLessThanMax).to.exist;
  });

  it('should have a method inputIsNotDuplicateGuess', function() {
    expect(guess.inputIsNotDuplicateGuess).to.exist;
  });

  it('should have a method inputFocus', function() {
    expect(guess.inputFocus).to.exist;
  });

  it('should have a method getDistanceFrom', function() {
    expect(guess.getDistanceFrom).to.exist;
  });

  it('should have a method setValueFromFormId', function() {
    expect(guess.setValueFromFormId).to.exist;
  });

});
