import Command from "../interfaces/Command";
import UIReceiver from "./UIReceiver";

export default class CommandUpperCase implements Command {
  private _ui_receiver: UIReceiver;
  private _param: string;

  constructor(ui_receiver: UIReceiver) {
    this._ui_receiver = ui_receiver;
  }
  get_command_name(): string {
    return "ADD";
  }

  undo() {
    throw new Error("Method not implemented.");
  }

  execute(...params: Array<any>) {
    this._ui_receiver.show_result(params.toString().toUpperCase());
  }
}
