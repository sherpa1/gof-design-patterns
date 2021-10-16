import Direction from "../classes/Direction";
import IMotorVehicle from "./IMotorVehicle";

export default interface IFlyingVehicle extends IMotorVehicle {
  fly(direction: Direction, speed: number, altitude: number);

  climb(altitude: number);
  lose(altitude: number);
}
