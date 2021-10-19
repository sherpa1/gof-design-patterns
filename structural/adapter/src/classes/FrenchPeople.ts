export default class FrenchPeople {
  private _firstName: string;
  private _lastName: string;

  public get firstName(): string {
    return this._firstName;
  }
  public set firstName(value: string) {
    this._firstName = value;
  }

  public get lastName(): string {
    return this._lastName;
  }
  public set lastName(value: string) {
    this._lastName = value;
  }

  constructor(firstName: string, lastName: string) {
    if (firstName === undefined || lastName === undefined)
      throw new Error(`firstName and lastName must be defined`);

    this._firstName = firstName;
    this._lastName = lastName;
  }

  bonjour(): string {
    return `Bonjour, je m'appelle ${this._firstName} ${this._lastName}`;
  }
}
