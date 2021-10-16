export default class Adaptee {
  fetch_from_csv(csv: string) {
    let data = [];

    for (const iterator of csv) {
      console.log(iterator);
      data.push(iterator);
    }

    return data;
  }
}
