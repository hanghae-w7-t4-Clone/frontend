import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shered/request";

export const getCmtThunk = createAsyncThunk(
    "GET_CMT",
    async (payload, thunkAPI) => {
      try {
        // console.log("Checking payload " + payload)
        const { data } = await instance.get(`/cards/${payload}/comments`);
        // console.log("Checking getProfileThunk " + JSON.stringify(data.data))
        // console.log("Checking Ater GET " + JSON.stringify(data))
        return thunkAPI.fulfillWithValue(data.data);
      } catch (e) {
        return thunkAPI.rejectWithValue(e.code);
      }
    }
  );

export const postCmtThunk = createAsyncThunk(
  "POST_CMT",
  async (payload, thunkAPI) => {
    try {
      // console.log("Checking payload ", payload)
      // console.log("Checking payload ID ", payload.cardId)
      // console.log("Checking payload content ", payload.content)
      const { data } = await instance.post(`/auth/cards/${payload.cardId}/comments`, {"content": payload.content});
      // console.log("Checking getProfileThunk " + JSON.stringify(data.data))
      return (
        console.log("checking postCmt ",data),
        thunkAPI.fulfillWithValue(data.data)
        )
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

const initialState = {
  commentInfo: [],
};    

const profileSlice = createSlice({
  name: "profiles",
  initialState,
  reducers: {},
  extraReducers: {

    //GetComment
    [getCmtThunk.fulfilled]: (state, action) => {
      // console.log("checking here " + JSON.stringify(action.payload))
      state.commentInfo = action.payload;
    },
    [getCmtThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },

    //PostCommet
    [postCmtThunk.fulfilled]: (state, action) => {
      // console.log("checking here " + JSON.stringify(action.payload))
      state.commentInfo.push(action.payload)
      // state.commentInfo = action.payload;
    },
    [postCmtThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
})

export default profileSlice.reducer;