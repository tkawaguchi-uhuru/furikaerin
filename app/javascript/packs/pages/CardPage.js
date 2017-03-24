import CardsHandler from '../handlers/CardsHandler';

export default class CardPage {
  constructor() {
    let cardsHandler = new CardsHandler(Array.apply([], document.querySelectorAll('.js-card-container')));
    cardsHandler.listen();
  }
}
