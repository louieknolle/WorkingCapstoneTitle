import React from "react";
import BackpacksList from "./BackpacksList";
import FootwearsList from "./FootwearsList";
import SheltersList from "./SheltersList";
import SleepItemsList from "./SleepItemsList";

const GearList = () => {
  return (
    <React.Fragment>
      <div className="gearList w-full flex flex-col justify-evenly">
        <div className="flex justify-evenly">
          <BackpacksList />
          <FootwearsList />
        </div>
        <div className="flex justify-evenly">
          <SheltersList />
          <SleepItemsList />
        </div>
      </div>
    </React.Fragment>
  );
};

export default GearList;
