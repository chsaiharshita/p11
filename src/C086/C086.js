import axios from 'axios';
import { url3 } from  "../sitedata.json";



// Define a function to retrieve the JWT token from local storage
const getJwtToken = () => {
  return localStorage.getItem("jwt");
};

export const fetchDataSuccess = (data) => ({
  type: 'FETCH_DATA_SUCCESS',
  data,
});

export const fetchDataFailure = (data) => ({
  type: 'FETCH_DATA_FAILURE',
  data,
});

export const fetchData = (registrationDate) => async (dispatch) => {
  try {
    
    dispatch({ type: 'FETCH_DATA_LOADING', loading: true }); // Add loading dispatch
    // Retrieve the JWT token from local storage
    const jwtToken = getJwtToken();
    
    // Display an alert with the JWT token
//alert(`JWT Token: ${jwtToken}`);

    // Set the Authorization header with the JWT token
    const config = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    };

    const response = await axios.post(url3, { registrationDate }, config);
    dispatch(fetchDataSuccess(response.data));
  } catch (error) {
    dispatch(fetchDataFailure({ message: error.message })); // Dispatch error as an object with a 'message' property
  }
};


{/*export const fetchDataSuccess = (data) => ({
  type: 'FETCH_DATA_SUCCESS',
  data,
});

export const fetchDataFailure = (error,loading) => ({
  type: 'FETCH_DATA_FAILURE',
  error,loading
});

export const fetchData = (registrationDate) => async (dispatch) => {
  try {
    const response = await axios.post(url3, {registrationDate});
    dispatch(fetchDataSuccess(response.data));
  } catch (error) {
    dispatch(fetchDataFailure(error.message));
  }
}; */}