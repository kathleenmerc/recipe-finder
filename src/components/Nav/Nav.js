import styles from './Nav.module.css';
import { Link } from 'react-router-dom'
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function Nav( { user, setUser }) {
    return (
        <div>
            <nav className={styles.nav}>
                <Link to='/' className={styles.navLink}>Search</Link>
                <Link to='/favorites' className={styles.navLink}>Favorites</Link>
                {/* <UserLogOut user={user} setUser={setUser} /> */}
            </nav>
        </div>
    )
}