import axios from 'axios';
import { url4 } from  "../sitedata.json";


export const fetchDataSuccess = (data) => ({
  type: 'FETCH_DATA_SUCCESS',
  data,
});

export const fetchDataFailure = (error,loading) => ({
  type: 'FETCH_DATA_FAILURE',
  error,loading
});

export const fetchData = (districtId,reportType) => async (dispatch) => {
  try {
    const response = await axios.post(url4, {districtId,reportType});
    dispatch(fetchDataSuccess(response.data));
  } catch (error) {
    dispatch(fetchDataFailure(error.message));
  }
};