import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../shered/request";

/** 게시글 전체조희 */
export const __getPostsThuck = createAsyncThunk(
  "GET_POST", async (payload, thunkAPI) => {
  console.log("Checking getPostThunk")
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

/** 사진 등록 */
export const __imgPostsThuck = createAsyncThunk(
  "IMG_POST", async (payload, thunkAPI) => {
  try {
    console.log("Checking payload", payload)
    const resp = await instance.post('/auth/photos', payload, { "Content-Type": "multipart/form-data"});
    return (
      console.log("Checking",resp),
      // thunkAPI.fulfillWithValue(resp.data.data)
      thunkAPI.fulfillWithValue(resp.data.data)
      )
    } catch (err) {
      return thunkAPI.rejectWithValue(err.code);
    }
  });

/** 게시물 상세 조회 */
export const __getDetailThuck = createAsyncThunk("GET_DETAIL", async (payload, thunkAPI) => {
  try {
    console.log(payload)
    const resp = await instance.get(`cards/${payload}`);
    
    return (
      console.log(resp.data.data),
      thunkAPI.fulfillWithValue(resp.data.data)
    );

  } catch (err) {
    return thunkAPI.rejectWithValue(err.code);
  }
});

/** 게시물 등록 */
export const __sendPostsThuck = createAsyncThunk(
  "SEND_POST", async (payload, thunkAPI) => {
  try {
    console.log("Hello " + JSON.stringify(payload))
    const resp = await instance.post('auth/cards', payload, { "Content-Type": "application/json"});
    return (
      // console.log(resp)
      // console.log(resp)
      thunkAPI.fulfillWithValue(resp.data.data)
      )
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
export const __getRecommendThuck = createAsyncThunk("RECOMMENDED_USERS", async (payload, thunkAPI) => {
  try {
    const resp = await instance.get(`recent-users`);
    
    return (
      // console.log(resp.data.data),
      thunkAPI.fulfillWithValue(resp.data.data)
    );
  } catch (err) {
    return thunkAPI.rejectWithValue(err.code);
  }
});

const initialState = {
  posts: [],
  detail: {},
  newUsers: [],
  postImgUrl: ""
};

const postSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {

    /** 게시글 전체조희 */
    [__getPostsThuck.fulfilled]: (state, action) => {
      // console.log(action)
      state.posts = action.payload;
    },
    [__getPostsThuck.rejected]: (state, action) => {
      state.error = action.payload;
    },

    /** 사진 등록 */
    [__imgPostsThuck.fulfilled]: (state, action) => {

      console.log("Img post check", action.payload)
      state.postImgUrl = action.payload;
    },
    [__imgPostsThuck.rejected]: (state, action) => {
      state.error = action.payload;
    },

    /** 게시글 등록 */
    [__sendPostsThuck.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
    [__sendPostsThuck.rejected]: (state, action) => {
      state.error = action.payload;
    },

    /** 게시물 상세 조회 */
    [__getDetailThuck.fulfilled]: (state, action) => {
      console.log(action.payload)
      state.detail = action.payload;
    },
    [__getDetailThuck.rejected]: (state, action) => {
      state.error = action.payload;
    },

    /** 게시물 수정 */
    [__getUpdateThuck.fulfilled]: (state, action) => {

      state.posts = action.payload;
    },
    [__getUpdateThuck.rejected]: (state, action) => {
      state.error = action.payload;
    },
    
    /** 게시물 삭제 */
    [__getDeleteThuck.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
    [__getDeleteThuck.rejected]: (state, action) => {
      state.error = action.payload;
    },

    /** 신규 가입자 추천목록 */
    [__getRecommendThuck.fulfilled]: (state, action) => {
      state.newUsers = action.payload;
    },
    [__getRecommendThuck.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default postSlice.reducer;
