export default class BoardChannelHandler {
  constructor(elements) {
    this.elements = elements;
    this.queues = [];
    this.focused = false
    this.detectBoardKey();
  }

  detectBoardKey() {
    let matches = location.pathname.match(new RegExp('^/b/([^\/\?/#]+)'));
    this.boardKey = matches[1];
  }

  listen() {
    this.elements.forEach((element) => {
      element.addEventListener('focus', (e) => { this.focusListener(e)}, false);
      element.addEventListener('keydown', (e) => { this.keydownListener(e)}, false);
      element.addEventListener('blur', (e) => { this.blurListener(e)}, false);
    });

    let identifier = { channel: "BoardChannel", key: this.boardKey };
    App.cable.subscriptions.reject(JSON.stringify(identifier));
    App.cable.subscriptions.create(identifier, {
      connected: () => { this.connected() },
      disconnected: () => { this.disconnected() },
      received: (data) => { this.received(data) }
    });
  }

  connected() {
  }

  disconnected() {
  }

  received(data) {
    this.queues = [this.updateBoard];
    if (!this.focused) {
      this.dequeue();
    }
  }

  focusListener(e) {
    this.focused = true;
  }

  keydownListener(e) {
    if (e.which != 13) {
      return;
    }
    this.blurListener(null);
  }

  blurListener(e) {
    this.focused = false;
    this.dequeue();
  }

  updateBoard() {
    Turbolinks.clearCache();
    Turbolinks.visit(location.pathname, { action: 'replace' });
  }

  dequeue() {
    let callback = this.queues.shift();

    if (callback) {
      callback();
    }
  }
}
