import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../shered/request";
import cookies from "react-cookies";


/** 게시글 전체 조회 */
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

/** 게시물 상세 조회 */
export const __getDetailThuck = createAsyncThunk("GET_DETAIL", async (payload, thunkAPI) => {
  try {
    const resp = await instance.get(`cards/${payload}`);
    
    return (
      thunkAPI.fulfillWithValue(resp.data.data)
    );
  } catch (err) {
    return thunkAPI.rejectWithValue(err.code);
  }
});


/** 게시물 수정 */
export const __getUpdateThuck = createAsyncThunk("UPDATE_POST", async (payload, thunkAPI) => {
  try {
    const resp = await instance.patch(`auth/cards/${payload}`);
    
    return (
      console.log(resp.data.data),
      thunkAPI.fulfillWithValue(resp.data.data)
    );
  } catch (err) {
    return thunkAPI.rejectWithValue(err.code);
  }
});


/** 게시물 삭제 */
export const __getDeleteThuck = createAsyncThunk("DELETE_POST", async (payload, thunkAPI) => {
  try {
    const resp = await instance.delete(`auth/cards/${payload}`);
    
    return (
      console.log(resp.data.data),
      thunkAPI.fulfillWithValue(resp.data.data)
    );
  } catch (err) {
    return thunkAPI.rejectWithValue(err.code);
  }
});


/** 신규 가입자 추천목록 */
export const __getRecommendThuck = createAsyncThunk("DELETE_POST", async (payload, thunkAPI) => {
  try {
    const resp = await instance.get(`recent-users`);
    
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
  detail: [],
  newUsers: []
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
    [__getDetailThuck.fulfilled]: (state, action) => {
      console.log(action)
      state.detail = action.payload;
    },
    [__getDetailThuck.rejected]: (state, action) => {
      state.error = action.payload;
    },

    [__getUpdateThuck.fulfilled]: (state, action) => {
      console.log(action)
      state.posts = action.payload;
    },
    [__getUpdateThuck.rejected]: (state, action) => {
      state.error = action.payload;
    },
    
    [__getDeleteThuck.fulfilled]: (state, action) => {
      console.log(action)
      state.posts = action.payload;
    },
    [__getDeleteThuck.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [__getRecommendThuck.fulfilled]: (state, action) => {
      console.log(action)
      state.newUsers = action.payload;
    },
    [__getRecommendThuck.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default postSlice.reducer;
