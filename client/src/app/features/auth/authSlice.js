import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: null,
  token: localStorage.getItem("token"),
  isAuthenticated:false,  
  // get isAuthenticated() {
  //   return this.token ? true : false;
  // },
  status: "idle",
  error: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state, action) => {
      state.status = "loading";
    },
    loginSuccess: (state, action) => {
      state.status = "succeeded";
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
      state.token = null;
      state.isAuthenticated = false;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    },
  },
});

export const { loginStart, loginSuccess, logout, loginFailure } =
  authSlice.actions;
export const authReducer = authSlice.reducer;
