import IRenderable from "../interfaces/IRenderable";

export default abstract class ViewDecorator implements IRenderable {
  protected _decoree: IRenderable;

  constructor(decoree: IRenderable) {
    this._decoree = decoree;
  }

  render(): string {
    throw new Error("Method not implemented.");
  }
}
