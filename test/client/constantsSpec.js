expect = chai.expect;

describe('constant variables', function() {
  it ('should have a variable MAX_NUMBER', function() {
    expect(MAX_NUMBER).to.exist;
  });

  it('should have a variable INPUT_ID', function() {
    expect(INPUT_ID).to.exist;
  });

  it('should have a variable MESSAGE_ID', function() {
    expect(MESSAGE_ID).to.exist;
  });

  it('should have a variable GUESS_DISPLAY_ID', function() {
    expect(GUESS_DISPLAY_ID).to.exist;
  });

  it('should have a variable STATUS_ID', function() {
    expect(STATUS_ID).to.exist;
  });

});