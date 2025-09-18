import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE = "https://eg.ap.gov.in/p0server/api/admin"; // adjust if different

// 🔹 fetch all sections
export const fetchDashboard = createAsyncThunk(
  "dashboard/fetchDashboard",
  async ({ token, pname }) => {
    const headers = { Authorization: `Bearer ${token}` };

    const [eventsRes, rewardsRes, newsRes] = await Promise.all([
      axios.get(`${API_BASE}/p0ac1411/news1`, { headers }),
      axios.get(`${API_BASE}/p0ac142/Events`, { headers }),
      axios.get(`${API_BASE}/p0ac143/Awards`, { headers }),
    ]);

    return {
      events: eventsRes.data,
      rewards: rewardsRes.data,
      news: newsRes.data,
    };
  }
);

// 🔹 add item
export const addDashboardItem = createAsyncThunk(
  "dashboard/addItem",
  async ({ token, type, item }) => {
    const headers = { Authorization: `Bearer ${token}` };

    const urlMap = {
      events: `${API_BASE}/p0ac1411/news1`,
      rewards: `${API_BASE}/p0ac142/Events`,
      news: `${API_BASE}/p0ac143/Awards`,
    };

    const res = await axios.post(urlMap[type], item, { headers });
    return { type, item: res.data };
  }
);

// 🔹 delete item
export const deleteDashboardItem = createAsyncThunk(
  "dashboard/deleteItem",
  async ({ token, pname, type, id }) => {
    const headers = { Authorization: `Bearer ${token}` };

    const urlMap = {
      events: `${API_BASE}/p0ac1411/news1`,
      rewards: `${API_BASE}/p0ac142/Events`,
      news: `${API_BASE}/p0ac143/Awards`,
    };

    await axios.delete(`${urlMap[type]}/${id}`, { headers });
    return { type, id };
  }
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    events: [],
    rewards: [],
    news: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboard.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDashboard.fulfilled, (state, action) => {
        state.loading = false;
        state.events = action.payload.events || [];
        state.rewards = action.payload.rewards || [];
        state.news = action.payload.news || [];
      })
      .addCase(fetchDashboard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addDashboardItem.fulfilled, (state, action) => {
        state[action.payload.type].push(action.payload.item);
      })
      .addCase(deleteDashboardItem.fulfilled, (state, action) => {
        state[action.payload.type] = state[action.payload.type].filter(
          (i) => i._id !== action.payload.id
        );
      });
  },
});

export default dashboardSlice.reducer;