export default class CardHandler {
  constructor(card, element) {
    this.card = card;
    this.element = element;
    this.updateForm = document.querySelector(`.js-card-update-form[data-key="${card.key}"]`);
    this.deleteForm = document.querySelector(`.js-card-delete-form[data-key="${card.key}"]`);
  }

  listen() {
    this.element.addEventListener('keydown', (e) => { this.keyDownListener(e) }, false);
  }

  keyDownListener(e) {
    if (e.key != 'Enter') {
      return;
    }
    e.preventDefault();

    let text = e.currentTarget.innerText;

    if (text == '') {
      this.submitDeleteForm(text)
    } else {
      this.submitUpdateForm(text)
    }
  }

  submitUpdateForm(text) {
    this.updateForm.querySelector('.js-card-form-text-field').value = text;
    this.updateForm.querySelector('input[type="submit"]').click();
  }

  submitDeleteForm(text) {
    this.deleteForm.querySelector('input[type="submit"]').click();
  }
}
