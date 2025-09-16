import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";// adjust path


export const store = configureStore({
  reducer: {
    data: dataReducer,
     
     // 👈 add here
  },
});

export default store;
