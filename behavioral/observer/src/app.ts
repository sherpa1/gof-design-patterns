import TrafficLight from "./classes/TrafficLight";
import Car from "./classes/Car";
import Walker from "./classes/Walker";

function init() {
  const my_car = new Car();
  const trafficLight = new TrafficLight();
  const john_doe = new Walker();

  //attach observers to subject
  trafficLight.attach(my_car);
  trafficLight.attach(john_doe);

  //change subject state and notify each observers
  trafficLight.state = TrafficLight.ORANGE;
  trafficLight.state = TrafficLight.RED;
  trafficLight.state = TrafficLight.GREEN;
}

init();
