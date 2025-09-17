import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";// adjust path
import Reducer from "../../../Components/C1001/C1003";

export const store = configureStore({
  reducer: {
    data: dataReducer,
     auth: Reducer,
     // 👈 add here
  },
});

export default store;
