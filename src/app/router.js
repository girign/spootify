import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import LoginPage from "../features/auth/LoginPage";
import BrowseGenresPage from "../features/browseGenres/BrowseGenresPage";
import ReleasesThisWeekPage from "../features/releasesThisWeek/ReleasesThisWeekPage";
import FeaturedPlaylistsPage from "../features/featuredPlaylists/FeaturedPlaylistsPage";
import PageLayout from "../components/PageLayout";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<LoginPage landingPagePath={"/releases_this_week"} />}
        />
        <Route element={<PageLayout />}>
          <Route path="/browse_genres" element={<BrowseGenresPage />} />
          <Route
            path="/releases_this_week"
            element={<ReleasesThisWeekPage />}
          />
          <Route
            path="/featured_playlists"
            element={<FeaturedPlaylistsPage />}
          />
        </Route>

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
