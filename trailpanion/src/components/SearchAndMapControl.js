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
    const trailDataArray = Object.values(trailData.data);
    setUserSearch(trailData.coordinates);
    setResults(trailDataArray);
  };

  return (
    <React.Fragment>
      <div
        id="homeSideBar"
        className="flex flex-col z-10 absolute top-0 left-0 bg-springGreen text-midnightBlue left-auto shadow-lg h-full p-1"
      >
        {results.length > 0 ? (
          <TrailResults trailsList={results} />
        ) : (
          <SearchForm onSearchTrails={onSubmitSearch} />
        )}
      </div>
      <div className="">
        {results.length > 0 ? (
          <ResultsMap searchPoint={userSearch} results={results} />
        ) : (
          <HomeMap />
        )}
      </div>
    </React.Fragment>
  );
};

export default SearchAndMapControl;
