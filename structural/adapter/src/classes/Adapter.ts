import Adaptee from "./Adaptee";
import Target from "./TargetFareneit";

export default class Adapter extends Target {
  private _adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    super();
    this._adaptee = adaptee;
  }
}
