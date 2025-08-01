import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import authReducer from './reducer';
import { instituteReducer } from './institueReducer';
const store = configureStore({
  reducer: {
    auth: authReducer,
    institute: instituteReducer, // ✅ include your institute reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // ✅ optional
});

export default store;
