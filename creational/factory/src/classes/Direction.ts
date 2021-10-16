export default class Direction {
  static NORTH: string = "north";
  static EAST: string = "east";
  static WEST: string = "west";
  static SOUTH: string = "south";

  static VALUES: Array<string> = [
    Direction.NORTH,
    Direction.EAST,
    Direction.WEST,
    Direction.SOUTH,
  ];

  private _value: string;

  constructor(value: string) {
    if (Direction.VALUES.indexOf(value) === -1) {
      throw new Error(
        `"${value}" is not an authorized value. Authorized values : ${Direction.VALUES.join(
          ", "
        )}.`
      );
    } else {
      this._value = value;
    }
  }

  get value(): string {
    return this._value;
  }
}
