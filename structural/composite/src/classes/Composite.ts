import Component from "./Component";

export default class Composite extends Component {
  protected children: Array<Component> = [];

  protected _title: string;

  constructor(title: string = "") {
    super();
    this._title = title;
  }

  get title(): string {
    return this._title;
  }
  set title(value: string) {
    this._title = value;
  }

  add(component: Component): void {
    this.children.push(component);
    component.parent = this;
  }

  remove(component: Component): void {
    const index: number = this.children.indexOf(component);
    this.children.splice(index, 1);

    component.parent = null;
  }

  is_composite(): boolean {
    return true;
  }

  render(): string {
    const renders = [];

    for (const child of this.children) {
      renders.push(child.render());
    }

    return `<ul>${this._title} ${renders.join("")}</ul>`;
  }
}
