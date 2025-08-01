// Redux/reducers/index.js
import { combineReducers } from "redux";
import { authReducer } from "./reducer";// ✅ CORRECT
import { instituteReducer } from "./institueReducer";
 // Assuming already there

 
export default combineReducers({
  auth: authReducer,
  institute:instituteReducer,
});