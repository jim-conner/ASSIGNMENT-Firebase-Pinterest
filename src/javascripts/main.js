import checkLoginStatus from './helpers/auth/router';
import 'bootstrap';
import '../styles/main.scss';

const init = () => {
  document.querySelector('#app').innerHTML = '<h1>HELLO! You are up and running!</h1>';
  console.warn('YOU ARE UP AND RUNNING!');
  checkLoginStatus();
};

init();
