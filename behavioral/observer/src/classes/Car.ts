import Observer from "../interfaces/Observer";
import TrafficLight from "./TrafficLight";

export default class Car implements Observer {
  update(subject: TrafficLight): void {
    switch (subject.state) {
      case TrafficLight.GREEN:
        console.log(`Car : run`);
        break;
      case TrafficLight.ORANGE:
        console.log(`Car : stop`);
        break;
      case TrafficLight.RED:
        console.log(`Car : stop`);
        break;
    }
  }
}
