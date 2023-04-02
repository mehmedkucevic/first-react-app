import React from "react";
import "./App.css";
import Greeting from "./components/Greetings/Greeting";

function App() {
  return (
    <> {/* fragment*/}
    <div className="App">
      <header className="header">
        <h1 style={{color:"#fffff"}}>LOGO</h1>
      </header>
    <Greeting appName = {"App"} username = {"Mehmed Kucevic"} />
    </div>
    </>
  );
}

export default App;
