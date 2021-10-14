import Observer from "../interfaces/Observer";
import TrafficLight from "./TrafficLight";

export default class Walker implements Observer {
  update(subject: TrafficLight): void {
    switch (subject.state) {
      case TrafficLight.GREEN:
        console.log(`Walker : run`);
        break;
      case TrafficLight.ORANGE:
        console.log(`Walker : stop`);
        break;
      case TrafficLight.RED:
        console.log(`Walker : stop`);
        break;
    }
  }
}
