import firebase from 'firebase/app';
import 'firebase/auth';

const signMeOut = () => {
  firebase.auth().signOut();
};

const logoutButton = () => {
  document.querySelector('#google-auth').addEventListener('click', signMeOut);
};

export default logoutButton;
