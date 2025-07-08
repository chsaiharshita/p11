import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers";
import distrcitReducer from "./actions.js";

export const store=configureStore({
    reducer:{
    todo:todoReducer,
    district:distrcitReducer
    },
});


export default store;