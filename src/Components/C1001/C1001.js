export const login = (username, password) => async (dispatch) => {
  dispatch({ type: "LOGIN_REQUEST" });

  try {
    const response = await fetch("http://192.168.137.86:3000/nodeAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      // Save token to localStorage (optional)
      localStorage.setItem("authToken", data.token);
     localStorage.setItem("username", data.username);
      console.log("API Response:", response.status, data);

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          token: data.token,
          user: {
            username: data.username,
          }
        },
      });
    } else {
      dispatch({
        type: "LOGIN_FAILURE",
        payload: data.error || "Login failed",
      });
    }
  } catch (err) {
    dispatch({
      type: "LOGIN_FAILURE",
      payload: "Network error",
    });
  }
};