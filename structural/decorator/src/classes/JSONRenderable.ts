import ViewDecorator from "./ViewDecorator";

export default class JSONRenderable extends ViewDecorator {
  render(): string {
    return `{
        "message":"${this._decoree.render()}"
    }`;
  }
}
