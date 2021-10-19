import EnglishPeople from "./EnglishPeople";
import FrenchPeople from "./FrenchPeople";

export default class Facade {
  private _english_people: EnglishPeople;
  private _french_people: FrenchPeople;

  constructor(english_people: EnglishPeople, french_people: FrenchPeople) {
    if (english_people === undefined || french_people === undefined) {
      throw new Error(`english people and french people must be defined`);
    }

    this._english_people = english_people;
    this._french_people = french_people;
  }

  talk(): Array<string> {
    const dialog: Array<string> = [];

    return dialog;
  }

  public get english_people(): EnglishPeople {
    return this._english_people;
  }
  public set english_people(value: EnglishPeople) {
    this._english_people = value;
  }
  public get french_people(): FrenchPeople {
    return this._french_people;
  }
  public set french_people(value: FrenchPeople) {
    this._french_people = value;
  }
}
