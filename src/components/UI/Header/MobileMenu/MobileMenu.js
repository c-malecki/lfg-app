import React from "react";
import { LogInOut, GeneralLink } from "../../../components_index";
import { ToggleSwitch } from "../../../components_index";
import { useSelector, useDispatch } from "react-redux";

export const MobileMenu = (props) => {
  const dispatch = useDispatch();
  const { isDarkTheme } = useSelector((state) => state.appReducer);
  return (
    <div
      className={`${isDarkTheme ? "mobile-menu-dark" : "mobile-menu-light"}`}
    >
      <div className="MobileMenu-content">
        <div className="MobileMenu-links">
          <GeneralLink url="/" text="home" addClass="nav-link" />
          <GeneralLink url="/g" text="groups" addClass="nav-link" />
          <GeneralLink url="/posts" text="posts" addClass="nav-link" />
        </div>
        <div className="MobileMenu-actions">
          <LogInOut />
          <div className="theme-toggle-mobile">
            <span>Dark</span>
            <ToggleSwitch
              method={() => dispatch({ type: "TOGGLE_THEME" })}
              boolean={isDarkTheme}
              addClass={`${isDarkTheme ? "toggle-dark" : "toggle-light"}`}
            />
            <span>Light</span>
          </div>
        </div>
      </div>
    </div>
  );
};
