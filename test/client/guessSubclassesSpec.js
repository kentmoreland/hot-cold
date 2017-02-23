expect = chai.expect;

previousGuess = new PreviousGuess();

describe('PreviousGuess', function() {
  it('should be a class', function() {
    expect(previousGuess).to.exist;
  });

  it('should create a new Object', function() {
    expect(previousGuess).to.be.an('object');
  });

  it('should have a method getDistanceFrom', function() {
    expect(previousGuess.getDistanceFrom).to.exist;
  });

});