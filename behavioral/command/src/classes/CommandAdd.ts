import Command from "../interfaces/Command";
import UIReceiver from "./UIReceiver";

export default class CommandAdd implements Command {
  private _ui_receiver: UIReceiver;

  constructor(ui_receiver: UIReceiver) {
    this._ui_receiver = ui_receiver;
  }
  get_command_name(): string {
    return "ADD";
  }

  execute(params: Array<any>) {
    let result: number = params.reduce((a, b) => a + b);

    this._ui_receiver.show_result(result);
  }
}
