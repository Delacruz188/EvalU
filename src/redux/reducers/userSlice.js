// redux/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    pwd: "",
    isAuthenticated: false,
  },
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email;
      state.pwd = action.payload.pwd;
      state.isAuthenticated = action.payload.isAuthenticated;
    },
    logout: (state, action) => {
      state.email = "";
      state.pwd = "";
      state.isAuthenticated = action.payload.isAuthenticated;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
