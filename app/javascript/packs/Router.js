import Route from './Route';

export default class Router {
  constructor() {
    this.routes = [];
  }

  add(path, callback) {
    this.routes.push(new Route(path, callback));
  }

  create() {
    this.routes.forEach( (route) => {
      route.run();
    });
  }
}
