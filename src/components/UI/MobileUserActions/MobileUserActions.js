import React from "react";
import { GeneralButton } from "../../components_index";
import { useDispatch, useSelector } from "react-redux";
import {
  openYourGroups,
  openYourPosts,
  openCurrentUser,
} from "../../../redux/actions/app-actions";

export const MobileUserActions = (props) => {
  const dispatch = useDispatch();
  const { openUserActions } = useSelector((state) => state.appReducer);
  return (
    <div className={openUserActions ? "MobileUserActions-container" : "hide"}>
      <GeneralButton
        text="G"
        addClass="close-delete-button"
        method={() => dispatch(openYourGroups())}
      />

      <GeneralButton
        text="P"
        addClass="close-delete-button"
        method={() => dispatch(openYourPosts())}
      />
      <GeneralButton
        text="U"
        addClass="close-delete-button"
        method={() => dispatch(openCurrentUser())}
      />
    </div>
  );
};
