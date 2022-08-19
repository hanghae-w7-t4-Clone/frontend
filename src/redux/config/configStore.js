import { configureStore } from "@reduxjs/toolkit";
import memberSlice from "../modules/memberSlice";

const store = configureStore({
  reducer: { 
    member: memberSlice,
  },
});

export default store;