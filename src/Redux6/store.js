// src/redux/store.js

import { createStore, applyMiddleware } from 'redux';
import rootReducer from'../Redux6/reducers';
import thunk from 'redux-thunk'; // Middleware for handling asynchronous actions

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;