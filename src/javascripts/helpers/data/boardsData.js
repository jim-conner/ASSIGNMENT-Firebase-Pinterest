import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getBoards = (uid) => new Promise((resolve, reject) => {
  // console.warn(`${dbUrl}/boards.json?orderBy="uid"&equalTo="${uid}"`);
  axios.get(`${dbUrl}/boards.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        const boardsArray = Object.values(response.data);
        resolve(boardsArray);
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const createBoard = (boardObject, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/boards.json`, boardObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/boards/${response.data.name}.json`, body)
        .then(() => {
          getBoards(uid).then((boardsArray) => resolve(boardsArray));
        });
    }).catch((error) => reject(error));
});

const deleteBoard = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/boards/${firebaseKey}.json`)
    .then(() => getBoards(uid).then((boardsArray) => resolve(boardsArray)))
    .catch((error) => reject(error));
});

const getSingleBoard = (boardId) => new Promise((resolve, reject) => {
  // console.warn(`${dbUrl}/boards/${boardId}.json`);
  axios.get(`${dbUrl}/boards/${boardId}.json`)
    .then((reponse) => resolve(reponse.data))
    .catch((error) => reject(error));
});

export {
  createBoard, getBoards, deleteBoard, getSingleBoard
};
