import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UsersContext = createContext();

export const UsersContextProvider = ({ children }) => {
  const [allUsers, setAllUsers] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/users")
      .then((res) => {
        const users = res.data;
        setAllUsers(users);
      })
      .catch((error) => console.log(error));
  });

  return (
    <UsersContext.Provider value={{ allUsers }}>
      {children}
    </UsersContext.Provider>
  );
};
