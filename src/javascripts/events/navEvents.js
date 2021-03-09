import logoutButton from '../components/logoutButton';
import navBar from '../components/navBar';

const navEvents = (uid) => {
  navBar(uid);
  logoutButton(uid);
};

export default navEvents;
