import SearchForm from "./SearchForm";
import HomeMap from "./HomeMap";
import ResultsMap from "./ResultsMap";
import React, { useState } from "react";
import TrailResults from "./TrailResults";
import { getTrailsData } from "../getTrailsData";
// import mapboxgl from "mapbox-gl";

const SearchAndMapControl = () => {
  const [userSearch, setUserSearch] = useState(null);
  const [results, setResults] = useState([]);

  const onSubmitSearch = (userInput) => {
    setUserSearch(userInput);
    getTrailsData(userInput).then((response) => {
      const responseArray = Object.values(response);
      setResults(responseArray);
    });
    console.log(results);
    console.log(userSearch);
  };

  return (
    <React.Fragment>
      <SearchForm onSearchTrails={onSubmitSearch} />
      {results.length > 0 ? (
        <ResultsMap searchPoint={userSearch} results={results} />
      ) : (
        <HomeMap />
      )}
      {results.length > 0 ? <TrailResults trailsList={results} /> : null}
    </React.Fragment>
  );
};

export default SearchAndMapControl;
