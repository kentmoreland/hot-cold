expect = chai.expect;

describe('Message', function() {

  message = new Message();

  it('should be a class', function() {
    expect(message).to.exist;
  });

  it('should create a new object', function() {
    expect(message).to.be.an('object');
  });

  it('should have a method changeMessage', function() {
    expect(message.changeMessage).to.exist;
  });

  it('should have a method displayMessage', function() {
    expect(message.displayMessage).to.exist;
  });

  it('should have a method displayStatus', function() {
    expect(message.displayStatus).to.exist;
  });

  it('should have a method clearStatus', function() {
    expect(message.clearStatus).to.exist;
  });

  it('should have a method clearMessage', function() {
    expect(message.clearMessage).to.exist;
  });

});