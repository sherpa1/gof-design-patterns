import Boat from "./Boat";
import Energy from "./Energy";
import RegistrationNumber from "./RegistrationNumber";

export default abstract class BoatFactory {
  static make(country: string, city: string): Boat {
    return new Boat(
      new RegistrationNumber(Boat.index, country, city),
      new Energy(Energy.GASOLINE)
    );
  }
}
