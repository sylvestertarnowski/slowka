import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Menu from './components/menu/Menu';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route path="/" component={Menu} />
          <Route path="/create">{/* <Create /> */}</Route>
          <Route path="/learn">{/* <Learn /> */}</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
