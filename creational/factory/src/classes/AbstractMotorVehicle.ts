import IVehicle from "../interfaces/IVehicle";
import Direction from "./Direction";
import Energy from "./Energy";
import RegistrationNumber from "./RegistrationNumber";

export default abstract class AbstractMotorVehicle implements IVehicle {
  protected _direction: Direction;
  protected _speed: number;
  protected _is_moving: boolean;
  protected _energy: number = 0;
  protected _energy_type: Energy;
  protected _registrationNumber: RegistrationNumber;

  load(energy_type: Energy, quantity: number): void {
    if (energy_type.name !== this._energy_type.name)
      throw new Error(`${energy_type.name} is not compatible with Vehicle`);
    this._energy += quantity;
  }

  move(direction: Direction, speed: number): void {
    if (this._energy <= 0)
      throw new Error(`Vehicle cannot move because it has no energy`);

    this._direction = direction;
    this._speed = speed;
    this._is_moving = true;
  }
  stop(): void {
    this._speed = 0;
    this._is_moving = false;
  }

  consume_energy(quantity: number): void {
    this._energy -= quantity;
    if (this._energy <= 0) this.stop();
  }

  registrationNumber(): RegistrationNumber {
    return this._registrationNumber;
  }

  protected get energy_type(): Energy {
    return this._energy_type;
  }
  protected set energy_type(value: Energy) {
    this._energy_type = value;
  }
}
