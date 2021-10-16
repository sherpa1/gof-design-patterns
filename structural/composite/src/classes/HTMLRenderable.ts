import ViewDecorator from "./ViewDecorator";

export default class HTMLRenderable extends ViewDecorator {
  render(): string {
    return `<p>${this._decoree.render()}</p>`;
  }
}
