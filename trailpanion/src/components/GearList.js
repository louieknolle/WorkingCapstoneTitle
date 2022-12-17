import React from "react";
// import BackpacksList from "./BackpacksList";
import FootwearsList from "./FootwearsList";
import SheltersList from "./SheltersList";
import SleepItemDetails from "./SleepItemDetails";

const GearList = () => {
  return (
    <React.Fragment>
      <div className="gearList">
        {/* <BackpacksList /> */}
        <FootwearsList />
        <SheltersList />
        <SleepItemDetails />
      </div>
    </React.Fragment>
  );
};

export default GearList;
