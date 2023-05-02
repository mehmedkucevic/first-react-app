import React, { useState } from "react";
import "./Form.css";

function Form() {
  // 1. nacin - za svako input polje poseban state
  // const [name, setName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [hobby, setHobby] = useState("");
  // const [phone, setPhone] = useState("+381");

  // 2. jedan state za sva input polja
  const [userInput, setUserInput] = useState({
    name: "",
    lastName: "",
    email: "",
    hobby: "",
    phone: "",
  });
  return (
    <div className="formContainer">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          // console.log({ name });
          // console.log("lastName", lastName);
          // console.log({ email });
          // console.log({ hobby });
          // console.log({ phone });
          console.log({ userInput });
        }}
      >
        <label htmlFor="firstName">Unesite vase ime</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          required
          // innerText={"ime"}
          value={userInput.name}
          onChange={(event) => {
            setUserInput((prev) => ({
              ...prev,
              name: event.target.value,
            }));
          }}
        />
        <br />
        <br />

        <label htmlFor="lastName">Unesite vase prezime</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          required
          value={userInput.lastName}
          onChange={(event) => {
            setUserInput((prev) => ({
              ...prev,
              lastName: event.target.value,
            }));
          }}
        />
        <br />
        <br />

        <label htmlFor="email">Unesite vasu email adresu</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={userInput.email}
          onChange={(event) => {
            setUserInput((prev) => ({
              ...prev,
              email: event.target.value,
            }));
          }}
        />
        <br />
        <br />

        <label htmlFor="hobi">Unesite vas hobi</label>
        <input
          type="text"
          id="hobi"
          name="hobi"
          value={userInput.hobby}
          onChange={(event) => {
            setUserInput((prev) => ({
              ...prev,
              hobby: event.target.value,
            }));
          }}
        />
        <br />
        <br />

        <label htmlFor="phone">Unesite vas broj telefona</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={userInput.phone}
          onChange={(event) => {
            setUserInput((prev) => ({
              ...prev,
              phone: event.target.value,
            }));
          }}
        />
        <br />
        <br />

        <button type="submit">Potvrdi</button>
      </form>
    </div>
  );
}

export default Form;