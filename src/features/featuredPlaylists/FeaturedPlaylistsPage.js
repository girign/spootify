import { PageContent, Heading, Image } from "grommet";

import CardsContainer from "../../components/CardsContainer";
import CardCustom from "../../components/CardCustom";
import useCookieAuth from "../../hooks/useCookieAuth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFeaturedPlaylists,
  selectFeaturedPlaylists,
} from "./featuredPlaylistsSlice";

function FeaturedPlaylistsPage() {
  useCookieAuth();
  const dispatch = useDispatch();
  const featuredPlaylists = useSelector(selectFeaturedPlaylists);

  useEffect(() => {
    if (!featuredPlaylists.length) {
      dispatch(fetchFeaturedPlaylists());
    }
  }, []);
  return (
    <PageContent kind="narrow">
      <Heading>Featured Playlists</Heading>
      <CardsContainer direction="row-responsive">
        {featuredPlaylists.map((featured) => (
          <CardCustom
            header={featured.name}
            body={<Image src={featured.images[0].url} />}
            key={featured.id}
            footer={featured.description}
          />
        ))}
      </CardsContainer>
    </PageContent>
  );
}

export default FeaturedPlaylistsPage;
