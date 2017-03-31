export default class CardHandler {
  constructor(card, element) {
    this.card = card;
    this.element = element;
    this.deleteOnEmpty = false;
    this.updateForm = document.querySelector(`.js-card-update-form[data-key="${card.key}"]`);
    this.deleteForm = document.querySelector(`.js-card-delete-form[data-key="${card.key}"]`);
    this.deleteButton = this.element.parentNode.querySelector('.js-delete-action');
  }

  listen() {
    this.element.addEventListener('focus', (e) => { this.focusListener(e) }, false);
    this.element.addEventListener('blur', (e) => { this.blurListener(e) }, false);
    this.element.addEventListener('keydown', (e) => { this.keyDownListener(e) }, false);
    this.element.addEventListener('keydown', (e) => { this.deleteKeyDownListener(e) }, false);
    this.deleteButton.addEventListener('mousedown', (e) => { this.clickDeleteButtonLitener(e) }, false);
    this.deleteButton.addEventListener('touchdown', (e) => { this.clickDeleteButtonLitener(e) }, false);
  }

  focusListener(e) {
    this.deleteButton.classList.toggle('hidden');
  }

  blurListener(e) {
    let text = e.currentTarget.innerText;

    text = text.replace(/\n/g, '');

    if (text == '') {
      this.submitDeleteForm();
    } else {
      this.submitUpdateForm(text);
    }
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

  clickDeleteButtonLitener(e) {
    if (this.element.innerText == '') {
      return;
    }
    this.updateForm.querySelector('input[type="submit"]').disabled = true;
    this.submitDeleteForm();
  }
}
