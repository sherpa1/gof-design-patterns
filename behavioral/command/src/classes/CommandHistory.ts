import Command from "../interfaces/Command";
import UIReceiver from "./UIReceiver";

export default class CommandHistory implements Command {
  private _ui_receiver: UIReceiver;

  constructor(ui_receiver: UIReceiver) {
    this._ui_receiver = ui_receiver;
  }
  get_command_name(): string {
    return "HISTORY";
  }

  execute(params: Array<Command>) {
    let actions: Array<string> = [];

    params.forEach((element) => {
      actions.push(element.get_command_name());
    });

    this._ui_receiver.show_result(actions.join(", "));
  }
}
