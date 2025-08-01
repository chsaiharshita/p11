/*import axios from "axios";

export const loadEventsAsync = () => async (dispatch) => {
  dispatch({ type: "EVENTS_REQUEST" });

  try {
    const response = await axios.get("http://192.168.137.193:5000/api/events");
    dispatch({ type: "EVENTS_SUCCESS", payload: response.data });
  } catch (err) {
    dispatch({ type: "EVENTS_FAIL", payload: err.message });
  }
};*/
