import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import BrowseGenresPage from "./pages/browseGenres/BrowseGenresPage";
import ReleasesThisWeekPage from "./pages/releasesThisWeek/ReleasesThisWeekPage";
import FeaturedPlaylistsPage from "./pages/featuredPlaylists/FeaturedPlaylistsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/browse_genres" element={<BrowseGenresPage />} />
        <Route path="/releases_this_week" element={<ReleasesThisWeekPage />} />
        <Route path="/featured_playlists" element={<FeaturedPlaylistsPage />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
