import Card from '../data/Card';
import CardHandler from '../handlers/CardHandler';

export default class CardPage {
  constructor() {
    Array.apply([], document.querySelectorAll('.js-card')).forEach((element) => {
      let card = new Card(element.dataset.key);
      let cardHandler = new CardHandler(card, element);
      cardHandler.listen();
    });
  }
}
