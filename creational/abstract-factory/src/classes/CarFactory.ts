import Car from "./Car";
import Energy from "./Energy";
import RegistrationNumber from "./RegistrationNumber";

export default abstract class CarFactory {
  static make(country: string, city: string): Car {
    return new Car(
      new RegistrationNumber(Car.index, country, city),
      new Energy(Energy.GASOLINE)
    );
  }
}
