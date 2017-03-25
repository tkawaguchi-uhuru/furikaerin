export default class TurbolinksHandler {
  constructor() {
    this.postion = Turbolinks.controller.scrollManager.position;
  }

  listen() {
    document.addEventListener('turbolinks:before-render', (e) => { this.beforeRenderListener(e) });
    document.addEventListener('turbolinks:load', (e) => { this.loadListener(e) });
  }

  beforeRenderListener(e) {
    this.position = Turbolinks.controller.scrollManager.position;
  }

  loadListener(e) {
    if (this.position) {
      Turbolinks.controller.scrollToPosition(this.position);
    }
  }
}
