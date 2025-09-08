import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";
import reducer from "../../../Components/C1001/C1003";

export const store = configureStore({
  reducer: {
    data: dataReducer,
    auth: reducer,   // 👈 add here
  },
});

export default store;
