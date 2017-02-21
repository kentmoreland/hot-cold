class Target {
  constructor(maxNumber) {
    this.value;
  };

  getTarget() {
    this.createTargetBetweenOneAnd(MAX_NUMBER);
    return this.value;
  };

  createTargetBetweenOneAnd(MAX_NUMBER) {
    this.value = Math.floor(Math.random() * MAX_NUMBER) + 1;
  };

};