import React from "react";
import FirstlyCard from "./cards/firstly-card";
import SecondlyCard from "./cards/secondly-card";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main-card">
        <FirstlyCard />
        <SecondlyCard />
      </div>
    </div>
  );
}

export default App;
