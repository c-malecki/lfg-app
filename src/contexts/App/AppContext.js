import React, { createContext, Component } from "react";
import { sampleUser } from "../dumbydata/sample_user";

export const AppContext = createContext();

export class AppContextProvider extends Component {
  state = {
    isLoggedIn: true,
    currentUser: sampleUser,
  };
  logIn = (user) => {
    this.setState({ isLoggedIn: true, user: user });
  };
  logOut = () => {
    this.setState({
      isLoggedIn: false,
      user: null,
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
