import API from "./API";
import Server from "./Server";

export default class Client {
  display(title: string, body: string): string {
    return `<html><head><title>${title}</title></head><body>${body}</body></html>`;
  }

  fetch(api: API, method: string): any {
    if (API.HTTP_METHODS.indexOf(method.toUpperCase()) === -1)
      throw new Error(
        `Method : "${method}" is not authorized (Authorized HTTP Methods : ${API.HTTP_METHODS.join(
          ", "
        )})`
      );

    return api[method]();
    //dynamically call method of an object
  }
}
