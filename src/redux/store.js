// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import exerciseReducer from "./reducers/exerciseSlice";

const store = configureStore({
  reducer: {
    exercise: exerciseReducer,
  },
});

export default store;
