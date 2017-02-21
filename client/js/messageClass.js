 class Message {
    constructor() {
      this.content;
    };

    changeMessage(text) {
      this.content = text;
    };

    displayMessage() {
      $(MESSAGE_ID).text(this.content);
    };

    displayStatus() {
      $(STATUS_ID).text(this.content);
    };

    clearStatus(){
      $(STATUS_ID).text('');
    };

    clearMessage() {
      $(MESSAGE_ID).text('');
    };
  };
