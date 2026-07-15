import { useState } from 'react'
import UserData from '../UserData.json'
import './Login.css'

export default function Login({isLoggedIn, setIsLoggedIn, currentUser, setCurrentUser}){
 
    const [usernameInput, setUsernameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const handleUsernameChange = (ev) => setUsernameInput(ev.target.value);
    const handlePasswordChange = (ev) => setPasswordInput(ev.target.value);
    const trimmedUsernameInput = usernameInput.trim();
    const trimmedPasswordInput = passwordInput.trim();
     const findUser = UserData.userProfiles.filter((user) => 
        (user.username === trimmedUsernameInput ))
    
    function handleLoginSuccess(){
        setCurrentUser(findUser[0])
        setIsLoggedIn(true);
    }

    const failedLoginMessage = "Incorrect Username or Password"
    
    function passwordVerify(){
        let passwordToMatch = null;
        if (findUser.length != 1){
            return("Incorrect username or password")
        } else {
            passwordToMatch = findUser[0].password;
        }
        passwordToMatch === trimmedPasswordInput ? handleLoginSuccess() : failedLoginMessage ;
        setUsernameInput("");
        setPasswordInput("");
    }

    return(
        <div className='loginPage'>
            <form className='loginForm'>
                <h2>Log In</h2>
                <label htmlFor="username"> <br/>
                    <input id="username" type="text" name="username" 
                    value={usernameInput} onChange={handleUsernameChange} placeholder="Username" required/>
                </label> <br/>
                <label htmlFor="password"> <br/>
                    <input id="password" name="password" type="password" 
                    value={passwordInput} onChange={handlePasswordChange} placeholder="Password" required/>
                </label>
                <p>{failedLoginMessage}</p>
                <button name="login" id="login" type="button" onClick={passwordVerify}>Log In</button>
            <p>{trimmedUsernameInput}</p>
            <p>{trimmedPasswordInput}</p>
            </form>
        </div>
    )
}