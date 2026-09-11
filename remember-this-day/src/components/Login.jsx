import { useState } from 'react'
import UserData from '../UserData.json'
import './Login.css'

export default function Login({isLoggedIn, setIsLoggedIn, currentUser, setCurrentUser}){
 
    const [usernameInput, setUsernameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [loginFail, setLoginFail] = useState(false);
    const handleUsernameChange = (ev) => setUsernameInput(ev.target.value);
    const handlePasswordChange = (ev) => setPasswordInput(ev.target.value);
    const trimmedUsernameInput = usernameInput.trim();
    const trimmedPasswordInput = passwordInput.trim();
     
    
     let loginErrorMessage;

    function handleLoginSuccess(){
        setCurrentUser(findUser[0])
        setIsLoggedIn(true);
    }
    
    async function verifyLogin(ev){
        ev.preventDefault();
        try {
            const response = await fetch("http:localhost:8080/users");
            const data = await response.json();

            if(!response.ok){
                throw new Error(`HTTP error: ${response.status} - could not connect to the database`)
            }
            const findUser = data.filter((user) => 
                (user.username === trimmedUsernameInput ))
            if (findUser.length != 1) {
                throw new Error(`Username or Password invalid`);
            } else {
                const foundUser = findUser[0];
            }
            if
           
        } catch (error){
            loginErrorMessage = error;
        }
    }

    function passwordVerify(){
        let passwordToMatch = null;
        if (findUser.length != 1){
            return(setLoginFail(true))
        } else {
            passwordToMatch = findUser[0].password;
        }
        passwordToMatch === trimmedPasswordInput ? handleLoginSuccess() : setLoginFail(true) ;
        setUsernameInput("");
        setPasswordInput("");
    }

    return(
        <div className='loginPage'>
            <form className='loginForm' onSubmit={verifyLogin}>
                <h2>Log In</h2>
                <label htmlFor="username"> <br/>
                    <input id="username" type="text" name="username" 
                    value={usernameInput} onChange={handleUsernameChange} placeholder="Username" required/>
                </label> <br/>
                <label htmlFor="password"> <br/>
                    <input id="password" name="password" type="password" 
                    value={passwordInput} onChange={handlePasswordChange} placeholder="Password" required/>
                </label>
                {loginFail && <p>{loginErrorMessage}</p>}
                <button name="login" id="login" type="submit" >Log In</button>
            
            </form>
        </div>
    )
}