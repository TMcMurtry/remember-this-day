import { Link } from "react-router"
import './Header.css'

export default function Header({isLoggedIn, setIsLoggedIn}){
    const handleLogOut = setIsLoggedIn(false);

    return(
        <div className="headerDisplay">
            <h1>Remember This Day</h1>
            {!isLoggedIn ? 
            <nav className="loggedOutNav">
            <Link to="/">Log-In     </Link>
            <Link to="/about">About this application    </Link>
            <Link to="/Optimizing">How to make the most of your journal </Link>
            </nav> : <div>
            <button type="button" onClick={handleLogOut} name="logout" id="logout" >Log Out</button>
            <nav className="loggedInNav">
            <Link to="/">Entry Page     </Link>
            <Link to="/about">About this application    </Link>
            <Link to="/Optimizing">How to make the most of your journal </Link>
            </nav>
            </div>
            }   
        </div>
    )
};