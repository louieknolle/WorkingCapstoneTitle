import SearchForm from './SearchForm';
import HomeMap from "./HomeMap";
import React, { useState } from 'react';
import getTrailsData from '../getTrailsData';

const SearchAndMapControl = () => {
  return (
    <React.Fragment>
      <SearchForm />
      <HomeMap />
    </React.Fragment>
  )
}

export default SearchAndMapControl;