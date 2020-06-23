import React, { createContext, useState, useEffect } from "react";
import { users } from "../dumbydata/sample_user";

export const UsersContext = createContext();

export const UsersContextProvider = ({ children }) => {
  const [allUsers, setAllUsers] = useState();
  useEffect(() => {
    setAllUsers(users);
  }, []);
  return (
    <UsersContext.Provider value={{ allUsers }}>
      {children}
    </UsersContext.Provider>
  );
};
