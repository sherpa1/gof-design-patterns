import View from "./classes/View";
import JSONRenderable from "./classes/JSONRenderable";

function init() {
  const hello_world: string = "Hello world";

  const view = new View(hello_world);

  const result = view.render();
  console.log(result);

  const JSONview = new JSONRenderable(view);

  const json_result = JSONview.render();
  console.log(json_result);
}

init();
