import { Link } from "react-router"
import './Header.css'

export default function Header({isLoggedIn}){

    return(
        <div>
            <h1>Remember This Day</h1>
            {isLoggedIn ? 
            <nav className="loggedOutNav">
            <Link to="/about">About this application</Link>
            </nav> : <nav className="loggedInNav">
            <Link to="/about">About this application</Link>
            </nav>
            }   
        </div>
    )
};