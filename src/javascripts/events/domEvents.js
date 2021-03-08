import { showPins, emptyPins } from '../components/forms/pins';
import getPins from '../helpers/data/pinsData';
import getBoards from '../helpers/data/boardsData';
import { emptyBoards, showBoards } from '../components/forms/boards';

const domEvents = (uid) => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('show-pin-btn')) {
      getPins(uid).then((pinsArray) => {
        if (pinsArray.length) {
          showPins(pinsArray);
        } else {
          emptyPins();
        }
      });
    }

    if (e.target.id.includes('back-btn')) {
      getBoards(uid).then((boardsArray) => {
        if (boardsArray.length) {
          showBoards(boardsArray);
        } else {
          emptyBoards();
        }
      });
    }
  });
};

export default domEvents;
