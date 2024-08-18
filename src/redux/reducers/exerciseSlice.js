// redux/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const exerciseSlice = createSlice({
  name: "exercise",
  initialState: {
    title: "",
    description: "",
  },
  reducers: {
    setExerciseInfo: (state, action) => {
      state.title = action.payload.title;
      state.description = action.payload.description;
    },
    // logout: (state) => {
    //   state.name = "";
    //   state.email = "";
    // },
  },
});

export const { setExerciseInfo } = userSlice.actions;

export default exerciseSlice.reducer;
