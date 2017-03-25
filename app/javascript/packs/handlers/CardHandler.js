export default class CardHandler {
  constructor(card, element) {
    this.card = card;
    this.element = element;
    this.deleteOnEmpty = false;
    this.updateForm = document.querySelector(`.js-card-update-form[data-key="${card.key}"]`);
    this.deleteForm = document.querySelector(`.js-card-delete-form[data-key="${card.key}"]`);
  }

  listen() {
    this.element.addEventListener('keydown', (e) => { this.keyDownListener(e) }, false);
    this.element.addEventListener('keydown', (e) => { this.deleteKeyDownListener(e) }, false);
  }

  keyDownListener(e) {
    let text = e.currentTarget.innerText;

    if (e.which != 13) {
      return;
    }
    e.preventDefault();


    text = text.replace(/\n/g, '');

    if (text == '') {
      this.submitDeleteForm();
    } else {
      this.submitUpdateForm(text);
    }
  }

  deleteKeyDownListener(e) {
    if (e.which != 8 && e.which != 46) {
      return;
    }

    let text = e.currentTarget.innerText;
    text = text.replace(/\n/g, '');

    if (text == '' && this.checkTwiceDeleteImmediately()) {
      this.submitDeleteForm();
    }
  }

  checkTwiceDeleteImmediately() {
    if (!this.deleteOnEmpty) {
      this.deleteOnEmpty = true;
      setTimeout(() => { this.deleteOnEmpty = false }, 300);
      return false;
    } else {
      return true;
    }
  }

  submitUpdateForm(text) {
    this.updateForm.querySelector('.js-card-form-content-field').value = text;
    this.updateForm.querySelector('input[type="submit"]').click();
    this.element.blur();
  }

  submitDeleteForm() {
    this.deleteForm.querySelector('input[type="submit"]').click();
    this.element.blur();
  }
}
