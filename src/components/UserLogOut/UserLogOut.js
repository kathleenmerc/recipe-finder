import styles from './UserLogOut.module.css';
import { logOut } from '../../utilities/users-service';

export default function UserLogOut({ setUser }) {
  function handleLogOut() {
    logOut();
    setUser(null);
  }

  return (
    <div >
      <button className={styles.logOutBtn} onClick={handleLogOut}>LOG OUT</button>
    </div>
  );
}