import React, { Component } from "react";
import translations from './translations';

const MyContext = React.createContext({});

export class MyProvider extends Component {
  state = {
    collections: [],
    language: "pl",
    newCollection: {},
    translations: translations
  };
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyContext;
