import firebase from 'firebase/app';
import { getBoards } from '../../helpers/data/boardsData';

const selectBoard = (boardObject = {}) => {
  let domString = `<label for="board">Select a Board</label>
  <select class="form-control" id="board" required>
  </option>`;

  getBoards(firebase.auth().currentUser.uid).then((boardsArray) => {
    boardsArray.forEach((board) => {
      if (board.firebaseKey === boardObject.board_id) {
        domString += `<option selected value="${board.firebaseKey}">${board.first_name} ${board.last_name}</option>`;
      } else {
        domString += `<option value="${board.firebaseKey}">${board.first_name} ${board.last_name}</option>`;
      }
    });

    domString += '</select>';

    document.querySelector('#select-board').innerHTML = domString;
  });
};

export default selectBoard;
