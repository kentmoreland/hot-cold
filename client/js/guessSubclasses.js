  class PreviousGuess {
    constructor(value) {
      this.value = value;
    }

    getDistanceFrom(target) {
      return Math.abs(this.value - target);
    };

  };