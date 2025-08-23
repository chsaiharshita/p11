import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import postReducer from './reducers';

const store = createStore(postReducer, applyMiddleware(thunkMiddleware));

export default store;
