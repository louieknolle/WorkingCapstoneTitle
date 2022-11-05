import React from "react";
import BaseMap from "./Basemap";
import MarkersMap from "./MarkersMap";

const App = () => {
  return (
    <React.Fragment>
      <BaseMap />
      <MarkersMap />
    </React.Fragment>
  ); 
};

export default App;