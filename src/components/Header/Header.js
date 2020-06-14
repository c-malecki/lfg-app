import React, { useContext } from "react";
import { ToggleSwitch, LogInOut } from "../components_index";
import { ThemeContext } from "../../contexts/context_index";

export const Header = (props) => {
  const { toggleTheme, isLightTheme } = useContext(ThemeContext);
  return (
    <div className="Header-container">
      <ToggleSwitch method={toggleTheme} boolean={isLightTheme} />
      <LogInOut />
    </div>
  );
};
