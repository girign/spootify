import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { parseISO, differenceInDays } from "date-fns";

import axios from "../../app/axiosWithInterceptors";
import { API_ENDPOINT } from "../../app/constants";

const initialState = {
  releases: [],
  status: "idle",
};

const releasesSlice = createSlice({
  name: "releases",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReleases.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchReleases.fulfilled, (state, action) => {
        state.status = "idle";
        state.releases = action.payload;
      })
      .addCase(fetchReleases.rejected, (state, action) => console.log(action));
  },
});

export const selectReleases = (state) => state.releases.releases;

export const fetchReleases = createAsyncThunk(
  "releases/fetchReleases",
  async (accessToken) => {
    const response = await makeReleasesFetchCall(accessToken);
    let releasedThisWeek = response.data.albums.items.filter(
      (item) => differenceInDays(new Date(), parseISO(item.release_date)) < 40
    );
    console.log(releasedThisWeek);
    return releasedThisWeek;
  }
);

async function makeReleasesFetchCall() {
  let response = await axios.get(`${API_ENDPOINT}browse/new-releases`);
  return response;
}

export default releasesSlice.reducer;
