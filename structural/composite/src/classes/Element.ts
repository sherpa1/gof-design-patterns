import Component from "./Component";

export default class Element extends Component {
  private _title: string;

  constructor(title: string = "") {
    super();
    this._title = title;
  }

  protected get title(): string {
    return this._title;
  }
  protected set title(value: string) {
    this._title = value;
  }

  public render(): string {
    return `<li>${this._title}</li>`;
  }
}
