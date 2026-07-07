import { useState } from 'react'
import UserData from '../UserData.json'
export default function Login({isLoggedIn, setIsLoggedIn}){
    //user inputs data
 //on click, username input is checked against current profiles
 //if username is matched, checks password of that user profile
 //if either don't match it throws error 
 //if both match, it automatically navigates to the entries page, 
 //navigating away from page logs out
 //pressing the log out page logs out
    const [usernameInput, setUsernameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const handleUsernameChange = (ev) => setUsernameInput(ev.target.value)
    const handlePasswordChange = (ev) => setPasswordInput(ev.target.value)

    return(
        <div>
        <form>
            <label htmlFor="username">
                <input id="username" type="text" name="username" 
                value={usernameInput} onChange={handleUsernameChange} placeholder="Username" required/>
            </label>
            <label htmlFor="password">
                <input id="password" name="password" type="password" 
                value={passwordInput} onChange={handlePasswordChange} placeholder="Password" required/>
            </label>
            <button name="login" id="login" type="submit" >Log In</button>
        </form>
        <p>{usernameInput}</p>
        <p>{passwordInput}</p>
        </div>
    )
}