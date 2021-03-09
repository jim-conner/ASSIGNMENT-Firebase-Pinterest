import { showBoards, emptyBoards } from '../components/forms/boards';
import { showPins, emptyPins } from '../components/forms/pins';
import {
  getBoards,
  // deleteBoard
} from '../helpers/data/boardsData';
import {
  deleteBoardPins,
  boardPinsInfo
}
  from '../helpers/data/boardPinsData';
import boardInfo from '../components/forms/boardInfo';
import {
  getPins,
  deletePin,
  // getBoardPins,
  // getBoardPins
} from '../helpers/data/pinsData';

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
      const boardId = e.target.id.split('--')[1];
      boardPinsInfo(boardId).then((boardInfoObject) => {
        console.warn(boardId);
        showPins(boardInfoObject.pins);
        boardInfo(boardInfoObject.board);
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
      if (window.confirm('Delete this board and related pins?')) {
        const authorId = e.target.id.split('--')[1];
        // deleteBoard(firebaseKey).then((boardsArray) => showBoards(boardsArray));
        console.warn(authorId);
        deleteBoardPins(authorId, uid).then((boardsArray) => showBoards(boardsArray));
        // getBoardPins(authorId).then((boardPinsArray) => console.warn(boardPinsArray));
      }
    }

    if (e.target.id.includes('delete-pin-btn')) {
      if (window.confirm('Delete this pin?')) {
        const firebaseKey = e.target.id.split('--')[1];
        deletePin(firebaseKey).then((pinsArray) => showPins(pinsArray));
      }
    }
    // dont mess with syntax below this comment
  });
};

export default domEvents;
