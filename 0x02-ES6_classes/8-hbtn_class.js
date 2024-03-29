export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return parseInt(this._size, 10);
    }
    if (hint === 'string') {
      return this._location;
    }
    return this._size;
  }
}
