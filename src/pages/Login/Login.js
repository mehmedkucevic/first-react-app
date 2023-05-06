import { useState } from "react";
import "./Login.css";
import axios from "axios";
export function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(data) {
    try {
      const user = await axios.post(
        "https://nit-backend.onrender.com/users/login",
        data
      );
      const userInfo = await user.data;
      console.log(userInfo);
      setIsLoggedIn(true);
    } catch (err) {
      console.log(err.response.data.err);
    }
  }

  function handleClick(e) {
    e.preventDefault();
    loginUser({
      email,
      password,
    });
  }

  return (
    <div className="cointener">
      <form>
        <h1>Login</h1>
        <label className="label">Email</label>
        <input
          className="input"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
          name="email"
          required
        />
        <label className="label">Password</label>
        <input
          className="input"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
        <button id="login" onClick={handleClick}>
          Login
        </button>
      </form>
      {isLoggedIn && <alert><h1>You are logged in</h1></alert>}
    </div>
  );
}
