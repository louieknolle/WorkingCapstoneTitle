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
    getTrailsData(data.lat, data.long, data.activity).then((response) => {
      const responseArray = Object.values(response);
      setResults(responseArray);
      console.log(results);
    });
  }, [data]);

  return (
    <React.Fragment>
      <SearchForm onSearchTrails={onSubmitSearch} />
      <HomeMap />
      <TrailResults />
    </React.Fragment>
  );
};

export default SearchAndMapControl;
