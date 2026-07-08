import { useState } from 'react'
import UserData from '../UserData.json'
export default function Login({isLoggedIn, setIsLoggedIn}){
 
    const [usernameInput, setUsernameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const handleUsernameChange = (ev) => setUsernameInput(ev.target.value);
    const handlePasswordChange = (ev) => setPasswordInput(ev.target.value);
    const trimmedUsernameInput = usernameInput.trim();
    const trimmedPasswordInput = passwordInput.trim();
    let failedLoginMessage = null;
    
    function handleLoginSuccess(){
        setIsLoggedIn(true);
    }
    
    function passwordVerify(){
        let passwordToMatch = null;
        const findUsername = UserData.userProfiles.filter((user) => 
        (user.username === trimmedUsernameInput ))
       if (findUsername.length === 0){
        return("Incorrect username or password")
       } else {
         passwordToMatch = findUsername[0].password;
       }
       passwordToMatch === trimmedPasswordInput ? handleLoginSuccess() : failedLoginMessage = "Incorrect username or password";
       setUsernameInput("");
       setPasswordInput("");
    }

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
            <p>{failedLoginMessage}</p>
            <button name="login" id="login" type="button" onClick={passwordVerify}>Log In</button>
        </form>
        <p>{trimmedUsernameInput}</p>
        <p>{trimmedPasswordInput}</p>
        </div>
    )
}