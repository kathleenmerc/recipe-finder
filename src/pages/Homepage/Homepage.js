import styles from './Homepage.module.css'
import { Link } from 'react-router-dom'


export default function Homepage(props) {
    return (
        <div className={styles.homepage}>

            <div className={styles.headerContainer}>
                <h1 className={styles.header}>Recipe Finder</h1>
            </div>

            <div className={styles.subtitlesContainer}>
                <h3>What's in your kitchen?</h3>
                <h5>Find tasty recipes to make with the ingredients you have now</h5>
            </div>

            <section>
                <Link to="/login"><button className={styles.enterButtons}>Log in</button></Link>
                <Link to="/signup"><button className={styles.enterButtons}>Sign up</button></Link>
            </section>

        </div>
    )
}