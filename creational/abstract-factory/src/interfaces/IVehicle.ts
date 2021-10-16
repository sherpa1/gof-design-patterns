import Direction from "../classes/Direction";

export default interface IVehicle {
  move(direction: Direction, speed: number): void;
  stop(): void;
}
