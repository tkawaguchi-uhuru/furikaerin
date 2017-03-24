export default class Card {
  constructor(key) {
    this._key = key;
  }

  get key() {
    return this._key;
  }
}
