import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  edit : ''
}
  
  const editSlice = createSlice({
    name: "edit",
    initialState,
    reducers: {},
  })
  
  export default editSlice.reducer;