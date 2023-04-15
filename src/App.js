import React, { useState } from "react";
import "./App.css";
import Greeting from "./components/Greetings/Greeting";
import { Navbar } from "./components/Navbar/Navbar";
import PersonCard from "./components/Cards/PersonCard/PersonCard";
import persons from "./common/persons.json";
import hotels from "./common/hotels.json";
import HotelCard from "./components/Cards/HotelCard/HotelCard";
import Form from "./components/Form/Form";
import teams from "./common/teams.json";
const poruke = [
  "danas je subota",
  "u subotu je lepo vreme",
  "subota je dan za kupovinu",
  "subota je dan za kafu",
];

function App() {
  // const [count, setCount] = React.useState(0);
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState(poruke);
  // setCount je metoda pomocu koje menjamo vrednost count state_a:
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  // const x = 10;

  const [name, setName] = useState("");

  // 2. jedan state za sve input polja
  const [userInput, setUserInput] = useState({
    name: "",
    lastname: "",
    email: "",
    hobby: "",
    phone: "",
  });
  // console.log(name);
  return (
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
            <PersonCard
              key={persons.id}
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
                setCount(count + 1);
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="hotels">
          {hotels.map((hotel) => (
            <HotelCard
              key={hotels.id}
              imageURL={hotel.imageURL}
              name={hotel.name}
              stars={hotel.stars}
              description={hotel.description}
              rating={hotel.rating}
              reviews={hotel.reviews}
            />
          ))}
        </div>
      </div>
    </>
  );
}
