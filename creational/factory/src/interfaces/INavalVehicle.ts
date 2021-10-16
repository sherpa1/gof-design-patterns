import Direction from "../classes/Direction";
import IVehicle from "./IVehicle";

export default interface INavalVehicle extends IVehicle {
  navigate(direction: Direction, speed: number): void;
}
