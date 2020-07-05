import React, { useContext } from "react";
import { GeneralButton } from "../../components_index";
import { AppDispatch, AppState } from "../../../contexts/context_index";

export const MobileArrowButton1 = (props) => {
  const { openMobilePageNav } = useContext(AppState);
  const dispatch = useContext(AppDispatch);
  return (
    <div className="MobileArrowButton1-container">
      <GeneralButton
        text={openMobilePageNav ? `>` : `<`}
        addClass="pagenav-arrow-button"
        method={() => dispatch({ type: "OPEN_MOBILE_PAGE_NAV" })}
      />
    </div>
  );
};

export const MobileArrowButton2 = (props) => {
  const { openUserActions } = useContext(AppState);
  const dispatch = useContext(AppDispatch);
  return (
    <div className="MobileArrowButton2-container">
      <GeneralButton
        text={openUserActions ? `>` : `<`}
        addClass="pagenav-arrow-button"
        method={() => dispatch({ type: "OPEN_USER_ACTIONS" })}
      />
    </div>
  );
};
