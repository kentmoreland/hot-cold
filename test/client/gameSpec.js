expect = chai.expect;

game = new Game();

describe('Game', function() {
  it('should be a class', function() {
    expect(game).to.exist;
  });

  it('should create an object', function() {
    expect(game).to.be.an('object');
  });

  it('should have a method createTarget', function() {
    expect(game.createTarget).to.exist;
  });

  it('should have a method setCurrentTarget', function() {
    expect(game.setCurrentTarget).to.exist;
  });

  it('should have a method getTarget', function() {
    expect(game.getTarget).to.exist;
  });

  it('should have a method setCurrentGuess', function() {
    expect(game.setCurrentGuess).to.exist;
  });

  it('should have a method getCurrentGuess', function() {
    expect(game.getCurrentGuess).to.exist;
  });

  it('should have a method setCurrentMessageBanner', function() {
    expect(game.setCurrentMessageBanner).to.exist;
  });

  it('should have a method setup', function() {
    expect(game.setup).to.exist;
  });

  it('should have a method playRound', function() {
    expect(game.playRound).to.exist;
  });

});