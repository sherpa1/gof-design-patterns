import Command from "../interfaces/Command";
import UIReceiver from "./UIReceiver";

export default class History {
  private _list: Array<Command> = [];

  push(command: Command) {
    this._list.push(command);
  }

  pop(): Command {
    return this._list.pop();
  }

  get list() {
    return this._list;
  }
}
