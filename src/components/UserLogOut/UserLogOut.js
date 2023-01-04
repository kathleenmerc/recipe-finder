import styles from './UserLogOut.module.css';
import { logOut } from '../../utilities/users-service';
import { setUser } from '../../App'

export default function UserLogOut({ setUser }) {
function handleLogOut() {
  logOut();
  setUser(null);
}

return (
  <div className={styles.UserLogOut}>
    <button className="btn-sm" onClick={handleLogOut}>LOG OUT</button>
  </div>
);
}