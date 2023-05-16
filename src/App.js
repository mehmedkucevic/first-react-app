import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs";
import Hotels from "./pages/Hotels/Hotels";
import Teams from "./pages/Teams/Teams";
import Quotes from "./pages/Quotes/Quotes";
import Hotel from "./pages/hotel/Hotel";
import { Register } from "./pages/Register/Register";
import { Login } from "./pages/Login/Login";
import { AppContext } from "./context/AppContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Footer from "./components/Footer/Footer";

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

  const { token, setToken } = useContext(AppContext);
  useEffect(() => {
    const localToken = localStorage.getItem("token");
    setToken(localToken);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <main style={{ minHeight: "75vh" }}>
        <Routes>
          <Route path="/" element={token ? <Hotels /> : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/about-us"
            element={
              <ProtectedRoute>
                <AboutUs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/hotels"
            element={
              <ProtectedRoute>
                <Hotels />
              </ProtectedRoute>
            }
          />
          <Route
            path="/teams"
            element={
              <ProtectedRoute>
                <Teams />
              </ProtectedRoute>
            }
          />
          <Route
            path="/quotes"
            element={
              <ProtectedRoute>
                <Quotes />
              </ProtectedRoute>
            }
          />
          <Route
            path="/hotels/:id"
            element={
              <ProtectedRoute>
                <Hotel />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<p>Nepostojeca stranica</p>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;