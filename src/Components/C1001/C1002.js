// Redux_mongo/instituteActions.js
export const fetchInstitutes = (page = 1, limit = 10) => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_INSTITUTES_REQUEST" });
    const token = localStorage.getItem("token");

    const res = await fetch(
      `http://192.168.137.86:5000/auth/institutes?page=${page}&limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await res.json();
    dispatch({ type: "FETCH_INSTITUTES_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_INSTITUTES_FAILURE", payload: error.message });
  }
};