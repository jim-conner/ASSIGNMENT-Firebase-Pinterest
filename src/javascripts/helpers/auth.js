import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/loginButton';
import logoutButton from '../components/logoutButton';
import navBar from '../components/navBar';
import firebaseConfig from './apiKeys';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      document.querySelector('#create-board-nav').innerHTML = '<a class="nav-link" href="#">Create Board</a>';
      // person is logged in do something...
      logoutButton();
    } else {
      // person is NOT logged in
      document.querySelector('#create-board-nav').innerHTML = '';
      loginButton();
    }
  });
};

export default checkLoginStatus;
