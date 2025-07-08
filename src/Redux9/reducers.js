import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url2 } from  "../sitedata.json";

{/*export const fetchtodos=createAsyncThunk("fetchtodos",async()=>{
    const response=await axios.post(url2);
    return response.data;
})
const todoSlice=createSlice({
    name:'todo',
    initialState:{
        isLoading:false,
        data:[],
        totals:{},
        isError:false,
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchtodos.pending,(state,action)=>{
            state.isLoading=true;
        });
        builder.addCase(fetchtodos.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload.data;
            state.totals=action.payload.totals;
        });
        builder.addCase(fetchtodos.rejected,(state,action)=>{
            state.isLoading=false;
            console.log('Error',action.payload)
            state.isError=true;
        })

    }
});

export default todoSlice.reducer */}



export const fetchtodos = createAsyncThunk("fetchtodos", async (_, thunkAPI) => {
  // Retrieve the JWT token from local storage
  
  const jwtToken = localStorage.getItem('jwt');

   // Display an alert with the JWT token
  // alert(`JWT Token: ${jwtToken}`);
  
  try {
    // Set the Authorization header with the JWT token
    const response = await axios.post(url2, {}, {
      headers: {
        Authorization: `Bearer ${jwtToken}`, // Set the JWT token here
      },
    });

    return response.data;
  } catch (error) {
    // Handle any errors here
    throw error;
  }
});

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    isLoading: false,
    data: [],
    totals: {},
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchtodos.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchtodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
      state.totals = action.payload.totals;
    });
    builder.addCase(fetchtodos.rejected, (state, action) => {
      state.isLoading = false;
      console.error('Error', action.error.message);
      state.isError = true;
    });
  },
});

export default todoSlice.reducer;
