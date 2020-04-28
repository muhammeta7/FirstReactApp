import React from "react";
import "./App.css";
import UserCards from "./components/all/CardUtils/UserCards/UserCards";
import Navigation from "./components/all/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <UserCards title="Github Cards" />
    </div>
  );
}

export default App;
