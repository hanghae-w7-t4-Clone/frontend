import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shered/request";

export const getProfThunk = createAsyncThunk(
    "GET_PROFILE",
    async (payload, thunkAPI) => {
      try {
        const { data } = await instance.get(`profiles/${payload}`);
        // console.log("Checking getProfileThunk " + JSON.stringify(data.data))
        return thunkAPI.fulfillWithValue(data.data);
      } catch (e) {
        return thunkAPI.rejectWithValue(e.code);
      }
    }
  );

export const getProfPicsThunk = createAsyncThunk(
  "GET_PROFILE_PICTURES",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get(`profiles/${payload}/cards`);
      // console.log("Checking getProfileThunk " + JSON.stringify(data.data))
      return thunkAPI.fulfillWithValue(data.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);


const initialState = {
  profInfo: [],
  profPics: []
};    

const profileSlice = createSlice({
  name: "profiles",
  initialState,
  reducers: {},
  extraReducers: {

    //GetProfile
    [getProfThunk.fulfilled]: (state, action) => {
      // console.log("checking here " + JSON.stringify(action.payload))
      state.profInfo = action.payload;
    },
    [getProfThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },

    //getProfPicsThunk
    [getProfPicsThunk.fulfilled]: (state, action) => {
      // console.log("checking here " + JSON.stringify(action.payload))
      state.profPics = action.payload;
    },
    [getProfPicsThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
})

export default profileSlice.reducer;