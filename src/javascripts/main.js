import checkLoginStatus from './helpers/auth/router';
import 'bootstrap';
import '../styles/main.scss';

const init = () => {
  checkLoginStatus();
};

init();
