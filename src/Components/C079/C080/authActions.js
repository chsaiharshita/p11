// authActions.js

// Action types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// Action creators
export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

// Example asynchronous action for logging in
export const login = (username, password) => {
  return async (dispatch) => {
    try {
      dispatch(loginRequest());

      // Validation: Check if username and password are provided
      if (!username || !password) {
        throw new Error('Username and password are required.');
      }

      // Make your API call to get the JWT token
      const response = await fetch('https://apbocwwb.ap.gov.in/eshramboc/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      console.log(data);

      // Dispatch the action to store the JWT token
      dispatch(loginSuccess(data.jwtToken));

      return data.jwtToken; // Return the token for reference if needed
    } catch (error) {
      dispatch(loginFailure(error.message));
      console.error(error);
      // Handle login error here, e.g., show an error message to the user
    }
  };
};
