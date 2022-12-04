import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./SharedLayout";
import SearchAndMapControl from "./SearchAndMapControl";
import PlaceDetails from "./PlaceDetails";
import TrailResults from "./TrailResults";
import ResultsMap from "./ResultsMap";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<SearchAndMapControl />} />
          <Route path="resultsMap" element={<ResultsMap />} />
          <Route path="placeDetails" element={<PlaceDetails />} />
          <Route path="trailResults" element={<TrailResults />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
