import SearchForm from "./SearchForm";
import HomeMap from "./HomeMap";
import ResultsMap from "./ResultsMap";
import React, { useState } from "react";
import TrailResults from "./TrailResults";
import { getTrailsData } from "../getTrailsData";
// import mapboxgl from "mapbox-gl";

const SearchAndMapControl = () => {
  const [userSearch, setUserSearch] = useState(null);
  const [results, setResults] = useState(null);

  const onSubmitSearch = (userInput) => {
    setUserSearch(userInput);
    getTrailsData(userInput).then((response) => {
      const responseArray = Object.values(response);
      setResults(responseArray);
    });
  };

  return (
    <React.Fragment>
      <SearchForm onSearchTrails={onSubmitSearch} />
      {!!results ? (
        <ResultsMap searchPoint={userSearch} results={results} />
      ) : (
        <HomeMap />
      )}
      <HomeMap />
      {!!results ? <TrailResults /> : null}
    </React.Fragment>
  );
};

export default SearchAndMapControl;
