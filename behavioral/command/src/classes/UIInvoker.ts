import Command from "../interfaces/Command";
import History from "./History";

export default class UIInvoker {
  private _add_command: Command;
  private _multiply_command: Command;
  private _uppercase_command: Command;
  private _history_command: Command;
  private _history: History;

  constructor() {
    this._history = new History();
  }

  set uppercase_command(command: Command) {
    this._uppercase_command = command;
  }

  set add_command(command: Command) {
    this._add_command = command;
  }

  set multiply_command(command: Command) {
    this._multiply_command = command;
  }

  set history_command(command: Command) {
    this._history_command = command;
  }

  multiply(...params: Array<number>): void {
    this._history.push(this._multiply_command);
    this._multiply_command.execute(params);
  }

  add(...params: Array<number>): void {
    this._history.push(this._add_command);
    this._add_command.execute(params);
  }

  toUpperCase(...params: Array<any>): void {
    this._history.push(this._uppercase_command);
    this._uppercase_command.execute(params);
  }

  show_history() {
    this._history_command.execute(this._history.list);
  }
}
