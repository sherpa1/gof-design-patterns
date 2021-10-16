import Singleton from "./classes/Singleton";

function init() {
  const unique_instance: Singleton = Singleton.getInstance();

  const same_instance: Singleton = Singleton.getInstance();

  console.log(unique_instance === same_instance); //if true Singleton works
}

init();
