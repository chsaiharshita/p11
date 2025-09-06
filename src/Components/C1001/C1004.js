
// Redux/reducers/index.js
import { combineReducers } from "redux";
import { authReducer } from "./C1003";// ✅ CORRECT
import { instituteReducer } from "./C1006";
 // Assuming already there

 
export default combineReducers({
  auth: authReducer,
  institute:instituteReducer,
});