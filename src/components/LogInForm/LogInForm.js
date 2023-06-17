import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { logInService } from '../../utilities/users-service'
import styles from './LogInForm.module.css'

export default function LogInForm(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    // const handleChange = (evt) => {
    //     setUsername({ [evt.target.name] : evt.target.value})
    //     setPassword({[evt.target.name] : evt.target.value })
    //     setConfirmPassword({[evt.target.name] : evt.target.value})
    //     setError('')
    // }

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        try {
            const formData = { username, password }
            const user = await logInService(formData)
            props.setUser(user)
        } catch {
            setError('Log In Failed - Try Again')
            console.log(error)
        }
    }


    const disable = password !== confirmPassword


    const handleDemoBtn = (evt) => {
        evt.preventDefault()
        setUsername("demo")
        setPassword("recipefinder")
        setConfirmPassword("recipefinder")
        // alert(
        // '▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬\n' 
        // + '\nHello and welcome to Recipe-Finder! Thank you for visiting.\n'
        // + '\nFeel free to use these log in credentials:\n' 
        // + "\t Username: TestChef\n" 
        // + '\t Password: recipefinder\n' 
        // )
    }

    return (

        <div className={styles.loginFormContainer}>
            <form className={styles.loginForm} autoComplete="off" onSubmit={handleSubmit}>
                <div className={styles.inputSection}>
                    <label>Username:</label>
                    <input type="text" name="username" value={username} onChange={(evt) => setUsername(evt.target.value)} required />
                </div>

                <div className={styles.inputSection}>
                    <label>Password:</label>
                    <input type="password" name="password" value={password} onChange={(evt) => setPassword(evt.target.value)} required />
                </div>

                <div className={styles.inputSection}>
                    <label>Confirm Password:</label>
                    <input type="password" name="confirmPassword" value={confirmPassword} onChange={(evt) => setConfirmPassword(evt.target.value)} required />
                </div>

                <div className={styles.inputSection}>
                    <button type="submit" disabled={disable} className={styles.loginBtn}>LOG IN</button>
                </div >
            </form >
            
            <Link to="/signup"><button className={styles.linkBtn}>Don't have an account yet? Sign up here</button></Link>

            <p className="error-message" disabled={disable}>{error}</p>

            <button className={styles.recruiterBtn} onClick={handleDemoBtn}>Demo Log In</button>
        </div >

    )
}