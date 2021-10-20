import Command from "../interfaces/Command";
import UIReceiver from "./UIReceiver";

export default class CommandMultiply implements Command {
  private _ui_receiver: UIReceiver;
  private _params: Array<number>;

  constructor(ui_receiver: UIReceiver) {
    this._ui_receiver = ui_receiver;
  }
  get_command_name(): string {
    return "MULTIPLY";
  }

  execute(params: Array<any>) {
    let result: number = params.reduce((a, b) => a * b);

    this._ui_receiver.show_result(result);
  }
}
