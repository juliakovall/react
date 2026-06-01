import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type Post = {
  id: number;
  title: string;
  body: string;
};

type PostsState = {
  posts: Post[];
  isLoading: boolean;
  error: string;
};

const initialState: PostsState = {
  posts: [],
  isLoading: false,
  error: "",
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts",
  );

  return response.data.slice(0, 5);
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.isLoading = false;
        state.error = "Failed to load posts";
      });
  },
});

export default postsSlice.reducer;
