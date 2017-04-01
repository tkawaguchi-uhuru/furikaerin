export default class Card {
  constructor(key, content) {
    this._key = key;
    this._content = content;
  }

  get key() {
    return this._key;
  }

  get content() {
    return this._content;
  }
}
