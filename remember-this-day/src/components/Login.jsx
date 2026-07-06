export default function Login(){

    return(
        <form>
            <label htmlFor="username">
                <input id="username" type="text" name="username" placeholder="Username" required/>
            </label>
            <label htmlFor="password">
                <input id="password" name="password" type="password" placeholder="Password" required/>
            </label>
            <button name="login" id="login" type="submit">Log In</button>
        </form>
    )
}