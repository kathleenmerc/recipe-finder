import styles from "./SignUpPage.module.css"
import SignUpForm from "../../components/SignUpForm/SignUpForm"



export default function SignUpPage(props) {
    return (
        <div className={styles.signUpPage}>
            <div className={styles.headerContainer}>
                <h1 className={styles.header}>Sign Up</h1>
            </div>
            <SignUpForm setUser={props.setUser} />
        </div>
    )
}