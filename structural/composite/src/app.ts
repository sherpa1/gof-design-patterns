import Component from "./classes/Component";
import Composite from "./classes/Composite";
import Element from "./classes/Element";

function init() {
  const vehicles = new Composite("Vehicles");

  const motor_vehicles = new Composite("Motor Vehicles");
  vehicles.add(motor_vehicles);

  const cars = new Composite("Cars");
  motor_vehicles.add(cars);

  cars.add(new Element("Ferrari"));

  const motorcycles = new Composite("Motorcycles");
  motor_vehicles.add(motorcycles);

  motorcycles.add(new Element("Harley Davidson"));

  const human_powered = new Composite("Human Powered");
  human_powered.add(new Element("Bicycle"));
  human_powered.add(new Element("Skateboard"));

  vehicles.add(human_powered);

  console.log(vehicles.render());
}

init();
