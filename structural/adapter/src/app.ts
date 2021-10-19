import EnglishPeople from "./classes/EnglishPeople";
import FrenchPeople from "./classes/FrenchPeople";
import PeopleFacade from "./classes/PeopleFacade";

function init() {
  const john_doe = new EnglishPeople("John", "Doe");
  const jean_dupont = new FrenchPeople("Jean", "Dupont");

  const facade = new PeopleFacade(john_doe, jean_dupont);
}

init();
