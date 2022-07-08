import React from "react";
import './App.css';
import PersonCard from "./components/NewComponent";

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Brandi" lastName="Babilya" age={29} hairColor="Brown"/>
      <PersonCard firstName="Alex" lastName="Miller" age={19} hairColor="Ginger"/>
      <PersonCard firstName="Winter" lastName="Perrone" age={23} hairColor="Black"/>
      <PersonCard firstName="Kaija" lastName="Pendergast" age={19} hairColor="Blonde"/>
    </div>
  );
}

export default App;
