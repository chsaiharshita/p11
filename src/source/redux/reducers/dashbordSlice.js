import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE = "https://eg.ap.gov.in/p0server/api/auth";

// 🔹 fetch all sections
export const fetchDashboard = createAsyncThunk(
  "dashboard/fetchDashboard",
  async ({ token }) => {
    const headers = { Authorization: `Bearer ${token}` };

    const [eventsRes, rewardsRes, news1Res, news2Res] = await Promise.all([
      axios.get(`${API_BASE}/p0ac142`, { headers }),
      axios.get(`${API_BASE}/p0ac143`, { headers }),
      axios.get(`${API_BASE}/p0ac1411`, { headers }),
      axios.get(`${API_BASE}/p0ac1412`, { headers }),
    ]);

    const mergedNews = [
      ...(Array.isArray(news1Res.data) ? news1Res.data : []),
      ...(Array.isArray(news2Res.data) ? news2Res.data : []),
    ];

    return {
      events: Array.isArray(eventsRes.data) ? eventsRes.data : [],
      rewards: Array.isArray(rewardsRes.data) ? rewardsRes.data : [],
      news: mergedNews,
      news1: Array.isArray(news1Res.data) ? news1Res.data : [],
      news2: Array.isArray(news2Res.data) ? news2Res.data : [],
    };
  }
);

// 🔹 add item
export const addDashboardItem = createAsyncThunk(
  "dashboard/addItem",
  async ({ token, type, item, newsEndpoint }, thunkAPI) => {
    const headers = { Authorization: `Bearer ${token}` };
    let url;

    if (type === "news") {
      url = `${API_BASE}/${newsEndpoint || "p0ac1411"}`;
    } else {
      const urlMap = {
        events: `${API_BASE}/p0ac142`,
        rewards: `${API_BASE}/p0ac143`,
      };
      url = urlMap[type];
    }

    const res = await axios.post(url, item, { headers });
    return { type, item: res.data, newsEndpoint };
  }
);

// 🔹 update item
export const updateDashboardItem = createAsyncThunk(
  "dashboard/updateItem",
  async ({ token, type, id, newValue, newsEndpoint }, thunkAPI) => {
    const headers = { Authorization: `Bearer ${token}` };
    let url;

    if (type === "news") {
      url = `${API_BASE}/${newsEndpoint}`;
    } else {
      const urlMap = {
        events: `${API_BASE}/p0ac142`,
        rewards: `${API_BASE}/p0ac143`,
      };
      url = urlMap[type];
    }

    const res = await axios.put(`${url}/${id}`, newValue, { headers });
    return { type, item: res.data, newsEndpoint };
  }
);

// 🔹 delete item
export const deleteDashboardItem = createAsyncThunk(
  "dashboard/deleteItem",
  async ({ token, type, id, newsEndpoint }, thunkAPI) => {
    const headers = { Authorization: `Bearer ${token}` };
    let url;

    if (type === "news") {
      url = `${API_BASE}/${newsEndpoint}`;
    } else {
      const urlMap = {
        events: `${API_BASE}/p0ac142`,
        rewards: `${API_BASE}/p0ac143`,
      };
      url = urlMap[type];
    }

    await axios.delete(`${url}/${id}`, { headers });
    return { type, id, newsEndpoint };
  }
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    events: [],
    rewards: [],
    news: [],
    news1: [],
    news2: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // 🔹 Fetch
      .addCase(fetchDashboard.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDashboard.fulfilled, (state, action) => {
        state.loading = false;
        state.events = action.payload.events;
        state.rewards = action.payload.rewards;
        state.news1 = action.payload.news1;
        state.news2 = action.payload.news2;
        state.news = [...state.news1, ...state.news2]; // merged for display
      })
      .addCase(fetchDashboard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // 🔹 Add
      .addCase(addDashboardItem.fulfilled, (state, action) => {
        const { type, item, newsEndpoint } = action.payload;

        if (type === "news") {
          if (newsEndpoint === "p0ac1411") state.news1.push(item);
          else state.news2.push(item);

          state.news = [...state.news1, ...state.news2];
        } else {
          state[type].push(item);
        }
      })

      // 🔹 Update
      .addCase(updateDashboardItem.fulfilled, (state, action) => {
        const { type, item, newsEndpoint } = action.payload;

        if (type === "news") {
          if (newsEndpoint === "p0ac1411") {
            state.news1 = state.news1.map((i) =>
              i._id === item._id ? item : i
            );
          } else {
            state.news2 = state.news2.map((i) =>
              i._id === item._id ? item : i
            );
          }
          state.news = [...state.news1, ...state.news2];
        } else {
          state[type] = state[type].map((i) => (i._id === item._id ? item : i));
        }
      })

      // 🔹 Delete
      .addCase(deleteDashboardItem.fulfilled, (state, action) => {
        const { type, id, newsEndpoint } = action.payload;

        if (type === "news") {
          if (newsEndpoint === "p0ac1411") {
            state.news1 = state.news1.filter((i) => i._id !== id);
          } else {
            state.news2 = state.news2.filter((i) => i._id !== id);
          }
          state.news = [...state.news1, ...state.news2];
        } else {
          state[type] = state[type].filter((i) => i._id !== id);
        }
      });
  },
});

export default dashboardSlice.reducer;
