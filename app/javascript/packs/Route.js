export default class Route {
  constructor(path, callback) {
    this.path = path;
    this.callback = callback;
  }

  run() {
    if ((new RegExp(this.path)).test(location.pathname)) {
      this.callback();
    }
  }
}
