// src/store/dataSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import siteDataJson from "../../../sitedata.json";

// 🔹 Async thunk to fetch posts
export const fetchPosts = createAsyncThunk("data/fetchPosts", async () => {
  const response = await fetch(siteDataJson.P0url8);
  if (!response.ok) throw new Error("Failed to fetch");
  const data = await response.json();
  return data?.a || [];
});

const dataSlice = createSlice({
  name: "data",
  initialState: {
    siteData: siteDataJson, // 🔹 Static JSON (URLs, config)
    posts: [],              // 🔹 Backend fetched data
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
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setSiteData } = dataSlice.actions;
export default dataSlice.reducer;
