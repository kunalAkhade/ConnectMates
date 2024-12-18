import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  status: "idle",
  posts: [],
  page: 1,
  totalPages: 10,
  error: null,
};
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchPostsStart: (state, action) => {
      state.status = "Loading";
    },
    fetchPostsSuccess: (state, action) => {
      state.status = "Success";
      //state.posts = [...state.posts, ...action.payload.posts];
      state.page = action.payload.page;
      state.totalPages = action.payload.totalPages;
    },
    fetchPostsFailure: (state, action) => {
      state.status = "Failed";
      state.error = action.payload.error;
    },
  },
});

export const { fetchPostsStart, fetchPostsSuccess, fetchPostsFailure } =
  postSlice.actions;

export const postReducer = postSlice.reducer;
