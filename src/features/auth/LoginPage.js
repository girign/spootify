import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Page, PageContent, PageHeader, Button } from "grommet";
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
      console.log(urlParts);
      let token = urlParts[0].split("=")[1];
      console.log(token);
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
    <Page kind="narrow">
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
  );
}

export default LoginPage;
