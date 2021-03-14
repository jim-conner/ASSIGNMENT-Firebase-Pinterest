import { emptyBoards, showBoards } from '../components/forms/boards';
import domBuilder from '../components/domBuilder';
import navEvents from '../events/navEvents';
import domEvents from '../events/domEvents';
import { getBoards } from '../helpers/data/boardsData';

const startApp = (user) => {
  domBuilder();
  domEvents(user.uid);
  navEvents(user.uid);
  getBoards(user.uid).then((boardsArray) => {
    if (boardsArray.length) {
      showBoards(boardsArray);
    } else {
      emptyBoards();
    }
  });
};

export default startApp;
