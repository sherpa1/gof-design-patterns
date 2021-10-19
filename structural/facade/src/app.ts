import Client from "./classes/Client";
import API from "./classes/API";
import Server from "./classes/Server";

function init() {
  const client = new Client();
  const server = new Server();
  const api = new API(server); //API Class is a Facade

  const result = client.fetch(api, "get");

  console.log(result);
}

init();
