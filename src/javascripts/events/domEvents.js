import { showBoards, emptyBoards } from '../components/forms/boards';
import { showPins } from '../components/forms/pins';
import {
  getBoards,
  createBoard,
} from '../helpers/data/boardsData';
import {
  deleteBoardPins,
  boardPinsInfo
}
  from '../helpers/data/boardPinsData';
import {
  createPin,
  deletePin,
  getSinglePin,
  updatePin
} from '../helpers/data/pinsData';
import addBoardForm from '../components/forms/addBoardForm';
import addPinForm from '../components/forms/addPinForm';
import updatePinForm from '../components/forms/updatePinForm';
import formModal from '../components/forms/formModal';

const domEvents = (uid) => {
  document.querySelector('body').addEventListener('click', (e) => {
    // CREATE
    if (e.target.id.includes('add-board-btn')) {
      console.warn('clicked add board', e.target.id);
      addBoardForm();
    }

    if (e.target.id.includes('add-pin-btn')) {
      console.warn('clicked add pin', e.target.id);
      addPinForm();
    }

    if (e.target.id.includes('submit-board')) {
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

    if (e.target.id.includes('show-pin-btn')) {
    // READ
      const boardId = e.target.id.split('--')[1];
      boardPinsInfo(boardId).then((boardInfoObject) => {
        showPins(boardInfoObject.pins);
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

    // UPDATE
    if (e.target.id.includes('edit-pin-btn')) {
      const firebaseKey = e.target.id.split('--')[1];
      formModal('Edit Pin');
      getSinglePin(firebaseKey).then((pinObject) => updatePinForm(pinObject));
    }

    if (e.target.id.includes('update-pin-btn')) {
      const firebaseKey = e.target.id.split('--')[1];
      console.warn(e.target.id);
      e.preventDefault();
      const pinObject = {
        image: document.querySelector('#pin-image').value,
        Title: document.querySelector('#pin-title').value,
        Description: document.querySelector('#pin-description').value,
        board_id: document.querySelector('#board').value,
        uid
      };
      updatePin(firebaseKey, pinObject).then((pinsArray) => showPins(pinsArray));

      $('#formModal').modal('toggle');
    }

    // DELETE
    if (e.target.id.includes('delete-board-btn')) {
      if (window.confirm('Delete this board and related pins?')) {
        const boardId = e.target.id.split('--')[1];
        deleteBoardPins(boardId, uid).then((boardsArray) => showBoards(boardsArray));
      }
    }

    if (e.target.id.includes('delete-pin-btn')) {
      if (window.confirm('Delete this pin?')) {
        const firebaseKey = e.target.id.split('--')[1];
        deletePin(firebaseKey, uid).then((pinsArray) => showPins(pinsArray));
      }
    }
  });
};

export default domEvents;
