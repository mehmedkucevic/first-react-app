import React, { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs";
import Hotels from "./pages/Hotels/Hotels";
import Teams from "./pages/Teams/Teams";
import Quotes from "./pages/Quotes/Quotes";
import Hotel from "./pages/hotel/Hotel";
import { Register } from "./pages/Register/Register";
import { Login } from "./pages/Login/Login";

// const poruke = [
//   "Danas je subota",
//   "U subotu je lepo vreme",
//   "Subota je dan za odmor",
//   "Subota je dan za kupovinu",
//   "Subota je dan za druzenje",
//   "Subota je dan za kafu",
// ];

export const BASE_URL = "https://api.quotable.io";

function App() {
  // const [count, setCount] = React.useState(0);
  const [count, setCount] = useState(0);
  // const [arr, setArr] = useState(poruke);
  // setCount je metoda pomocu koje menjamo vrednost count state_a:
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  // const x = 10;

  // const reverseArr = () => {
  //   const _arr = [...arr];
  //   const reversed = _arr.reverse();
  //   setArr(reversed);
  // };

  return (
    //  React.createElement("p", {}, "Neki paragraf");
    <>
      {" "}
      {/* Fragment - najcesce se koristi za wrappovanje */}
      {/* <div className="App"> */}
      {/* <Navbar><p>Samo za primer</p></Navbar>
        <Greeting appName={"Our First App"} username={"Bakir Ujkanovic"} /> */}
      {/* <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 250px)",
            justifyContent: "center",
            gridAutoRows: "minmax(420px, auto)",
            gridGap: "40px",
          }}
        > */}
      {/* <div>
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
          </div> */}
      {/* </div> */}
      {/* <div
          style={{
            height: "200px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <button
            onClick={() => {
              reverseArr();
              console.log("okrenuo se niz");
            }}
          >
            Promeni raspored poruka
          </button>
          {arr.map((poruka) => (
            <p>{poruka}</p>
          ))}
        </div> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/login" element={ < Login/>} />
        <Route path="/register" element={ < Register />} />
      </Routes>
    </>
  );
}

export default App;