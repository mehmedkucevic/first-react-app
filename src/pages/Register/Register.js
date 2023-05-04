import { useState } from "react";
import './Register.css'
export function Register() {
    function handleClick(e) {

    }
    const [username, setUsername] = useState('')
    return (
        <div className='rCointener'>
            <form>
                <h1>Register</h1>
                <label>Name</label>
                <input className="rInput" type="text" placeholder="First Name" name="firstname" required></input>
                <label>Surame</label>
                <input  type="text" className="rInput" placeholder="Last Name" name="lasttname" required></input>
                <label>Username</label>
                <input type="text" className="rInput" value={username} onChange={(e) => { setUsername(e.target.value) }} placeholder="Enter Username" name="username" required></input>
                <label>password</label>
                <input placeholder="Enter Password" className="rInput" type="password " name="password " required></input>
                <button onClick={handleClick}>Register</button>
            </form>
        </div>
    )
}