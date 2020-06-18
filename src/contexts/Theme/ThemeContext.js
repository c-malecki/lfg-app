import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = useState(false);
  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };
  return (
    <ThemeContext.Provider value={{ isLightTheme, toggleTheme: toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
