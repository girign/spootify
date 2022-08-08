import { configureStore } from "@reduxjs/toolkit";
import genresReducer from "../features/browseGenres/genresSlice";
import releasesReducer from "../features/releasesThisWeek/releasesSlice";
import featuredPlaylistsReducer from "../features/featuredPlaylists/featuredPlaylistsSlice";

export const store = configureStore({
  reducer: {
    genres: genresReducer,
    releases: releasesReducer,
    featuredPlaylists: featuredPlaylistsReducer,
  },
});
