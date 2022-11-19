import React from "react";
import Header from "./Header";
import HomeMap from "./HomeMap";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <div className='container'>
      <HomeMap />
      </div >
    </React.Fragment>
  );
};

export default App;
