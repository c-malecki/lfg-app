import React, { createContext, Component } from "react";

export const ThemeContext = createContext();

export class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
  };
  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  };
  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
