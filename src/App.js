import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Cookies from "js-cookie";
import LoginPage from "./pages/login/LoginPage";
import BrowseGenresPage from "./pages/browseGenres/BrowseGenresPage";
import ReleasesThisWeekPage from "./pages/releasesThisWeek/ReleasesThisWeekPage";
import FeaturedPlaylistsPage from "./pages/featuredPlaylists/FeaturedPlaylistsPage";
import RouteGuard from "./components/RouteGuard";
import { useDispatch } from "react-redux";
import { setToken } from "./pages/login/authSlice";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/browse_genres"
          element={
            <RouteGuard loginPagePath="/login">
              <BrowseGenresPage />
            </RouteGuard>
          }
        />
        <Route
          path="/releases_this_week"
          element={
            <RouteGuard loginPagePath="/login">
              <ReleasesThisWeekPage />
            </RouteGuard>
          }
        />
        <Route
          path="/featured_playlists"
          element={
            <RouteGuard loginPagePath="/login">
              <FeaturedPlaylistsPage />
            </RouteGuard>
          }
        />
        <Route
          path="/login"
          element={<LoginPage landingPagePath={"/browse_genres"} />}
        />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
