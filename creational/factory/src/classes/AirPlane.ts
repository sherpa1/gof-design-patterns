import IFlyingVehicle from "../interfaces/IFlyingVehicle";
import Direction from "./Direction";
import RegistrationNumber from "./RegistrationNumber";
import AbstractMotorVehicle from "./AbstractMotorVehicle";

export default class AirPlane
  extends AbstractMotorVehicle
  implements IFlyingVehicle
{
  private _altitude: number;
  private static _index: number = 1;

  constructor(registrationNumber: RegistrationNumber) {
    super();
    this._registrationNumber = registrationNumber;
  }

  static get index(): number {
    return AirPlane._index++;
  }

  climb(altitude: number) {
    this._altitude += altitude;
  }
  lose(altitude: number) {
    this._altitude -= altitude;
  }

  fly(direction: Direction, speed: number, altitude: number) {
    this.move(direction, speed);
  }
  public get altitude(): number {
    return this._altitude;
  }
}
