// import { getBoards, deleteBoard } from '../helpers/data/boardsData';
// import { getPins, deletePin } from '../helpers/data/pinsData';
import { getSingleBoard } from './boardsData';
import { getBoardPins } from './pinsData';

// const deleteBoardPins = (boardId, uid) => new Promise((resolve) => {
//   Promise.all([getSingleBoard])
// });

const boardPinsInfo = (boardId) => new Promise((resolve, reject) => {
  Promise.all([getSingleBoard(boardId), getBoardPins(boardId)])
    .then(([boardResponse, boardPinsResponse]) => resolve(
      { board: boardResponse, pins: boardPinsResponse }
    ))
    .catch((error) => reject(error));
});

export default boardPinsInfo;
