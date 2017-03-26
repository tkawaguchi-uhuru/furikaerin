import CopyLinkHandler from '../handlers/CopyLinkHandler';

export default class AllPage {
  constructor() {
    let copyLinkHandler = new CopyLinkHandler(document.querySelectorAll('.js-copy-link'));
    copyLinkHandler.listen();
  }
}
