import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";


export const store = configureStore({
  reducer: {
    data: dataReducer,
     // 👈 add here
  },
});

export default store;
