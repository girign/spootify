import { Sidebar, Box, Grid, Nav } from "grommet";
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

function PageLayout({ pages }) {
  const navigate = useNavigate();
  return (
    <Grid
      rows={["any CSS size"]}
      columns={["small", "flex"]}
      height={{ min: "100vh" }}
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
            {pages.withLayout
              .map((page) => ({
                ...page,
                onClick: () => navigate(page.path),
              }))
              .map((page, index) => (
                <SidebarButton key={index} {...page} />
              ))}
          </Nav>
        </Sidebar>
      </Box>
      <Box
        gridArea="main"
        pad="medium"
        height={{ min: "100vh", max: "100vh" }}
        overflow="scroll"
        background="black"
      >
        <Outlet />
      </Box>
    </Grid>
  );
}

export default PageLayout;
