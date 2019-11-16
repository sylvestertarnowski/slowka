import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Menu from './components/menu/Menu';
import Navbar from './components/navbar/Navbar';
import Create from './components/create/Create';
import Learn from './components/learn/Learn';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Switch>
          <Route path="/" component={Menu} exact />
          <Route path="/menu" component={Menu} />
          <Route path="/create" component={Create} />
          <Route path="/learn" component={Learn} />
        </Switch>
    </div>
  );
}

export default App;
