import SearchForm from "./SearchForm";
import HomeMap from "./HomeMap";
import React, { useState } from "react";
// import getTrailsData from '../getTrailsData';

const SearchAndMapControl = () => {
  const [data, setData] = useState({});

  const onSubmitSearch = (newSearch) => {
    setData(newSearch);
    console.log(data);
  };

  return (
    <React.Fragment>
      <div className="joeys-hawt">
        <SearchForm onSearchTrails={onSubmitSearch} />
        <HomeMap />
      </div>
    </React.Fragment>
  );
};

export default SearchAndMapControl;
