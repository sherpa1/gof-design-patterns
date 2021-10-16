import INavalVehicle from "../interfaces/INavalVehicle";
import IMotorVehicle from "../interfaces/IMotorVehicle";
import AbstractMotorVehicle from "./AbstractMotorVehicle";
import RegistrationNumber from "./RegistrationNumber";
import Direction from "./Direction";
import Energy from "./Energy";

export default class Boat
  extends AbstractMotorVehicle
  implements IMotorVehicle
{
  private static _index: number = 1;

  constructor(registrationNumber: RegistrationNumber, energyType: Energy) {
    super();
    this._registrationNumber = registrationNumber;
    this._energy_type = energyType;
  }

  static get index(): number {
    return Boat._index++;
  }

  navigate(direction: Direction, speed: number): void {
    this.move(direction, speed);
  }
}
