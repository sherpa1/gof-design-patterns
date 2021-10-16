import Boat from "./classes/Boat";
import Car from "./classes/Car";
import ElectricCar from "./classes/ElectricCar";
import BoatFactory from "./classes/BoatFactory";
import CarFactory from "./classes/CarFactory";
import ElectricCarFactory from "./classes/ElectricCarFactory";
import Energy from "./classes/Energy";

function init() {
  const a_car: Car = CarFactory.make("France", "Paris");
  a_car.load(new Energy(Energy.GASOLINE), 200);
  console.log(a_car);

  const an_electric_car: ElectricCar = ElectricCarFactory.make(
    "USA",
    "New-York City"
  );
  an_electric_car.load(new Energy(Energy.ELECTRICITY), 500);
  console.log(an_electric_car);

  const a_boat: Boat = BoatFactory.make("Italy", "Naples");
  a_boat.load(new Energy(Energy.GASOLINE), 1000);
  console.log(a_boat);
}

init();
