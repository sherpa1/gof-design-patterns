import ViewDecorator from "./ViewDecorator";

export default class XMLRenderable extends ViewDecorator {
  render(): string {
    return `<xml>
                <message>${this._decoree.render()}</message>
            </xml>`;
  }
}
