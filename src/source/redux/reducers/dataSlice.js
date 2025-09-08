import { createSlice } from "@reduxjs/toolkit";
import siteDataJson from "../../../sitedata.json"; // path check chesukondi

const dataSlice = createSlice({
  name: "data",
  initialState: {
    siteData: siteDataJson, // 👈 JSON data store ki load chestunnam
  },
  reducers: {
    setSiteData: (state, action) => {
      state.siteData = action.payload;
    },
  },
});


export const { setSiteData } = dataSlice.actions;
export default dataSlice.reducer;
