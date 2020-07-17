import { combineReducers } from "redux";
import { userReducer } from "./user-reducer";
import { appReducer } from "./app-reducer";

export const rootReducer = combineReducers({ userReducer, appReducer });
