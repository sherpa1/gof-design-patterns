export default abstract class Component {
  protected _parent: Component;

  public set parent(parent: Component) {
    this._parent = parent;
  }

  public get parent(): Component {
    return this._parent;
  }

  public add(component: Component): void {}

  public remove(component: Component): void {}

  public is_composite(): boolean {
    return false;
  }

  public abstract render(): string;
}
