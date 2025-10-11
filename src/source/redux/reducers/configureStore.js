import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";// adjust path

import dashboardReducer from "./dashbordSlice";
export const store = configureStore({
  reducer: {
    data: dataReducer,
     
      dashboard: dashboardReducer, 
     // 👈 add here
  },
});

export default store;