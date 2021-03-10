import { getBoards } from '../../helpers/data/boardsData';

const selectBoard = () => {
  let domString = `<label for="board">Select a Board</label>
  <select class="form-control" id="board" required>
  <option value="">Select a Board</option>`;

  getBoards().then((boardsArray) => {
    boardsArray.forEach((board) => {
      domString += `<option value="${board.firebaseKey}">${board.first_name}</option>`;
    });

    domString += '</select>';

    document.querySelector('#select-board').innerHTML = domString;
  });
};

export default selectBoard;
