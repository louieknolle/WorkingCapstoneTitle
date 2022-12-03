import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./SharedLayout";
import SearchAndMapControl from "./SearchAndMapControl";
import PlaceDetails from "./PlaceDetails";

const App = () => {
  return (
    // <React.Fragment>
    //   <Header />
    //   <div className="container flex flex-row">
    //     <SearchAndMapControl />
    //   </div>
    // </React.Fragment>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<SearchAndMapControl />} />
          <Route path="placeDetails" element={<PlaceDetails />} />
          {/* <Route path='collection3' element={<Collection3Content />} />
            <Route path='collection4' element={<Collection4Content />} /> 
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />*/}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
