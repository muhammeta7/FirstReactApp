import React from "react";
import "./App.css";
import UserCards from "./components/usercards/UserCards";
import Navigation from "./components/navigation/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/add/card" component={UserCards} />
        </Switch>
        {/* <UserCards title="Github Cards" /> */}
      </div>
    </Router>
  );
}

export default App;
