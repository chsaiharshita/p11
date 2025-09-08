import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import authReducer from './C1003';

const store = configureStore({
  reducer: {
    auth: authReducer,
 // ✅ include your institute reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // ✅ optional
});

export default store;