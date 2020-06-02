import React, { createContext, Component } from "react";

export const AppContext = createContext();

export class AppContextProvider extends Component {
  state = {
    isLoggedIn: false,
    user: "",
  };
  logIn = (user) => {
    this.setState({ isLoggedIn: true, user: user });
  };
  logOut = () => {
    this.setState({
      isLoggedIn: false,
      user: "",
    });
  };
  render() {
    return (
      <AppContext.Provider
        value={{ ...this.state, logIn: this.logIn, logOut: this.logOut }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
