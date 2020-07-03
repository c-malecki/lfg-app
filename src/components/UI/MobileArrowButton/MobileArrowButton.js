import React, { useContext } from "react";
import { GeneralButton } from "../../components_index";
import { AppDispatch, AppState } from "../../../contexts/context_index";

export const MobileArrowButton = (props) => {
  const { openMobilePageNav } = useContext(AppState);
  const dispatch = useContext(AppDispatch);
  return (
    <div className="MobileArrowButton-container">
      <GeneralButton
        text={openMobilePageNav ? `>` : `<`}
        addClass="pagenav-arrow-button"
        method={() => dispatch({ type: "OPEN_MOBILE_PAGE_NAV" })}
      />
    </div>
  );
};
