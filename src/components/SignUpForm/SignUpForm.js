import styles from './SignUpForm.module.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { signUpService } from '../../utilities/users-service'


export default function SignUpForm(props) {

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
            delete { error }
            delete { confirmPassword }

            // The promise returned by the signUp service method will resolve to the user object included in the payload of the JSON Web Token (JWT):
            const user = await signUpService(formData)
            props.setUser(user)

        } catch {
            setError('Username is already taken')
            console.log(error)
        }

    }


    const disable = password !== confirmPassword || password.length < 7


    return (

        <div className={styles.signUpFormContainer}>
            <form className={styles.signUpForm} autoComplete="off" onSubmit={handleSubmit}>
                <div className={styles.inputSection}>
                    <label>Username:</label>
                    <input type="text" name="username" value={username} onChange={(evt) => setUsername(evt.target.value)} required />
                </div>

                <div className={styles.inputSection}>
                    <label>Password: (Must be at least 7 characters)</label>
                    <input type="password" name="password" value={password} onChange={(evt) => setPassword(evt.target.value)} required />
                </div>

                <div className={styles.inputSection}>
                    <label>Confirm Password:</label>
                    <input type="password" name="confirmPassword" value={confirmPassword} onChange={(evt) => setConfirmPassword(evt.target.value)} required />
                </div>

                <div className={styles.inputSection}>
                    <button type="submit" disabled={disable} className={styles.signUpBtn}>SIGN UP</button>
                </div >
            </form >

            <Link to="/login"><button className={styles.linkBtn}>Already have an account? Log in here</button></Link>
           
           <p className="error-message" disabled={disable}>{error}</p>

           <Link to="/login"><button className={styles.recruiterBtn}>Recruiters Click Me</button></Link>
        </div >
    )
}



// import { Component } from 'react'

// export default class SignUpForm extends Component {
//     state = {
//       username: "",
//       password: "",
//       confirmPassword: "",
//       error: ""
//     }

//     handleChange = (evt) => {
//         this.setState({
//             [evt.target.name]: evt.target.value,
//             error: ""
//         })
//     }

//     handleSubmit = (evt) => {
//         evt.preventDefault()
//         alert(JSON.stringify(this.state))
//     }

//     render() {
//         const disable = this.state.password !== this.state.confirmPassword;
//         return (
//           <div>
//             <div className="form-container">
//               <form autoComplete="off" onSubmit={this.handleSubmit}>
//                 <label>Username</label>
//                 <input type="text" name="username" value={this.state.username} onChange={this.handleChange} required/>
//                 <label>Password</label>
//                 <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required/>
//                 <label>Confirm Password</label>
//                 <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} required/>
//                 <button type="submit" disabled={disable}>SIGN UP</button>
//               </form>
//             </div>  
//             <p className="error-message">{this.state.error}</p>
//           </div>
//         )
//       }
// }