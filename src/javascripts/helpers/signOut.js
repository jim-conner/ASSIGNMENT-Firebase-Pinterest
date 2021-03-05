import firebase from 'firebase/app';
import 'firebase/auth';

const signOut = () => {
  firebase.auth().signOut();
  document.querySelector('#create-board-nav').innerHTML = '<a class="nav-link" href="#">Create Board</a>';
};

export default signOut;
