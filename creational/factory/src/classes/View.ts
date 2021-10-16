import IRenderable from "../interfaces/IRenderable";

export default class View implements IRenderable {
  protected _content: string;

  constructor(content: string) {
    this._content = content;
  }

  render(): string {
    return this._content;
  }
}
