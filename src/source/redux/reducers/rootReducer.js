import { combineReducers } from "redux";
import { eventsReducer } from "../../../Redux2/events.reducer"; // adjust path as needed

const rootReducer = () =>
  combineReducers({
    events: eventsReducer,
  });

export default rootReducer;
