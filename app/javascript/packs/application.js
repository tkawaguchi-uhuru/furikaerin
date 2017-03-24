import Router from './Router';
import * as pages from './pages';

document.addEventListener('turbolinks:load', () => {
  let router = new Router;

  router.add('^/b/', () => { new pages.CardPage() });
  router.create();
});
