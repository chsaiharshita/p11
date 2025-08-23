import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/C056";

const C057 = () => {
	const middlewares = [thunk];
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	const enhancers = composeEnhancers(applyMiddleware(...middlewares));
	const store = createStore(rootReducer(), enhancers);

	return store;
};

export default C057;
