export default class EnglishPeople {
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

  ask(): string {
    return "Hi ! What is your name ?";
  }

  answer(who: string): string {
    return `Hello ${who}, my name is ${this._firstName} ${this._lastName}. Nice to meet you !`;
  }
}
