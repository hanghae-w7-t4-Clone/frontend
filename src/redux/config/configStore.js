import { configureStore } from "@reduxjs/toolkit";
import memberSlice from "../modules/memberSlice";
import postSlice from "../modules/postSlice";

const store = configureStore({
  reducer: { 
    member: memberSlice,
    posts: postSlice
  },
});

export default store;