import React from "react";
import Header from "./Header";
import SearchAndMapControl from './SearchAndMapControl';
// import HomeMap from "./HomeMap";
// import { getTrailsData } from './getTrailsData';


const App = () => {
  return (
    <React.Fragment>
      <Header />
      <div className='container flex flex-row'>
        <SearchAndMapControl />
        {/* <HomeMap /> */}
      </div >
    </React.Fragment>
  );
};

export default App;
