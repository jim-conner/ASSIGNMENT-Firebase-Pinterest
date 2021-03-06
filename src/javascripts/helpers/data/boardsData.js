import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getBoards = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/boards.json`)
  // axios.get(`${dbUrl}/boards.json?orderBy="uid"`);
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve();
      }
    }).catch((error) => reject(error));
});
// will need to add uid

export default getBoards;
