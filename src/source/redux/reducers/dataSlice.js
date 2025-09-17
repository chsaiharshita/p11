// src/source/redux/reducers/dataSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import siteDataJson from "../../../sitedata.json";

// API call to fetch posts (courses)
export const fetchPosts = createAsyncThunk("data/fetchPosts", async () => {
  const response = await axios.get(siteDataJson.P0url8);
  console.log("✅ Raw API Response:", response.data);
  return response.data;
});

const dataSlice = createSlice({
  name: "data",
  initialState: {
    siteData: siteDataJson,
    posts: [],
    loading: false,
    error: null,
  },
  reducers: {
    setSiteData: (state, action) => {
      state.siteData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;

        // ✅ Correctly pick `a` array
        if (Array.isArray(action.payload?.a)) {
          state.posts = action.payload.a;
        } else if (Array.isArray(action.payload)) {
          state.posts = action.payload;
        } else {
          state.posts = [];
          console.warn("⚠️ Unexpected API format:", action.payload);
        }
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setSiteData } = dataSlice.actions;
export default dataSlice.reducer;
