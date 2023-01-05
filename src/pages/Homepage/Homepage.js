import { Link } from 'react-router-dom'

export default function Homepage (props) {
    return (
        <div className="homepage">
            <h1>homepage</h1>
            <p> have login and sign up info here</p>
            <p> have landing page / about info here </p>
            <Link to="/login"><button>Log in here</button></Link>
            <Link to="/signup"><button>Sign up here</button></Link>
        </div>
    )
}