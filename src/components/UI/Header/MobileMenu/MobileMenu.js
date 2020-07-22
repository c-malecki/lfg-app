import React, { useRef, useEffect } from "react";
import { LogInOut, GeneralLink } from "../../../components_index";
import { ToggleThemeButton } from "../../../components_index";
import { useSelector } from "react-redux";

export const MobileMenu = (props) => {
  const { openMobile, setOpenMobile, menuButtonRef } = props;
  const { isDarkTheme } = useSelector((state) => state.appReducer);
  const mobileMenu = useRef(null);
  useEffect(() => {
    const mRef = mobileMenu.current;
    if (mobileMenu) {
      const menuBlur = (event) => {
        if (
          openMobile &&
          !mRef.contains(event.target) &&
          !menuButtonRef.contains(event.target)
        ) {
          setOpenMobile(!openMobile);
        }
      };
      document.addEventListener("touchend", menuBlur);
      return () => {
        document.removeEventListener("touchend", menuBlur);
      };
    }
  }, [openMobile, setOpenMobile, menuButtonRef]);
  return (
    <div
      className={`${isDarkTheme ? "mobile-menu-dark" : "mobile-menu-light"}`}
      ref={mobileMenu}
    >
      <div className="MobileMenu-content">
        <div className="MobileMenu-links">
          <GeneralLink url="/" text="home" addClass="nav-link" />
          <GeneralLink url="/g" text="groups" addClass="nav-link" />
          <GeneralLink url="/posts" text="posts" addClass="nav-link" />
        </div>
        <div className="MobileMenu-actions">
          <LogInOut />

          <ToggleThemeButton />
        </div>
      </div>
    </div>
  );
};
