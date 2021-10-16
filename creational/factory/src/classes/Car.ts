import IMotorVehicle from "../interfaces/IMotorVehicle";
import AbstractMotorVehicle from "./AbstractMotorVehicle";
import Energy from "./Energy";
import RegistrationNumber from "./RegistrationNumber";

export default class Car extends AbstractMotorVehicle implements IMotorVehicle {
  private static _index: number = 1;

  constructor(registrationNumber: RegistrationNumber, energyType: Energy) {
    super();
    this._registrationNumber = registrationNumber;
    this._energy_type = energyType;
  }

  static get index(): number {
    return Car._index++;
  }
}
