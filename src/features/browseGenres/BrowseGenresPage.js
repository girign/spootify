import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres } from "../browseGenres/genresSlice";

import { List, Page, PageContent, Heading, TextInput } from "grommet";
import { selectGenres } from "./genresSlice";
import useCookieAuth from "../../hooks/useCookieAuth";
import { Search } from "grommet-icons";

function BrowseGenresPage() {
  useCookieAuth();
  const genres = useSelector(selectGenres);
  const [filteredGenres, setFilteredGenres] = useState(genres);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!genres.length) {
      dispatch(fetchGenres());
    }
  }, []);

  function filterGenres(term) {
    if (!term) {
      setFilteredGenres(genres);
    } else {
      let filtered = genres.filter((genre) =>
        genre.includes(term.toLowerCase())
      );
      setFilteredGenres(filtered);
    }
  }

  return (
    <Page kind="narrow">
      <Heading>Browse Genres</Heading>
      <TextInput
        onChange={(e) => filterGenres(e.target.value)}
        placeholder="Search for genre"
        icon={<Search />}
      />
      <PageContent margin={{ top: "30px" }} kind="narrow" overflow="scroll">
        <List data={filteredGenres} />
      </PageContent>
    </Page>
  );
}

export default BrowseGenresPage;
