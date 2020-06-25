import React, { createContext, useReducer } from "react";
import { sampleGroups } from "../dumbydata/sample_groups";

export const GroupsState = createContext();
export const GroupsDispatch = createContext();

const initialState = {
  groups: sampleGroups,
};

const groupsReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_GROUP": {
      return { state };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const GroupsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(groupsReducer, initialState);
  return (
    <GroupsState.Provider value={state}>
      <GroupsDispatch.Provider value={dispatch}>
        {children}
      </GroupsDispatch.Provider>
    </GroupsState.Provider>
  );
};
