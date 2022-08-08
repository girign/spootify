import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Page, Grid, PageContent, PageHeader, Button } from "grommet";
import {
  CLIENT_ID,
  REDIRECT_URI,
  AUTH_ENDPOINT,
  RESPONSE_TYPE,
} from "../../app/constants";
import styled from "styled-components";

const MidLevelPageHeader = styled(PageHeader)`
  margin-top: 40vh;
`;

function LoginPage({ landingPagePath }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.href.includes("token")) {
      let urlParts = window.location.href.split("&");
      let token = urlParts[0].split("=")[1];
      Cookies.set("accessToken", token);
      navigate(landingPagePath);
    } else {
      let accessToken = Cookies.get("accessToken");
      if (accessToken) {
        navigate(landingPagePath);
      }
    }
  }, []);

  return (
    <Grid height={{ min: "100vh" }}>
      <Page kind="narrow" background="dark-1">
        <PageContent>
          <MidLevelPageHeader
            title="Spootify"
            subtitle="Welcome"
            actions={
              <Button
                label="Login using Spotify"
                primary
                onClick={() =>
                  (window.location = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${REDIRECT_URI}`)
                }
              />
            }
          />
        </PageContent>
      </Page>
    </Grid>
  );
}

export default LoginPage;
