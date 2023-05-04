import { useState } from "react";
import './Login.css';
export function Login() {
    function handleClick(e) {

    }
    const [username, setUsername] = useState('')

    return (
        <div className="cointener">
            <form>
                <h1>Login</h1>
                <label className="label">Username</label>
                <input className="input" type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} placeholder="Username" name="username" required></input>
                <label className="label">Password</label>
                <input className="input" type="password " name="password " placeholder="Passwors"  required></input>
                <button id="login" onClick={handleClick}>Login</button>
                <p style={{ fontSize: '2rem', color: 'black' }}> {username}</p>
            </form>
        </div>
    )
}