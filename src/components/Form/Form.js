import React from "react";

<div className="formContainer">
          <form
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <label htmlFor="firstName">Unesite vase ime</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
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
              value={userInput.lastname}
              onChange={(event) => {
                setUserInput((prev) => ({
                  ...prev,
                  lastname: event.target.value,
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
                setUserInput((event) => ({
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
      </div>
    </>
  );
}