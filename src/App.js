import React, { useState } from "react";
import "./App.css";
import Greeting from "./components/Greetings/Greeting";
import { Navbar } from "./components/Navbar/Navbar";
import Card from "./components/Cards/PersonCard/Card";
import persons from "./common/persons.json";
import hotels from "./common/hotels.json";
import HotelCard from "./components/Cards/HotelCard/HotelCard";

function App() {
  // const [count, setCount] = React.useState(0);
  const [count, setCount] = useState(0);
  // setCount je metoda pomocu koje menjamo vrednost count state_a:
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  // const x = 10;
  return (
    //  React.createElement("p", {}, "Neki paragraf");
    <>
      {" "}
      {/* Fragment - najcesce se koristi za wrappovanje */}
      <div className="App">
        <Navbar>{/* <p>Samo za primer</p> */}</Navbar>
        <Greeting appName={"Our First App"} username={"Bakir Ujkanovic"} />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 250px)",
            justifyContent: "center",
            gridAutoRows: "minmax(420px, auto)",
            gridGap: "40px",
          }}
        >
          {persons.map((person) => (
            <Card
              imageURL={person.imageURL}
              fullName={person.fullName}
              location={person.location}
              description={person.description}
              goToRepositories={person.goToRepositories}
            />
          ))}
          <div>
            <button style={{ width: "40px" }} onClick={decreaseCount}>
              -
            </button>
            <p>{count}</p>
            <button
              style={{ width: "40px" }}
              onClick={() => {
                console.log("povecanje");
                increaseCount();
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="Hotels">
          {hotels.map((hotel) => (
            <HotelCard
              imageURL={hotel.imageURL}
              name={hotel.name}
              stars={hotel.stars}
              description={hotel.description}
              rating={hotel.rating}
              reviews={hotel.reviews}
            />
          ))}
        </div>
        <div className="formContainer">
          <form onSubmit={() => {}}>
            <labbel htmlFor="fisrtName">Enter your name</labbel>
            <input
              type="text"
              id="fisrtName"
              name="fisrtName"
              required
              value={name}
              onChange={() => {}}
            ></input>{" "}
            <br />
            <br />
            <labbel htmlFor="lastName">Enter your last name</labbel>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={"text"}
              onChange={() => {}}
            ></input>{" "}
            <br />
            <br />
            <labbel htmlFor="email">Enter your email</labbel>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={"text"}
              onChange={() => {}}
            ></input>{" "}
            <br />
            <br />
            <labbel htmlFor="hobby">Enter your hobby</labbel>
            <input
              type="text"
              id="hobby"
              name="hobby"
              value={"text"}
              onChange={() => {}}
            ></input>{" "}
            <br />
            <br />
            <labbel htmlFor="number">Enter your phone number</labbel>
            <input
              type="tel"
              id="number"
              name="number"
              value={"text"}
              onChange={() => {}}
            ></input>{" "}
            <br />
            <br />
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
