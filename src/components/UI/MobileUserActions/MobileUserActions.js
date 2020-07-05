import React, { useContext } from "react";
import { AppState, AppDispatch } from "../../../contexts/context_index";
import { GeneralButton } from "../../components_index";

export const MobileUserActions = (props) => {
  const { openUserActions } = useContext(AppState);
  const dispatch = useContext(AppDispatch);
  return (
    <div className={openUserActions ? "MobileUserActions-container" : "hide"}>
      <GeneralButton
        text="G"
        addClass="close-delete-button"
        method={() => dispatch({ type: "OPEN_YOUR_GROUPS" })}
      />

      <GeneralButton
        text="P"
        addClass="close-delete-button"
        method={() => dispatch({ type: "OPEN_YOUR_POSTS" })}
      />
      <GeneralButton
        text="U"
        addClass="close-delete-button"
        method={() => dispatch({ type: "OPEN_CURRENT_USER" })}
      />
    </div>
  );
};
