import SearchForm from "./SearchForm";
import HomeMap from "./HomeMap";
import React from "react";
import TrailResults from "./TrailResults";
import { getTrailsData } from "../getTrailsData";

const SearchAndMapControl = () => {
  // const [results, setResults] = useState([]);

  const onSubmitSearch = (userInput) => {
    getTrailsData(userInput).then((response) => {
      console.log(response);
    });
  };
  // const responseArray = Object.values(response);
  // setResults(responseArray);
  // console.log(results);

  // useEffect(() => {
  //   getTrailsData(data.lat, data.long, data.activity).then((response) => {
  //     const responseArray = Object.values(response);
  //     setResults(responseArray);
  //     console.log(results);
  //   });
  // }, [data]);

  return (
    <React.Fragment>
      <SearchForm onSearchTrails={onSubmitSearch} />
      <HomeMap />
      <TrailResults />
    </React.Fragment>
  );
};

export default SearchAndMapControl;
