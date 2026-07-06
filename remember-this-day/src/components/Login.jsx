import UserData from '../UserData.json'
export default function Login({isLoggedIn, setIsLoggedIn}){
    //user inputs data
 //on click, username input is checked against current profiles
 //if username is matched, checks password of that user profile
 //if either don't match it throws error 
 //if both match, it automatically navigates to the entries page, 
 //navigating away from page logs out
 //pressing the log out page logs out
  const usernameVerify = UserData.userProfiles.filter(() => )
  const passwordVerify = 
  const loginVerify = 

   throw new Error(Username and/or Password invalid, please try again);
    


    return(
        <form>
            <label htmlFor="username">
                <input id="username" type="text" name="username" placeholder="Username" required/>
            </label>
            <label htmlFor="password">
                <input id="password" name="password" type="password" placeholder="Password" required/>
            </label>
            <button name="login" id="login" type="submit" onClick={loginVerify()}>Log In</button>
        </form>
    )
}