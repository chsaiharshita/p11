// Redux_mongo/instituteActions.js
export const fetchInstitutes = (page = 1) => async (dispatch) => {
  try {
    const res = await fetch(`http://localhost:5000/api/institutes?page=${page}&limit=10`);
    const data = await res.json();
    dispatch({ type: "FETCH_INSTITUTES_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_INSTITUTES_FAIL", payload: error.message });
  }
};