import { createSlice } from "@reduxjs/toolkit";

export const exerciseSlice = createSlice({
  name: "exercise",
  initialState: {
    title: "",
    description: "",
    id: "",
  },
  reducers: {
    setExerciseInfo: (state, action) => {
      state.id = action.payload.id;
      state.title = action.payload.title;
      state.description = action.payload.description;
    },
  },
});

export const { setExerciseInfo } = exerciseSlice.actions;

export default exerciseSlice.reducer;
