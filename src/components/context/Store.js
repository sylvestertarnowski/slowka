import React, { Component } from 'react';
import translations from './translations';

const StoreContext = React.createContext({});

export class StoreProvider extends Component {
  state = {
    collections: [],
    language: 'pl',
    theme: 'light',
    newCollection: {},
    labels: translations,
  };
  render() {
    return (
      <StoreContext.Provider
        value={{
          state: this.state
        }}
      >
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}

export default StoreContext;
