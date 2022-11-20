import React from "react";
import Header from "./Header";
import SearchAndMapControl from "./SearchAndMapControl";
// import { getTrailsData } from './getTrailsData';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="container flex flex-row">
        <SearchAndMapControl />
      </div>
    </React.Fragment>
  );
};

export default App;
