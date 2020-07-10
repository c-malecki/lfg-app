import { combineReducers } from "redux";
import { userReducer } from "./user-reducer";
import { appReducer } from "./app-reducer";
import { messagesReducer } from "./messages-reducer";

export default combineReducers({ userReducer, appReducer, messagesReducer });
