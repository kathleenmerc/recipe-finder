import LogInForm from "../../components/LogInForm/LogInForm";



export default function LogInPage (props) {
    return (
        <div className="logInPage">
            <h1>LogIn page</h1>
            <LogInForm setUser={props.setUser}/>
        </div>
    )
}