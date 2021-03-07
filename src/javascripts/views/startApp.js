import { emptyBoards, showBoards } from '../components/forms/boards';
import domBuilder from '../components/domBuilder';
import domEvents from '../events/domEvents';
import navBar from '../components/navBar';
import logoutButton from '../components/logoutButton';
import getBoards from '../helpers/data/boardsData';

const startApp = (user) => {
  domBuilder();
  domEvents();
  navBar();
  logoutButton();
  getBoards(user.uid).then((boardsArray) => {
    if (boardsArray.length) {
      showBoards(boardsArray);
    } else {
      emptyBoards();
    }
  });
};

export default startApp;
