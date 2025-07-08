import { combineReducers } from 'redux';

const initialState = {
  data: null,
  error: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        data: action.data,
        error: null,
      };
    case 'FETCH_DATA_FAILURE':
      return {
        ...state,
        data: null,
        error: action.error,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  data: dataReducer,
});

export default rootReducer;