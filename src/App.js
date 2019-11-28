import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import './App.css';
import Menu from './components/menu/Menu';
import Navbar from './components/navbar/Navbar';
import Create from './components/create/Create';
import Learn from './components/learn/Learn';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Provider store={store}>
        <Switch>
          <Route path="/" component={Menu} exact />
          <Route path="/menu" component={Menu} />
          <Route path="/create" component={Create} />
          <Route path="/learn" component={Learn} />
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
