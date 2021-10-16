import Energy from "../classes/Energy";
import RegistrationNumber from "../classes/RegistrationNumber";
import IVehicle from "./IVehicle";

export default interface IMotorVehicle extends IVehicle {
  load(energy_type: Energy, quantity: number): void;
  consume_energy(quantity: number): void;
  registrationNumber(): RegistrationNumber;
}
