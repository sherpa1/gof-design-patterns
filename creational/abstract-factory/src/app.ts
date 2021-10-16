import Boat from "./classes/Boat";
import Car from "./classes/Car";
import ElectricCar from "./classes/ElectricCar";
import BoatFactory from "./classes/BoatFactory";
import Energy from "./classes/Energy";
import AbstractCarFactory from "./classes/AbstractCarFactory";
import AbstractMotorVehicle from "./classes/AbstractMotorVehicle";

function init() {
  const a_car: AbstractMotorVehicle = AbstractCarFactory.make(
    Energy.ELECTRICITY,
    "France",
    "Paris"
  );
  a_car.load(new Energy(Energy.ELECTRICITY), 200);
  console.log(a_car);
}

init();
