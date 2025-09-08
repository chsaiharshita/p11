// rootReducer.js
import { combineReducers } from "redux";
import  reducer  from "./C1003"; // your auth reducer
import { instituteReducer } from "./C1006"; // official institute reducer

export default combineReducers({
  auth: reducer,
  institute: instituteReducer,
});