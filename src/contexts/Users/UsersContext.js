import React, { createContext, Component } from "react";
import axios from "axios";

export const UsersContext = createContext();

export class UsersContextProvider extends Component {
  state = {
    allUsers: null,
  };
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/v1/users")
      .then((res) => {
        const users = res.data;
        this.setState({
          allUsers: users,
        });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <UsersContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </UsersContext.Provider>
    );
  }
}
