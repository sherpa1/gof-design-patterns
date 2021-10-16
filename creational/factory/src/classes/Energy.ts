export default class Energy {
  static GASOLINE = "gasoline";
  static ELECTRICITY = "electricity";

  static TYPES: Array<string> = [Energy.GASOLINE, Energy.ELECTRICITY];

  private _name: string;

  constructor(name: string) {
    if (Energy.TYPES.indexOf(name) === -1) {
      throw new Error(
        `${name} is not an authorized value (${Energy.TYPES.join(", ")})`
      );
    }

    this._name = name;
  }
  public get name(): string {
    return this._name;
  }
}
