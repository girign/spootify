import { Sidebar, Box, Grid, Button, Nav } from "grommet";
import { Calendar, Search, Star } from "grommet-icons";
import { Outlet, useNavigate } from "react-router-dom";
import LogoutButton from "../features/auth/LogoutButton";
import SidebarButton from "./SidebarButton";

function SidebarFooter() {
  return (
    <Nav>
      <LogoutButton />
    </Nav>
  );
}

function PageLayout() {
  const navigate = useNavigate();
  return (
    <Grid
      rows={["any CSS size"]}
      columns={["small", "xlarge"]}
      gap="medium"
      height={{ min: "100vh", max: "100vh" }}
      areas={[
        {
          name: "nav",
          start: [0, 0],
          end: [0, 0],
        },
        { name: "main", start: [1, 0], end: [1, 0] },
      ]}
    >
      <Box gridArea="nav" fill={"vertical"}>
        <Sidebar background="brand" footer={<SidebarFooter />}>
          <Nav>
            <SidebarButton
              icon={<Calendar />}
              label="Releases This Week"
              onClick={() => navigate("/releases_this_week")}
            />
            <SidebarButton
              icon={<Search />}
              label="Browse Genres"
              onClick={() => navigate("/browse_genres")}
            />
            <SidebarButton
              icon={<Star />}
              label="Featured Playlists"
              onClick={() => navigate("/featured_playlists")}
            />
          </Nav>
        </Sidebar>
      </Box>
      <Box
        gridArea="main"
        pad="medium"
        height={{ min: "100vh", max: "100vh" }}
        overflow="scroll"
      >
        <Outlet />
      </Box>
    </Grid>
  );
}

export default PageLayout;
