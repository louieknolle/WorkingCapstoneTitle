import SearchForm from "./SearchForm";
import HomeMap from "./HomeMap";
import ResultsMap from "./ResultsMap";
import React from "react";
import TrailResults from "./TrailResults";
import { getTrailsList, getCoordinates } from "../data/mapsSlice";
import { useDispatch, useSelector } from 'react-redux';
import { clearTrailsList } from '../data/mapsSlice'

const SearchAndMapControl = () => {
  const dispatch = useDispatch();
  const trailsList = useSelector((state) => state.maps.trailsList)

  const onSubmitSearch = async ({city, state, activity}) => {
    const { payload } = await dispatch(getCoordinates({city, state}))
    dispatch(getTrailsList({coordinates: payload, activity}));
  };
  return (
    <React.Fragment>
      <div
        id="homeSideBar"
        className="flex flex-col z-10 absolute top-0 left-0 bg-midnightBlue text-springGreen shadow-lg p-1 "
      >
        {trailsList.length > 0 ? (
          <>
            <TrailResults />
            <div className="flex justify-center">
              <button
                className="border-2 p-2 bg-white rounded-md text-center m-auto"
                onClick={() => {
                  dispatch(clearTrailsList())
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
        {trailsList.length > 0 ? (
          <ResultsMap />
        ) : (
          <HomeMap />
        )}
      </div>
    </React.Fragment>
  );
};

export default SearchAndMapControl;
