import { Box, Heading, Image, PageContent } from "grommet";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useCookieAuth from "../../hooks/useCookieAuth";
import { fetchReleases, selectReleases } from "./releasesSlice";
import styled from "styled-components";
import CardCustom from "../../components/CardCustom";
import CardsContainer from "../../components/CardsContainer";

function ReleasesThisWeekPage() {
  useCookieAuth();
  const dispatch = useDispatch();
  const releases = useSelector(selectReleases);
  useEffect(() => {
    if (!releases.length) {
      dispatch(fetchReleases());
    }
  }, []);
  return (
    <PageContent kind="narrow">
      <Heading>Releases this week</Heading>
      <CardsContainer direction="row-responsive">
        {releases.map((release) => (
          <CardCustom
            header={release.name}
            body={<Image src={release.images[1].url} />}
            footer={release.artists.map((artist) => artist.name).join(", ")}
            key={release.id}
          />
        ))}
      </CardsContainer>
    </PageContent>
  );
}

export default ReleasesThisWeekPage;
