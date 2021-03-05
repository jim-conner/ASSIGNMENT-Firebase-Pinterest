// USE WITH FIREBASE AUTH
import checkLoginStatus from './helpers/auth';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import navBar from './components/navBar';

const init = () => {
  // document.querySelector('#app').innerHTML = '<h1>HELLO! You are up and running!</h1>';
  // console.warn('YOU ARE UP AND RUNNING!');

  navBar();
  checkLoginStatus();
};

init();
