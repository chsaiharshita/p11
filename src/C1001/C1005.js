import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import authReducer from './C1003';
import { instituteReducer } from './C1006';
const store = configureStore({
  reducer: {
    auth: authReducer,
    institute: instituteReducer, // ✅ include your institute reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // ✅ optional
});

export default store;
