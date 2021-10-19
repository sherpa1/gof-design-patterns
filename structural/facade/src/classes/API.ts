import Server from "./Server";

export default class API {
  private _data: any;
  private _server: Server;

  static GET: string = "GET";
  static POST: string = "POST";
  static PUT: string = "PUT";
  static PATCH: string = "PATCH";
  static DELETE: string = "DELETE";

  static HTTP_METHODS: Array<string> = [
    API.GET,
    API.POST,
    API.PUT,
    API.PATCH,
    API.DELETE,
  ];

  constructor(server: Server) {
    this._server = server;
  }

  public get(): string {
    this._data = this._server.get_data();
    let json: string = `{"data":[`;
    for (const item of this._data) {
      json += `{"title":"${item.title}","details":"${item.details}"},`;
    }
    json = json.slice(0, -1); //remove last comma
    json += `]}`;
    return json;
  }
}
