import Caret from '../ui/Caret';

export default class TurbolinksHandler {
  constructor() {
    this.postion = Turbolinks.controller.scrollManager.position;
  }

  listen() {
    document.addEventListener('turbolinks:before-render', (e) => { this.beforeRenderListener(e) });
    document.addEventListener('turbolinks:load', (e) => { this.loadListener(e) });
  }

  beforeRenderListener(e) {
    this.position = Turbolinks.controller.scrollManager.position;
  }

  loadListener(e) {
    if (this.position) {
      Turbolinks.controller.scrollToPosition(this.position);
    }

    let focusCardKey = window.localStorage.getItem('focus.cardKey');
    if (focusCardKey) {
      var card = document.querySelector(`.js-card[data-key="${focusCardKey}"]`);
      if (card) {
        card.focus();
        card.innerText = window.localStorage.getItem('focus.text');
        let position = window.localStorage.getItem('focus.position');
        let caret = new Caret(card);
        caret.position = position;
      }
    }
  }
}
