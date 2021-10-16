export default class Target {
  private _data: Array<any> = [];

  fetch_from_json(json: string) {
    for (const iterator of json) {
      this._data.push(iterator);
    }
  }
}
