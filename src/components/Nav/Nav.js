import styles from './Nav.module.css';
import { Link } from 'react-router-dom'

export default function Nav(props) {

    return (
        <div>
            <nav className={styles.nav}>
                <Link to='/' className={styles.navLink}>Search</Link>
                <Link to='/favorites' className={styles.navLink}>Favorites</Link>
            </nav>
            
        </div>



    )
}