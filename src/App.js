import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Menu from './components/menu/Menu';
import Navbar from './components/navbar/Navbar';
import { StoreProvider } from './components/context/Store';

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <Navbar />
        <Router>
          <Switch>
            <Route path="/">
              <Menu />
            </Route>
            <Route path="/create">{/* <Create /> */}</Route>
            <Route path="/learn">{/* <Learn /> */}</Route>
          </Switch>
        </Router>
      </div>
    </StoreProvider>
  );
}

export default App;
