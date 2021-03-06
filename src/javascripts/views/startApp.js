import domBuilder from '../components/domBuilder';
import domEvents from '../events/domEvents';
import navBar from '../components/navBar';
import logoutButton from '../components/logoutButton';
import getBoards from '../helpers/data/boardsData';
import { emptyBoards, showBoards } from '../components/forms/boards';

const startApp = () => {
  domBuilder();
  domEvents();
  navBar();
  logoutButton();
  getBoards().then((boardsArray) => {
    if (boardsArray.length) {
      showBoards(boardsArray);
    } else {
      emptyBoards();
    }
  });
};

export default startApp;
