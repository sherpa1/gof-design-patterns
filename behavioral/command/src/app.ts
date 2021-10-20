import CommandAdd from "./classes/CommandAdd";
import CommandMultiply from "./classes/CommandMultiply";
import CommandHistory from "./classes/CommandHistory";
import CommandUpperCase from "./classes/CommandUpperCase";
import UIInvoker from "./classes/UIInvoker";
import UIReceiver from "./classes/UIReceiver";

function init() {
  const invoker = new UIInvoker();
  const receiver = new UIReceiver();

  invoker.add_command = new CommandAdd(receiver);
  invoker.multiply_command = new CommandMultiply(receiver);
  invoker.uppercase_command = new CommandUpperCase(receiver);
  invoker.history_command = new CommandHistory(receiver);

  invoker.add(1, 2, 3, 4, 5, 6, 7, 8, 9);
  invoker.multiply(1, 2, 3, 4, 5, 6, 7, 8, 9);
  invoker.toUpperCase("Hello, World !");
  invoker.show_history();
}

init();
