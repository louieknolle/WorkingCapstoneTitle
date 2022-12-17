import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./SharedLayout";
import SearchAndMapControl from "./SearchAndMapControl";
import PlaceDetails from "./PlaceDetails";
import TrailResults from "./TrailResults";
import ResultsMap from "./ResultsMap";
import GearList from "./GearList";
import { store } from "../data/store"
import { Provider } from "react-redux"

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<SearchAndMapControl />} />
            <Route path="resultsMap" element={<ResultsMap />} />
            <Route path="placeDetails" element={<PlaceDetails />} />
            <Route path="trailResults" element={<TrailResults />} />
            <Route path="gearList" element={<GearList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
