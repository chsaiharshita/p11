import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE = "https://eg.ap.gov.in/p0server/api/projects";

// 🔹 fetch all sections
export const fetchDashboard = createAsyncThunk(
  "dashboard/fetchDashboard",
  async ({ token }) => {
    const headers = { Authorization: `Bearer ${token}` };

    const [eventsRes, rewardsRes, newsRes] = await Promise.all([
      axios.get(`${API_BASE}/p0ac142`, { headers }),
      axios.get(`${API_BASE}/p0ac143`, { headers }),
      axios.get(`${API_BASE}/p0ac1411`, { headers }),
    ]);

    return {
      events: Array.isArray(eventsRes.data) ? eventsRes.data : [],
      rewards: Array.isArray(rewardsRes.data) ? rewardsRes.data : [],
      news: Array.isArray(newsRes.data) ? newsRes.data : [],
    };
  }
);

// 🔹 add item
export const addDashboardItem = createAsyncThunk(
  "dashboard/addItem",
  async ({ token, type, item }) => {
    const headers = { Authorization: `Bearer ${token}` };
    const urlMap = {
      events: `${API_BASE}/p0ac142`,
      rewards: `${API_BASE}/p0ac143`,
      news: `${API_BASE}/p0ac1411`,
    };
    const res = await axios.post(urlMap[type], item, { headers });
    return { type, item: res.data };
  }
);

// 🔹 update item
export const updateDashboardItem = createAsyncThunk(
  "dashboard/updateItem",
  async ({ token, type, id, newValue }) => {
    const headers = { Authorization: `Bearer ${token}` };
    const urlMap = {
      events: `${API_BASE}/p0ac142`,
      rewards: `${API_BASE}/p0ac143`,
      news: `${API_BASE}/p0ac1411`,
    };

    // PUT full object (aname + avalue) so backend updates correctly
    const res = await axios.put(`${urlMap[type]}/${id}`, newValue, { headers });
    return { type, item: res.data };
  }
);

// 🔹 delete item
export const deleteDashboardItem = createAsyncThunk(
  "dashboard/deleteItem",
  async ({ token, type, id }) => {
    const headers = { Authorization: `Bearer ${token}` };
    const urlMap = {
      events: `${API_BASE}/p0ac142`,
      rewards: `${API_BASE}/p0ac143`,
      news: `${API_BASE}/p0ac1411`,
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
      // fetch
      .addCase(fetchDashboard.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDashboard.fulfilled, (state, action) => {
        state.loading = false;
        state.events = action.payload.events;
        state.rewards = action.payload.rewards;
        state.news = action.payload.news;
      })
      .addCase(fetchDashboard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // add
      .addCase(addDashboardItem.fulfilled, (state, action) => {
        state[action.payload.type].push(action.payload.item);
      })

      // update  ✅ use the item returned by backend
      .addCase(updateDashboardItem.fulfilled, (state, action) => {
        const { type, item } = action.payload;
        state[type] = state[type].map((i) =>
          i._id === item._id ? item : i
        );
      })

      // delete
      .addCase(deleteDashboardItem.fulfilled, (state, action) => {
        state[action.payload.type] = state[action.payload.type].filter(
          (i) => i._id !== action.payload.id
        );
      });
  },
});

export default dashboardSlice.reducer;