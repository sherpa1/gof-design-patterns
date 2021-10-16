export default class RegistrationNumber {
  protected _id: string;

  public get id(): string {
    return this._id;
  }

  constructor(index: number, country: string, city: string) {
    let digit_index: string;

    if (index <= 9) digit_index = `0${index}`;
    else digit_index = index.toString();

    this._id = `${digit_index}-${country.slice(0, 2)}-${city.slice(0, 2)}`;
    this._id = this._id.toUpperCase();
  }
}
