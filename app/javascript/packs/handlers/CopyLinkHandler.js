import Clipboard from 'clipboard';

export default class CopyLinkHandler {
  constructor(elements) {
    this.elements = elements;
  }

  listen() {
    new Clipboard(this.elements);
  }
}
