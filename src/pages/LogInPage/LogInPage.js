import styles from './LoginPage.module.css'
import LogInForm from "../../components/LogInForm/LogInForm";


export default function LogInPage(props) {
    return (
        <div className={styles.loginPage}>
            <div className={styles.headerContainer}>
                <h1 className={styles.header}>Log In</h1>
            </div>
            <LogInForm setUser={props.setUser} />
        </div>
    )
}