export default function Login(){

    return(
        <form>
            <label for='username'>
                <input id="username" type="text" name="username" placeholder="Username" required>Username</input>
            </label>
            <label for='password'>
                <input id="password" name="password" type="password" placeholder="Password" required>Password</input>
            </label>
            <button>Log In</button>
        </form>
    )
}