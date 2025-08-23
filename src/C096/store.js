import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./C099.js";
import distrcitReducer from "./C096.js";

export const store=configureStore({
    reducer:{
    todo:todoReducer,
    district:distrcitReducer
    },
});


export default store;