import React from "react";
import "./App.css";
import UserCards from "./components/all/CardUtils/UserCards";
import Navigation from "./components/all/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Navigation />
      <UserCards title="Github Cards" />
    </div>
  );
}

export default App;
