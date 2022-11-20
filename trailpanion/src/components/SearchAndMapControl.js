import SearchForm from "./SearchForm";
import HomeMap from "./HomeMap";
import React, { useState, useEffect } from "react";
import TrailResults from "./TrailResults";
import { getTrailsData } from "../getTrailsData";

const SearchAndMapControl = () => {
  const [data, setData] = useState({});
  const [results, setResults] = useState([]);

  const onSubmitSearch = (newSearch) => {
    console.log(data);
    setData(newSearch);
  };

  useEffect(() => {
    getTrailsData().then((response) => {
      const responseArray = Object.values(response);
      setResults(responseArray);
    });
  }, []);

  console.log(results);

  return (
    <React.Fragment>
      <SearchForm onSearchTrails={onSubmitSearch} />
      <HomeMap />
      <TrailResults />
    </React.Fragment>
  );
};

export default SearchAndMapControl;
