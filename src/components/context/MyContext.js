import React, { Component } from "react";

const MyContext = React.createContext({});

export class MyProvider extends Component {
  state = {
    collections: [],
    language: "pl",
    newCollection: {},
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
};

export default MyContext;
