import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url4 } from  "../sitedata.json";



// Define a function to retrieve the JWT token from local storage
const getJwtToken = () => {
  return localStorage.getItem("jwt");
};

export const fetchdistricts = createAsyncThunk(
  "fetchdistricts",
  async ({ districtId, reportType }, thunkAPI) => {
    try {
      // Retrieve the JWT token from local storage
      const jwtToken = getJwtToken();

// Display an alert with the JWT token
//alert(`JWT Token: ${jwtToken}`);


      // Set the Authorization header with the JWT token
      const config = {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      };

      const payload = { districtId, reportType };
      const response = await axios.post(url4, payload, config);
      return response.data;
    } catch (error) {
      // Handle any errors here
      throw error;
    }
  }
);

const districtSlice = createSlice({
  name: "district",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchdistricts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchdistricts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
    });
    builder.addCase(fetchdistricts.rejected, (state, action) => {
      state.isLoading = false;
      console.error("Error", action.error.message);
      state.isError = true;
    });
  },
});

export default districtSlice.reducer;


{/*
export const fetchdistricts=createAsyncThunk("fetchdistricts",async({ districtId, reportType })=>{
    const payload = { districtId, reportType };

    const response=await axios.post(url4,payload);
    return response.data;
})
const districtSlice=createSlice({
    name:'district',
    initialState:{
        isLoading:false,
        data:[],
        isError:false,
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchdistricts.pending,(state,action)=>{
            state.isLoading=true;
        });
        builder.addCase(fetchdistricts.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload.data;
        });
        builder.addCase(fetchdistricts.rejected,(state,action)=>{
            state.isLoading=false;
            console.log('Error',action.payload)
            state.isError=true;
        })

    }
});

export default districtSlice.reducer */}