import AbstractMotorVehicle from "./AbstractMotorVehicle";
import Energy from "./Energy";
import CarFactory from "./CarFactory";
import ElectricCarFactory from "./ElectricCarFactory";

export default abstract class AbstractCarFactory {
  static make(
    kind: string,
    country: string,
    city: string
  ): AbstractMotorVehicle {
    if (Energy.TYPES.indexOf(kind) === -1) {
      throw new Error(
        `"${kind}" is not a valid energy type, ${Energy.TYPES.join(", ")}`
      );
    }

    if (kind === Energy.ELECTRICITY) {
      return ElectricCarFactory.make(country, city);
    } else if (kind === Energy.GASOLINE) {
      return CarFactory.make(country, city);
    }
  }
}
