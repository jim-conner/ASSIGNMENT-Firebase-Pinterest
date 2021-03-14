import { deleteBoard, getSingleBoard } from './boardsData';
import { deletePin, getBoardPins } from './pinsData';

const deleteBoardPins = (boardId, uid) => new Promise((resolve, reject) => {
  getBoardPins(boardId).then((boardPinsArray) => {
    const deletePins = boardPinsArray.map((pin) => deletePin(pin.firebaseKey));
    Promise.all(deletePins).then(() => resolve(deleteBoard(boardId, uid)));
  }).catch((error) => reject(error));
});

const boardPinsInfo = (boardId) => new Promise((resolve, reject) => {
  Promise.all([getSingleBoard(boardId), getBoardPins(boardId)])
    .then(([boardResponse, boardPinsResponse]) => resolve(
      { board: boardResponse, pins: boardPinsResponse }
    ))
    .catch((error) => reject(error));
});

export { deleteBoardPins, boardPinsInfo };
