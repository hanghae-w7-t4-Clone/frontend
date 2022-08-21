import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shered/request";

export const getCmtThunk = createAsyncThunk(
    "GET_CMT",
    async (payload, thunkAPI) => {
      try {
        console.log("Checking payload " + payload)
        const { data } = await instance.get(`/cards/${payload}/comments`);
        // console.log("Checking getProfileThunk " + JSON.stringify(data.data))
        console.log("Checking Ater GET " + JSON.stringify(data))
        return thunkAPI.fulfillWithValue(data.data);
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

  },
})

export default profileSlice.reducer;