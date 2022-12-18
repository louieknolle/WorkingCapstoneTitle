import SearchForm from "./SearchForm";
import HomeMap from "./HomeMap";
import ResultsMap from "./ResultsMap";
import React, { useState } from "react";
import TrailResults from "./TrailResults";
import { getTrailsData } from "../getTrailsData";
import { useLocation } from "react-router-dom";

const SearchAndMapControl = () => {
  const location = useLocation();
  const [userData, setUserData] = useState(
    !!location && !!location.state && location.state.userData
      ? location.state.userData
      : null
  );
  const [results, setResults] = useState(
    !!location && !!location.state && location.state.trailsList
      ? location.state.trailsList
      : []
  );
  const [activity, setActivity] = useState(
    !!location && !!location.state && location.state.activity
      ? location.state.activity
      : null
  );

  const onSubmitSearch = async (userInput) => {
    const trailData = await getTrailsData(userInput);
    const trailDataArray = Object.values(trailData.data);
    console.log({ trailData });
    const latLong = {
      lat: trailData.coordinates.data[0].lat,
      lon: trailData.coordinates.data[0].lon,
    };
    setUserData(latLong);
    setResults(trailDataArray);
    setActivity(userInput.activity);
  };

  return (
    <React.Fragment>
      <div
        id=""
        className="flex flex-col z-10 absolute top-0 left-0 bg-midnightBlue text-springGreen shadow-lg p-1 homeSideBar"
      >
        {results.length > 0 ? (
          <>
            <TrailResults
              trailsList={results}
              userData={userData}
              activity={activity}
            />
            <div className="flex justify-center">
              <button
                className="border-2 p-2 bg-white rounded-md text-center m-auto text-midnightBlue border-springGreen"
                onClick={() => {
                  setUserData(null);
                  setResults([]);
                  setActivity(null);
                }}
              >
                Back to search
              </button>
            </div>
          </>
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
