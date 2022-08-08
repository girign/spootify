import { Search, Calendar, Star } from "grommet-icons";

import BrowseGenresPage from "../features/browseGenres/BrowseGenresPage";
import ReleasesThisWeekPage from "../features/releasesThisWeek/ReleasesThisWeekPage";
import FeaturedPlaylistsPage from "../features/featuredPlaylists/FeaturedPlaylistsPage";
import LoginPage from "../features/auth/LoginPage";

const pages = {
  withLayout: [
    {
      path: "/browse_genres",
      label: "Browse Genres",
      element: <BrowseGenresPage />,
      icon: <Search />,
    },
    {
      path: "/releases_this_week",
      label: "Releases this Week",
      element: <ReleasesThisWeekPage />,
      icon: <Calendar />,
    },
    {
      path: "/featured_playlists",
      label: "Featured Playlists",
      element: <FeaturedPlaylistsPage />,
      icon: <Star />,
    },
  ],
  withoutLayout: [
    {
      path: "/login",
      label: "Login",
      element: <LoginPage />,
      icon: null,
    },
  ],
};

export default pages;
