import { combineReducers } from "redux";
import { eventsReducer } from "../../../Components/C064/C065"; // adjust path as needed

const C056 = () =>
  combineReducers({
    events: eventsReducer,
  });

export default C056;
