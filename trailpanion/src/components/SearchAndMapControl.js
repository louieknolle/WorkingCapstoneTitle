import SearchForm from "./SearchForm";
import HomeMap from "./HomeMap";
import ResultsMap from "./ResultsMap";
import React, { useState } from "react";
import TrailResults from "./TrailResults";
import { getTrailsData } from "../getTrailsData";
// import { getCityCoordinates } from "../getCityCoordinates";

const SearchAndMapControl = () => {
  const [userData, setUserData] = useState(null);
  const [results, setResults] = useState([]);
  const [activity, setActivity] = useState(null);

  const onSubmitSearch = async (userInput) => {
    // const coordinates = await getCityCoordinates(userInput);
    const trailData = await getTrailsData(userInput);
    const trailDataArray = Object.values(trailData.data);
    setUserData(trailData.coordinates);
    setResults(trailDataArray);
    setActivity(userInput.activity);
  };

  return (
    <React.Fragment>
      <div
        id="homeSideBar"
        className="flex flex-col z-10 absolute top-0 left-0 bg-midnightBlue text-springGreen shadow-lg p-1 "
      >
        {results.length > 0 ? (
          <TrailResults
            trailsList={results}
            userData={userData}
            activity={activity}
          />
        ) : (
          <SearchForm onSearchTrails={onSubmitSearch} />
        )}
      </div>
      <div className="">
        {results.length > 0 ? (
          <ResultsMap searchPoint={userData} results={results} />
        ) : (
          <HomeMap />
        )}
      </div>
    </React.Fragment>
  );
};

export default SearchAndMapControl;
