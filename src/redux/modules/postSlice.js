import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../shered/request";
import cookies from "react-cookies";

export const __getPostsThuck = createAsyncThunk(
  "GET_POST", async (payload, thunkAPI) => {
  try {
    const resp = await instance.get(`cards`);
    return (
      // console.log(resp.data.data),
      thunkAPI.fulfillWithValue(resp.data.data)
    );
  } catch (err) {
    return thunkAPI.rejectWithValue(err.code);
  }
});

export const __imgPostsThuck = createAsyncThunk(
  "IMG_POST", async (payload, thunkAPI) => {
  try {
    console.log("Checking here")
    const resp = await instance.post('/auth/photos', payload, { "Content-Type": "multipart/form-data"});
    return (
      // console.log(resp)
      // thunkAPI.fulfillWithValue(resp.data.data)
      thunkAPI.fulfillWithValue(resp.data.data)
      )
  } catch (err) {
    return thunkAPI.rejectWithValue(err.code);
  }
});

export const __sendPostsThuck = createAsyncThunk(
  "SEND_POST", async (payload, thunkAPI) => {
  try {
    console.log("Hello " + JSON.stringify(payload))
    const resp = await instance.post('/auth/cards', payload, { "Content-Type": "application/json"});
    return (
      console.log(resp)
      // console.log(resp)
      // thunkAPI.fulfillWithValue(resp.data.data)
      // thunkAPI.fulfillWithValue(resp.data.data)
      )
  } catch (err) {
    return thunkAPI.rejectWithValue(err.code);
  }
});

const initialState = {
  posts: [],
  postImgUrl: ""
};

const postSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {

    // Getting Post 
    [__getPostsThuck.fulfilled]: (state, action) => {
      // console.log(action)
      state.posts = action.payload;
    },
    [__getPostsThuck.rejected]: (state, action) => {
      state.error = action.payload;
    },
    
    // Getting ImgURL
    [__imgPostsThuck.fulfilled]: (state, action) => {
      state.postImgUrl = action.payload;
    },
    [__imgPostsThuck.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default postSlice.reducer;
