import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../../app/axiosWithInterceptors";
import { API_ENDPOINT } from "../../app/constants";

const initialState = {
  featuredPlaylists: [],
  status: "idle",
};

const featuredPlaylistsSlice = createSlice({
  name: "featuredPlaylists",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeaturedPlaylists.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFeaturedPlaylists.fulfilled, (state, action) => {
        state.status = "idel";
        state.featuredPlaylists = action.payload;
      })
      .addCase(fetchFeaturedPlaylists.rejected, (state, action) =>
        console.log(action)
      );
  },
});

export const fetchFeaturedPlaylists = createAsyncThunk(
  "featuredPlaylists/fetch",
  async (accessToken) => {
    const response = await makeFeaturedPlaylistsAPICall(accessToken);

    return response.data.playlists.items;
  }
);

async function makeFeaturedPlaylistsAPICall() {
  let response = await axios.get(`${API_ENDPOINT}browse/featured-playlists`);
  return response;
}

export const selectFeaturedPlaylists = (state) =>
  state.featuredPlaylists.featuredPlaylists;

export default featuredPlaylistsSlice.reducer;
