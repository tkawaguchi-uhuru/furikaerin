export default class OpenNewCardFormsHandler {
  constructor(elements) {
    this.elements = elements;
  }

  listen() {
    this.elements.forEach((element) => {
      element.addEventListener('click', (e) => { this.clickListener(e)}, false);
    });
  }

  clickListener(e) {
    e.preventDefault();

    let newCardForm = document.querySelector(`.js-category-container[data-key="${e.currentTarget.dataset.categoryKey}"] .js-card-new-form-container`);
    newCardForm.classList.remove('hidden');
    newCardForm.querySelector('.js-new-card-content').focus();
  }
}
