// src/redux/store.js

import { createStore, applyMiddleware } from 'redux';
import rootReducer from'./C081/C082';
import thunk from 'redux-thunk'; // Middleware for handling asynchronous actions

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;