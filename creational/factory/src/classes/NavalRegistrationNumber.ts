import RegistrationNumber from "./RegistrationNumber";

export default class NavalRegistrationNumber extends RegistrationNumber {
  constructor(index: number, country: string, city: string) {
    super(index, country, city);
  }

  public get id(): string {
    return "NAV-" + this._id;
  }
}
