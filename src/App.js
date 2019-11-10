import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Menu />
          </Route>
          <Route path="/create">
            {/* <Create /> */}
          </Route>
          <Route path="/learn">
            {/* <Learn /> */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
