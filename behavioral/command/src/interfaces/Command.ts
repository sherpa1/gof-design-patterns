export default interface Command {
  execute(...params: Array<any>): void;
  get_command_name(): string;
}
