import React from "react";
import "./App.css";
import UserCards from "./components/usercards/UserCards";
import Navigation from "./components/navigation/Navigation";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Route path="/" component={Home} />
        <UserCards title="Github Cards" />
      </div>
    </Router>
  );
}

export default App;
