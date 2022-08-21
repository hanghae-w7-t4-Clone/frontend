import { configureStore } from "@reduxjs/toolkit";
import memberSlice from "../modules/memberSlice";
import profileSlice from "../modules/profileSlice";
import commentSlice from "../modules/commentSlice";

const store = configureStore({
  reducer: { 
    member: memberSlice,
    profile: profileSlice,
    comment: commentSlice
  },
});

export default store;