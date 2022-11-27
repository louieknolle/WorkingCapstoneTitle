import SearchForm from "./SearchForm";
import HomeMap from "./HomeMap";
import ResultsMap from "./ResultsMap";
import React, { useState } from "react";
import TrailResults from "./TrailResults";
import { getTrailsData } from "../getTrailsData";
// import { getCityCoordinates } from "../getCityCoordinates";

const SearchAndMapControl = () => {
  const [userSearch, setUserSearch] = useState(null);
  const [results, setResults] = useState([]);

  const onSubmitSearch = async (userInput) => {
    // const coordinates = await getCityCoordinates(userInput);
    const trailData = await getTrailsData(userInput);
    const trailDataArray = Object.values(trailData);
    setUserSearch(userInput);
    setResults(trailDataArray);
    console.log(trailDataArray[0].lon, trailDataArray[0].lat);
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
