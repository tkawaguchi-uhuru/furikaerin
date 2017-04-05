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

    let newCardFormContainer = document.querySelector(`.js-category-container[data-key="${e.currentTarget.dataset.categoryKey}"] .js-card-new-form-container`);
    newCardFormContainer.classList.remove('hidden');

    let newContentField = newCardFormContainer.querySelector('.js-new-card-content');
    let blurNewContentListener = (ev) => {
      newCardFormContainer.querySelector('.js-new-card-form input[type="submit"]').click();
    };

    newContentField.removeEventListener('blur', blurNewContentListener, false);
    newContentField.addEventListener('blur', blurNewContentListener, false);
    newContentField.focus();
  }
}
