import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres } from "../browseGenres/genresSlice";

import { List, Page, PageContent, Heading } from "grommet";
import { selectGenres } from "./genresSlice";
import useCookieAuth from "../../hooks/useCookieAuth";

function BrowseGenresPage() {
  useCookieAuth();
  const genres = useSelector(selectGenres);
  console.log("came here rendering browse genres", genres);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!genres.length) {
      dispatch(fetchGenres());
    }
  }, []);

  return (
    <Page kind="narrow">
      <Heading>Browse Genres</Heading>
      <PageContent kind="narrow">
        <List data={genres} />
      </PageContent>
    </Page>
  );
}

export default BrowseGenresPage;
