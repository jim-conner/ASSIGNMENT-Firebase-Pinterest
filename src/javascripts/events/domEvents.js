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

    if (e.target.id.includes('delete-board-btn')) {
      if (window.confirm('Delete this board?  This action will delete the board and associated pins.')) {
        console.warn('CLICKED DELETE PIN', e.target.id);
        // const firebaseKey = e.target.id.split('--')[1];
        // deleteBoard(firebaseKey).then((boardsArray) => showBooks(booksArray));
      }
    }

    if (e.target.id.includes('delete-pin-btn')) {
      if (window.confirm('Delete this pin?')) {
        console.warn('CLICKED DELETE BOARD', e.target.id);
        // const firebaseKey = e.target.id.split('--')[1];
        // deletePin(firebaseKey).then((pinsArray) => showBooks(pinsArray));
      }
    }
    // dont mess with syntax below this comment
  });
};

export default domEvents;
