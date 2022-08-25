import { configureStore } from "@reduxjs/toolkit";
import memberSlice from "../modules/memberSlice";
import profileSlice from "../modules/profileSlice";
import commentSlice from "../modules/commentSlice";
import postSlice from "../modules/postSlice";


const store = configureStore({
  reducer: { 
    member: memberSlice,
    profile: profileSlice,
    comment: commentSlice,
    posts: postSlice
  },
});

export default store;