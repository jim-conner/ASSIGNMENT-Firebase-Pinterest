import { showBoards, emptyBoards } from '../components/forms/boards';
import { showPins } from '../components/forms/pins';
import {
  getBoards,
  createBoard,
  // deleteBoard
} from '../helpers/data/boardsData';
import {
  deleteBoardPins,
  boardPinsInfo
}
  from '../helpers/data/boardPinsData';
// import boardInfo from '../components/forms/boardInfo';
import {
  // getPins,
  createPin,
  deletePin,
  // getBoardPins,
  // getBoardPins
} from '../helpers/data/pinsData';
import addBoardForm from '../components/forms/addBoardForm';
import addPinForm from '../components/forms/addPinForm';

const domEvents = (uid) => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('add-board-btn')) {
      console.warn('clicked add board', e.target.id);
      addBoardForm();
    }

    if (e.target.id.includes('add-pin-btn')) {
      console.warn('clicked add pin', e.target.id);
      addPinForm();
    }

    // CREATE
    if (e.target.id.includes('submit-board')) {
      // console.warn('clicked submit board', e.target.id);
      e.preventDefault();
      const boardObject = {
        image: document.querySelector('#board-image').value,
        first_name: document.querySelector('#first-name').value,
        last_name: document.querySelector('#last-name').value,
        uid
      };
      createBoard(boardObject, uid).then((boardsArray) => showBoards(boardsArray));
    }

    if (e.target.id.includes('submit-pin')) {
      // console.warn('clicked submit pin', e.target.id);
      e.preventDefault();
      const pinObject = {
        image: document.querySelector('#pin-image').value,
        Title: document.querySelector('#pin-title').value,
        Description: document.querySelector('#pin-description').value,
        board_id: document.querySelector('#board').value,
        uid
      };
      createPin(pinObject, uid).then((pinsArray) => showPins(pinsArray));
    }

    // READ
    if (e.target.id.includes('show-pin-btn')) {
      // getPins(uid).then((pinsArray) => {
      //   if (pinsArray.length) {
      //     showPins(pinsArray);
      //     console.warn(pinsArray);
      //   } else {
      //     emptyPins();
      //   }
      // });
      const boardId = e.target.id.split('--')[1];
      boardPinsInfo(boardId).then((boardInfoObject) => {
        showPins(boardInfoObject.pins);
        // boardInfo(boardInfoObject.board);
        // console.warn(boardInfoObject);
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

    // DELETE
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
