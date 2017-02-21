class GuessValueExceedsMax extends Message {
    constructor() {
      super();
      this.content = `Guess must be lower than ${MAX_NUMBER}`
    }

  };

  class GuessHasNoValue extends Message {
    constructor() {
      super();
      this.content = 'you didn\'t enter anything';
    }

  };

  class GuessValueBelowZero extends Message {
    constructor() {
      super();
      this.content = 'Guess must be 1 or greater';
    }

  };

  class GuessValueIsDuplicate extends Message {
    constructor() {
      super();
      this.content = 'That was a previous guess';
    }

  };

  class GuessValueMatchesTarget extends Message {
    constructor() {
      super();
      this.content = 'Winner Winner Chicken Dinner';
    }

  };

  class GuessStatusIsHot extends Message {
    constructor() {
      super();
      this.content = 'Hot';
    }

  };

  class GuessStatusIsWarm extends Message {
    constructor() {
      super();
      this.content = 'Warm';
    }

  };

  class GuessStatusIsCool extends Message {
    constructor() {
      super();
      this.content = 'Cool';
    }

  };

  class GuessStatusIsCold extends Message {
    constructor() {
      super();
      this.content = 'Cold';
    }
  }

  class GuessStatusIsGettingWarm extends Message {
    constructor() {
      super();
      this.content = 'your getting warmer';
    }

  };

  class GuessStatusIsGettingColder extends Message {
    constructor() {
      super();
      this.content = 'your getting colder';
    }

  };

  class GuessStatusUnchanged extends Message {
    constructor() {
      super();
      this.content = 'you didn\'t gain any ground with that guess';
    }

  };