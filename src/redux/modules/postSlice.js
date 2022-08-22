import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../shered/request";
import cookies from "react-cookies";

export const __getPostsThuck = createAsyncThunk("GET_POST", async (payload, thunkAPI) => {
  try {
    const resp = await instance.get(`cards`);
    
    return (
      console.log(resp.data.data),
      thunkAPI.fulfillWithValue(resp.data.data)
    );
  } catch (err) {
    return thunkAPI.rejectWithValue(err.code);
  }
});

const initialState = {
  posts: [],
};

const postSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    [__getPostsThuck.fulfilled]: (state, action) => {
      console.log(action)
      state.posts = action.payload;
    },
    [__getPostsThuck.rejected]: (state, action) => {
      state.error = action.payload;
    },    
  },
});

export default postSlice.reducer;
