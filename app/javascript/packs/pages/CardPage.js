import OpenNewCardFormsHandler from '../handlers/OpenNewCardFormsHandler';
import CardsHandler from '../handlers/CardsHandler';
import TurbolinksHandler from '../handlers/TurbolinksHandler';
import BoardChannelHandler from '../handlers/BoardChannelHandler';
import QRious from 'qrious';

export default class CardPage {
  constructor() {
    let openNewCardFormsHandler = new OpenNewCardFormsHandler(Array.apply([], document.querySelectorAll('.js-open-new-card-form')));
    openNewCardFormsHandler.listen();

    let cardsHandler = new CardsHandler(Array.apply([], document.querySelectorAll('.js-card-container')));
    cardsHandler.listen();

    let turbolinksHandler = new TurbolinksHandler();
    turbolinksHandler.listen();

    let boardChannleHandler = new BoardChannelHandler(Array.apply([], document.querySelectorAll('.js-prevent-sync-on-typing')));
    boardChannleHandler.listen();

    let qrious = new QRious({
      element: document.getElementById('js-qrcode'),
      value: location.href,
      size: 50
    });
  }
}
