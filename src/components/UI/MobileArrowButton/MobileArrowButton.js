import React from "react";
import { GeneralButton } from "../../components_index";
import { useDispatch } from "react-redux";
import {
  openMobilePageNav,
  openUserActions,
} from "../../../redux/actions/app-actions";

export const MobileArrowButton1 = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="MobileArrowButton1-container">
      <GeneralButton
        text={openMobilePageNav ? `>` : `<`}
        addClass="pagenav-arrow-button"
        method={() => dispatch(openMobilePageNav())}
      />
    </div>
  );
};

export const MobileArrowButton2 = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="MobileArrowButton2-container">
      <GeneralButton
        text={openUserActions ? `>` : `<`}
        addClass="pagenav-arrow-button"
        method={() => dispatch(openUserActions())}
      />
    </div>
  );
};
