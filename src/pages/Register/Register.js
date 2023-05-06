import { useState } from "react";
import "./Register.css";
import axios from "axios";
import BASE_URL from "../../config";

export function Register() {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  async function registerUser(data) {
    try {
      const response = await axios.post(
        `${BASE_URL}/users/register`,
        data
      );
      const userInfo = await response.data;

      console.log(userInfo);
    } catch (error) {
      console.log(error);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    registerUser(userInput);
  }

  return (
    <div className="rCointener">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <label>Name</label>
        <input
          className="rInput"
          type="text"
          placeholder="Name"
          name="name"
          value={userInput.name}
          onChange={(e) => {
            setUserInput({ ...userInput, name: e.target.value });
          }}
          required
        />
        <label>Email</label>
        <input
          type="email"
          className="rInput"
          value={userInput.email}
          onChange={(e) => {
            setUserInput({ ...userInput, email: e.target.value });
          }}
          placeholder="Enter Email"
          name="email"
          required
        />
        <label>Password</label>
        <input
          placeholder="Enter Password"
          className="rInput"
          type="password"
          name="password"
          value={userInput.password}
          onChange={(e) => {
            setUserInput({ ...userInput, password: e.target.value });
          }}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
