import ElectricCar from "./ElectricCar";
import Energy from "./Energy";
import RegistrationNumber from "./RegistrationNumber";

export default abstract class ElectricCarFactory {
  static make(country: string, city: string): ElectricCar {
    return new ElectricCar(
      new RegistrationNumber(ElectricCar.index, country, city),
      new Energy(Energy.ELECTRICITY)
    );
  }
}
