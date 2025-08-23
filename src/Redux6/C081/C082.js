// reducers/index.js

import { combineReducers } from 'redux';
import authReducer from './C081';

const rootReducer = combineReducers({
  auth: authReducer,
  // Add other reducers here if you have them
});

export default rootReducer;