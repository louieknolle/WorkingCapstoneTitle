import SearchForm from "./SearchForm";
import HomeMap from "./HomeMap";
import ResultsMap from "./ResultsMap";
import React, { useState } from "react";
import TrailResults from "./TrailResults";
import { getTrailsData } from "../getTrailsData";
import { getCityCoordinates } from "../getCityCoordinates";

const SearchAndMapControl = () => {
  const [userSearch, setUserSearch] = useState(null);
  const [location, setLocation] = useState(null);
  const [results, setResults] = useState([]);

  const onSubmitSearch = (userInput) => {
    setUserSearch(userInput);
    getCityCoordinates(userInput).then((response) => {
      setLocation(response);
    });
    getTrailsData(location, userSearch).then((trailsResponse) => {
      const trailsResponseArray = Object.values(trailsResponse);
      setResults(trailsResponseArray);
      console.log(trailsResponse);
    });
    // console.log(response);

    // console.log(userSearch);
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
