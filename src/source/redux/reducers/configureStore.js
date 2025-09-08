import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";
import instituteReducer from "../../../Components/C1001/C1004";

export const store = configureStore({
  reducer: {
    data: dataReducer,
    auth: instituteReducer,   // 👈 add here
  },
});

export default store;
