import Observer from "../interfaces/Observer";
import Subject from "../interfaces/Subject";

export default class TrafficLight implements Subject {
  private _state: string;
  private _observers: Array<Observer> = [];

  static RED = "red";
  static ORANGE = "orange";
  static GREEN = "green";

  static COLORS = [TrafficLight.RED, TrafficLight.ORANGE, TrafficLight.GREEN];

  public set state(value: string) {
    if (TrafficLight.COLORS.indexOf(value) === -1) {
      throw new Error(
        `Traffic Light permitted state values are : ${TrafficLight.COLORS.join(
          ", "
        )}`
      );
    }

    this._state = value;
    this.notify();
  }

  constructor() {
    this._state = TrafficLight.GREEN;
  }

  attach(observer: Observer): void {
    this._observers.push(observer);
  }

  detach(observer: Observer): void {
    const index = this._observers.findIndex((element) => element === observer);
    this._observers.splice(index, 1);
  }

  notify(): void {
    for (const observer of this._observers) {
      observer.update(this);
    }
  }

  public get state(): string {
    return this._state;
  }
}
