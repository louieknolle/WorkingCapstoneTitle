import SearchForm from './SearchForm';
import HomeMap from "./HomeMap";
import React, { useState } from 'react';
// import getTrailsData from '../getTrailsData';


const SearchAndMapControl = () => {
  
  const [data, setData] = useState({});
  
  const onSubmitSearch = (newSearch) => {
    setData(newSearch);
    };

  return (
    <React.Fragment>
      <SearchForm onSearchTrails={onSubmitSearch} />
      <HomeMap />
    </React.Fragment>
  )
}

export default SearchAndMapControl;