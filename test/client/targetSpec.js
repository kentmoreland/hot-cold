expect = chai.expect;

target = new Target();

describe('Target', function() {
  it('should be a class', function() {
    expect(target).to.exist;
  });

  it('should create a new object', function() {
    expect(target).to.be.an('object');
  });

  it('should have a method getTarget', function() {
    expect(target.getTarget).to.exist;
  });

  it('should have a method createTargetBetweenOneAnd', function() {
    expect(target.createTargetBetweenOneAnd).to.exist;
  });
})