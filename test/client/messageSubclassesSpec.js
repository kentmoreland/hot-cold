expect = chai.expect;


describe('GuessValueExceedsMax', function() {

  message = new GuessValueExceedsMax();

  it('should be a class', function() {
    expect(message).to.exist;
  });

  it('should create an object', function() {
    expect(message).to.be.an('object');
  });

  it('should have a property content', function() {
    expect(message.content).to.exist;
  });

});

describe('GuessHasNoValue', function() {

  message = new GuessHasNoValue();

  it('should be a class', function() {
    expect(message).to.exist;
  });

  it('should create an object', function() {
    expect(message).to.be.an('object');
  });

  it('should have a property content', function() {
    expect(message.content).to.exist;
  });

});

describe('GuessValueBelowZero', function() {

  message = new GuessValueBelowZero();

  it('should be a class', function() {
    expect(message).to.exist;
  });

  it('should create an object', function() {
    expect(message).to.be.an('object');
  });

  it('should have a property content', function() {
    expect(message.content).to.exist;
  });

});

describe('GuessValueIsDuplicate', function() {

  message = new GuessValueIsDuplicate();

  it('should be a class', function() {
    expect(message).to.exist;
  });

  it('should create an object', function() {
    expect(message).to.be.an('object');
  });

  it('should have a property content', function() {
    expect(message.content).to.exist;
  });

});

