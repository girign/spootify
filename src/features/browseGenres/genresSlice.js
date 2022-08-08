import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../app/axiosWithInterceptors";

import { API_ENDPOINT } from "../../app/constants";

const initialState = {
  genres: [],
  status: "idle",
};

const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenres.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.status = "idle";
        state.genres = action.payload;
      });
  },
});

export const selectGenres = (state) => state.genres.genres;

export const fetchGenres = createAsyncThunk(
  "genres/fetchGenres",
  async (accessToken) => {
    const response = await makeGenresFetchCall(accessToken);
    return response.data.genres;
  }
);

async function makeGenresFetchCall() {
  let response = await axios.get(
    `${API_ENDPOINT}recommendations/available-genre-seeds`
  );
  return response;
}

export default genresSlice.reducer;
