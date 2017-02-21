const expect = require('chai').expect;
let Guess = require('../client/js/classes').Guess;

describe('Guess', () => {
  guess = new Guess();
  it('should be a class', () => {
    expect(guess).to.exist;
  });


});
